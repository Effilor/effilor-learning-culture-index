const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
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
    const { name, email, company, role, phone, answers, timestamp } = req.body;

    if (!name || !email || !company || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const questions = [
      { pillar: 'Learning Infrastructure' },
      { pillar: 'Learning Infrastructure' },
      { pillar: 'Learning Infrastructure' },
      { pillar: 'Learning Infrastructure' },
      { pillar: 'Learning Infrastructure' },
      { pillar: 'Learning Infrastructure' },
      { pillar: 'Learning Support' },
      { pillar: 'Learning Support' },
      { pillar: 'Learning Support' },
      { pillar: 'Learning Support' },
      { pillar: 'Learning Support' },
      { pillar: 'Learning Support' },
      { pillar: 'Learning Culture' },
      { pillar: 'Learning Culture' },
      { pillar: 'Learning Culture' },
      { pillar: 'Learning Culture' },
      { pillar: 'Learning Culture' },
      { pillar: 'Learning Culture' },
      { pillar: 'Learning Impact' },
      { pillar: 'Learning Impact' },
      { pillar: 'Learning Impact' },
      { pillar: 'Learning Impact' },
      { pillar: 'Learning Impact' },
      { pillar: 'Learning Impact' }
    ];

    const totalScore = answers.reduce((sum, val) => sum + (val || 0), 0);

    const pillarScores = {
      'Learning Infrastructure': 0,
      'Learning Support': 0,
      'Learning Culture': 0,
      'Learning Impact': 0
    };

    answers.forEach((answer, index) => {
      if (answer && questions[index]) {
        pillarScores[questions[index].pillar] += answer;
      }
    });

    let scoreLevel;
    if (totalScore <= 56) {
      scoreLevel = "Transactional Learning";
    } else if (totalScore <= 88) {
      scoreLevel = "Inconsistent Learning Culture";
    } else {
      scoreLevel = "Systematic Learning Culture";
    }

    const pillarScoresText = Object.entries(pillarScores)
      .map(([pillar, score]) => `${pillar}: ${score}/30 (${Math.round((score / 30) * 100)}%)`)
      .join('\n');

    const fullQuestions = [
      // Learning Infrastructure
      'We conduct structured skill gap analyses at least twice a year for all employees',
      'Learning pathways are clearly defined and aligned to specific career progression routes',
      'Employees have easy access to learning resources without requiring multiple approvals or budget justifications',
      'Employees can access learning resources in the flow of work (microlearning, job aids, digital platforms) not just through scheduled programs',
      'Individual development plans are created during performance reviews and tracked quarterly',
      'We maintain a catalog of required competencies for each role level across the organization',
      // Learning Support
      'Managers dedicate at least one 1:1 meeting per quarter to discuss each employee\'s learning goals',
      'Employees have protected time to pursue learning without sacrificing their core deliverables',
      'Manager performance evaluations include their team\'s development and capability growth as a metric',
      'We provide formal mentorship programs pairing experienced professionals with developing employees',
      'Employees can experiment with new approaches without fear of negative consequences for honest failures',
      'Learning budgets are allocated per employee and refreshed annually, not treated as discretionary spending',
      // Learning Culture
      'Leadership team members visibly participate in learning programs alongside employees',
      'We have regular forums where teams present learnings from projects or training to their peers',
      'Employees who apply new skills are given opportunities to use them in meaningful work assignments',
      'Learning achievements are recognized in town halls, newsletters, or team meetings at least quarterly',
      'We have active mechanisms for peer-to-peer learning (communities of practice, digital knowledge sharing, collaborative platforms) beyond formal training',
      'Our senior leaders regularly discuss their own learning journeys publicly to model continuous development',
      // Learning Impact
      'We conduct structured follow-up interviews 60-90 days post-training to document specific instances of skill application with measurable business impact',
      'When employees are promoted or achieve significant wins, we document whether learning programs contributed',
      'We track capability growth for teams over 12-month periods using concrete performance indicators and observable skill improvements',
      'Learning impact data is presented to leadership at least twice a year with specific business examples',
      'We compare performance metrics before and after major learning interventions using control groups or baseline measurements',
      'We maintain a database of learning impact cases with quantified business metrics (revenue, cost savings, efficiency gains) that leadership references in planning discussions'
    ];

    const answerLabels = ['', 'Strongly Disagree', 'Disagree', 'Neutral/Sometimes', 'Agree', 'Strongly Agree'];

    const answersText = fullQuestions.map((questionText, index) => {
      const answerValue = answers[index] || 0;
      const pillar = questions[index].pillar;
      return `Q${index + 1} [${pillar}]: ${questionText}\nAnswer: ${answerLabels[answerValue]} (${answerValue} point${answerValue !== 1 ? 's' : ''})`;
    }).join('\n\n');

    const emailContent = `
NEW ORGANIZATIONAL LEARNING CULTURE INDEX SUBMISSION
=====================================================

CONTACT INFORMATION:
--------------------
Name: ${name}
Email: ${email}
Organization: ${company}
Role: ${role}
Phone: ${phone || 'Not provided'}
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
${JSON.stringify({ name, email, company, role, phone, totalScore, scoreLevel, pillarScores, answers, timestamp }, null, 2)}

=====================================================
This submission was generated automatically from the Organizational Learning Culture Index assessment.
    `.trim();

    const msg = {
      to: 'shankar.ramamurthy@effilor.com',
      from: 'shankar.ramamurthy@effilor.com',
      subject: `New Learning Culture Index Submission - ${company}`,
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
