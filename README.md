# 💍 Joy & Noel - Premium Animated Wedding Invitation

A beautiful, fully responsive wedding invitation website built with pure HTML, CSS, and JavaScript. No frameworks required! Perfect for GitHub Pages deployment.

## ✨ Features

- 🎨 **Premium Design**: Romantic floral theme with soft pastels and gold accents
- 📱 **Fully Responsive**: Mobile-first design that works perfectly on all devices
- ⚡ **Smooth Animations**: CSS keyframes and Intersection Observer for scroll animations
- ⏳ **Live Countdown Timer**: Days, hours, minutes, and seconds to the wedding
- 🌸 **Floating Petals**: Animated background particles for a magical feel
- 🗺️ **Embedded Google Map**: Interactive venue location with direct link
- 👨‍👩‍👧‍👦 **Family Details**: Beautiful cards displaying both families' information
- 🎵 **Background Music**: Optional toggle with muted autoplay support
- 📍 **Event Details**: Elegantly displayed date, time, and venue information
- 🔐 **No External Dependencies**: Pure vanilla JavaScript and CSS

## 🎯 Section Breakdown

### Hero Section
- Elegant invitation card design
- Animated floral frame corners
- Couple silhouette illustration
- Names displayed with scroll animations

### Countdown Timer
- Real-time countdown to May 24, 2026, 11:30 AM
- Animated number transitions
- Responsive grid layout

### Wedding Message
- Personal message section
- Elegant typography

### Event Details
- Date, time, and venue information
- Hover animations on detail cards
- Icon-based visual hierarchy

### Family Details
- Bride's family information (Bride & Mother)
- Groom's family information (Groom, Father, Mother)
- Complete addresses for both sides
- Separate card styling for visual distinction

### Map Section
- Embedded Google Maps
- "View Location" button with direct link
- Responsive iframe sizing

### Footer
- Thank you message
- Social media links
- Professional closing

## 📁 Folder Structure

```
noel/
├── index.html          # Main HTML file
├── style.css           # All CSS styles and animations
├── script.js           # JavaScript functionality
├── assets/             # (For future use: images, music, etc.)
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** the project folder
2. **Open `index.html`** in your web browser
3. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```
4. Navigate to `http://localhost:8000` in your browser

### GitHub Pages Deployment

#### Method 1: Using GitHub Web Interface (Easiest)

1. **Create a GitHub account** at https://github.com (if you don't have one)
2. **Create a new repository** named `[your-username].github.io`
3. **Upload files**:
   - Click "Add file" > "Upload files"
   - Drag and drop all files from the `noel` folder
   - Commit the changes
4. **Access your site** at `https://[your-username].github.io`

#### Method 2: Using Git Command Line

```bash
# Navigate to your project folder
cd noel

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial wedding invitation website"

# Add remote repository
git remote add origin https://github.com/[your-username]/[your-username].github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Method 3: Using GitHub Desktop

1. Download GitHub Desktop from https://desktop.github.com
2. Create a new repository
3. Select the `noel` folder as the local path
4. Publish to GitHub
5. Your site will be available at `https://[your-username].github.io`

## 🎨 Customization Guide

### Change Wedding Details

Edit `index.html` and update:
- **Names**: Search for "Joy" and "Noel" 
- **Date/Time**: Line with "24 May 2026, 11:30 AM"
- **Family Info**: Family cards section
- **Venue**: Map embed and location details
- **Message**: Wedding message section

### Modify Colors

Edit `style.css` and change CSS variables at the top:
```css
:root {
    --cream: #faf6f1;           /* Background */
    --beige: #ede7df;           /* Secondary bg */
    --soft-pink: #f5dcc4;       /* Accent */
    --rose-gold: #b76e79;       /* Primary accent */
    --gold: #d4af37;            /* Gold accent */
    --dark-text: #4a3f37;       /* Main text */
    /* ...more colors... */
}
```

### Change Fonts

The site uses Google Fonts. To customize:
1. Visit https://fonts.google.com
2. Select fonts you like
3. Copy the `<link>` tag from Google Fonts
4. Replace the link in `index.html` head section
5. Update font families in `style.css`

### Add Your Own Images

1. Create an `assets/` folder in your project
2. Add images (e.g., `couple.jpg`, `floral-bg.png`)
3. Reference in HTML: `<img src="assets/couple.jpg" alt="Couple">`
4. Reference in CSS: `background-image: url('assets/floral-bg.png');`

### Customize Background Music

Replace the audio source in `index.html`:
```html
<audio id="backgroundMusic" loop muted>
    <source src="your-music-url.mp3" type="audio/mpeg">
</audio>
```

Suggested: Use royalty-free wedding music from:
- Pixabay: https://pixabay.com/music/
- Freepik: https://www.freepik.com/
- YouTube Audio Library

## ⚙️ Technical Details

### Browser Compatibility
- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: Latest versions

### Performance Optimizations
- CSS animations use GPU acceleration
- Intersection Observer for efficient scroll animations
- Minimal JavaScript for faster load times
- Optimized image sizes

### Accessibility Features
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance

## 🎭 Animation Guide

### CSS Animations Used
- **fadeIn**: Smooth opacity transition
- **slideInUp**: Content rises from bottom
- **slideInLeft/Right**: Content slides in
- **zoomIn**: Scale growth animation
- **float**: Subtle vertical movement
- **sway**: Gentle rotation effect
- **pulse-glow**: Glowing effect
- **particles-fall**: Petal animation

### JavaScript Interactions
- Countdown timer updates every second
- Scroll-triggered animations with Intersection Observer
- Music toggle with active state
- Floating petals continuously generated
- Parallax scrolling effects

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Troubleshooting

### Music Not Playing
- Browsers require user interaction before autoplay
- Click the music button to enable
- Check browser privacy/security settings
- Some browsers block autoplay on muted audio

### Animations Not Smooth
- Ensure hardware acceleration is enabled
- Check browser settings for animation preferences
- Try a different browser
- Disable browser extensions that might interfere

### Map Not Displaying
- Check internet connection (Google Maps requires it)
- Verify map link is correct
- Allow time for iframe to load
- Check browser console for errors

### GitHub Pages Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 1-2 minutes for GitHub to build
- Check repository settings for Pages configuration
- Verify index.html is in the root folder

## 📧 Support & Contact

For questions or issues:
1. Check the troubleshooting section above
2. Review the code comments in script.js and style.css
3. Test in different browsers
4. Check browser console for errors (F12)

## 📄 License

This template is provided as-is for personal use. Feel free to customize it for your wedding!

## 💡 Tips for Success

1. **Add Photos**: Include couple photos or engagement pictures in the assets folder
2. **Test Mobile**: Always preview on mobile devices before sharing
3. **Share Early**: Send out invitations with plenty of notice
4. **Update Details**: Ensure all family information is accurate
5. **Custom Domain**: Use a custom domain for more professional appearance (optional)
6. **Backup**: Keep a backup of all files

## 🎉 Enjoy!

This website is designed to make your wedding invitations memorable and beautiful. Customize it to match your style and celebrate this special moment!

---

**Created with ❤️ for Joy & Noel**

Updated: May 4, 2026
