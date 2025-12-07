# Testing Checklist - Organizational Learning Culture Index

Complete this checklist before declaring the assessment ready for production use.

---

## Pre-Deployment Checks

### File Verification
- [ ] `index.html` exists in repository root
- [ ] `effilor-logo.jpg` exists in repository root
- [ ] `api/send-email.js` exists in `api` folder
- [ ] `package.json` exists in repository root
- [ ] All files uploaded to GitHub successfully

### Vercel Configuration
- [ ] Repository connected to Vercel
- [ ] Deployment completed without errors
- [ ] `SENDGRID_API_KEY` environment variable added
- [ ] Environment variable set for all environments (Production, Preview, Development)
- [ ] Redeployed after adding environment variable

### SendGrid Configuration
- [ ] SendGrid account created
- [ ] API key created with Mail Send permission
- [ ] Sender email (shankar.ramamurthy@effilor.com) verified
- [ ] Verification email clicked and confirmed

---

## Desktop Testing (Required)

### Welcome Screen
- [ ] Logo displays correctly (not broken image)
- [ ] Assessment title renders properly
- [ ] "24 Questions, 8-10 Minutes, 4 Key Pillars" stats display
- [ ] "What You'll Discover" section is readable
- [ ] "Begin Assessment" button is visible and styled correctly

### Question Flow
- [ ] Question 1 loads when "Begin Assessment" clicked
- [ ] Logo appears at top (smaller version)
- [ ] Progress bar displays and updates
- [ ] "Question X of 24" counter is accurate
- [ ] Pillar badge shows correct pillar name
- [ ] Question text is clearly readable
- [ ] All 5 answer options (A-E) display
- [ ] Answer options have hover effect
- [ ] Clicking an answer highlights it in purple
- [ ] Auto-advance to next question works (after ~300ms)
- [ ] "Previous Question" button appears after Q1
- [ ] "Previous Question" button works correctly
- [ ] All 24 questions cycle through properly
- [ ] Pillar names change at appropriate questions:
  - Q1-6: Learning Infrastructure
  - Q7-12: Learning Support
  - Q13-18: Learning Culture
  - Q19-24: Learning Impact

### Results Screen
- [ ] Results screen appears after question 24
- [ ] Logo displays at top
- [ ] Total score calculates correctly
- [ ] Score badge shows appropriate level:
  - 24-56: "Transactional Learning" (red background)
  - 57-88: "Inconsistent Learning Culture" (yellow background)
  - 89-120: "Systematic Learning Culture" (green background)
- [ ] Score description text displays
- [ ] All 4 pillar results show with correct scores
- [ ] Pillar progress bars animate to correct percentage
- [ ] "Top Strength" shows highest-scoring pillar
- [ ] "Priority Area" shows lowest-scoring pillar
- [ ] "Get Your Full Report" button is visible
- [ ] Button click shows email form

### Email Form
- [ ] Email form screen displays
- [ ] Logo appears at top
- [ ] All form fields render:
  - Full Name (required)
  - Email Address (required)
  - Organization Name (required)
  - Job Role/Title (required)
  - Phone Number (optional)
- [ ] Required field validation works (try submitting empty)
- [ ] Email format validation works (try invalid email)
- [ ] "Send My Report" button is styled correctly

### Form Submission
- [ ] Click "Send My Report" button
- [ ] Button changes to "Sending..."
- [ ] Button becomes disabled during submission
- [ ] No console errors appear (press F12 to check)
- [ ] Thank you screen appears after successful submission
- [ ] User's first name displays correctly
- [ ] User's email address displays correctly
- [ ] "Within 24 hours" message is visible
- [ ] Contact information section displays

### Email Delivery (CRITICAL)
- [ ] Check inbox at shankar.ramamurthy@effilor.com
- [ ] **ALSO CHECK SPAM FOLDER**
- [ ] Email arrives within 1-2 minutes
- [ ] Subject line: "New Learning Culture Index Submission - [Organization Name]"
- [ ] Email contains contact information:
  - Name
  - Email
  - Organization
  - Role
  - Phone (or "Not provided")
  - Submission timestamp
- [ ] Email contains assessment results:
  - Total score (X/120)
  - Score level
  - All 4 pillar scores with percentages
- [ ] Email contains individual question responses:
  - All 24 questions listed
  - Each with pillar name
  - Each with selected answer
  - Each with point value
- [ ] Email contains JSON data section
- [ ] JSON data is properly formatted

### Score Calculation Verification

**Test with known answers to verify math:**

Test 1: All "Strongly Agree" (E = 5 points each)
- [ ] Total score = 120
- [ ] Each pillar = 30/30
- [ ] Score level = "Systematic Learning Culture"

Test 2: All "Strongly Disagree" (A = 1 point each)
- [ ] Total score = 24
- [ ] Each pillar = 6/30
- [ ] Score level = "Transactional Learning"

