function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const Questions = [
  {
    ques: "Why is testing in system integration more complex than in system development?",
    ans: 0,
    str: "Because design tests that are within system integrator’s control.",
    arrQA: [
      "Because design tests that are within system integrator’s control.",
      "Data adhere to specifications.",
      "Have to test all scenarios.",
      "All are correct.",
    ],
  },
  {
    ques: "Is process the most important choice system integration projects? Why?",
    ans: 3,
    str: "No. Both the engineers, who give the solutions for the problems, and process, are needed.",
    arrQA: [
      "Yes. Easy to control and monitor the result of project.",
      "No. The engineers who give the solutions for the problems are the most important.",
      "Yes. Following the process will get the right solutions.",
      "No. Both the engineers, who give the solutions for the problems, and process, are needed.",
    ],
  },
  {
    ques: "What is the problem when integrated system has naming services?",
    ans: 2,
    str: "Resolving duplicate names.",
    arrQA: [
      "Entities don’t have name.",
      "Entities can’t be found",
      "Resolving duplicate names.",
      "User doesn’t know how to find other system entities.",
    ],
  },
  {
    ques: "The simplest way to achieve load balancing is to:",
    ans: 0,
    str: "maintain a list of available servers and pass incoming requests to those servers",
    arrQA: [
      "maintain a list of available servers and pass incoming requests to those servers",
      "distribute the load of data transfer to a single server with high capacity",
      "buy the latest load balancing software",
      "institute single tier architecture",
    ],
  },
  {
    ques: "Nowadays, System integration involve a complete system, that are:",
    ans: 3,
    str: "All are correct",
    arrQA: [
      "Business processes",
      "Organizational structural alignments",
      "Knowledge management",
      "All are correct",
    ],
  },
  {
    ques: "Which of the following is not an area of tangible benefit in regard to integration of systems?",
    ans: 3,
    str: "Reduction of shipping costs",
    arrQA: [
      "Reduction of IT costs",
      "Reduction of cycle times",
      "Reduction of inventory costs",
      "Reduction of shipping costs",
    ],
  },
  {
    ques: "Which of the following is not considered an intangible benefit to enterprise integration?",
    ans: 3,
    str: "Increased customer service",
    arrQA: [
      "Improved availability of information",
      "Increase in customer responsiveness",
      "Creation of standards for information resources",
      "Increased customer service",
    ],
  },
  {
    ques: "What can we do to have a security service?",
    ans: 1,
    str: "Authenticated, access control and logging activities (2).",
    arrQA: [
      "Load balancing and data redundancy (1).",
      "Authenticated, access control and logging activities (2).",
      "None is correct.",
      "Both (1) and (2) are correct.",
    ],
  },
  {
    ques: "A project team member who has a strong understanding of the data in an information system that is being replaced by a new enterprise system is a:",
    ans: 1,
    str: "technical expert.",
    arrQA: [
      "Business process expert.",
      "technical expert.",
      "Geographic business process expert.",
      "Change management expert.",
    ],
  },
  {
    ques: "Which are common mistakes in data integration?",
    ans: 3,
    str: "Testing without a sufficient set of real data.",
    arrQA: [
      "Creating a big new database.",
      "integrate data at all sites.",
      "Analyzing legacy database to finish developing a new database",
      "Testing without a sufficient set of real data.",
    ],
  },
  {
    ques: "The CIO tells you she is looking for a middleware suite. Which type of middleware would you recommend?",
    ans: 1,
    str: "Enterprise application integration",
    arrQA: [
      "Data integration",
      "Enterprise application integration",
      "Message-oriented middleware",
      "Transaction processor",
    ],
  },
  {
    ques: "Which statement accurately describes a characteristic of security services within a system?",
    ans: 3,
    str: "Resources are managed based on defined policies, and accountability is ensured through logging.",
    arrQA: [
      "All users have unlimited access to resources.",
      "Activities are logged solely for performance monitoring.",
      "Entities are authenticated, and access control is not implemented.",
      "Resources are managed based on defined policies, and accountability is ensured through logging.",
    ],
  },
  {
    ques: "What is a common approach to managing access control in organizations?",
    ans: 0,
    str: "Assigning users to multiple groups simultaneously",
    arrQA: [
      "Assigning users to multiple groups simultaneously",
      "Granting access to data without considering application access",
      "Resolving conflicts between user roles to prevent unauthorized data access",
      "Providing unrestricted access to all users regardless of their roles",
    ],
  },
  {
    ques: "When is the Data Integration Model appropriate?",
    ans: 2,
    str: "When combining data from multiple sources for analysis and decision-making is needed.",
    arrQA: [
      "When data from multiple sources needs to be separated for analysis.",
      "When a single application requires exclusive access to data sources.",
      "When combining data from multiple sources for analysis and decision-making is needed.",
      "When data needs to be extracted from one source without any update",
    ],
  },
  {
    ques: "Which term refers to the prevention of a principal from denying participation?",
    ans: 2,
    str: "Non-repudiation",
    arrQA: [
      "Authentication",
      "Authorization",
      "Non-repudiation",
      "Security Protocols",
    ],
  },
  {
    ques: "Why do the legacy systems need to remain in place until new systems are completely integrated?",
    ans: 2,
    str: "For system integrated be tested in planned.",
    arrQA: [
      "To minimize changing.",
      "To reduce cost.",
      "For system integrated be tested in planned.",
      "To operating easier.",
    ],
  },
  {
    ques: "How many types of integration model are there? And what are they?",
    ans: 2,
    str: "3 - Presentation, Functional and Data Integration (3).",
    arrQA: [
      "4? Waterfall, Rapid Application Development, Spiral, Agile (1).",
      "3? Waterfall, Spiral, Agile (2).",
      "3 - Presentation, Functional and Data Integration (3).",
      "(1) and (3) are correct.",
    ],
  },
  {
    ques: "Which of the following is a generic solution to the challenge of performance?",
    ans: 0,
    str: "scalable solutions",
    arrQA: [
      "scalable solutions",
      "reliable solutions",
      "transparent solutions",
      "server solutions",
    ],
  },
  {
    ques: "The integration styles are",
    ans: 3,
    str: "File Transfer; Shared Database; Remote Procedure Invocation; Messaging.",
    arrQA: [
      "File Transfer; Shared Database; Presentation Integration",
      "Remote Procedure Invocation; Messaging; Functional Integration",
      "Presentation Integration; Functional Integration",
      "File Transfer; Shared Database; Remote Procedure Invocation; Messaging.",
    ],
  },
  {
    ques: "What integration styles does file data sharing belong to?",
    ans: 1,
    str: "Shared Database",
    arrQA: [
      "File Transfer",
      "Shared Database",
      "Remote Procedure Invocation",
      "Messaging",
    ],
  },
];

