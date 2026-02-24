const sharp = require('sharp');
const fs = require('fs');

const input = 'public/profile-photo.jpg';
const output = 'public/profile-photo-v2.jpg';

if (!fs.existsSync(input)) {
  console.error('Input image not found:', input);
  process.exit(1);
}

sharp(input)
  .rotate()
  .resize(800, 800, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(output)
  .then(info => {
    console.log('Optimized image written:', output, info);
  })
  .catch(err => {
    console.error('Image optimization failed:', err);
    process.exit(1);
  });
