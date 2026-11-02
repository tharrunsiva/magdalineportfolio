/**
 * CENTRALIZED PORTFOLIO DATA FOR MAGDALINE BLESSY R
 * 
 * Verified against official resume:
 * - Degree: B.Sc. Computer Science with Data Analytics (SRCW, Coimbatore - 86%)
 * - Internships: Adroit Technologies (ML) & AuroiTech (Data Analyst)
 * - Projects: AI Waste Management, Resume Screening, IBM Cannibalization Dashboard,
 *             Dhrishti Pre-Registration Analysis, Insurance Premium Prediction
 * - Certifications: IBM, GUVI, NPTEL, CRUZZE
 * - Achievements: HackAce 2026 Winner, IBM ThinkFest National Finalist, Paper Presentation Winner
 */

import heroPortrait from '../assets/images/hero-portrait-sample.jpg';
import aboutWorkspace from '../assets/images/about-workspace-sample.jpg';
import projectSample1 from '../assets/images/project-sample-1.jpg';
import projectSample2 from '../assets/images/project-sample-2.jpg';
import projectSample3 from '../assets/images/project-sample-3.jpg';

export const portfolioData = {
  // Section Visibility Controls
  sectionVisibility: {
    hero: true,
    about: true,
    skills: true,
    projects: true,
    education: true,
    experience: true,
    certifications: true,
    contact: true,
  },

  // Personal Branding & Identity
  personal: {
    name: "Magdaline Blessy R",
    monogram: "MB",
    greeting: "HELLO, I'M",
    title: "Computer Science with Data Analytics Undergraduate",
    motto: "ANALYZE • PREDICT • IMPACT",
    tagline: "Exploring data-driven solutions, engineering machine learning models, and turning analytics into real-world impact.",
    bio: "Motivated undergraduate student specializing in Computer Science with Data Analytics, with a strong interest in data-driven problem solving, predictive modeling, and business intelligence.",
    
    // Replaceable hero photograph (kept as placeholder until Magdaline uploads her photo)
    heroImage: heroPortrait,
    isPlaceholderPhoto: true,
    photoNotice: "Sample reference portrait. Magdaline can easily upload her confirmed photo in src/data/portfolioData.js",
    
    // Primary Call to Action buttons
    cta: {
      primary: {
        text: "Explore My Projects",
        href: "#projects",
      },
      secondary: {
        text: "Get In Touch",
        href: "#contact",
      },
      resume: {
        text: "Download Resume",
        href: "/resume.pdf",
        download: "Magdaline_Blessy_Resume.pdf",
      },
    },
    
    // Resume File Configuration (Stored in public/ folder)
    resumeUrl: "/resume.pdf",
    resumeFilename: "Magdaline_Blessy_Resume.pdf",
    
    // Status badge
    status: {
      available: true,
      label: "Open to Data Analytics & ML Internships",
    },
  },

  // Social & Professional Profiles
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      ariaLabel: "Magdaline Blessy LinkedIn Profile",
      iconType: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      ariaLabel: "Magdaline Blessy GitHub Profile",
      iconType: "github",
    },
    {
      name: "Email",
      url: "mailto:241cd024@srcw.ac.in",
      ariaLabel: "Send Email to Magdaline Blessy",
      iconType: "email",
    },
  ],

  // About Me Section (Based on Profile Summary)
  about: {
    heading: "Profile Summary",
    label: "ABOUT MAGDALINE BLESSY R",
    lead: "Motivated undergraduate student specializing in Computer Science with Data Analytics at Sri Ramakrishna College of Arts & Science for Women, with a strong interest in data-driven problem solving.",
    detailedBio: "Experienced in data analysis tools and currently building real-world machine learning solutions. With proven ability to work in team environments, demonstrate leadership, and communicate effectively, I actively seek opportunities to apply analytical skills and contribute to impactful solutions. My journey bridges predictive algorithms, deep data insights, and collaborative leadership.",
    supportingImage: aboutWorkspace,
    
    // Three core capability pillars from resume
    features: [
      {
        id: "data-analytics",
        title: "Data Analytics & BI",
        description: "Experienced in exploratory data analysis, cleaning, KPI reporting, and dashboard creation using Power BI, Microsoft Excel, and SQL.",
        iconType: "creative",
      },
      {
        id: "machine-learning",
        title: "Machine Learning & AI",
        description: "Developing end-to-end predictive pipelines, regression models, route optimization algorithms, and Flask-based web applications.",
        iconType: "puzzle",
      },
      {
        id: "leadership-teamwork",
        title: "Leadership & Collaboration",
        description: "Proven teamwork and leadership as Joint Secretary of the English Department, active NSS Volunteer, and Hackathon Winner.",
        iconType: "learner",
      },
    ],

    // Quick highlights table/badges
    stats: [
      { label: "Degree & Specialization", value: "B.Sc. CS with Data Analytics" },
      { label: "College", value: "SRCW, Coimbatore" },
      { label: "Academic Standing", value: "86% Current Percentage" },
      { label: "Location", value: "Coimbatore, Tamil Nadu" },
    ],
  },

  // Skills & Technologies Section
  skills: {
    heading: "Technical Expertise",
    subheading: "Programming languages, data science frameworks, databases, and analytical tools.",
    label: "SKILLS & COMPETENCIES",
    notice: null,
    
    // Filterable categories
    categories: [
      { id: "all", name: "All Skills" },
      { id: "programming", name: "Programming & Data Science" },
      { id: "databases", name: "Databases & Concepts" },
      { id: "tools", name: "Analytics & Tools" },
    ],

    items: [
      {
        name: "Python",
        category: "programming",
        proficiency: 90,
        iconType: "python",
        description: "Pandas, NumPy, Scikit-learn, Flask, data preprocessing & algorithmic modeling",
      },
      {
        name: "SQL",
        category: "programming",
        proficiency: 88,
        iconType: "sql",
        description: "Complex queries, joins, relational schemas, aggregation & data extraction",
      },
      {
        name: "Machine Learning",
        category: "programming",
        proficiency: 86,
        iconType: "ml",
        description: "Supervised learning, Linear Regression, Random Forest, model evaluation & tuning",
      },
      {
        name: "Data Analysis & Visualization",
        category: "programming",
        proficiency: 88,
        iconType: "analytics",
        description: "Exploratory data analysis (EDA), trend identification & KPI visualization",
      },
      {
        name: "Artificial Intelligence & NLP",
        category: "programming",
        proficiency: 82,
        iconType: "ai",
        description: "Natural Language Processing, text parsing, resume screening & route optimization",
      },
      {
        name: "Oracle Database",
        category: "databases",
        proficiency: 82,
        iconType: "oracle",
        description: "Enterprise relational database design, table architecture & query optimization",
      },
      {
        name: "MongoDB",
        category: "databases",
        proficiency: 80,
        iconType: "mongodb",
        description: "NoSQL document storage, flexible BSON schemas & collection operations",
      },
      {
        name: "DBMS Concepts",
        category: "databases",
        proficiency: 86,
        iconType: "dbms",
        description: "Relational integrity, normalization, ACID properties, transactions & indexing",
      },
      {
        name: "Cloud Computing (AWS)",
        category: "databases",
        proficiency: 76,
        iconType: "cloud",
        description: "Cloud fundamentals, AWS infrastructure, cloud storage & compute architecture",
      },
      {
        name: "Computer Networks",
        category: "databases",
        proficiency: 82,
        iconType: "network",
        description: "TCP/IP protocol suite, OSI reference model, routing & network communications",
      },
      {
        name: "Power BI",
        category: "tools",
        proficiency: 90,
        iconType: "powerbi",
        description: "Interactive visual dashboards, DAX queries, Power Query ETL & business intelligence",
      },
      {
        name: "Microsoft Excel",
        category: "tools",
        proficiency: 92,
        iconType: "excel",
        description: "Advanced Pivot Tables, Pivot Charts, Power Query, lookup functions & data modeling",
      },
      {
        name: "Tableau",
        category: "tools",
        proficiency: 80,
        iconType: "tableau",
        description: "Visual data discovery, multidimensional dashboards & interactive reporting",
      },
      {
        name: "GitHub & VS Code",
        category: "tools",
        proficiency: 88,
        iconType: "git",
        description: "Version control workflows, commit history, repository management & modern IDE setup",
      },
      {
        name: "Jupyter Notebook & Google Colab",
        category: "tools",
        proficiency: 90,
        iconType: "notebook",
        description: "Interactive experimentation, model development, data cleaning & cloud GPU notebooks",
      },
    ],
  },

  // Featured Projects Section
  projects: {
    heading: "Featured Real-World Projects",
    subheading: "Machine learning applications, predictive analytics, and business intelligence dashboards.",
    label: "SELECTED WORK",
    notice: null,
    
    categories: [
      { id: "all", name: "All Projects" },
      { id: "ml", name: "Machine Learning & AI" },
      { id: "analytics", name: "Data Analytics & BI" },
    ],

    items: [
      {
        id: "waste-management",
        title: "AI-Based Smart Waste Management & Route Optimization",
        subtitle: "AI & Machine Learning | Flask",
        category: "ml",
        categoryLabel: "Machine Learning & AI",
        shortDescription: "An AI-powered municipal waste collection optimization system that predicts optimal waste pickup routes and schedules using machine learning.",
        fullDescription: "Developed an AI-based waste management system to optimize waste collection routes using machine learning algorithms. Features a complete Flask web application for route prediction, dynamic route planning, and efficient municipal waste collection management, minimizing transit times and operational costs.",
        technologies: ["Python", "Flask", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "HTML", "CSS", "JavaScript"],
        previewImage: projectSample1,
        demoUrl: "#",
        githubUrl: "https://github.com/",
        featured: true,
      },
      {
        id: "resume-screening",
        title: "AI-Based Resume Screening Application",
        subtitle: "AI & Machine Learning | Flask & NLP",
        category: "ml",
        categoryLabel: "Machine Learning & AI",
        shortDescription: "Automated candidate evaluation platform that parses resumes, matches qualifications with job descriptions, and ranks applicants via NLP.",
        fullDescription: "Developed an AI-powered resume screening application that automates candidate evaluation by matching resumes with job descriptions. Built a Flask-based web application integrating NLP algorithms and machine learning for automated text extraction, skill matching, similarity scoring, and candidate ranking.",
        technologies: ["Python", "Flask", "NLP", "Machine Learning", "Scikit-learn", "Pandas", "HTML", "CSS", "JavaScript"],
        previewImage: projectSample2,
        demoUrl: "#",
        githubUrl: "https://github.com/",
        featured: true,
      },
      {
        id: "ibm-profit-cannibalization",
        title: "Profit & Cannibalization Dashboard (IBM Hackathon)",
        subtitle: "Data Analytics | Power BI, DAX & Power Query",
        category: "analytics",
        categoryLabel: "Data Analytics & BI",
        shortDescription: "Interactive BI dashboard engineered for the IBM ThinkFest National Hackathon to uncover profitability patterns and product cannibalization risks.",
        fullDescription: "Developed an interactive business intelligence dashboard to analyze product profitability and identify cannibalization trends among retail lines. Created dynamic executive reports with customizable KPIs, multi-tier filters, and intuitive visualizations to support strategic business decision-making.",
        technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "Business Intelligence"],
        previewImage: projectSample3,
        demoUrl: "#",
        githubUrl: "https://github.com/",
        featured: true,
      },
      {
        id: "dhrishti-analytics",
        title: "Data Analysis for Dhrishti Pre-Registration App",
        subtitle: "Data Analysis | Microsoft Excel & Power Query",
        category: "analytics",
        categoryLabel: "Data Analytics & BI",
        shortDescription: "Comprehensive data analysis on pre-registration user metrics to detect enrollment trends, engagement patterns, and actionable funnel insights.",
        fullDescription: "Analyzed pre-registration dataset for the Dhrishti application to identify user trends, peak onboarding periods, and geographic distribution. Created interactive dashboards and analytical reports using Pivot Tables, dynamic charts, and advanced Excel functions to support operational decision-making.",
        technologies: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Power Query", "Data Cleaning", "Trend Analysis"],
        previewImage: projectSample1,
        demoUrl: "#",
        githubUrl: "https://github.com/",
        featured: true,
      },
      {
        id: "insurance-prediction",
        title: "Insurance Premium Prediction System",
        subtitle: "Machine Learning | Python, Flask & SQLite",
        category: "ml",
        categoryLabel: "Machine Learning & AI",
        shortDescription: "Predictive ML application estimating health insurance charges based on individual health parameters, BMI, age, and lifestyle habits.",
        fullDescription: "Developed a machine learning application to estimate health insurance premiums based on individual demographics (age, BMI, smoking habits, family size, region). Implemented and evaluated Linear Regression and Random Forest Regression models. Built a user-friendly Flask interface with SQLite prediction history and an interactive analytics dashboard.",
        technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "Linear Regression", "Random Forest", "SQLite", "HTML/CSS"],
        previewImage: projectSample2,
        demoUrl: "#",
        githubUrl: "https://github.com/",
        featured: true,
      },
    ],
  },

  // Education Section
  education: {
    heading: "Academic Background",
    subheading: "Academic credentials, specialized degree coursework, and scholastic milestones.",
    label: "EDUCATION",
    notice: null,
    
    timeline: [
      {
        id: "bsc-degree",
        degree: "B.Sc. Computer Science with Data Analytics",
        specialization: "Data Analytics, Machine Learning & Computer Science",
        institution: "Sri Ramakrishna College of Arts & Science for Women",
        location: "Coimbatore, Tamil Nadu",
        period: "2024 — 2027",
        status: "Current Percentage: 86%",
        description: "Engaged in specialized undergraduate studies bridging computational theory with modern data science, statistical analysis, predictive modeling, and database architecture.",
        keyCourses: [
          "Data Analytics",
          "Machine Learning & AI",
          "Python & SQL Programming",
          "Database Management Systems",
          "Cloud Computing (AWS)",
          "Computer Networks",
        ],
      },
      {
        id: "higher-secondary",
        degree: "Higher Secondary (Class XII)",
        specialization: "Science & Mathematics Stream",
        institution: "Noyes Matriculation Hr. Sec. School",
        location: "Madurai, Tamil Nadu",
        period: "Completed in 2024",
        status: "Class XII: 76% (2024)",
        description: "Completed secondary education with solid academic foundations in Mathematics, Physical Sciences, and Analytical Reasoning.",
        keyCourses: [
          "Mathematics",
          "Computer Science Fundamentals",
          "Physics",
          "Chemistry",
        ],
      },
    ],
  },

  // Experience Section (Internships)
  experience: {
    heading: "Internship Journey",
    subheading: "Industry experience applying Machine Learning and Data Analytics to real-world solutions.",
    label: "INTERNSHIPS & EXPERIENCE",
    notice: null,
    
    items: [
      {
        id: "intern-adroit",
        role: "Machine Learning Intern",
        organization: "Adroit Technologies",
        employmentType: "Internship",
        period: "Recent",
        location: "Coimbatore, Tamil Nadu",
        description: "Worked on machine learning project titled 'AI-Based Smart waste management and Route Optimization' involving data preprocessing, feature engineering, model training, and model evaluation.",
        responsibilities: [
          "Conducted data preprocessing, feature scaling, and feature engineering on logistics and waste distribution data.",
          "Trained, validated, and evaluated predictive machine learning models to identify optimal collection routes.",
          "Utilized Python, Pandas, Scikit-learn, and Flask to develop predictive models and analyze data for actionable insights.",
          "Integrated machine learning prediction endpoints into an accessible web dashboard for operational dispatchers.",
        ],
        technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "Machine Learning", "Route Optimization"],
      },
      {
        id: "intern-auroi",
        role: "Data Analyst Intern",
        organization: "AuroiTech",
        employmentType: "Internship",
        period: "Recent",
        location: "Tamil Nadu, India",
        description: "Worked on data analysis for the Pre-registration app, executing comprehensive data cleaning, exploratory analysis, visualization, and strategic reporting.",
        responsibilities: [
          "Executed systematic data cleaning, outlier detection, and data integrity verification across user registrations.",
          "Constructed interactive dashboards and visual reports using Power BI and Microsoft Excel to surface onboarding trends.",
          "Synthesized complex datasets into executive summaries and actionable insights for product enhancement.",
        ],
        technologies: ["Power BI", "Microsoft Excel", "Pivot Tables", "DAX", "Data Visualization", "Data Reporting"],
      },
    ],
  },

  // Certifications & Achievements Section
  certifications: {
    heading: "Certifications & Achievements",
    subheading: "Accredited certifications, hackathon victories, and academic honors.",
    label: "CREDENTIALS & HONORS",
    notice: null,
    
    items: [
      // Certifications
      {
        id: "cert-ibm",
        title: "IBM Data Visualization & Business Intelligence using Cognos",
        issuer: "IBM",
        date: "Certified",
        category: "Certification",
        credentialUrl: "#",
        description: "Specialized training in enterprise data visualization, multidimensional dashboards, and business intelligence with IBM Cognos.",
      },
      {
        id: "cert-guvi-python",
        title: "GUVI Python Zero to Hero",
        issuer: "GUVI Geek Network",
        date: "Certified",
        category: "Certification",
        credentialUrl: "#",
        description: "Comprehensive mastery in core Python programming, data structures, algorithms, and computational problem solving.",
      },
      {
        id: "cert-guvi-genai",
        title: "GUVI Generative AI",
        issuer: "GUVI Geek Network",
        date: "Certified",
        category: "Certification",
        credentialUrl: "#",
        description: "Training in modern Generative AI principles, prompt design, foundational models, and generative application workflows.",
      },
      {
        id: "cert-nptel-dbms",
        title: "NPTEL Database Management",
        issuer: "NPTEL / IIT",
        date: "Certified",
        category: "Certification",
        credentialUrl: "#",
        description: "Rigorous academic certification in relational database theory, normalization, SQL, transaction processing, and concurrency control.",
      },
      {
        id: "cert-cruzze",
        title: "CRUZZE AI and ML",
        issuer: "CRUZZE",
        date: "Certified",
        category: "Certification",
        credentialUrl: "#",
        description: "Applied machine learning and artificial intelligence program covering supervised algorithms and model pipelines.",
      },

      // Achievements
      {
        id: "achieve-hackace",
        title: "Winner – HackAce 2026 International Hackathon",
        issuer: "KPRIET",
        date: "2026",
        category: "Achievement",
        credentialUrl: "#",
        description: "Secured 1st Place at HackAce 2026 International Hackathon organized by KPR Institute of Engineering and Technology.",
      },
      {
        id: "achieve-ibm-thinkfest",
        title: "IBM ThinkFest National Hackathon Finalist",
        issuer: "IBM / Surat",
        date: "National Finalist",
        category: "Achievement",
        credentialUrl: "#",
        description: "Represented Sri Ramakrishna College of Arts & Science for Women at the prestigious IBM ThinkFest National Hackathon held in Surat.",
      },
      {
        id: "achieve-intercollege",
        title: "Winner – Inter-College Hackathon",
        issuer: "Inter-College Tech Fest",
        date: "Winner",
        category: "Achievement",
        credentialUrl: "#",
        description: "Awarded 1st place in Inter-College Hackathon for collaborative engineering and rapid prototyping of impactful software.",
      },
      {
        id: "achieve-paper",
        title: "Winner – Technical Paper Presentation Competition",
        issuer: "State Level Technical Symposium",
        date: "Winner",
        category: "Achievement",
        credentialUrl: "#",
        description: "Secured 1st prize for authoring and presenting an insightful research paper on emerging computational technologies.",
      },
      {
        id: "achieve-joint-sec",
        title: "Joint Secretary – English Department",
        issuer: "SRCW Coimbatore",
        date: "Leadership Role",
        category: "Achievement",
        credentialUrl: "#",
        description: "Elected Joint Secretary of the English Department, demonstrating leadership, public speaking, and institutional event coordination.",
      },
      {
        id: "achieve-nss",
        title: "NSS Volunteer",
        issuer: "National Service Scheme (NSS)",
        date: "Community Service",
        category: "Achievement",
        credentialUrl: "#",
        description: "Dedicated NSS Volunteer organizing and contributing to community outreach, social welfare, and environmental initiatives.",
      },
    ],
  },

  // Contact Information & Form Details
  contact: {
    heading: "Let's Connect",
    subheading: "Open to data analytics, machine learning internships, research collaborations, and project discussions.",
    label: "GET IN TOUCH",
    
    email: "241cd024@srcw.ac.in",
    phone: "+91 9342363043",
    location: "Coimbatore, Tamil Nadu, India",
    workingHours: "Monday – Saturday (IST)",
    
    socials: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      email: "mailto:241cd024@srcw.ac.in",
    },

    form: {
      namePlaceholder: "Your Full Name",
      emailPlaceholder: "your.email@example.com",
      subjectPlaceholder: "Internship Opportunity / Data Project",
      messagePlaceholder: "Write your message here... Let's collaborate on impactful data solutions.",
      submitButtonText: "Send Message",
    },
  },

  // Footer Details
  footer: {
    monogram: "MB",
    brandName: "Magdaline Blessy R",
    role: "Computer Science with Data Analytics | Machine Learning & BI",
    copyrightYear: new Date().getFullYear(),
    quote: "Turning raw data into predictive intelligence and meaningful human impact.",
  },
};