const Questions2 = [
  {
    ques: "Before start thinking about integration, we must to:",
    ans: 1,
    str: "Make sure that the purpose is clear and feasible",
    arrQA: [
      "Research legacy system and make vision document",
      "Make sure that the purpose is clear and feasible",
      "Meeting customer",
      "Make requirement specification document",
    ],
  },
  {
    ques: "In MegaMoney Bancorp Case Study: What are the two key services discussed in the passage that MegaMoney Bancorp aims to support?",
    ans: 1,
    str: "Address changes and fund transfers between accounts",
    arrQA: [
      "Opening new accounts and closing existing ones",
      "Address changes and fund transfers between accounts",
      "Credit card applications and loan approvals",
      "Account inquiries and balance transfers",
    ],
  },
  {
    ques: "What is MegaMoney Bancorps goal for EAI (Enterprise Application Integration)?",
    ans: 1,
    str: "To offer integrated information and transactional services on its website",
    arrQA: [
      "To maintain the complexity of its IT architecture",
      "To offer integrated information and transactional services on its website",
      "To minimize the number of legacy systems",
      "To maximize the number of legacy systems",
    ],
  },
  {
    ques: "Which architecture choice involves computing the aggregate each time data is retrieved?",
    ans: 3,
    str: "The new application computes the aggregate on retrieval",
    arrQA: [
      "Aggregate field in a special top-level record, application making changes update the field",
      "System updates the aggregate field in system business logic",
      "Get all the records and aggregate manually",
      "The new application computes the aggregate on retrieval",
    ],
  },
  {
    ques: "What components comprise the system security architecture?",
    ans: 3,
    str: "Policies, procedures, and technologies",
    arrQA: [
      "Risk management techniques",
      "Security engineering principles",
      "Quantitative risk-management methods",
      "Policies, procedures, and technologies",
    ],
  },
  {
    ques: "What does System Integration mean?",
    ans: 2,
    str: "More than one application, module or component that can share data and present the user with consistent information",
    arrQA: [
      "It means many separate systems need to become one",
      "More than one application, module or component that can’t use anymore, so they have to replace by another new one",
      "More than one application, module or component that can share data and present the user with consistent information",
      "More than one application, module or component that can connect to the same databases",
    ],
  },
  {
    ques: "What is Naming?",
    ans: 0,
    str: "The name of the object reference.",
    arrQA: [
      "The name of the object reference.",
      "The name of the binding activity of the object.",
      "Names of objects on the network activities",
      "All are correct",
    ],
  },
  {
    ques: "What Integration System is the easiest to perform all models?",
    ans: 1,
    str: "Presentation Integration",
    arrQA: [
      "Data Integration",
      "Presentation Integration",
      "Functional Integration",
      "System Integration",
    ],
  },
  {
    ques: "What are Challenges in system integration?",
    ans: 0,
    str: "Technical &amp; Management challenges",
    arrQA: [
      "Technical &amp; Management challenges",
      "Programming Language",
      "Tools Support",
      "Methods",
    ],
  },
  {
    ques: "What are the benefits of data integration?",
    ans: 2,
    str: "Allows timely and reliable reporting, as data quality is the prime technology for business challenges, Data usage &amp; Cost Effective",
    arrQA: [
      "Data usage &amp; Cost Effective",
      "Allows timely and reliable reporting, as data quality is the prime technology for business challenges",
      "Allows timely and reliable reporting, as data quality is the prime technology for business challenges, Data usage &amp; Cost Effective",
      "Allows timely and reliable reporting, as data quality is the prime technology for business challenges, Data usage.",
    ],
  },
  {
    ques: "The integration style should be selected based on:",
    ans: 0,
    str: "User requirements and constraints.",
    arrQA: [
      "User requirements and constraints.",
      "Advantages and disadvantages of team",
      "Maintenance",
      "All are correct",
    ],
  },
  {
    ques: "What are possible solution for data transmission issue?",
    ans: 3,
    str: "a and b are correct.",
    arrQA: [
      "Data translators or create message service.",
      "Develop synchronous/ asynchronous mechanisms to match requirement.",
      "Maintain different formats continuously.",
      "a and b are correct.",
    ],
  },
  {
    ques: "What are Data Integration Common Mistakes?",
    ans: 3,
    str: "All are correct",
    arrQA: [
      "Creating yet another database",
      "Implementing the perfectly normalized schema",
      "Waiting for the data analyst to finish developing the perfect schema",
      "All are correct",
    ],
  },
  {
    ques: "System should be defensed in?",
    ans: 3,
    str: "Depth and breadth.",
    arrQA: [
      "Depth better than breadth",
      "Breadth better than depth",
      "Depth",
      "Depth and breadth.",
    ],
  },
  {
    ques: "What is the main difference in the life cycles?",
    ans: 3,
    str: "Emphasis, duration, number of stages and timing of each stage",
    arrQA: [
      "Number of stages implemented",
      "Execution time of each stage",
      "Emphasis, duration, and timing of each stage",
      "Emphasis, duration, number of stages and timing of each stage",
    ],
  },
  {
    ques: "What are advantages of Asymmetric key cryptography?",
    ans: 1,
    str: "Key does not have to be replaced as often and distribution is easy.",
    arrQA: [
      "Key is hard to distribute.",
      "Key does not have to be replaced as often and distribution is easy.",
      "Key is short",
      "Key need to replace often.",
    ],
  },
  {
    ques: "Important Security Terms include:",
    ans: 2,
    str: "Authentication, Authorization, Trust, Security Protocols and Non-repudiation.",
    arrQA: [
      "Authentication, Authorization, Firewall, Defense in breadth and depth.",
      "Anticipation, Prevention, Completeness and Simplicity.",
      "Authentication, Authorization, Trust, Security Protocols and Non-repudiation.",
      "Authentication, Authorization, Encryption, Data Integrity and Non-repudiation.",
    ],
  },
  {
    ques: "Enterprise information integration is BEST characterized by:",
    ans: 0,
    str: "The ability to access data from any source, regardless of format or system",
    arrQA: [
      "The ability to access data from any source, regardless of format or system",
      "The ability to store data in one source without it being accessible to other systems",
      "The ability to manipulate data remotely",
      "The ability to access data without proper authorization",
    ],
  },
  {
    ques: "When is the Functional Model Appropriate?",
    ans: 3,
    str: "All are correct",
    arrQA: [
      "Multi-step processes must be coordinated",
      "Data consistency is important.",
      "Plug-and-play components",
      "All are correct",
    ],
  },
  {
    ques: "Nowadays, System integration involve a complete system, that are:",
    ans: 3,
    str: "All are correct",
    arrQA: [
      "Business processes",
      "Organizational structural alignments",
      "Knowledge management",
      "All are correct",
    ],
  },
];

