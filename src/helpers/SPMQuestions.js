const Questions = [
  {
    ques: "What is the primary role of the Scrum Master in an Agile Scrum project?",
    str: "Facilitating the team and removing impediments",
    arrQA: [
      "Coding tasks",
      "Managing the product backlog",
      "Facilitating the team and removing impediments",
      "Creating user stories",
    ],
  },
  {
    ques: "How long is a typical Sprint in Scrum?",
    str: "2 weeks",
    arrQA: [
      "1 month",
      "2 weeks",
      "3 months",
      "It varies and can be any length",
    ],
  },
  {
    ques: "Who is responsible for prioritizing the Product Backlog?",
    str: "Product Owner",
    arrQA: [
      "Product Owner",
      "Scrum Master",
      "Development Team",
      "Stakeholders",
    ],
  },
  {
    ques: "What is the purpose of the Daily Scrum meeting?",
    str: "Inspecting progress and adapting the Sprint Backlog",
    arrQA: [
      "Detailed status reporting",
      "Planning the next sprint",
      "Inspecting progress and adapting the Sprint Backlog",
      "Reviewing the product backlog",
    ],
  },
  {
    ques: "What is the primary focus of the Product Owner?",
    str: "Maximizing the value of the product and the work of the Development Team",
    arrQA: [
      "Managing team dynamics",
      "Maximizing the value of the product and the work of the Development Team",
      "Removing impediments",
      "Ensuring the team follows Scrum practices",
    ],
  },
  {
    ques: "In Scrum, who has the authority to cancel a Sprint?",
    str: "Anyone, but only under extreme circumstances and it requires the consensus of the entire team",
    arrQA: [
      "Product Owner",
      "Scrum Master",
      "Development Team",
      "Anyone, but only under extreme circumstances and it requires the consensus of the entire team",
    ],
  },
  {
    ques: "What is the purpose of the Sprint Review?",
    str: "Inspecting the increment and adapting the Product Backlog if needed",
    arrQA: [
      "Planning the next Sprint",
      "Inspecting the increment and adapting the Product Backlog if needed",
      "Daily progress reporting",
      "Updating the Sprint Backlog",
    ],
  },
  {
    ques: "Who is responsible for estimating the effort required for Product Backlog items?",
    str: "Development Team",
    arrQA: [
      "Scrum Master",
      "Development Team",
      "Product Owner",
      "Stakeholders",
    ],
  },
  {
    ques: "Which Scrum event is time-boxed to a maximum of 8 hours for a one-month Sprint?",
    str: "Daily Scrum",
    arrQA: [
      "Sprint Review",
      "Sprint Planning",
      "Sprint Retrospective",
      "Daily Scrum",
    ],
  },
  {
    ques: "What does the term 'Definition of Done' refer to in Scrum?",
    str: "A set of criteria that a product increment must meet to be considered complete",
    arrQA: [
      "A checklist of tasks for the Scrum Master",
      "A set of criteria that a product increment must meet to be considered complete",
      "The list of features in the Product Backlog",
      "Guidelines for writing user stories",
    ],
  },
  {
    ques: "Who is responsible for tracking progress during a Sprint?",
    str: "The Development Team and Scrum Master collectively",
    arrQA: [
      "Scrum Master",
      "Development Team",
      "Product Owner",
      "The Development Team and Scrum Master collectively",
    ],
  },
  {
    ques: "What is the purpose of the Sprint Retrospective?",
    str: "Reflecting on the past Sprint and identifying areas for improvement",
    arrQA: [
      "Reviewing and adapting the Sprint Backlog",
      "Planning the next Sprint",
      "Reflecting on the past Sprint and identifying areas for improvement",
      "Evaluating the performance of the Scrum Master",
    ],
  },
  {
    ques: "What is the role of the Development Team in Sprint Planning?",
    str: "Reflecting on the past Sprint and identifying areas for improvement",
    arrQA: [
      "Defining the Sprint Goal",
      "Creating the Product Backlog",
      "Selecting items from the Product Backlog for the Sprint Backlog",
      "Facilitating the meeting",
    ],
  },
  {
    ques: "What is the purpose of the Increment in Scrum?",
    str: "A version of the product that is usable and potentially releasable",
    arrQA: [
      "A deliverable for stakeholders",
      "A version of the product that is usable and potentially releasable",
      "A list of completed tasks",
      "A detailed plan for the next Sprint",
    ],
  },
  {
    ques: "Who can participate in the Daily Scrum?",
    str: "Scrum Master, Product Owner, and Development Team",
    arrQA: [
      "Scrum Master and Product Owner",
      "Scrum Master, Product Owner, and Development Team",
      "Scrum Master and Stakeholders",
      "Scrum Master only",
    ],
  },
  {
    ques: "What is the role of the Product Owner during Sprint Planning?",
    str: "Prioritizing and clarifying items in the Product Backlog",
    arrQA: [
      "Facilitating the meeting",
      "Prioritizing and clarifying items in the Product Backlog",
      "Assigning tasks to the Development Team",
      "Defining the Sprint Goal",
    ],
  },
  {
    ques: "What is the purpose of the Daily Scrum?",
    str: "Inspecting progress and adapting the plan for the next day",
    arrQA: [
      "Planning the day's tasks",
      "Providing a status update to the Product Owner",
      "Inspecting progress and adapting the plan for the next day",
      "Reviewing the product backlog",
    ],
  },
  {
    ques: "In Scrum, who is responsible for making sure that the Development Team understands the items in the Product Backlog?",
    str: "Development Team",
    arrQA: [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Stakeholders",
    ],
  },
  {
    ques: "What is the primary role of the Scrum Team?",
    str: "Self-organizing to accomplish the work of the Sprint and delivering a potentially shippable product increment",
    arrQA: [
      "Maximizing the value of the product",
      "Delivering increments of the product",
      "Self-organizing to accomplish the work of the Sprint and delivering a potentially shippable product increment",
      "Implementing the decisions of the Product Owner",
    ],
  },
  {
    ques: "Who is responsible for removing impediments during a Sprint?",
    str: "Both Scrum Master and Development Team",
    arrQA: [
      "Scrum Master",
      "Development Team",
      "Product Owner",
      "Both Scrum Master and Development Team",
    ],
  },
  {
    ques: "What is the primary purpose of the Sprint Backlog?",
    str: "It is a subset of the Product Backlog and represents the work to be done in the current Sprint",
    arrQA: [
      "Planning the next Sprint",
      "Identifying impediments",
      "It is a subset of the Product Backlog and represents the work to be done in the current Sprint",
      "Reviewing completed tasks",
    ],
  },
  {
    ques: "How often should the Scrum Team inspect its progress toward the Sprint Goal and adapt if necessary?",
    str: "At the end of each Sprint",
    arrQA: ["Daily", "Weekly", "At the end of each Sprint", "Monthly"],
  },
  {
    ques: "In Scrum, what is the recommended size of the Development Team?",
    str: "3-9 members",
    arrQA: [
      "5-10 members",
      "3-9 members",
      "10-15 members",
      "It varies based on the project size",
    ],
  },
  {
    ques: "What is the purpose of the Sprint Burndown Chart?",
    str: "Showing the progress of the team toward completing the tasks in the Sprint Backlog",
    arrQA: [
      "Tracking the total work remaining in the Product Backlog",
      "Showing the progress of the team toward completing the tasks in the Sprint Backlog",
      "Evaluating the performance of individual team members",
      "Planning the work for the next Sprint",
    ],
  },
  {
    ques: "Who is responsible for creating and maintaining the Sprint Burndown Chart?",
    str: "Development Team",
    arrQA: [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager",
    ],
  },
  {
    ques: "What is the role of the Scrum Master during the Sprint Review?",
    str: "Facilitating the meeting and ensuring that it takes place",
    arrQA: [
      "Presenting the product increment to stakeholders",
      "Facilitating the meeting and ensuring that it takes place",
      "Providing a detailed status update",
      "Planning the next Sprint",
    ],
  },
  {
    ques: "What is the purpose of the Scrum of Scrums?",
    str: "Facilitating communication and coordination between multiple Scrum Teams",
    arrQA: [
      "Reviewing the Product Backlog",
      "Facilitating communication and coordination between multiple Scrum Teams",
      "Planning the next Sprint",
      "Conducting a retrospective for the entire project",
    ],
  },
  {
    ques: "In Scrum, what is the definition of 'Ready' for a Product Backlog item?",
    str: "The item is fully defined, estimated, and meets the team's criteria for being workable",
    arrQA: [
      "The item is prioritized",
      "The item is fully defined, estimated, and meets the team's criteria for being workable",
      "The item is in progress",
      "The item is completed",
    ],
  },
  {
    ques: "What is the purpose of the Scrum Guide?",
    str: "The official guide to the rules of Scrum, providing a common understanding for all Scrum Team members",
    arrQA: [
      "A document defining the Scrum Master's responsibilities",
      "A detailed plan for implementing Scrum in a specific project",
      "The official guide to the rules of Scrum, providing a common understanding for all Scrum Team members",
      "A set of best practices for Scrum implementation",
    ],
  },
  {
    ques: "What is the role of the Product Owner during the Sprint Retrospective?",
    str: "Identifying improvements for the next Sprint",
    arrQA: [
      "Facilitating the meeting",
      "Identifying improvements for the next Sprint",
      "Reviewing the product increment",
      "Assigning tasks to the Development Team",
    ],
  },
  {
    ques: "A task in the project has a duration = 12 days. What is the effort if 4 people are planning to work on this task?",
    str: "48 days",
    arrQA: ["3 days", "8 days", "16 days", "48 days"],
  },
  {
    ques: "What is a “Critical Task”?",
    str: "A task that is on the Critical path",
    arrQA: [
      "A task that is on the Critical path",
      "A task that is difficult and expensive to dos",
      "A task that the customer prioritizes the most",
      "A task that makes the project criticals",
    ],
  },
  {
    ques: "Does all projects have a Critical Path?",
    str: "Yes",
    arrQA: ["Yes", "No"],
  },
  {
    ques: "A schedule’s “Critical Path” is:",
    str: "The sequence of tasks that tell us the duration for the project",
    arrQA: [
      "A path that includes all the project tasks   ",
      "The sequence of tasks that tell us the duration for the project",
      "An approach for simplifying schedules",
      "A list of the most difficult tasks",
    ],
  },
  {
    ques: "What is an “estimate”?",
    str: "An (educated) guess",
    arrQA: [
      "A promise",
      "An (educated) guess",
      "A guarantee",
      "A final figure",
    ],
  },
  {
    ques: "What is NOT an example of an estimating approach?",
    str: "Hierarchical",
    arrQA: ["Top-Down", "Hierarchical", "Analogous", "Parametric"],
  },
  {
    ques: "What model generate estimates based on statistical relationships and/or algorithms?",
    str: "Parametric",
    arrQA: ["Top-Down", "Hierarchical", "Analogous", "Parametric"],
  },
  {
    ques: "Which activity is done during Risk Assessment?",
    str: "Risk Identification",
    arrQA: [
      "Risk Identification",
      "Risk Monitoring",
      "Risk Management Planning",
      "Risk Resolution",
    ],
  },
  {
    ques: "If the Risk Probability = 3 and Risk Impact = 4, what is the Risk exposure?",
    str: "12",
    arrQA: ["0,75 (3/4)", "1,33 (4/3)", "7", "12"],
  },
  {
    ques: "A Risk is:",
    str: "An event that could impact the project, but has not yet happened",
    arrQA: [
      "A problem that is being managed",
      "An issue that has been assigned to someone in the project team",
      "An event that could impact the project, but has not yet happened",
      "An event where the project team must take a chance",
    ],
  },
  {
    ques: "Present Value: A friend borrows $670 from you. One year later he will pay back $770. At 10% interest rate what is the Present Value of $770?",
    str: "An event that could impact the project, but has not yet happened",
    arrQA: ["70", "670", "700", "770", "840"],
  },
  {
    ques: "Return on Investment (RoI): You invest $500. One year later you will receive $550. What is the RoI?",
    str: "10%",
    arrQA: ["0,5", "$550", "9%", "10%", "Negative"],
  },
  {
    ques: "you prefer to work on your own.",
    str: "True",
    arrQA: ["True", "False"],
  },
  {
    ques: "you think other people work as hard as you do.",
    str: "True",
    arrQA: ["True", "False"],
  },
  {
    ques: "When addressing someone involved in a conflict, ______.",
    str: "treat the person as you would want to be treated",
    arrQA: [
      "talk to him or her in front of other people",
      "try to embarrass them",
      "use “you” messages",
      "treat the person as you would want to be treated",
    ],
  },
  {
    ques: "Which is the first step in problem-solving?",
    str: "identify and analyze the problem",
    arrQA: [
      "collect and analyze data",
      "consider possible solutions",
      "identify and analyze the problem",
      "observe, evaluate, and adjust",
    ],
  },
  {
    ques: "A group technique used to develop many ideas in a relatively short time.",
    str: "brainstorming",
    arrQA: ["brainstorming", "compromise", "conflict", "consensus"],
  },
  {
    ques: "People who like to control others are the most effective team leaders.",
    str: "false",
    arrQA: ["true", "false"],
  },
  {
    ques: "Teamwork is the willingness people have to work with others toward common goals.",
    str: "True",
    arrQA: ["True", "False"],
  },
  {
    ques: "What is MOST important according to the Agile Manifesto?",
    str: "People and how they communicate",
    arrQA: [
      "Processes and tools",
      "Documentation and planning",
      "People and how they communicate",
      "Control and management",
    ],
  },
  {
    ques: "During the Sprint, Which one of Scrum Values must the Team demonstrate to achieve the goal?",
    str: "Commitment",
    arrQA: ["Completion", "Commitment", "Agreement", "Alignment"],
  },
  {
    ques: "The length of a Sprint should be:",
    str: "All of these answers are correct",
    arrQA: [
      "Short enough to keep the business risk acceptable for the Product Owner",
      "Short enough to be able to synchronize the development work with other business events",
      "No more than one month",
      "All of these answers are correct",
    ],
  },
  {
    ques: "When is the Sprint finished?",
    str: "When the time box expires",
    arrQA: [
      "When the time box expires",
      "As determined by the size of the Team",
      "When tasks are complete",
      "When all Product Backlog items have meet their definition of done",
    ],
  },
  {
    ques: "The Product Backlog is ordered by",
    str: "Least valuable items at the top to most valuable at the bottom",
    arrQA: [
      "Small items at the top to large items at the bottom.",
      "Items are randomly arranged.",
      "Least valuable items at the top to most valuable at the bottom",
      "Whatever is deemed most appropriate by the Product Owner",
    ],
  },
  {
    ques: "A developer identified a major technical issue during a Daily Scrum. What should the team do?",
    str: "Meet and discuss outside of Daily Scrum",
    arrQA: [
      "Meet and discuss outside of Daily Scrum",
      "Continue to discuss during the Daily Scrum",
      "Report it to the Product Owner",
      "Discuss it during the Sprint Review",
    ],
  },
  {
    ques: "Which one is true for Sprint Planning?",
    str: "The work to be performed in the Sprint is planned",
    arrQA: [
      "The work to be performed in the Sprint is planned",
      "Demo of the previous increment is done",
      "Customers will share the feedback",
      "The Product Backlog is refined",
    ],
  },
  {
    ques: "Daily Scrum is used to",
    str: "inspect and adapt work toward the Sprint Goal.",
    arrQA: [
      "assign tasks.",
      "demo the changes to Stakeholders",
      "estimate the pending work.",
      "inspect and adapt work toward the Sprint Goal.",
    ],
  },
  {
    ques: "Which of the following is true concerning impediments?",
    str: "It is the Scrum Master’s top priority to remove impediments",
    arrQA: [
      "The Developers should not use daily Scrum meeting to report impediments",
      "It is the Product Owner’s job to remove impediments",
      "It is the Scrum Master’s top priority to remove impediments",
      "A slow running server is not considered an impediment",
    ],
  },
  {
    ques: "Which of the following are NOT activities found in the Scrum framework? ",
    str: "Weekly scrum or weekly standup",
    arrQA: [
      "Weekly scrum or weekly standup",
      "Sprint planning",
      "Sprint review",
      "Sprint retrospective",
      "Daily scrum",
    ],
  },
  {
    ques: "What are the main phases in the Project Management Process?",
    str: "Initiate, Plan, Execute, Close",
    arrQA: [
      "Initiate, Plan, Execute, and Retrospective",
      "Initiate, Plan, Execute, Close",
      "Initiate, Estimate, Execute, Close",
      "Evaluate, Plan, Execute, Close",
    ],
  },
  {
    ques: "A S.M.A.R.T. project goal is?",
    str: "Specific",
    arrQA: ["Specific", "Mandatory", "Attractive", "Robust", "Time efficient"],
  },
  {
    ques: "Which Task Dependency is correct?",
    str: "Finish to Finish",
    arrQA: [
      "Finish to Finish",
      "Beginning to End",
      "End to Beginning",
      "Start to Stop",
    ],
  },
  {
    ques: "A task in the project has a duration = 18 days with 3 engineers assigned to do the task. What is the Effort?",
    str: "54 days",
    arrQA: ["6 days", "15 days", "30 days", "54 days"],
  },
  {
    ques: "What is a “Critical Task”?",
    str: "A task that is on the Critical path",
    arrQA: [
      "A task that is on the Critical path",
      "A task that is difficult and expensive to do",
      "A task that the customer prioritizes the most",
      "A task that makes the project critical",
    ],
  },
  {
    ques: "Present Value: A friend borrows $670 from you. One year later he will pay back $770. At 10% interest rate what is the Present Value of $770?",
    str: "700",
    arrQA: ["70", "670", "700", "770"],
  },
  {
    ques: "Which one is NOT a basic/mandatory role in any Project?",
    str: "Line manager",
    arrQA: ["Line manager", "Project manager", "Sponsor", "Project team"],
  },
  {
    ques: "What is NOT the Project Team’s responsibility?",
    str: "Secure that the project is profitable, The company can make money from it",
    arrQA: [
      "Plan and organize own activities",
      "Report accomplishments and hours worked",
      "Secure that the project is profitable, The company can make money from it",
      "Follow the quality system, methods and routines",
    ],
  },
  {
    ques: "What is the Project Purpose?",
    str: "What we will achieve (benefit) from the project delivery",
    arrQA: [
      "Information about Why we do the project",
      "What we will achieve (benefit) from the project delivery",
      "The actual delivery from the project",
      "The list of things we purchase in the project",
    ],
  },
  {
    ques: "Which requirement is a Product requirement?",
    str: "The house shall have 150 m2, two-floors and four bedrooms",
    arrQA: [
      "Ready to move into the house by November 1, 2025",
      "Total cost may not exceed 2,5 billion VND",
      "Nguyen’s construction company shall build the house",
      "The house shall have 150 m2, two-floors and four bedrooms",
    ],
  },
  s,
];
