# 🚀 Οδηγίες Εγκατάστασης Decap CMS με GitHub Authentication

## ✅ Αρχεία που Δημιουργήθηκαν

### Νέα Δομή Φακέλων:
```
admin/
  ├── index.html (Admin panel interface)
  └── config.yml (CMS configuration)

_data/
  ├── hero/
  ├── services/
  ├── projects/
  ├── fleet/
  ├── about/
  └── contact/

cms-loader.js (Loads content from CMS)
```

---

## 📋 Βήματα Εγκατάστασης

### Βήμα 1: Δημιουργία GitHub Repository

1. **Πηγαίνετε στο GitHub**
   - Σύνδεση στο https://github.com
   - Δημιουργήστε λογαριασμό αν δεν έχετε

2. **Δημιουργία νέου Repository**
   - Κλικ "New repository" (πράσινο κουμπί)
   - Όνομα: π.χ. "kalaitsidis-website"
   - Επιλέξτε "Public" ή "Private"
   - ΜΗΝ προσθέσετε README (έχουμε ήδη αρχεία)
   - Κλικ "Create repository"

3. **Ανέβασμα αρχείων στο GitHub**
   
   **Μέθοδος A: Drag & Drop (Εύκολο)**
   - Στη σελίδα του νέου repo, κλικ "uploading an existing file"
   - Drag & drop όλα τα αρχεία και φακέλους
   - Γράψτε commit message: "Initial commit"
   - Κλικ "Commit changes"
   
   **Μέθοδος B: Μέσω Git Command Line**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

4. **Σημειώστε το repo name**
   - Θα είναι: `your-username/your-repo-name`
   - Π.χ. `john/kalaitsidis-website`

---

### Βήμα 2: Ενημέρωση Config με το GitHub Repo

1. **Ανοίξτε το αρχείο:** `admin/config.yml`

2. **Βρείτε τη γραμμή:**
   ```yaml
   repo: your-username/your-repo-name
   ```

3. **Αλλάξτε με το δικό σας repo:**
   ```yaml
   repo: john/kalaitsidis-website
   ```
   (Βάλτε το δικό σας GitHub username και repo name)

4. **Αποθηκεύστε το αρχείο**

5. **Push την αλλαγή στο GitHub**
   - Αν χρησιμοποιείτε GitHub Desktop: Commit & Push
   - Αν χρησιμοποιείτε command line:
     ```bash
     git add admin/config.yml
     git commit -m "Update repo config"
     git push
     ```

---

### Βήμα 3: Σύνδεση με Netlify

1. **Πηγαίνετε στο Netlify**
   - Σύνδεση στο https://app.netlify.com
   - Δημιουργήστε λογαριασμό αν δεν έχετε

2. **Προσθήκη νέου site**
   - Κλικ "Add new site" → "Import an existing project"
   - Επιλέξτε "Deploy with GitHub"
   - Authorize το Netlify να έχει πρόσβαση στο GitHub
   - Επιλέξτε το repository σας
   - Κλικ "Deploy site"

3. **Περιμένετε το deployment**
   - Θα διαρκέσει 1-2 λεπτά
   - Θα δείτε green checkmark όταν τελειώσει

4. **Σημειώστε το URL**
   - Π.χ. `https://amazing-site-123456.netlify.app`
   - Μπορείτε να το αλλάξετε: Site settings → Domain management

---

### Βήμα 4: Ενεργοποίηση OAuth για GitHub

1. **Πηγαίνετε στο Netlify Dashboard**
   - Επιλέξτε το site σας
   - Κλικ "Site configuration" (αριστερή μπάρα)
   - Κλικ "Access & security"

2. **OAuth**
   - Scroll down στο "OAuth"
   - Κλικ "Install provider" ή "Add provider"
   - Επιλέξτε **"GitHub"**
   - Κλικ "Install"

3. **Authorize GitHub**
   - Θα ανοίξει παράθυρο GitHub
   - Κλικ "Authorize Netlify"
   - ✅ Τώρα το CMS μπορεί να κάνει login με GitHub!

---

### Βήμα 5: Σύνδεση στο Admin Panel

1. **Πηγαίνετε στο admin**
   - URL: `https://your-site.netlify.app/admin`

2. **Login με GitHub**
   - Θα δείτε κουμπί "Login with GitHub"
   - Κλικ στο κουμπί
   - Authorize το Decap CMS
   - ✅ Συνδεθήκατε!

---

### Βήμα 4: Χρήση του Admin Panel

#### Σύνδεση:
```
URL: https://yoursite.netlify.app/admin
```

#### Τι μπορείτε να επεξεργαστείτε:

**1. Αρχική Σελίδα (Hero)**
   - Τίτλος της εταιρείας
   - Υπότιτλος/tagline
   - Κείμενο κουμπιού

**2. Υπηρεσίες**
   - Προσθήκη/διαγραφή υπηρεσιών
   - Επεξεργασία τίτλων & περιγραφών
   - Αλλαγή εικονιδίων
   - Αλλαγή σειράς εμφάνισης

**3. Έργα (Slideshow)**
   - Upload νέων project φωτογραφιών
   - Προσθήκη τίτλων/περιγραφών
   - Διαγραφή παλιών έργων
   - Αλλαγή σειράς

**4. Στόλος**
   - Επεξεργασία εξοπλισμού
   - Προσθήκη νέου εξοπλισμού
   - Αλλαγή περιγραφών

