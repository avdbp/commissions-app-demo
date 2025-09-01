#!/bin/bash

echo "Current working directory: $(pwd)"
echo "Directory contents:"
ls -la

echo "Changing to Vercel project directory..."
cd /vercel/path0

echo "New working directory: $(pwd)"
echo "Directory contents:"
ls -la

echo "Checking if public/index.html exists..."
if [ -f "public/index.html" ]; then
    echo "✅ index.html found in public directory"
else
    echo "❌ index.html NOT found in public directory"
    exit 1
fi

echo "Running build..."
npm run build:vercel

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
else
    echo "❌ Build failed!"
    exit 1
fi
