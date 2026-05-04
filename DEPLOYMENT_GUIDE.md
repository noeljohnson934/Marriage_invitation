# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your wedding invitation website to GitHub Pages in the easiest way possible.

## 📋 Prerequisites

- A GitHub account (free at https://github.com)
- All files from the wedding invitation project

---

## 🎯 Option 1: Quick Deploy (Easiest - No Git Required)

### Step 1: Create GitHub Account
1. Go to https://github.com
2. Click "Sign up"
3. Follow the instructions to create your account
4. Verify your email

### Step 2: Create Repository
1. Log in to GitHub
2. Click **+** icon (top right) → **New repository**
3. Repository name: `[your-username].github.io`
   - Replace `[your-username]` with your actual GitHub username
   - Example: if username is "john_doe", use "john_doe.github.io"
4. Click **Create repository**

### Step 3: Upload Files
1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop all files from your project folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `sw.js`
   - `manifest.json`
   - `.gitignore`
   - `README.md`
   - `assets/` folder (if any)
3. Click **Commit changes**

### Step 4: Access Your Site
- Your site will be live at: `https://[your-username].github.io`
- It may take 1-2 minutes for GitHub to build the site
- **That's it!** 🎉

---

## 💻 Option 2: Using GitHub Desktop (Recommended for Beginners)

### Step 1: Download & Install
1. Download GitHub Desktop from https://desktop.github.com
2. Install and sign in with your GitHub account

### Step 2: Create Repository
1. Click **File** → **New repository**
2. Configure:
   - **Name**: `[your-username].github.io`
   - **Local Path**: Choose where to save
   - **Initialize this repository with a README**: Uncheck
3. Click **Create repository**

### Step 3: Add Files
1. Copy all your project files to the repository folder that was created
2. Files should be in the root of the repository folder

### Step 4: Commit & Push
1. GitHub Desktop will show the files
2. In the **Summary** field (bottom left), type: `Initial commit`
3. Click **Commit to main**
4. Click **Publish repository**
5. Make sure "main" branch is selected

### Step 5: Access Your Site
- Visit: `https://[your-username].github.io`
- Wait 1-2 minutes for deployment

---

## ⌨️ Option 3: Using Command Line (For Advanced Users)

### Step 1: Install Git
- **Windows**: Download from https://git-scm.com
- **Mac**: Install Xcode Command Line Tools or use Homebrew
- **Linux**: `sudo apt-get install git`

### Step 2: Navigate to Project
```bash
cd /path/to/noel
```

### Step 3: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial wedding invitation website"
```

### Step 4: Connect to GitHub
```bash
git remote add origin https://github.com/[your-username]/[your-username].github.io.git
git branch -M main
git push -u origin main
```

### Step 5: Wait for Deployment
- GitHub will build your site automatically
- Visit: `https://[your-username].github.io` after 1-2 minutes

---

## ✅ Verify Deployment

### Check if Site is Live
1. Visit `https://[your-username].github.io`
2. You should see your wedding invitation website

### Troubleshooting

#### Site Not Loading
- **Solution 1**: Wait 2-3 minutes and refresh
- **Solution 2**: Clear browser cache (Ctrl+Shift+Delete)
- **Solution 3**: Check repository settings:
  - Go to Repository → Settings → Pages
  - Verify source is set to "main" branch

#### Files Show 404 Error
- **Cause**: Repository name is incorrect
- **Solution**: Repository MUST be named `[your-username].github.io`

#### Map Not Showing
- **Cause**: No internet connection (Maps requires it)
- **Solution**: Check internet connection

---

## 🔄 Making Updates

### Option 1: Web Interface
1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes and click **Commit changes**
5. Wait a few seconds for site to update

### Option 2: Local Edit + Push
1. Edit files on your computer
2. Using GitHub Desktop:
   - Changes will appear automatically
   - Write a message and click **Commit to main**
   - Click **Push origin**
3. Or using Command Line:
   ```bash
   git add .
   git commit -m "Update wedding details"
   git push
   ```

---

## 🎨 Customization After Deployment

### Update Family Details
1. Edit `index.html`
2. Find the family details section
3. Update names and addresses
4. Commit and push

### Change Wedding Date
1. Edit `script.js`
2. Find: `const WEDDING_DATE = new Date('2026-05-24T11:30:00')`
3. Change the date and time
4. Commit and push

### Modify Colors
1. Edit `style.css`
2. Update CSS variables at the top
3. Commit and push

---

## 📱 Share Your Site

### Ways to Share
- **Direct Link**: `https://[your-username].github.io`
- **QR Code**: Use a QR code generator at https://qr-code-generator.com
- **Email**: Send invitation link to guests
- **Social Media**: Post on WhatsApp, Instagram, etc.
- **Print**: Print QR code in physical invitations

### Shorten URL (Optional)
Use a URL shortener for cleaner links:
- https://bit.ly
- https://tinyurl.com
- https://short.link

Example shortened: `https://bit.ly/joyandnoel`

---

## 🔐 Custom Domain (Optional)

### Use Your Own Domain
If you have or want a custom domain:
1. Go to Repository → Settings → Pages
2. Scroll to "Custom domain"
3. Enter your domain (e.g., www.joyandnoel.com)
4. Click Save
5. Configure DNS records with your domain registrar

### Popular Domain Registrars
- Google Domains
- Namecheap
- GoDaddy
- Domain.com

---

## ❓ FAQ

**Q: Can I use a different repository name?**
A: No, it must be `[your-username].github.io` for the root domain. Other names will be at `[username].github.io/[repo-name]`

**Q: Is it free?**
A: Yes, GitHub Pages is completely free with unlimited bandwidth.

**Q: Can I use my own domain?**
A: Yes, you can set up a custom domain in Settings → Pages

**Q: How do I remove the site?**
A: Delete the repository on GitHub, or make it private.

**Q: Can I have multiple sites?**
A: Yes, create additional repositories. The main one must be `[username].github.io`, others will be at `[username].github.io/[repo-name]`

---

## 🆘 Need Help?

### Common Issues & Fixes

#### Issue: "404 Not Found"
```
✓ Repository name is correct ([username].github.io)
✓ Files are in the root directory
✓ index.html exists
✓ Wait 2-3 minutes after first push
```

#### Issue: "Site can't be reached"
```
✓ Check internet connection
✓ Verify URL is correct
✓ Try different browser
✓ Clear browser cache
```

#### Issue: "Stylesheet not loading"
```
✓ Ensure style.css is in root directory
✓ Check file path in HTML is correct
✓ Verify stylesheet has no typos
```

### Get Help
- GitHub Docs: https://docs.github.com/en/pages
- GitHub Support: https://support.github.com
- Stack Overflow: Tag questions with [github-pages]

---

## ✨ You're All Set!

Your wedding invitation website is now live! Share it with your guests and enjoy their reactions! 

🎉 **Congratulations, Joy & Noel!** 💍

---

**Last Updated**: May 4, 2026
**GitHub Pages Info**: https://pages.github.com
