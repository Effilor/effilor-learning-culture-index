# Organizational Learning Culture Index

A professional assessment tool for L&D leaders to evaluate their organization's learning culture across four critical dimensions.

## Overview

This lead magnet helps L&D Leaders, CHROs, and Heads of Talent Development assess their organization's capability to enable, support, sustain, and capture value from learning.

### What It Measures

**24 questions across 4 pillars:**

1. **Learning Infrastructure** - Systematic enablement of learning
2. **Learning Support** - Active managerial support for development
3. **Learning Culture** - Organizational values and recognition
4. **Learning Impact** - Systems to capture and leverage learning insights

### Assessment Experience

- **8-10 minutes** to complete
- **24 behavioral questions** with 5-point scale
- **Instant results** with detailed breakdown
- **Optional email capture** for comprehensive report

## Technology Stack

- **Frontend**: Single HTML file with embedded CSS/JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Backend**: Vercel Serverless Functions
- **Email**: SendGrid
- **Deployment**: Vercel (auto-deploy from GitHub)

## File Structure

```
organizational-learning-culture-index/
├── index.html              # Main assessment (single file)
├── effilor-logo.jpg        # Logo image (~180KB)
├── api/
│   └── send-email.js       # Vercel serverless function
├── README.md               # This file
├── QUICK_START.md          # Deployment guide
└── TESTING_CHECKLIST.md    # QA protocol
```

## Features

### Professional Design
- Effilor branding with purple (#6B3D7A) color scheme
- Elegant serif headings (Playfair Display)
- Clean, professional layout
- Mobile-responsive
- Smooth animations

### User Experience
- Welcome screen with clear value proposition
- Progress indicator
- One question at a time with auto-advance
- Previous button for navigation
- Instant results visualization
- Optional email capture (not required to see results)

### Lead Capture
- All submissions sent to: shankar.ramamurthy@effilor.com
- Required fields: Name, Email, Organization, Role
- Optional field: Phone Number
- Complete assessment data included in email

### Results Display
- Overall score (0-120 points)
- Three score levels with diagnostic feedback
- Pillar breakdown with visual bars
- Top Strength and Priority Area highlighted
- Clear CTA for detailed report

## Scoring Logic

**Response Scale:**
- Strongly Disagree = 1 point
- Disagree = 2 points
- Neutral/Sometimes = 3 points
- Agree = 4 points
- Strongly Agree = 5 points

**Score Ranges:**
- **24-56**: Transactional Learning
- **57-88**: Inconsistent Learning Culture
- **89-120**: Systematic Learning Culture

## Deployment

See [QUICK_START.md](QUICK_START.md) for step-by-step deployment instructions.

**Quick Overview:**
1. Create GitHub repository
2. Upload all files
3. Connect to Vercel
4. Add SendGrid API key to Vercel environment variables
5. Deploy
6. Test end-to-end

## Testing

See [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md) for comprehensive QA protocol.

**Critical Tests:**
- Logo displays correctly
- All 24 questions work
- Scoring calculates accurately
- Email actually arrives (check inbox AND spam)
- Mobile responsive verified
- Form submission works end-to-end

## Configuration

### Environment Variables (Vercel)

```
SENDGRID_API_KEY=SG.your_api_key_here
```

**Important:** Must be set for all environments (Production, Preview, Development) and requires redeployment after adding.

### SendGrid Setup

1. Create SendGrid account
2. Verify sender email (shankar.ramamurthy@effilor.com)
3. Create API key with "Mail Send" permission
4. Add to Vercel environment variables

## Support

For questions or issues:
- **Email**: shankar.ramamurthy@effilor.com
- **Assessment Type**: Organizational Learning Culture
- **Version**: 1.0

## License

© 2025 Effilor Consulting Services. All rights reserved.

---

**Built for Effilor Consulting Services**
Professional learning culture assessment for L&D leaders
