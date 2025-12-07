const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, role, phone, totalScore, pillarScores, answers, timestamp } = req.body;

    // Validate required fields
    if (!name || !email || !organization || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Determine score level
    let scoreLevel;
    if (totalScore <= 56) {
      scoreLevel = "Transactional Learning";
    } else if (totalScore <= 88) {
      scoreLevel = "Inconsistent Learning Culture";
    } else {
      scoreLevel = "Systematic Learning Culture";
    }

    // Format pillar scores
    const pillarScoresText = pillarScores.map(p => 
      `${p.name}: ${p.score}/30 (${Math.round((p.score / 30) * 100)}%)`
    ).join('\n');

    // Format individual answers
    const PILLARS = [
      {
        name: "Learning Infrastructure",
        questions: [
          "We conduct structured skill gap analyses at least twice a year for all employees",
          "Learning pathways are clearly defined and aligned to specific career progression routes",
          "Employees have easy access to learning resources without requiring multiple approvals or budget justifications",
          "Learning opportunities are systematically communicated through established channels, not shared informally",
          "Individual development plans are created during performance reviews and tracked quarterly",
          "We maintain a catalog of required competencies for each role level across the organization"
        ]
      },
      {
        name: "Learning Support",
        questions: [
          "Managers dedicate at least one 1:1 meeting per quarter to discuss each employee's learning goals",
          "Employees have protected time to pursue learning without sacrificing their core deliverables",
          "Manager performance evaluations include their team's development and capability growth as a metric",
          "We provide formal mentorship programs pairing experienced professionals with developing employees",
          "Employees can experiment with new approaches without fear of negative consequences for honest failures",
          "Learning budgets are allocated per employee and refreshed annually, not treated as discretionary spending"
        ]
      },
      {
        name: "Learning Culture",
        questions: [
          "Leadership team members visibly participate in learning programs alongside employees",
          "We have regular forums where teams present learnings from projects or training to their peers",
          "Employees who apply new skills are given opportunities to use them in meaningful work assignments",
          "Learning achievements are recognized in town halls, newsletters, or team meetings at least quarterly",
          "Cross-functional knowledge sharing happens through structured channels, not just informal conversations",
          "Our senior leaders regularly discuss their own learning journeys publicly to model continuous development"
        ]
      },
      {
        name: "Learning Impact",
        questions: [
          "We systematically collect feedback from learners on how they've applied new skills within 90 days of training",
          "When employees are promoted or achieve significant wins, we document whether learning programs contributed",
          "We track capability growth for teams over 12-month periods using observable performance indicators",
          "Learning impact data is presented to leadership at least twice a year with specific business examples",
          "We compare performance metrics before and after major learning interventions to measure effectiveness",
          "Success stories linking learning to business outcomes are documented and shared across the organization"
        ]
      }
    ];

    const answerLabels = ['', 'Strongly Disagree', 'Disagree', 'Neutral/Sometimes', 'Agree', 'Strongly Agree'];
    
    let allQuestions = [];
    PILLARS.forEach((pillar, pillarIndex) => {
      pillar.questions.forEach((question, qIndex) => {
        allQuestions.push({
          pillarName: pillar.name,
          questionText: question
        });
      });
    });

    const answersText = allQuestions.map((q, index) => {
      const answerValue = answers[index] || 0;
      return `Q${index + 1} [${q.pillarName}]: ${q.questionText}\nAnswer: ${answerLabels[answerValue]} (${answerValue} point${answerValue !== 1 ? 's' : ''})`;
    }).join('\n\n');

    // Email content
    const emailContent = `
NEW ORGANIZATIONAL LEARNING CULTURE INDEX SUBMISSION
=====================================================

CONTACT INFORMATION:
--------------------
Name: ${name}
Email: ${email}
Organization: ${organization}
Role: ${role}
Phone: ${phone}
Submission Time: ${new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

ASSESSMENT RESULTS:
-------------------
Total Score: ${totalScore}/120 points
Score Level: ${scoreLevel}

PILLAR SCORES:
--------------
${pillarScoresText}

INDIVIDUAL QUESTION RESPONSES:
------------------------------
${answersText}

JSON DATA:
----------
${JSON.stringify({ name, email, organization, role, phone, totalScore, scoreLevel, pillarScores, answers, timestamp }, null, 2)}

=====================================================
This submission was generated automatically from the Organizational Learning Culture Index assessment.
    `.trim();

    const msg = {
      to: 'shankar.ramamurthy@effilor.com',
      from: 'shankar.ramamurthy@effilor.com', // Must be verified in SendGrid
      subject: `New Learning Culture Index Submission - ${organization}`,
      text: emailContent,
    };

    await sgMail.send(msg);

    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error:', error);
    
    if (error.response) {
      console.error('SendGrid Error:', error.response.body);
    }
    
    return res.status(500).json({ 
      error: 'Failed to submit form',
      details: error.message 
    });
  }
};
