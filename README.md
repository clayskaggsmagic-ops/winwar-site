# Tenju Solutions Website

A minimalist, intellectual one-page website built for deployment on GitHub Pages with custom domain `tenju.ai`.

## Overview

This is a production-ready static website featuring:
- Dark, restrained, elegant design
- Central essay: "The Nature of War: The Age of Assessment"
- Minimal JavaScript (smooth scroll, reveal animations)
- Fully accessible and semantic HTML5
- Mobile responsive
- No external dependencies except Google Fonts

## File Structure

```
/
├── index.html           # Main HTML file with essay content
├── styles.css           # All styling (dark theme, typography)
├── script.js            # Minimal JS (smooth scroll, IntersectionObserver)
├── CNAME                # Custom domain file (tenju.ai)
├── /assets/
│   ├── favicon.png      # 32x32 PNG favicon
│   ├── favicon.svg      # SVG favicon (modern browsers)
│   ├── og-image.png     # 1200x630 Open Graph social preview
│   └── /portraits/      # Empty folder for future use
└── README.md            # This file
```

## Technology Stack

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Custom properties, modern layout, responsive design
- **JavaScript**: Vanilla JS (no frameworks)
- **Fonts**: Google Fonts (Inter, Libre Baskerville)

## Design Specifications

### Colors
- Background: `#0b0c0e` (near black)
- Text: `#f4f4f2` (off-white)
- Muted: `#c7c7c5` (gray)
- Accent: `#3b6f8f` (blue)

### Typography
- Headings: Libre Baskerville (serif)
- Body: Inter (sans-serif)
- Base font size: 19px
- Line height: 1.7
- Essay max-width: 68 characters

### Features
- Sticky navigation with smooth scroll
- Intersection Observer for reveal animations
- Respects `prefers-reduced-motion`
- Skip-to-content link for accessibility
- High contrast focus states
- Mobile-first responsive design

## Deployment Instructions

### 1. Create GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Tenju Solutions website"

# Create repository on GitHub (e.g., tenju-site)
# Then push to GitHub
git remote add origin https://github.com/<your-username>/tenju-site.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/root`
4. Click **Save**
5. GitHub will begin building your site

### 3. Configure Custom Domain on GitHub

1. In the same **Pages** settings page
2. Under **Custom domain**, enter: `tenju.ai`
3. Click **Save**
4. After DNS propagates (step 4), enable **Enforce HTTPS**

### 4. Configure DNS at Namecheap

1. Log in to [Namecheap](https://namecheap.com)
2. Go to **Domain List** → **tenju.ai** → **Advanced DNS**
3. Add the following **A Records** (Host: `@`, TTL: Automatic):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Add a **CNAME Record**:
   - Host: `www`
   - Value: `<your-github-username>.github.io`
   - TTL: Automatic
5. Click **Save All Changes**

### 5. Verify Deployment

1. Wait 5-30 minutes for DNS propagation
2. Visit `https://tenju.ai`
3. Verify HTTPS is working (green padlock)
4. Test on mobile devices

## Local Development

To preview locally, you can use any simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx http-server

# Then open: http://localhost:8000
```

**Note**: Some features (like Google Fonts) require an HTTP server to work properly. Don't just open `index.html` in a browser.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
- SVG favicon for modern browsers, PNG fallback

## Accessibility

- Semantic HTML5 landmarks
- Skip-to-content link
- High contrast color scheme
- Keyboard navigation support
- Focus indicators
- ARIA labels where appropriate
- Screen reader friendly
- Respects user motion preferences

## Performance

- No external JavaScript libraries
- Minimal CSS (no framework bloat)
- Lazy-loaded animations
- Optimized fonts (preconnect)
- Small asset footprint
- Fast Time to Interactive (TTI)

## Maintenance

### Updating Content

To update the essay or other content:

1. Edit `index.html`
2. Commit and push changes
3. GitHub Pages will automatically rebuild

### Updating Styles

1. Edit `styles.css`
2. Test locally
3. Commit and push

### Adding Team Portraits

Place portrait images in `/assets/portraits/` and reference them in HTML as needed.

## License

Copyright © 2025 Tenju Solutions. All rights reserved.

---

**Built with intention. Deployed with precision.**

For questions: [hello@tenju.ai](mailto:hello@tenju.ai)
