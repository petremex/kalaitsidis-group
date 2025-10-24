# ✅ Decap CMS Setup Checklist (GitHub Auth)

## Pre-Deployment
- [x] Admin panel files created (admin/index.html, admin/config.yml)
- [x] Content data files created (_data folders)
- [x] CMS loader script added (cms-loader.js)
- [x] GitHub authentication configured

## GitHub Setup
- [ ] Create GitHub account (if you don't have one)
- [ ] Create new repository
  - [ ] Go to github.com → New repository
  - [ ] Name it (e.g., "kalaitsidis-website")
  - [ ] Choose Public or Private
  - [ ] Create repository
- [ ] Upload all project files to GitHub
  - [ ] Drag & drop files OR use Git commands
  - [ ] Commit changes
- [ ] Note your repo name: `your-username/your-repo-name`

## Update Configuration
- [ ] Open `admin/config.yml`
- [ ] Find line: `repo: your-username/your-repo-name`
- [ ] Replace with YOUR GitHub username and repo name
- [ ] Save and commit the change to GitHub

## Netlify Setup
- [ ] Create Netlify account (if you don't have one)
- [ ] Add new site
  - [ ] "Add new site" → "Import an existing project"
  - [ ] Choose "Deploy with GitHub"
  - [ ] Authorize Netlify to access GitHub
  - [ ] Select your repository
  - [ ] Click "Deploy site"
- [ ] Wait for deployment to complete (1-2 minutes)

## Enable GitHub OAuth
- [ ] In Netlify Dashboard → Your site
- [ ] Go to "Site configuration" (left sidebar)
- [ ] Click "Access & security"
- [ ] Scroll to "OAuth"
- [ ] Click "Install provider" or "Add provider"
- [ ] Select "GitHub"
- [ ] Click "Install"
- [ ] Authorize Netlify in GitHub popup window

## Testing
- [ ] Login to /admin
- [ ] Edit one piece of content
- [ ] Click Save → Publish
- [ ] Wait 2-3 minutes for rebuild
- [ ] Verify change appears on live site

## Done! 🎉
- [ ] Site is live with working CMS
- [ ] Only you can access admin panel
- [ ] Content updates work correctly

---

**Next Steps:**
- Add content through /admin panel
- Upload project photos
- Update contact information
- Customize services and about section

**Admin URL:** https://yoursite.netlify.app/admin
