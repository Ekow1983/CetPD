export interface Program {
  id: string;
  title: string;
  overview: string;
  modules: string[];
  objectives?: string[];
  targetGroup?: string[];
  progressionRoute?: string[];
  type: 'mastery' | 'short-course';
  imageUrl?: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'omaap',
    title: 'Office Management and Administrative Assistantship Programme (OMAAP)',
    overview: 'This programme is designed to help participants understand the important role and functions of today’s office, manage and handle information for maximum result, and develop skills to easily locate files and retrieve documents and records.',
    modules: ['Customer Care and Service Innovation', 'Understanding Office Procedures', 'Reception Management', 'Call Centre Management', 'Executive Assistantship', 'Filing and Records Management', 'Meeting Planning', 'Principles of Management', 'Office Management and Practices'],
    objectives: ['To equip participants with the skills and knowledge necessary to manage office operations effectively', 'Provide administrative support', 'Develop strong communication and interpersonal skills'],
    targetGroup: ['Office managers', 'Office clerks', 'Secretaries', 'Office assistants', 'Student secretaries', 'Front office executives', 'Entry-level job seekers', 'Supervisors', 'Sales executives', 'Executive or personal assistants'],
    progressionRoute: ['Certificate of Competence', 'Advanced Proficiency Certificate', 'Certified Trained Office Manager', 'Certified Trained Administrator'],
    type: 'mastery'
  },
  {
    id: 'auditing-tax',
    title: 'Auditing and Tax Accounting',
    overview: 'This programme is designed to equip practitioners with the techniques to detect and deter fraud, evaluate accounting systems, and understand tax administration and policy.',
    modules: ['Audit Planning', 'Auditing & Control', 'Financial Reporting', 'Corporate Governance', 'Managerial Economics', 'Business Law', 'Tax Administration', 'Tax Law'],
    objectives: ['To equip participants with the techniques and strategies necessary to detect and deter fraud', 'Evaluate accounting systems', 'Understand tax administration and policy'],
    targetGroup: ['Tax specialists', 'Tax managers', 'Tax advisors', 'Financial advisors', 'Investment and business consultants', 'Graduate accountants', 'External and internal auditors', 'Chief operating officers', 'Business owners'],
    progressionRoute: ['Executive Mastery Certificate', 'Executive Mastery Advanced Level', 'Mini Executive Master of Business Administration'],
    type: 'mastery'
  },
  {
    id: 'entrepreneurship-strategy',
    title: 'Entrepreneurship and Business Strategy',
    overview: 'This programme is designed to help students evaluate the business skills and commitment necessary to successfully operate an entrepreneurial venture and review the challenges and rewards of entrepreneurship.',
    modules: ['Fundamentals of Entrepreneurship', 'Generating Business Ideas', 'Conducting Feasibility Studies', 'Managing Emerging Trends', 'Business Plan Writing', 'Managing Innovation', 'Global Leadership', 'Business Financing'],
    objectives: ['To equip participants with the skills and knowledge necessary to start and manage a successful business', 'Develop a business plan', 'Understand entrepreneurship principles'],
    targetGroup: ['Business owners', 'Small business operators', 'Chief executive officers', 'Business starters', 'Recent graduates', 'NGOs', 'Marketers', 'Extra income seekers', 'Unemployed graduates'],
    progressionRoute: ['Executive Mastery Certificate', 'Executive Mastery Advanced Level', 'Mini Executive Master of Business Administration'],
    type: 'mastery'
  },
  {
    id: 'political-science',
    title: 'Political Science and Public Administration',
    overview: 'This programme is designed to prepare students to develop a better understanding of the functioning of government and the political, social, and economic processes.',
    modules: ['History and Economy of Ghana', 'Governance Systems', 'Power, Politics & Society', 'Foreign Policy Analysis', 'Fundamentals of Public Administration', 'Policy Formulation and Implementation', 'Administrative Law', 'Constitutional Fundamentals'],
    objectives: ['To equip participants with the knowledge and skills necessary to understand governance systems', 'Public administration', 'Policy formulation'],
    targetGroup: ['Civil servants', 'Public sector workers', 'Legal practitioners', 'Student lawyers', 'Incoming politicians', 'Politicians', 'Political campaign activists', 'Economic policy analysts'],
    progressionRoute: ['Executive Mastery Certificate', 'Executive Mastery Advanced Level', 'Mini Executive Master of Business Administration'],
    type: 'mastery'
  },
  {
    id: 'finance-investment',
    title: 'Finance and Investment Management',
    overview: 'This programme is designed to encourage participants to understand the fundamental concepts and tools of finance and evaluate the corporate governance structure of firms.',
    modules: ['Understanding Investment Concepts', 'Risks and Returns Management', 'Financial Markets Analysis', 'Bonds and Stocks Mechanisms', 'Corporate Finance', 'Project Finance', 'Mortgage Finance', 'International Trade and Business Finance'],
    objectives: ['To equip participants with the knowledge and skills necessary to understand finance principles', 'Investment alternatives', 'Financial markets'],
    targetGroup: ['Finance managers', 'Accountants', 'Financial analysts', 'Brokers', 'Credit officers', 'Bankers', 'Insurers', 'Estate developers', 'Mortgage specialists', 'Finance graduates'],
    progressionRoute: ['Executive Mastery Certificate', 'Executive Mastery Advanced Level', 'Mini Executive Master of Business Administration'],
    type: 'mastery'
  },
  {
    id: 'project-management-leadership',
    title: 'Project Management and Global Leadership',
    overview: 'This programme is designed to provide participants with a broad understanding of the project management principles, concepts, tools, and techniques applied across the organization.',
    modules: ['Project Scope Management', 'Project Time Management', 'Project HR Management', 'Project Communication Management', 'Project Procurement Management', 'Project Quality Management', 'Project Cost Management', 'Global Leadership'],
    objectives: ['Provide participants with a broad understanding of project management principles', 'Apply tools and techniques across organizations'],
    targetGroup: ['Project Managers', 'Team Leaders', 'Business Executives', 'Operations Managers'],
    progressionRoute: ['Executive Mastery Certificate', 'Executive Mastery Advanced Level', 'Mini Executive Master of Business Administration'],
    type: 'mastery'
  },
  {
    id: 'psychology-christian-leadership',
    title: 'Psychology and Christian Leadership',
    overview: 'This programme is designed to help participants explore the field of psychology within the context of a Christian worldview, gain a solid understanding of human psychological development, and acquire foundational skills to counsel and assist people with personal and interpersonal needs.',
    modules: ['Social Psychology', 'Development Psychology', 'Personality Psychology', 'Christian Leadership', 'Psychology and Christian Counseling', 'Missions and Outreach', 'Principles of Ministry', 'Purpose, Plan, and Pursuit'],
    objectives: ['Acquire skills necessary to serve in the capacity of a Minister', 'Demonstrate qualities of Servant Leadership', 'Assess and critically evaluate the qualities and functions of the leader in a Christian Organization', 'Develop and apply credible models for healthy Christian Ministries', 'Identify and use variety of alternative leadership styles'],
    targetGroup: ['Pastors', 'Counselors', 'Ministers', 'Christian Leaders', 'Church Workers', 'Apostles', 'Teachers', 'Evangelists', 'Prophets', 'Church Administrators', 'Deacons and Deaconesses', 'Elders'],
    progressionRoute: ['Executive Mastery Certificate', 'Executive Mastery Advanced Level', 'Mini EMBA Level'],
    type: 'mastery'
  },
  {
    id: 'strategic-communication',
    title: 'Strategic Communication and Media Studies',
    overview: 'This programme is designed to help participants create strategic communication campaigns, tell compelling stories through creative messaging, and understand the key factors in persuasive communication.',
    modules: ['Fundamentals of Strategic Communication', 'Media Law and Ethics', 'Social Media Communication', 'Political Communication', 'Communication and Crisis Management', 'Cross-Cultural Communication', 'Integrated Marketing Communication', 'Communication and The Media'],
    objectives: ['Create strategic communication campaigns', 'Integrate social media strategies with traditional methods', 'Understand international approaches to communication', 'Examine crisis communication messaging', 'Explore messaging strategies for social or political causes'],
    targetGroup: ['Communication Managers', 'Politicians', 'Public Relations Officers', 'Marketers', 'Advertisers', 'Journalists', 'Presenters', 'Corporate Communication Directors'],
    progressionRoute: ['Executive Mastery Certificate', 'Executive Mastery Advanced Level', 'Mini EMBA Level'],
    type: 'mastery'
  },
  {
    id: 'strategic-management',
    title: 'Strategic Management and Corporate Leadership',
    overview: 'This programme is designed to update working professionals and managers on contemporary management practices and provide firmer managerial competence and further knowledge in corporate leadership.',
    modules: ['Corporate Leadership', 'Human Relations and Organizational Behaviour', 'Change Management', 'Corporate Governance', 'Management and Strategy', 'Organizational Development', 'Strategic HR Management', 'Principles of Labour Law'],
    objectives: ['Update working professionals on contemporary management practices', 'Provide firmer managerial competence', 'Create capacity for managerial positions'],
    targetGroup: ['Managers', 'Heads of Departments', 'Project Managers', 'Chief Operating Officers', 'Human Resource Managers', 'Management Consultants'],
    progressionRoute: ['Executive Mastery Certificate', 'Executive Mastery Advanced Level', 'Mini EMBA Level'],
    type: 'mastery'
  },
  {
    id: 'strategic-marketing',
    title: 'Strategic Marketing and Business Development',
    overview: 'This programme focuses on how to develop competitive advantage through the drivers of shareholder value and delivering value to your business.',
    modules: ['Marketing Principles', 'Dynamics of Marketing Environment', 'Strategic Service Marketing', 'Managing Customer Relations', 'Digital Marketing and Social Media', 'Brand Management', 'Global Marketing', 'Business Development and Strategy'],
    objectives: ['Analyse and understand customer needs', 'Determine strengths and weaknesses of competitors', 'Identify business shifts', 'Assess economic impact of social media'],
    targetGroup: ['Marketing Managers', 'Business Executives', 'Chief Operating Officers', 'Sales Territory Managers', 'Sales Executives', 'Recent Graduates'],
    progressionRoute: ['Executive Mastery Certificate'],
    type: 'mastery'
  },
  // Short Courses
  {
    id: 'business-management-admin',
    title: 'Executive Certificate in Business Management and Administration',
    overview: 'Gain a competitive edge by learning core Business Management strategies and skills from successful professionals in leading organization.',
    modules: ['Modern Concepts In Management and Administration', 'Organizational Behaviour', 'Strategic Planning', 'Professional Ethics in Business', 'Organizational Development', 'Managing Organizational Change', 'Managerial & Organizational Communication', 'Financial Management'],
    type: 'short-course'
  },
  {
    id: 'cashiers-frontline',
    title: 'Executive Certificate Cashiers and Frontline Executive',
    overview: 'Strategic role of Cashiers & Frontline Executives in Banking and service delivery.',
    modules: ['Strategic role of Cashiers & Frontline Executives in Banking', 'Basic Teller Operations', 'Current Approach to Payment System Management', 'Regulatory Compliance for Tellers', 'Revitalizing Customer Service', 'Ethical Issues in Banking'],
    type: 'short-course'
  },
  {
    id: 'coaching-mentoring',
    title: 'Executive Certificate in Coaching and Mentoring',
    overview: 'Developing effective coaching and mentoring skills for leadership and management.',
    modules: ['Coaching and Mentoring Techniques', 'Coaching and Mentoring Management & Leadership', 'Designing and Operating an Effective Coaching and Mentoring Programme'],
    type: 'short-course'
  },
  {
    id: 'computerised-accounting',
    title: 'Executive Certificate in Computerised Accounting System',
    overview: 'Mastering modern accounting tools and information systems.',
    modules: ['Introduction to Accounting and Book Keeping', 'Spreadsheet Accounting Using Microsoft Excel', 'Accounting Information Systems Design and Implementation', 'Introduction to Tally Financial Application', 'Computer Systems and Controls'],
    type: 'short-course'
  },
  {
    id: 'credit-risk-analysis',
    title: 'Executive Certificate in Credit Risk and Analysis',
    overview: 'Comprehensive overview of credit analysis and lending processes.',
    modules: ['Overview of Credit Analysis', 'Lending Process', 'Financial Statement Analysis', 'Non Financial Analysis', 'Asset Classification', 'Borrowing Causes', 'Consumer Installment Lending', 'Accounts Receivable Lending', 'Letter of Credit'],
    type: 'short-course'
  },
  {
    id: 'customer-service-mgmt',
    title: 'Executive Certificate in Customer Service Management',
    overview: 'Developing working relationships and solving problems for customers.',
    modules: ['Introduction to Customer service', 'Maintaining Reliable Customer Service', 'Communicating with Customers', 'Developing Working Relationships', 'Solving Problems on Behalf of Customers', 'Initiating & Evaluating Change'],
    type: 'short-course'
  },
  {
    id: 'database-admin',
    title: 'Executive Certificate in Database Administration',
    overview: 'Installing, configuring and managing Oracle databases.',
    modules: ['Installing Oracle and Building the Database', 'Oracle Enterprise Management', 'Configuring the Network Environment', 'Managing Database Storage Structure', 'Administering Users and Security', 'Performing Backup and Recovery', 'Monitoring the Database'],
    type: 'short-course'
  },
  {
    id: 'database-design-mgmt',
    title: 'Executive Certificate in Database Design and Management',
    overview: 'Database design and management using Microsoft Access.',
    modules: ['Creating tables and Forms', 'Entering Data into Tables', 'Queries and Report from the Database', 'Using forms to calculate', 'Working with macros', 'Designing a complete database system'],
    type: 'short-course'
  },
  {
    id: 'digital-marketing-cert',
    title: 'Executive Certificate in Digital Marketing',
    overview: 'Understanding social media concepts, mobile marketing and business engagement.',
    modules: ['Understanding Social Media', 'Principles of Social Media Marketing', 'Advantages for Business Engagement', 'Understanding Mobile Marketing', 'Creative ways to use Social Media', 'Application across Various Industries'],
    type: 'short-course'
  },
  {
    id: 'early-childhood-care',
    title: 'Executive Certificate in Early Childhood Care and Education',
    overview: 'Introduction to early childhood care, child growth and development.',
    modules: ['Introduction to ECCE', 'Child Growth and Development', 'Health, Safety and Nutrition', 'Curriculum and Assessment', 'Interpersonal Relations', 'Creative Activities', 'Guidance and Classroom Management', 'First Aid for Children'],
    type: 'short-course'
  },
  {
    id: 'educational-leadership',
    title: 'Executive Certificate in Educational Leadership and Management',
    overview: 'Leadership, policy and strategy in the educational sector.',
    modules: ['Leadership in Education', 'Education Policy and Strategy', 'Human Resource in Education', 'Organisational Theory in Education', 'Development issues in Educational Leadership'],
    type: 'short-course'
  },
  {
    id: 'entrepreneurship-cert',
    title: 'Executive Certificate in Entrepreneurship',
    overview: 'Contemporary entrepreneurship and small business management.',
    modules: ['Contemporary Entrepreneurship', 'Small Business Management', 'Consulting and Business Advice', 'Entrepreneur Financial management'],
    type: 'short-course'
  },
  {
    id: 'healthcare-admin',
    title: 'Executive Certificate in Healthcare Administration',
    overview: 'Healthcare planning, policy and finance management.',
    modules: ['Healthcare Planning and Policy', 'Healthcare Finance Management', 'Principles of Quality Management', 'Healthcare Administration'],
    type: 'short-course'
  },
  {
    id: 'hrm-cert',
    title: 'Executive Certificate in Human Resource Management',
    overview: 'Overview of HRM, strategic policies and conflict resolution.',
    modules: ['Overview of HRM', 'Executing Strategic HR Policies', 'Performance Management & Appraisals', 'Employment and Human Rights Law', 'Resolving Conflict', 'Health and Safety', 'HR Acquisition Strategies', 'Organizational Behaviour'],
    type: 'short-course'
  },
  {
    id: 'it-service-mgmt',
    title: 'Executive Certificate in I.T. Service Management',
    overview: 'I.T. service strategy, design, transition and operation.',
    modules: ['Information Technology Service Strategy', 'Service Design', 'Service Transition', 'Service Operation', 'Continual Service Improvement'],
    type: 'short-course'
  },
  {
    id: 'it-audit',
    title: 'Executive Certificate in Information Technology Audit',
    overview: 'Evaluating information systems control and security.',
    modules: ['General Audit Concept', 'Information Technology Methods', 'Evaluating Information Systems Control', 'Evaluating application Control', 'General Information Security Controls', 'Enterprise Resource Management'],
    type: 'short-course'
  },
  {
    id: 'insurance-mgmt',
    title: 'Executive Certificate in Insurance Management',
    overview: 'Principles and practice of management in insurance.',
    modules: ['Principles and Practice of Management in Insurance', 'Risk and Insurance', 'Commercial Law', 'Contract Law and Insurance', 'Public Relation', 'Life Assurance Practice and Administration'],
    type: 'short-course'
  },
  {
    id: 'international-business',
    title: 'Executive Certificate in International Business',
    overview: 'International trade, investment and business strategy.',
    modules: ['International Trade & Investment', 'International Business Environment', 'International Business Strategy', 'The Multinational Corporation'],
    type: 'short-course'
  },
  {
    id: 'journalism-media',
    title: 'Executive Certificate in Journalism and Media Studies',
    overview: 'Broadcast journalism, sub editing and media ethics.',
    modules: ['Broadcast Journalism', 'Sub Editing', 'Feature Writing', 'Newspaper Reporting', 'Media Law and Ethics', 'Business Communication', 'Public Relations'],
    type: 'short-course'
  },
  {
    id: 'logistics-transport',
    title: 'Executive Certificate in Logistics & Transport Management',
    overview: 'Introduction to logistics, transport law and supply chain management.',
    modules: ['Introduction to Logistics and Transport', 'Transportation Law and Policy', 'Supply Chain Management', 'International Trade and Logistics', 'Management of Transportation Systems', 'Procurement Process'],
    type: 'short-course'
  },
  {
    id: 'marketing-sales',
    title: 'Executive Certificate in Marketing and Sales Management',
    overview: 'Principles and practice of marketing and selling.',
    modules: ['Principles and Practice of Marketing', 'Marketing Strategy', 'Strategic Marketing Management', 'Marketing Research', 'Integrated Marketing', 'Consumer Behaviour', 'Principles and Practice of Selling', 'Sales Management'],
    type: 'short-course'
  },
  {
    id: 'research-cert',
    title: 'Executive Certificate in Marketing, Social & Organisational Research',
    overview: 'Introduction to research design, statistics and data handling.',
    modules: ['Introduction to Research', 'General Research Design', 'Statistics and Data Handling', 'Qualitative and Quantitative Research', 'Reporting Research Findings'],
    type: 'short-course'
  },
  {
    id: 'micro-finance',
    title: 'Executive Certificate in Micro-Finance Management',
    overview: 'Corporate governance and principles of microfinance management.',
    modules: ['Corporate Governance in Microfinance', 'Principles and Practices', 'Legal Environment', 'Microfinance Market Research', 'Introduction to Risk Management'],
    type: 'short-course'
  },
  {
    id: 'ms-office',
    title: 'Executive Certificate in Microsoft Office Professional',
    overview: 'Mastering Word, Excel, PowerPoint, Access and Publisher.',
    modules: ['File Management', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Access', 'Microsoft Publisher'],
    type: 'short-course'
  },
  {
    id: 'ngo-mgmt',
    title: 'Executive Certificate in Non Governmental Organisation Management',
    overview: 'Issues and case studies in NGO management and fundraising.',
    modules: ['Issues and Case Studies', 'Fund Raising Essentials', 'Proposal and Report Writing', 'NGO Management', 'Marketing Strategy for NGOs'],
    type: 'short-course'
  },
  {
    id: 'office-mgmt-secretaryship',
    title: 'Executive Certificate in Office Management & Secretaryship',
    overview: 'Responsibilities and roles of the office manager and secretary.',
    modules: ['Responsibilities & Roles', 'Communications Skills', 'Time, Organizing & Stress Management', 'Managing Your Boss', 'Organizing Meetings and Events', 'Effective Presentation Skills'],
    type: 'short-course'
  },
  {
    id: 'oil-gas-mgmt',
    title: 'Executive Certificate in Oil and Gas Management',
    overview: 'Introduction to petroleum geology, exploration and production.',
    modules: ['Introduction to petroleum geology', 'Petroleum Exploration Studies', 'Well Drilling and testing', 'Well completion', 'Offshore drilling and production', 'Occupational health risks'],
    type: 'short-course'
  },
  {
    id: 'org-leadership-dev',
    title: 'Executive Certificate in Organisational Leadership and Development',
    overview: 'Leadership principles, supervision and team building.',
    modules: ['Human Resource management', 'Leadership Principles & Practices', 'Supervision and Team Building', 'Organisational Behaviour Dynamics', 'Organisational Leadership', 'Project Management Essential'],
    type: 'short-course'
  },
  {
    id: 'procurement-contract',
    title: 'Executive Certificate in Procurement & Contract Management',
    overview: 'Procurement planning, budgeting and negotiation of contracts.',
    modules: ['Procurement Planning & Budgeting', 'Negotiation of Contracts', 'Preparation of Tender Documents', 'Standard Request for Proposals', 'Cost and Price Analysis'],
    type: 'short-course'
  },
  {
    id: 'monitoring-evaluation',
    title: 'Executive Certificate in Professional Monitoring & Evaluation',
    overview: 'Lifecycle of M&E, designing tools and managing stakeholders.',
    modules: ['Introduction to Monitoring & Evaluation', 'The Monitoring & Evaluation Lifecycle', 'Designing & Using Monitoring tools', 'Gathering Requirements', 'Managing stakeholders', 'Planning and outcome Evaluation'],
    type: 'short-course'
  },
  {
    id: 'project-mgmt-cert',
    title: 'Executive Certificate in Project Management',
    overview: 'Comprehensive project management from scope to quality.',
    modules: ['Introduction to project management', 'Project Scope management', 'Project Cost Management', 'Project Time management', 'Project Communication Management', 'Project Risk Management', 'Project Quality Management'],
    type: 'short-course'
  },
  {
    id: 'public-relations-cert',
    title: 'Executive Certificate in Public Relations',
    overview: 'Strategic planning, image management and crisis communications.',
    modules: ['Introduction to Public Relations', 'Public Relations Ethics and Laws', 'Strategic Planning & PR Campaigns', 'Image Management', 'Media Relations', 'Crisis & Internal Communications'],
    type: 'short-course'
  },
  {
    id: 'quantitative-analysis',
    title: 'Executive Certificate in Quantitative Analysis',
    overview: 'Probability, sampling methods and statistical models.',
    modules: ['Introduction to Probability', 'Probability Distributions', 'Sampling Methods', 'Estimation', 'Hypothesis testing', 'Chi-square', 'Regression Models/Correlation'],
    type: 'short-course'
  },
  {
    id: 'school-admin',
    title: 'Executive Certificate in School Administration',
    overview: 'Modern concepts in school administration and educational leadership.',
    modules: ['Modern Concept in School Administration', 'Educational Leadership', 'School Structure, Policies and Procedures', 'Financial Management', 'Modern Teaching Methodologies', 'School Marketing and Branding'],
    type: 'short-course'
  },
  {
    id: 'security-risk-mgmt',
    title: 'Executive Certificate in Security and Risk Management',
    overview: 'Managing risk, crime prevention and security operations.',
    modules: ['Managing Risk and Security', 'Crime and Crime Prevention', 'Managing Security in the Workplace', 'Law, Procedures and Security Management', 'Coordinate Security Operations', 'Security Risk Management Plan'],
    type: 'short-course'
  },
  {
    id: 'stores-materials-mgmt',
    title: 'Executive Certificate in Stores & Materials Management',
    overview: 'Stores management, stock control and inventory management.',
    modules: ['Stores Management and Administration', 'Stock Control & Inventory Management', 'Packaging and Distribution Management', 'I.T. Aspect of Supplies', 'Import and Export Management'],
    type: 'short-course'
  }
];
