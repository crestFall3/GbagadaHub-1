import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIRS = [
  'public/assets',
  'public'
];

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  const stats = fs.statSync(filePath);
  const sizeBefore = stats.size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = sharp(filePath);

    // Resize if wider than 1920px (suitable for standard displays)
    if (metadata.width && metadata.width > 1920) {
      pipeline = pipeline.resize({ width: 1920, fit: 'inside', withoutEnlargement: true });
    }

    // Compress based on extension
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    }

    const tempFilePath = filePath + '.tmp';
    await pipeline.toFile(tempFilePath);

    const sizeAfter = fs.statSync(tempFilePath).size;

    // Only replace original if the compressed size is actually smaller
    if (sizeAfter < sizeBefore) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempFilePath, filePath);
      console.log(`Optimized ${path.basename(filePath)}: ${(sizeBefore / 1024 / 1024).toFixed(2)} MB -> ${(sizeAfter / 1024 / 1024).toFixed(2)} MB (${((1 - sizeAfter / sizeBefore) * 100).toFixed(1)}% savings)`);
    } else {
      fs.unlinkSync(tempFilePath);
      console.log(`Skipped ${path.basename(filePath)}: Already optimized (size: ${(sizeBefore / 1024).toFixed(1)} KB)`);
    }
  } catch (error) {
    console.error(`Error processing ${path.basename(filePath)}:`, error);
  }
}

async function main() {
  console.log("Starting image compression...");
  for (const dir of TARGET_DIRS) {
    const absoluteDir = path.resolve(dir);
    if (!fs.existsSync(absoluteDir)) continue;

    const files = fs.readdirSync(absoluteDir);
    for (const file of files) {
      const filePath = path.join(absoluteDir, file);
      if (fs.statSync(filePath).isFile()) {
        await compressImage(filePath);
      }
    }
  }
  console.log("Image compression finished!");
}

main().catch(console.error);