const Questions3 = [
  {
    ques: "Which order is preferred (ưu tiên) to ensure the system defensed in depth?",
    ans: 0,
    str: "Protect? Detect- Recover",
    arrQA: [
      "Protect? Detect- Recover",
      "Detect? Protect? Recover",
      "Detect? Recover? Protect",
      "Protect? Recover? Detect",
    ],
  },
  {
    ques: "What are advantages of symmetric key cryptography?",
    ans: 2,
    str: "The encryption and decryption algorithms can be fast in both hardware and software.",
    arrQA: [
      "Key are relative long.",
      "Key must be replaced often",
      "The encryption and decryption algorithms can be fast in both hardware and software.",
      "Key distribution is easy,",
    ],
  },
  {
    ques: "What are disadvantages of symmetric key cryptography?",
    ans: 3,
    str: "(1) and (2) are correct.",
    arrQA: [
      "Key are relatively short.",
      "Key distribution is a problem (1)",
      "Key must be replaced often (2)",
      "(1) and (2) are correct.",
    ],
  },
  {
    ques: "What are disadvantages of asymmetric key cryptography?",
    ans: 3,
    str: "All are correct.",
    arrQA: [
      "Encryption algorithms are normally slower than symmetric? Key cipher",
      "Key much longer than 1000 bits.",
      "Security is based on the difficulty of factoring large numbers.",
      "All are correct.",
    ],
  },
  {
    ques: "Integration of security service is",
    ans: 2,
    str: "Difficult and more risk than security of each component.",
    arrQA: [
      "Easy.",
      "An option decision.",
      "Difficult and more risk than security of each component.",
      "More risk than the risk of each component.",
    ],
  },
  {
    ques: "What events are being logged?",
    ans: 2,
    str: "(1) and (2) are correct",
    arrQA: [
      "Read or write data (1)",
      "Authentication events (2)",
      "(1) and (2) are correct",
      "None is correct",
    ],
  },
  {
    ques: "What are some kind of access control?",
    ans: 0,
    str: "Mandatory access control, Discretionary access control, role-based access control.",
    arrQA: [
      "Mandatory access control, Discretionary access control, role-based access control.",
      "Mandatory access control, Role-based access control.",
      "Multilevel access control.",
      "None is correct.",
    ],
  },
  {
    ques: "How many architectures are there for data integration?",
    ans: 2,
    str: "2",
    arrQA: ["4", "3", "2", "1"],
  },
  {
    ques: "What is the main goal of database normalization?",
    ans: 3,
    str: "Both a and b are correct.",
    arrQA: [
      "Restructure the logical data model of a database to eliminate redundancy.",
      "Reduce the potential for data anomalies.",
      "Not is correct.",
      "Both a and b are correct.",
    ],
  },
  {
    ques: "What is some of important security terms?",
    ans: 0,
    str: "Authentication, authorization, Audit.",
    arrQA: [
      "Authentication, authorization, Audit.",
      "Authentication, access control, logging activity.",
      "Load balance, data redundancy.",
      "None is correct.",
    ],
  },
];

const Questions4 = [...Questions, ...Questions2, ...Questions3];

shuffle(Questions);
shuffle(Questions2);
shuffle(Questions3);
shuffle(Questions4);

export { Questions, Questions2, Questions3, Questions4, shuffle };
