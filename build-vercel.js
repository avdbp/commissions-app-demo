const { execSync } = require('child_process');
const path = require('path');

console.log('Current working directory:', process.cwd());
console.log('Directory contents:', require('fs').readdirSync('.'));

// Check if we're in Vercel environment
if (process.env.VERCEL) {
  console.log('Running in Vercel environment');
  // In Vercel, we're already in the correct directory
} else {
  console.log('Running locally');
  // Locally, we're already in the correct directory
}

// Check if public/index.html exists
const publicPath = path.join(process.cwd(), 'public');
console.log('Public directory:', publicPath);
console.log('Public contents:', require('fs').readdirSync(publicPath));

// Check if index.html exists in public
const indexPath = path.join(publicPath, 'index.html');
if (require('fs').existsSync(indexPath)) {
  console.log('✅ index.html found in public directory');
} else {
  console.error('❌ index.html NOT found in public directory');
  process.exit(1);
}

// Run the build
try {
  console.log('Starting build...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
