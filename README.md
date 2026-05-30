# Sumaiya Jahan Alo — Personal Portfolio Website

A fully responsive, production-ready personal portfolio website built with pure HTML, CSS, and JavaScript.
Designed to be hosted on **GitHub Pages** for free.

---

## 📁 Folder Structure

```
sumaiya-portfolio/
├── index.html                    ← Main website file (open this in browser)
├── README.md                     ← This guide
└── assets/
    ├── css/
    │   └── style.css             ← All styling
    ├── js/
    │   └── main.js               ← Animations, nav, form logic
    └── images/
        ├── profile.jpg           ← ★ YOUR MAIN PHOTO (hero section)
        ├── og-image.jpg          ← Social share preview image (optional)
        └── (other photos if needed)
```

---

## 🖼️ Images You Need to Add

### 1. `assets/images/profile.jpg` — **REQUIRED**
This is your **main profile photo** shown in the hero section (right side of the page).

**Specifications:**
- Format: `.jpg` or `.png` (rename to `profile.jpg`)
- Recommended size: **600 × 800 px** (portrait/vertical orientation)
- Aspect ratio: **3:4** (portrait) — the frame is portrait shaped
- Resolution: 72–150 DPI (for web)
- File size: under 500 KB is ideal (compress at [tinyjpg.com](https://tinyjpg.com))

**What photo to use:**
- A professional headshot or semi-formal photo
- You in business/formal/smart casual attire
- Clear face, good lighting, plain or blurred background
- The one on your CV works perfectly — just crop to portrait

**How to prepare:**
1. Take or find a clear photo of yourself
2. Crop to portrait orientation (taller than wide)
3. Name the file exactly: `profile.jpg`
4. Put it inside `assets/images/` folder

---

### 2. `assets/Sumaiya_Jahan_Alo_CV.pdf` — **RECOMMENDED**
This is your **downloadable CV** linked from multiple buttons ("Download CV").

**How to add:**
1. Export your CV as a PDF
2. Name it: `Sumaiya_Jahan_Alo_CV.pdf`
3. Put it inside the `assets/` folder (NOT inside `images/`)

> If you don't add this, the download buttons just won't download anything. The site still works fine.

---

## 🚀 How to Host on GitHub Pages (FREE)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and create a free account if you don't have one.

### Step 2 — Create a New Repository
1. Click the **"+"** icon → **"New repository"**
2. Repository name: `sumaiya-alo-portfolio` (or anything you like)
3. Set it to **Public**
4. Click **"Create repository"**

### Step 3 — Upload Your Files
**Option A — Via GitHub Website (Easiest):**
1. In your new repo, click **"uploading an existing file"**
2. Drag and drop ALL files and folders:
   - `index.html`
   - `assets/` folder (with all subfolders inside)
3. Write a commit message like `Add portfolio files`
4. Click **"Commit changes"**

**Option B — Via Git (If you know command line):**
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/sumaiya-alo-portfolio.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Select branch: **`main`**, folder: **`/ (root)`**
5. Click **Save**

### Step 5 — Your Site is Live! 🎉
After 1–2 minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/sumaiya-alo-portfolio/
```

---

## 🌐 Using a Custom Domain (Optional)

If you want `www.sumaiyaalo.com` instead of the GitHub URL:
1. Buy a domain from [Namecheap](https://namecheap.com) or [GoDaddy](https://godaddy.com)
2. In GitHub Pages settings → type your domain in "Custom domain"
3. Follow GitHub's DNS instructions with your domain provider

---

## ✉️ Making the Contact Form Work

Currently the form shows a success message but doesn't actually send emails.
To make it send real emails:

### Option A — Formspree (Free, Easiest)
1. Go to [formspree.io](https://formspree.io) → create free account
2. Create a new form → copy your form endpoint (looks like `https://formspree.io/f/xyzabc`)
3. In `index.html`, find the `<form>` tag and add `action="YOUR_ENDPOINT"`:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. In `assets/js/main.js`, change the form handler to submit normally instead of simulating.

### Option B — Netlify Forms
Deploy the site to [Netlify](https://netlify.com) instead of GitHub Pages, then add `data-netlify="true"` to the form. Netlify handles submissions automatically.

---

## 🎨 Customization Guide

### Change Colors
In `assets/css/style.css`, find the `:root { }` section at the top.
- `--navy` — dark navy (nav, footer, buttons)
- `--blue` — primary accent blue
- `--gold` — gold accent (awards, club roles)
- `--bg` — page background (ivory/off-white)

### Update Your Information
All content is in `index.html`. Search for specific text to find and update it.

### Update LinkedIn URL
Search for `linkedin.com/in/sumaiya-alo` in `index.html` and replace with your exact LinkedIn profile URL.

### Change Fonts
In `index.html` `<head>`, update the Google Fonts link. In `style.css`, update `--f-display` and `--f-body` variables.

---

## 📱 Browser & Device Support

Tested and works on:
- ✅ Chrome, Firefox, Safari, Edge (modern versions)
- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ iPad & tablets
- ✅ All desktop screen sizes

---

## 🔧 Technologies Used

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — no frameworks, no dependencies
- **Google Fonts** — Cormorant Garamond + DM Sans
- **GitHub Pages** — free hosting

---

## 📞 Need Help?

If you get stuck setting up the site, email yourself a checklist:
1. ☐ Added `profile.jpg` to `assets/images/`
2. ☐ Added `Sumaiya_Jahan_Alo_CV.pdf` to `assets/`
3. ☐ Uploaded all files to GitHub
4. ☐ Enabled GitHub Pages
5. ☐ Checked the live URL

---

*Portfolio designed for Sumaiya Jahan Alo · AIUB · 2025*
