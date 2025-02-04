import fs from "fs";
import https from "https";
import { exec } from "child_process";

const REMOTE_URL = process.env.CV_TYPES_URL;
const LOCAL_FILE = "types/controlled-vocabulary-item-sets.d.ts";

if (!REMOTE_URL) throw new Error("Remote URL must be defined in CV_TYPES_URL.");

/**
 * Fetch contents of remote TS declaration file and save locally, then prettify.
 */
function generateCVTypes() {
  https
    .get(REMOTE_URL, (response) => {
      if (response.statusCode !== 200)
        throw new Error(
          `GET request to ${REMOTE_URL} returned response status '${response.statusCode} — ${response.statusMessage}'.`
        );

      const file = fs.createWriteStream(LOCAL_FILE);
      const stream = response.pipe(file);

      stream.on("error", function (error) {
        console.error(error);
      });

      stream.on("finish", function () {
        console.info(
          `CV types declaration file generated at ${LOCAL_FILE}. Running prettier…`
        );

        exec(`prettier ${LOCAL_FILE} --write`, (error, stdout, stderr) => {
          if (error) {
            console.error(error.message);
            return;
          }

          if (stderr) {
            console.error(stderr);
            return;
          }

          console.info(`${LOCAL_FILE} successfully prettified.`);
        });
      });
    })
    .on("error", function (error) {
      console.error(error);
    });
}

generateCVTypes();
