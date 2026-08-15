import { cp } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(__dirname, '..', 'assets');
const dest = path.resolve(__dirname, '..', 'dist', 'public', 'assets');

async function copy() {
  try {
    await cp(src, dest, { recursive: true });
    console.log(`Copied assets from ${src} to ${dest}`);
  } catch (err) {
    console.error('Failed to copy assets:', err.message || err);
    // Don't fail the build if assets are missing; log and continue
  }
}

copy();