Test 3: Mixed answers (manually calculate expected score)
- [ ] Total score matches expected calculation
- [ ] Pillar scores match expected calculations
- [ ] Score level matches expected range

---

## Mobile Testing (Required)

**Test on actual mobile device or browser dev tools mobile view**

### iPhone/iOS Testing
- [ ] Website loads properly on Safari iOS
- [ ] Logo displays correctly
- [ ] Welcome screen is readable (no text overflow)
- [ ] "Begin Assessment" button is tappable
- [ ] Questions display one at a time
- [ ] Answer buttons are large enough to tap easily
- [ ] No horizontal scrolling required
- [ ] Progress bar visible
- [ ] Results screen is readable
- [ ] Pillar bars display correctly
- [ ] Email form fields are accessible
- [ ] Keyboard doesn't obscure form fields
- [ ] Form submission works
- [ ] Thank you screen displays properly

### Android Testing
- [ ] Website loads properly on Chrome Android
- [ ] All functionality works (same as iOS checks)
- [ ] No layout issues specific to Android

### Responsive Breakpoints
- [ ] Test at 375px width (iPhone SE)
- [ ] Test at 768px width (iPad)
- [ ] Test at 1024px width (Desktop)
- [ ] No layout breaks at any width

---

## Browser Compatibility (Recommended)

### Chrome
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth

### Safari
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth

### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth

### Edge
- [ ] All features work
- [ ] No console errors

---

## Performance Testing

- [ ] Page loads in < 3 seconds on 4G connection
- [ ] No flickering or layout shifts during load
- [ ] Animations are smooth (not janky)
- [ ] Logo loads quickly (image is optimized)
- [ ] No performance warnings in browser console

---

## Error Handling

### Network Errors
- [ ] Disconnect internet, try to submit form
- [ ] Error message displays (not blank screen)
- [ ] User can retry after reconnecting

### Invalid Form Data
- [ ] Try submitting with missing required fields
- [ ] Validation prevents submission
- [ ] Clear error indication shown

### SendGrid Errors
- [ ] Test with invalid API key (temporarily)
- [ ] Graceful error message displays
- [ ] User is informed to contact support

---

## Security Checks

- [ ] No sensitive data exposed in browser console
- [ ] No API keys visible in client-side code
- [ ] Form prevents basic XSS attempts
- [ ] HTTPS enabled (via Vercel)
- [ ] No mixed content warnings

---

## Content Review

### Text Accuracy
- [ ] All 24 questions display correctly (no typos)
- [ ] Pillar names are consistent
- [ ] Score descriptions are appropriate
- [ ] Email content matches submitted data
- [ ] Contact email is correct (shankar.ramamurthy@effilor.com)

### Brand Consistency
- [ ] Effilor purple color (#6B3D7A) used consistently
- [ ] Logo quality is professional (not pixelated)
- [ ] Typography is consistent
- [ ] Overall design matches Effilor brand

---

## Edge Cases

- [ ] Going back and changing answers updates score correctly
- [ ] Refreshing page mid-assessment asks to restart (acceptable)
- [ ] Multiple rapid clicks don't break navigation
- [ ] Very long organization names don't break layout
- [ ] Special characters in name/organization fields work
- [ ] International characters (é, ñ, etc.) work in form

---

## Load Testing (Optional but Recommended)

- [ ] Test with 5 simultaneous users
- [ ] All submissions arrive via email
- [ ] No performance degradation
- [ ] Vercel function doesn't timeout

---

## Final Sign-Off

### Project Lead Approval
- [ ] All critical tests passed
- [ ] Email delivery confirmed working
- [ ] Mobile experience acceptable
- [ ] Ready for production use

**Tested by:** ___________________

**Date:** ___________________

**Vercel URL:** ___________________

**Notes/Issues:**
```
[List any issues found or notes for future improvements]
```

---

## Post-Launch Monitoring

**First Week Checklist:**
- [ ] Monitor email delivery rate
- [ ] Check for user-reported issues
- [ ] Review Vercel analytics for errors
- [ ] Test assessment at least once more
- [ ] Verify all submissions arrive properly

---

## Known Limitations (Document these)

1. **Email spam folder:** SendGrid emails may initially go to spam
   - Solution: Domain authentication (optional, complex)
   - Workaround: Inform users to check spam

2. **Browser refresh:** Refreshing mid-assessment restarts
   - This is acceptable for assessment tools
   - No local storage to avoid privacy concerns

3. **Offline use:** Requires internet connection
   - Assessment won't work offline
   - This is expected and acceptable

---

## Emergency Contacts

**If critical issues found:**
- Technical support: shankar.ramamurthy@effilor.com
- Vercel dashboard: [Your Vercel project URL]
- GitHub repository: [Your repository URL]

---

**Testing Complete!** 🎉

Once all checkboxes are complete and sign-off obtained, the assessment is ready for production use and can be shared with target audience.
