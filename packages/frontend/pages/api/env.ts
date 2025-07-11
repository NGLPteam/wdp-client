import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  url?: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ url: process.env.NEXT_PUBLIC_API_URL });
}
