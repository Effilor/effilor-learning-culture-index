# Quick Start Guide - Deploy in 10 Minutes

This guide will help you deploy the Organizational Learning Culture Index assessment from scratch.

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- SendGrid account (free tier works)
- The assessment files (index.html, effilor-logo.jpg, api/send-email.js)

---

## Step 1: Create GitHub Repository (2 minutes)

1. Go to [github.com](https://github.com) and log in
2. Click "New repository" (green button)
3. Repository name: `organizational-learning-culture-index`
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

---

## Step 2: Upload Files to GitHub (3 minutes)

**Upload these files to the repository root:**

```
✅ index.html
✅ effilor-logo.jpg
✅ README.md
✅ QUICK_START.md
✅ TESTING_CHECKLIST.md
```

**Create `api` folder and upload:**
```
✅ api/send-email.js
```

**Create `.gitignore` file with this content:**
```
node_modules/
.env
.vercel
.DS_Store
```

**Create `package.json` in the root with this content:**
```json
{
  "name": "organizational-learning-culture-index",
  "version": "1.0.0",
  "dependencies": {
    "@sendgrid/mail": "^7.7.0"
  }
}
```

**Your repository structure should look like:**
```
organizational-learning-culture-index/
├── index.html
├── effilor-logo.jpg
├── package.json
├── .gitignore
├── api/
│   └── send-email.js
├── README.md
├── QUICK_START.md
└── TESTING_CHECKLIST.md
```

---

## Step 3: Get SendGrid API Key (2 minutes)

1. Go to [sendgrid.com](https://sendgrid.com) and log in (or sign up for free)
2. Navigate to **Settings** → **API Keys**
3. Click "Create API Key"
4. Name: `Effilor Learning Culture Index`
5. Permissions: Choose "Full Access" or "Mail Send"
6. Click "Create & View"
7. **COPY THE API KEY** (starts with `SG.`)
   - You can only see it once!
   - Save it somewhere safe temporarily

### Verify Sender Email

1. Go to **Settings** → **Sender Authentication**
2. Click "Verify a Single Sender"
3. Enter email: `shankar.ramamurthy@effilor.com`
4. Fill in the form with your details
5. Check your email and click the verification link
6. **Wait for verification to complete** (usually instant)

---

## Step 4: Deploy to Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com) and log in (or sign up with GitHub)
2. Click "Add New..." → "Project"
3. Find your `organizational-learning-culture-index` repository
4. Click "Import"

**Configure the project:**
- **Framework Preset**: Other (or leave as detected)
- **Build Command**: Leave empty
- **Output Directory**: Leave empty
- **Install Command**: Leave empty

5. Click "Deploy"
6. **Wait for deployment to complete** (~1 minute)

---

## Step 5: Add Environment Variables (1 minute)

**CRITICAL: The assessment won't work without this step!**

1. In your Vercel project, go to **Settings** → **Environment Variables**
2. Add new variable:
   - **Name**: `SENDGRID_API_KEY`
   - **Value**: [Paste the SendGrid API key you copied earlier]
   - **Environments**: Check ALL three boxes:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. Click "Save"

**IMPORTANT: You MUST redeploy after adding environment variables!**

4. Go to **Deployments** tab
5. Find the latest deployment
6. Click the three dots (•••) → "Redeploy"
7. Confirm the redeployment

---

## Step 6: Test the Assessment (5 minutes)

1. Visit your deployed URL (shown in Vercel dashboard)
2. Complete the full assessment:
   - Answer all 24 questions
   - Review your results
   - Click "Get Your Full Report"
   - Fill in the email form
   - Submit

3. **Check email delivery:**
   - Check inbox at shankar.ramamurthy@effilor.com
   - **Also check SPAM folder** (SendGrid emails sometimes land there initially)
   - Email should arrive within 1-2 minutes

4. **Verify email contents:**
   - Contact information is correct
   - Total score is displayed
   - Pillar scores are shown
   - All question responses are included
   - JSON data is formatted properly

5. **Test on mobile:**
   - Visit the URL on your phone
   - Complete a few questions
   - Verify responsive design works

---

## Troubleshooting

### Issue: Logo not displaying
**Solution:** Verify `effilor-logo.jpg` is in the repository root (same level as index.html)

### Issue: Email not sending
**Solutions:**
1. Check SendGrid API key is set in Vercel
2. Verify you redeployed after adding the API key
3. Check SendGrid sender email is verified
4. Look at Vercel Function logs: Deployments → [Latest] → Functions tab

### Issue: "Cannot find module '@sendgrid/mail'"
**Solution:** Ensure `package.json` exists in repository root with SendGrid dependency

### Issue: Email goes to spam
**Solution:** This is normal for new SendGrid senders. Domain authentication in SendGrid can improve this, but it's not critical for a lead magnet.

### Issue: Form submits but email doesn't arrive
**Solutions:**
1. Check Vercel Function logs for errors
2. Verify SendGrid API key has correct permissions
3. Test SendGrid API key using their test email feature

---

## Success Checklist

Before declaring success, verify:

- ✅ Website loads at Vercel URL
- ✅ Logo displays correctly
- ✅ All 24 questions advance properly
- ✅ Scoring calculates accurately
- ✅ Results screen shows correctly
- ✅ Email form submits without errors
- ✅ **Email actually arrives** (inbox or spam)
- ✅ Email contains all assessment data
- ✅ Mobile version works properly
- ✅ Thank you page displays

---

## What's Next?

1. **Share the URL** with your team for testing
2. **Complete the Testing Checklist** (see TESTING_CHECKLIST.md)
3. **Monitor submissions** via email
4. **Generate reports** for respondents using Phase 3 process
5. **Promote the assessment** to your target audience

---

## Common Questions

**Q: Can I use a custom domain?**
A: Yes! In Vercel: Settings → Domains → Add your domain

**Q: How do I update the assessment questions?**
A: Edit index.html and api/send-email.js, commit to GitHub, Vercel auto-deploys

**Q: How much does this cost?**
A: $0 for low-moderate traffic (Vercel free tier + SendGrid free tier)

**Q: Can I change the email recipient?**
A: Yes, edit `shankar.ramamurthy@effilor.com` in api/send-email.js

**Q: What if I need help?**
A: Contact shankar.ramamurthy@effilor.com with your Vercel URL and description of the issue

---

## Important Files Reference

**index.html**: Main assessment interface  
**api/send-email.js**: Serverless function for email sending  
**effilor-logo.jpg**: Company logo  
**package.json**: Dependencies (required for SendGrid)

---

**Total Time: ~10 minutes**
**Difficulty: Easy** (no coding required after initial setup)

Good luck with your deployment! 🚀
