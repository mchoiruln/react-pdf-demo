const fetch = require('node-fetch');
const fs = require('fs');

const downloadFile = async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on('error', reject);
    fileStream.on('finish', resolve);
  });
};

downloadFile(
  'https://user-images.githubusercontent.com/6301228/170613081-8fe8b587-36db-4f3d-bf4e-159c0d4428b2.png',
  'quijote1.md'
);
downloadFile(
  'https://user-images.githubusercontent.com/6301228/170613049-336d0e79-dee9-49a0-8408-1a6476ec6d0e.png',
  'quijote2.md'
);
