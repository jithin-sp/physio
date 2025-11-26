# Image Optimization Guide

## Required Images

### Hero Section
- `hero-fallback.jpg` - Fallback image for hero video (1920x1080, < 200KB)
  - Should show clinic interior or physiotherapy treatment
  - Optimized WebP format preferred

### Doctor Profiles
- `doctor-placeholder.jpg` - Placeholder for doctor images (400x400, < 50KB)
  - Professional headshot style
  - Circular crop recommended
  - Can be replaced with actual doctor photos

### Service Icons
Currently using emoji icons (⚽, 🦴, 🧠, etc.)
- Optional: Replace with custom SVG icons for better branding

### Treatment Video Thumbnails
- `video-thumb-1.jpg` through `video-thumb-5.jpg` (720x1280 portrait, < 100KB each)
  - Should represent the treatment shown in video
  - Optimized for mobile viewing

## Image Optimization Best Practices

### Recommended Settings
- **Format**: WebP with JPEG fallback (Next.js handles this automatically)
- **Quality**: 80-85% (good balance of quality and file size)
- **Compression**: Use tools like TinyPNG, Squoosh, or ImageOptim
- **Dimensions**: Serve images at 2x the display size for retina displays

### Optimization Tools

#### Online Tools
1. **Squoosh** - https://squoosh.app/
   - Drag and drop interface
   - Real-time preview
   - WebP and AVIF support

2. **TinyPNG** - https://tinypng.com/
   - Batch compression
   - Maintains quality
   - Easy to use

3. **ImageOptim** (Mac) - https://imageoptim.com/
   - Desktop app
   - Lossless compression
   - Batch processing

#### Command Line (Advanced)
```bash
# Convert to WebP
cwebp -q 85 input.jpg -o output.webp

# Optimize JPEG
jpegoptim --max=85 --strip-all input.jpg

# Batch convert all JPEGs to WebP
for file in *.jpg; do cwebp -q 85 "$file" -o "${file%.jpg}.webp"; done
```

### Image Size Guidelines

| Image Type | Dimensions | Max File Size | Format |
|------------|-----------|---------------|---------|
| Hero Fallback | 1920x1080 | 200KB | WebP/JPEG |
| Doctor Photo | 400x400 | 50KB | WebP/JPEG |
| Video Thumbnail | 720x1280 | 100KB | WebP/JPEG |
| Service Icon | 64x64 | 10KB | SVG/PNG |

### Next.js Image Component Benefits

The website uses Next.js Image component which automatically:
- Generates multiple sizes for responsive images
- Converts to WebP/AVIF formats
- Lazy loads images below the fold
- Prevents layout shift with proper sizing
- Optimizes quality based on device

### Accessibility

All images must have:
- Descriptive `alt` text
- Proper aspect ratios to prevent layout shift
- Fallback for failed loads

### Performance Checklist

- [ ] All images compressed to recommended sizes
- [ ] WebP versions created for modern browsers
- [ ] Alt text added for accessibility
- [ ] Images tested on mobile and desktop
- [ ] Lazy loading verified for below-fold images
- [ ] Lighthouse score checked (should be >90)

### Current Image Status

✅ Next.js Image component configured
✅ Lazy loading enabled for doctor photos
✅ WebP/AVIF formats enabled in next.config.mjs
✅ Proper sizing attributes set
⚠️ Need to add actual optimized images to this directory
