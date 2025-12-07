# LOGO SETUP INSTRUCTIONS

## Required: Effilor Logo File

The assessment requires the Effilor logo file to be added to the repository.

### File Requirements:
- **Filename:** `effilor-logo.jpg`
- **Format:** JPG (preferred) or PNG
- **Recommended size:** 300-400px width, maintain aspect ratio
- **File size:** Ideally under 200KB
- **Background:** Transparent or white background preferred

### Where to Place:
Upload `effilor-logo.jpg` to the **root directory** of your GitHub repository, at the same level as `index.html`.

```
organizational-learning-culture-index/
├── index.html              ← Same level
├── effilor-logo.jpg        ← Logo goes here
├── package.json
├── api/
│   └── send-email.js
└── ...other files
```

### How to Add to GitHub:

**Method 1: Via GitHub Web Interface**
1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop `effilor-logo.jpg`
4. Commit the change

**Method 2: Via Git Command Line**
```bash
git add effilor-logo.jpg
git commit -m "Add Effilor logo"
git push
```

### What Happens After Upload:

Once the logo is uploaded to GitHub:
1. Vercel will automatically redeploy
2. The logo will appear on all screens:
   - Welcome screen (large, ~300px)
   - Question screens (small, ~120px)
   - Results screen (small, ~120px)
   - Email form (small, ~120px)
   - Thank you screen (large, ~300px)

### If You Don't Have the Logo:

If you need to create or obtain the Effilor logo:
1. Contact your design team
2. Or use the existing Effilor logo from your website
3. Save it as `effilor-logo.jpg`
4. Upload to repository

### Testing the Logo:

After uploading:
1. Wait for Vercel to redeploy (~1 minute)
2. Visit your assessment URL
3. Verify logo appears on welcome screen
4. Complete assessment to check logo on all screens
5. If logo doesn't appear, check:
   - Filename is exactly `effilor-logo.jpg` (case-sensitive)
   - File is in repository root (not in a subfolder)
   - Vercel redeployed after upload

---

## IMPORTANT NOTE:

The assessment **will not work properly without the logo**. The HTML file references `./effilor-logo.jpg` in multiple places. If the file is missing, you'll see broken image icons instead of the Effilor logo.

Make sure to add this file before sharing the assessment URL with anyone!
