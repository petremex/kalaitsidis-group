# Kalaitsidis Group Website

Modern, responsive construction company website with admin panel for easy content management.

## 🌐 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Greek Language** - Fully in Greek
- **Admin Panel** - Edit content without touching code
- **Slideshow** - Automatic project showcase
- **Modern UI** - Professional design with smooth animations
- **Social Media** - Integrated Facebook, Instagram, TikTok links

## 📁 Project Structure

```
/
├── index.html                  # Main website
├── cms-loader.js              # Loads content from CMS
├── slideshow-images.js        # Slideshow configuration
│
├── admin/                     # CMS Admin Panel
│   ├── index.html            # Admin interface
│   └── config.yml            # CMS configuration
│
├── _data/                     # Content managed by CMS
│   ├── hero/                 # Homepage hero section
│   ├── services/             # Services (Στέγαστρα, etc.)
│   ├── projects/             # Project slideshow
│   ├── fleet/                # Equipment (Γερανός, etc.)
│   ├── about/                # About us section
│   └── contact/              # Contact information
│
├── photos/
│   └── slideshow/            # Project images
│
└── Documentation/
    ├── CMS-SETUP-GUIDE.md        # Complete setup guide
    ├── CMS-QUICK-REFERENCE.md    # Quick reference
    └── SETUP-CHECKLIST.md        # Setup checklist
```

## 🚀 Quick Start

### Option 1: Static Site (No CMS)
1. Open `index.html` in a browser
2. Edit content directly in HTML
3. Update slideshow by editing `slideshow-images.js`

### Option 2: With CMS (Recommended)
1. Upload to Netlify
2. Follow `CMS-SETUP-GUIDE.md`
3. Manage content via `/admin` panel

## ✏️ Content Management

### Without CMS:
- Edit text directly in `index.html`
- Update slideshow: Run `update-slideshow.bat` or edit `slideshow-images.js`
- Add images to `photos/slideshow/`

### With CMS (After Setup):
1. Visit `https://yoursite.netlify.app/admin`
2. Login
3. Edit any content
4. Save & Publish
5. Changes appear in 2-3 minutes

## 📝 What You Can Edit via CMS

- ✅ Homepage title and tagline
- ✅ Services (add/edit/delete)
- ✅ Project slideshow (upload images)
- ✅ Fleet/Equipment details
- ✅ About us text
- ✅ Contact information
- ✅ Social media links

## 🛠️ Tools Included

- `update-slideshow.bat` - Automatically scans slideshow folder (for local use)
- `cms-loader.js` - Dynamically loads CMS content
- Netlify Identity - Secure admin authentication
- Decap CMS - User-friendly content editor

## 📚 Documentation

- **`CMS-SETUP-GUIDE.md`** - Complete Netlify CMS setup (Greek & English)
- **`CMS-QUICK-REFERENCE.md`** - Daily usage guide (Greek)
- **`SETUP-CHECKLIST.md`** - Step-by-step checklist
- **`README-SLIDESHOW.txt`** - Slideshow update instructions

## 🔒 Security

- Admin panel protected by Netlify Identity
- Login required for content editing
- HTTPS encryption
- Invite-only registration
- All changes tracked in Git history

## 💰 Cost

**100% Free** when using:
- Netlify free tier (100GB bandwidth/month)
- Netlify Identity (free for 1000 users)
- Decap CMS (open source)

## 🌐 Sections

1. **Hero** - Main landing section
2. **Services** - Στέγαστρα, Περιφράξεις, Γραφεία, Αποθήκες, Ειδικές Κατασκευές
3. **Projects** - Image slideshow of completed work
4. **Fleet** - Γερανός, Σκαπτικό, Νταλίκα
5. **About** - Company information
6. **Contact** - Phone, email, address, hours, social media

## 📱 Social Media

- Facebook
- Instagram
- TikTok

## 🎨 Technologies

- HTML5
- CSS3 (responsive, animations)
- JavaScript (ES6+)
- Decap CMS
- Netlify Identity
- Font Awesome Icons

## 📞 Support

For CMS issues:
- Decap CMS Docs: https://decapcms.org/docs/
- Netlify Docs: https://docs.netlify.com/

## 📄 License

Private project for Kalaitsidis Group

---

**Admin Panel:** `/admin`  
**Live Site:** Upload to Netlify for hosting
