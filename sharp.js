const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/assets/images');
const destination1 = path.resolve(__dirname, 'dist/images');
const destination2 = path.resolve(__dirname, 'src/public/images');

if (!fs.existsSync(destination1)) {
  fs.mkdirSync(destination1);
}

if (!fs.existsSync(destination2)) {
  fs.mkdirSync(destination2);
}


fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${destination1}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(__dirname, `${destination1}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));

    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${destination2}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(__dirname, `${destination2}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
  });
