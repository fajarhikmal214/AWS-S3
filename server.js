const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const express = require("express");
const multer = require("multer");

const upload = multer({
  dest: "uploads/",
});

const { uploadFile, getFileStream } = require("./s3");

const app = express();

app.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
  console.log(readStream.pipe(res));
});

app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  console.log(file);

  const result = await uploadFile(file);
  await unlinkFile(file.path);

  console.log(result);

  res.send({ imagePath: `/images/${result.Key}` });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
