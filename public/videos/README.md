# Video Optimization Guide

## Video Compression Requirements

To achieve optimal performance (Lighthouse score >90), all videos must be compressed to under 5MB.

### Recommended Video Settings

#### Hero Video (`hero-video.mp4`)
- **Target Size**: < 3MB
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p) for mobile
- **Format**: MP4 (H.264 codec)
- **Bitrate**: 1-2 Mbps
- **Frame Rate**: 24-30 fps
- **Duration**: Keep under 15 seconds for best performance

#### Treatment Videos (portrait orientation)
- **Target Size**: < 2MB each
- **Resolution**: 720x1280 (portrait)
- **Format**: MP4 (H.264 codec)
- **Bitrate**: 800 kbps - 1.5 Mbps
- **Frame Rate**: 24-30 fps
- **Duration**: 30-60 seconds recommended

### Compression Tools

#### Online Tools (Easy)
1. **HandBrake** (Free, Desktop)
   - Download: https://handbrake.fr/
   - Preset: "Web" or "Fast 1080p30"
   - Adjust quality slider to achieve target file size

2. **CloudConvert** (Online)
   - URL: https://cloudconvert.com/mp4-converter
   - Set output format to MP4
   - Adjust quality/bitrate settings

3. **FFmpeg** (Command Line, Advanced)
   ```bash
   # Compress hero video to ~2MB
   ffmpeg -i input.mp4 -vcodec h264 -b:v 1500k -acodec aac -b:a 128k -s 1280x720 hero-video.mp4
   
   # Compress portrait treatment video to ~1.5MB
   ffmpeg -i input.mp4 -vcodec h264 -b:v 1000k -acodec aac -b:a 96k -s 720x1280 treatment-1.mp4
   ```

### Video Optimization Checklist

- [ ] Hero video compressed to < 3MB
- [ ] All treatment videos compressed to < 2MB each
- [ ] Videos use H.264 codec for broad compatibility
- [ ] Audio bitrate reduced (128 kbps or lower)
- [ ] Videos tested on mobile devices
- [ ] Fallback images created for all videos
- [ ] Video preload set to "metadata" (already configured in code)

### Current Video Files

Place your optimized videos in this directory:
- `hero-video.mp4` - Main hero section video
- `treatment-1.mp4` through `treatment-5.mp4` - Treatment showcase videos

### Performance Impact

Properly compressed videos will:
- Reduce initial page load time by 60-80%
- Improve Lighthouse performance score by 20-30 points
- Reduce mobile data usage significantly
- Improve Core Web Vitals (LCP, FID, CLS)

### Testing

After compression, test your videos:
1. Check file size: Should be under target
2. Check quality: Should be acceptable on mobile and desktop
3. Test autoplay: Should work on all browsers
4. Run Lighthouse: Performance score should be >90
