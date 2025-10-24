# 🚀 Quick Start Guide - GitHub Authentication

## Updated: No Netlify Identity Required!

Your CMS now uses **GitHub authentication** instead of the deprecated Netlify Identity.

---

## 📝 What You Need

1. **GitHub Account** (free) - https://github.com
2. **Netlify Account** (free) - https://netlify.com
3. Your project files (already ready!)

---

## ⚡ Quick Setup (5 Steps)

### Step 1: Create GitHub Repository
```
1. Go to https://github.com
2. Click "New repository"
3. Name: "kalaitsidis-website" (or any name)
4. Click "Create repository"
5. Upload all your project files
```

### Step 2: Update Config File
```
1. Open: admin/config.yml
2. Find: repo: your-username/your-repo-name
3. Change to: repo: YOURUSERNAME/kalaitsidis-website
4. Save and upload to GitHub
```

### Step 3: Deploy to Netlify
```
1. Go to https://app.netlify.com
2. "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select your repository
5. Click "Deploy"
```

### Step 4: Enable GitHub OAuth
```
1. Netlify Dashboard → Your site
2. "Site configuration" → "Access & security"
3. Scroll to "OAuth"
4. "Install provider" → "GitHub"
5. Authorize in popup
```

### Step 5: Login!
```
1. Go to: https://your-site.netlify.app/admin
2. Click "Login with GitHub"
3. Authorize Decap CMS
4. Start editing! 🎉
```

---

## 🔐 How Login Works Now

**Old way (deprecated):**
- Email + Password through Netlify Identity ❌

**New way:**
- Login with your GitHub account ✅
- More secure
- No extra passwords to remember
- Works immediately

---

## 🎯 Benefits of GitHub Auth

✅ **No deprecated services** - Future-proof  
✅ **Free forever** - No limits  
✅ **More secure** - OAuth 2.0  
✅ **Easier setup** - No email confirmation  
✅ **Works offline** - Draft in browser, push when ready  

---

## 🔍 Important: Update Config!

**Before deploying, you MUST update this line in `admin/config.yml`:**

```yaml
backend:
  name: github
  repo: your-username/your-repo-name  ← CHANGE THIS!
```

**Example:**
```yaml
backend:
  name: github
  repo: john/kalaitsidis-website  ← Your actual GitHub username/repo
```

---

## 💡 Who Can Edit?

**Only people with access to your GitHub repository can login to the CMS.**

- If repo is **Private**: Only you (or collaborators you invite)
- If repo is **Public**: Only collaborators you add

**To add editors:**
1. Go to your GitHub repo
2. Settings → Collaborators
3. Add people by GitHub username

---

## 🆘 Troubleshooting

**"Login with GitHub" button doesn't appear:**
- Check that `repo:` in config.yml is correct
- Make sure files are deployed to Netlify
- Clear browser cache

**"Error: Not Authorized":**
- Make sure GitHub OAuth is installed in Netlify
- Check that you have access to the GitHub repository

**Changes don't appear:**
- Wait 2-3 minutes for Netlify rebuild
- Check Netlify Dashboard → Deploys for status

---

## 📚 Full Documentation

See `CMS-SETUP-GUIDE.md` for detailed step-by-step instructions.

---

**Ready to start?** Follow the 5 steps above! 🚀
