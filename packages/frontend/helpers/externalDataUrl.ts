const env = process.env.VERCEL_ENV || "development";

const EXTERNAL_DATA_URL = {
  production: process.env.NEXT_PUBLIC_FE_URL || process.env.VERCEL_URL,
  preview: process.env.VERCEL_URL,
  development: "http://localhost:3001",
}[env];

export default EXTERNAL_DATA_URL;