**5. Σχετικά με Εμάς**
   - Επεξεργασία των 3 παραγράφων
   - Αλλαγή του κειμένου

**6. Στοιχεία Επικοινωνίας**
   - Διεύθυνση
   - Τηλέφωνα
   - Email
   - Ωράριο
   - Social media links

---

## 🎯 Πώς να Κάνετε Αλλαγές

### Για να επεξεργαστείτε κάτι:
1. Login στο `/admin`
2. Επιλέξτε category (π.χ. "Υπηρεσίες")
3. Κλικ στο item που θέλετε να αλλάξετε
4. Κάντε τις αλλαγές
5. Κλικ "Save" (πάνω δεξιά)
6. Κλικ "Publish" (πράσινο κουμπί)

### Για να προσθέσετε κάτι νέο:
1. Επιλέξτε category
2. Κλικ "New [Service/Project/etc]"
3. Συμπληρώστε τα πεδία
4. Upload φωτογραφία (αν χρειάζεται)
5. Save & Publish

### Για να διαγράψετε:
1. Ανοίξτε το item
2. Κλικ "Delete" (κόκκινο, πάνω δεξιά)
3. Επιβεβαιώστε

---

## ⏱️ Χρόνος Ενημέρωσης

**Workflow:**
1. Κάνετε αλλαγή στο admin → "Publish"
2. CMS κάνει commit στο Git repo
3. Netlify ανιχνεύει το commit
4. Auto-rebuild του site (1-3 λεπτά)
5. Οι αλλαγές εμφανίζονται live

**Tip:** Δείτε την πρόοδο στο Netlify Dashboard → Deploys

---

## 🖼️ Upload Φωτογραφιών

### Για Slideshow/Projects:
1. Admin → "Έργα (Slideshow)"
2. New Project ή Edit existing
3. Στο πεδίο "Φωτογραφία" κάντε:
   - Drag & drop την εικόνα, ή
   - Κλικ "Choose an image"
4. Η φωτογραφία αποθηκεύεται στο `photos/slideshow/`
5. Save & Publish

### Υποστηριζόμενα formats:
- JPG/JPEG
- PNG
- GIF
- WebP

---

## 👥 Προσθήκη Άλλων Χρηστών (Προαιρετικό)

1. Netlify → Identity → "Invite users"
2. Βάλτε το email τους
3. Επιλέξτε role (Editor για πλήρη πρόσβαση)
4. Send invitation
5. Θα λάβουν email με link εγγραφής

---

## 🔒 Ασφάλεια

✅ **Ενσωματωμένη ασφάλεια:**
- Login με email/password (required)
- HTTPS encryption
- Git history (track all changes)
- Rate limiting
- Only invited users

✅ **Best practices:**
- Χρησιμοποιήστε δυνατό password
- Μην μοιραστείτε το login
- Registration: "Invite only" (μετά την εγγραφή σας)
- Review users τακτικά

---

## 🆘 Αντιμετώπιση Προβλημάτων

**Δεν μπορώ να μπω στο /admin:**
- Τσεκάρετε ότι τα αρχεία ανέβηκαν
- Κάνετε clear browser cache (Ctrl+Shift+Del)
- Δοκιμάστε incognito mode

**Το login δεν δουλεύει:**
- Identity enabled στο Netlify dashboard?
- Confirmation email (check spam folder)
- Git Gateway enabled?

**Οι αλλαγές δεν φαίνονται:**
- Περιμένετε 2-3 λεπτά για rebuild
- Netlify → Deploys → Check build status
- Hard refresh (Ctrl+F5)

**Ξεχάσατε το password:**
- /admin → "Forgot password?"
- Ακολουθήστε το email link

---

## 💰 Κόστος

**100% ΔΩΡΕΑΝ για την χρήση σας:**
- Netlify Identity: Δωρεάν (έως 1000 users)
- Git Gateway: Δωρεάν
- Decap CMS: Open source (πάντα δωρεάν)
- Netlify Hosting: Δωρεάν tier επαρκεί
- Bandwidth: 100GB/μήνα δωρεάν

---

## 📝 Σημαντικές Σημειώσεις

1. **Backup:** Όλο το content είναι στο Git repo (auto-backup)
2. **History:** Μπορείτε να δείτε/επαναφέρετε παλιές εκδόσεις
3. **Offline:** Drafts σώζονται local, publish όταν θέλετε
4. **Mobile:** To admin panel δουλεύει και σε κινητά/tablets

---

## ✅ Checklist Deployment

- [ ] Ανέβασμα αρχείων στο Netlify
- [ ] Enable Netlify Identity
- [ ] Enable Git Gateway
- [ ] Open registration (temporarily)
- [ ] Επίσκεψη στο /admin
- [ ] Εγγραφή admin account
- [ ] Επιβεβαίωση email
- [ ] Close registration (Invite only)
- [ ] Test: Κάντε μια αλλαγή
- [ ] Verify: Η αλλαγή εμφανίστηκε μετά το rebuild

---

## 🎉 Ολοκληρώθηκε!

Τώρα μπορείτε να διαχειρίζεστε όλο το περιεχόμενο του site σας εύκολα μέσω του admin panel, χωρίς να αγγίξετε κώδικα!

**Admin URL:** `https://yoursite.netlify.app/admin`

---

## 📧 Υποστήριξη

Για ερωτήσεις σχετικά με το Decap CMS:
- Docs: https://decapcms.org/docs/
- Netlify Docs: https://docs.netlify.com/
