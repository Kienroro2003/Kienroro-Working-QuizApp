import { shuffle } from "./Questions";

const Questions = [
  {
    ques: "……….: Calculated, Designed, Programmed",
    str: "Technical skills",
    arrQA: [
      "Retail skills",
      "Management skills",
      "Technical skills",
      "Customer service skills",
    ],
  },
  {
    ques: "What NOT to include in an employment history section?",
    str: "Contact and personal details of your previous employers (1)",
    arrQA: [
      "Contact and personal details of your previous employers (1)",
      "Give a job description (2)",
      "Both (1) and (2) are correct",
      "Neither (1) nor (2) is correct",
    ],
  },
  {
    ques: "Generally, when asked about long-term goals, candidates should talk about where they want to be professionally in how many years?",
    str: "10 years",
    arrQA: ["3 years", "5 years", "10 years", "15 years"],
  },
  {
    ques: "In what cases should the education and training section of your CV come BEFORE your work experience and employment?",
    str: "Both (1) and (2)",
    arrQA: [
      "When having extremely impressive academic qualifications or training (1)",
      "When you‘ve just graduated with little experience but with many years of education (2)",
      "When you think it shows a better format (3)",
      "Both (1) and (2)",
    ],
  },
  {
    ques: "In which paragraph of a cover letter should you indicate the reason why you are writing this letter?",
    str: "One",
    arrQA: ["One", "Two", "Three", "Four"],
  },
  {
    ques: "I look forward to receiving your advice on this matter. is:",
    str: "The ending sentence of a formal letter asking for advice",
    arrQA: [
      "The beginning sentence of a formal letter giving advice",
      "The ending sentence of a formal letter giving advice",
      "The beginning sentence of a formal letter asking for advice",
      "The ending sentence of a formal letter asking for advice",
    ],
  },
  {
    ques: "Read the following sentence: I am so sorry to miss the opportunity of attending the Christmas party. What kind of letter does it belong to?",
    str: "Refusing an invitation (3)",
    arrQA: [
      "Giving an invitation (1)",
      "Accepting an invitation (2)",
      "Refusing an invitation (3)",
      "None of (1), (2), (3) is correct",
    ],
  },
  {
    ques: "Two years as a …. with retail experience in the fashion industry.",
    str: "Sale clerk",
    arrQA: ["Sale clerk", "Director", "Students", "None of the above"],
  },
  {
    ques: "In which paragraph should you state the reason you are writing the letter?",
    str: "The introduction (1)",
    arrQA: [
      "The introduction (1)",
      "The main body (2)",
      "The final paragraph (3)",
      "All of (1), (2), (3) are correct",
    ],
  },
  {
    ques: "Which of the following statements is correct about formal letter?",
    str: "No contraction should be used",
    arrQA: [
      "the greeting should be Dear + first name",
      "informal language should be used",
      "the ending should be Yours/Best wishes, + first name",
      "No contraction should be used",
    ],
  },
  {
    ques: "To contrast text on a presentation slide for better viewing, it is preferable to use:",
    str: "Dark text on a light background",
    arrQA: [
      "Dark text on a dark background",
      "Dark text on a light background",
      "Light text on a light background",
      "Light text on a dark background",
    ],
  },
  {
    ques: "In which part of the CV can you list your diploma and certificates?",
    str: "Education",
    arrQA: ["Personal Profile", "Career history", "Education", "Skills"],
  },
  {
    ques: "The possible order of points for describing the steps for doing something in sequence is known as:",
    str: "Chronological order",
    arrQA: [
      "Chronological order",
      "Spatial order",
      "Topical order",
      "Causal order",
    ],
  },
  {
    ques: "……..: Consulted, Guided, Served, take care of",
    str: "Customer service skills",
    arrQA: [
      "Financial skills",
      "Management skills",
      "Retail skills",
      "Customer service skills",
    ],
  },
  {
    ques: "When rehearsing a presentation, it is helpful to recognize and prevent:",
    str: "Fillers such as umm and ahh.",
    arrQA: [
      "Fillers such as umm and ahh.",
      "Criticism from friends in the room",
      "Possible questions from the audience",
      "Possible gestures",
    ],
  },
  {
    ques: "What can be included in the Education and Training section of a CV?",
    str: "All (1), (2), (3) are correct",
    arrQA: [
      "Academic results, degrees, diplomas and certificates (1)",
      "Technical and professional qualifications (2)",
      "Work and vocational training received (3)",
      "All (1), (2), (3) are correct",
    ],
  },
  {
    ques: "In which paragraph of a cover letter is your closing statement and is usually a polite call for action and that you are looking forward meeting the employer?",
    str: "Final paragraph (1)",
    arrQA: [
      "Final paragraph (1)",
      "First paragraph (2)",
      "Second paragraph (3)",
      "None of (1), (2), (3) is correct",
    ],
  },
  {
    ques: "Which hobby is not a good match for a web developer",
    str: "fishing",
    arrQA: ["designing website", "fishing", "computing", "setting up networks"],
  },
  {
    ques: "Which letter layout should you use to write to your teacher?",
    str: "semi-formal",
    arrQA: [
      "formal",
      "semi-formal",
      "informal",
      "None of (1), (2), (3) is correct",
    ],
  },
  {
    ques: "The purpose of a cover letter is for:",
    str: "All (1), (2), (3) are correct",
    arrQA: [
      "inform the employer about the position you are applying for (1)",
      "outline your strengths and abilities that match with the company’ needs (2)",
      "encourage the employer to read your CV and arrange a meeting for you (3)",
      "All (1), (2), (3) are correct",
    ],
  },
  {
    ques: "Information in employment history should include:",
    str: "companies you work for, dates, responsibilities, achievements",
    arrQA: [
      "companies you work for",
      "companies you work for, dates, responsibilities",
      "companies you work for, dates, responsibilities, achievements",
      "companies you work for, dates",
    ],
  },
  {
    ques: "The appropriate ending in an informal letter is:",
    str: "Yours",
    arrQA: ["Yours sincerely", "Yours faithfully", "Yours", "Both A and B"],
  },
  {
    ques: "Proper eye contact with the audience when delivering a presentation involves",
    str: "Making a sweeping glance of the audience from the left to the right and front to back of the room",
    arrQA: [
      "Staring at each audience member",
      "Making a sweeping glance of the audience from the left to the right and front to back of the room",
      "Making a sweeping glance of the audience from left to right in the front row of the room",
      "Looking above the audience’s heads",
    ],
  },
  {
    ques: "How long should it be for the personal profile of a CV?",
    str: "4-5 sentences",
    arrQA: [
      "4-5 sentences",
      "4-5 paragraphs",
      "1-2 sentences",
      "1-2 paragraphs",
    ],
  },
  {
    ques: "What should you always do after an interview",
    str: "Thank the interviewer",
    arrQA: [
      "Runaway",
      "Thank the interviewer",
      "Ask about pay",
      "Call them several times",
    ],
  },
  {
    ques: "Important guidelines to follow when writing the Reference section are:",
    str: "Both A and B",
    arrQA: [
      "Give the job title of the referees",
      "Ask permission of your referees",
      "Both A and B",
      "Neither A nor B",
    ],
  },
  {
    ques: "The group interview is",
    str: "a growing trend.",
    arrQA: [
      "never used.",
      "a growing trend.",
      "used only by new companies.",
      "All of the above",
    ],
  },
  {
    ques: "Which of the following is a requirement that a presenter should know to prepare effectively for a presentation?",
    str: "Presentation duration",
    arrQA: [
      "Presentation duration",
      "Foods the presenter can eat during the presentation",
      "Available attire",
      "Number of bullet points allowed per slide",
    ],
  },
  {
    ques: "Read the beginning of a letter: Can you give me your advice about a problem I’m having with my room-mates…Which of the following endings can match with it?",
    str: "Your advice would help me a lot. I know you’ve had similar problems and I’d like to know how you solved them. (2)",
    arrQA: [
      "…Once again, thanks for the invitation (1)",
      "Your advice would help me a lot. I know you’ve had similar problems and I’d like to know how you solved them. (2)",
      "I am confident that you will be successful in your new position. I wish you every success in your career (3)",
      "All of (1), (2), (3) are correct",
    ],
  },
  {
    ques: "……….in Microsoft Word, Access and Excel.",
    str: "Proficient",
    arrQA: ["Proficient", "Good", "Best", "All of the above"],
  },
  {
    ques: "The purpose of a presentation intended to sell a service to a potential client is to:",
    str: "Persuade",
    arrQA: ["Persuade", "Educate", "Inform", "Entertain"],
  },
  {
    ques: "A young professional working towards a diploma in Software Engineering with more than six months’ experience in mobile development and website design could be a suitable introduction in the Personal Profile of:",
    str: "a student",
    arrQA: [
      "an experienced graduate",
      "a recent graduate",
      "a student",
      "All of the above",
    ],
  },
  {
    ques: "For better readability, the number of bullet points on a slide should be:",
    str: "Less than 7",
    arrQA: ["7 to 10", "Any number", "Less than 7", "More than 7"],
  },
  {
    ques: "The outline of a presentation should include:",
    str: "A beginning, middle and an end of the presentation",
    arrQA: [
      "References",
      "Acknowledgments",
      "A beginning, middle and an end of the presentation",
      "Possible questions from the audience",
    ],
  },
  {
    ques: "What is NOT the characteristic of informal letter style?",
    str: "non – colloquial English",
    arrQA: [
      "idioms",
      "colloquial English",
      "non – colloquial English",
      "Abbreviated forms",
    ],
  },
  {
    ques: "I am writing to express my _________ at the appalling treatment I received while staying at your hotel.",
    str: "disgust",
    arrQA: ["satisfaction", "disgust", "gratitude", "complain"],
  },
  {
    ques: "Information about qualifications, training, previous experience, qualities and skills of job applicant should be presented in:",
    str: "the main body (2)",
    arrQA: [
      "the introduction part of a cover letter (1)",
      "the main body (2)",
      "the conclusion (3)",
      "None of (1), (2), (3) is correct",
    ],
  },
  {
    ques: "Panel interviews",
    str: "are challenging.",
    arrQA: [
      "are not used often.",
      "are more expensive for the company.",
      "are always used.",
      "are challenging.",
    ],
  },
  {
    ques: "Font size of the bullet points on presentation materials should be large enough:",
    str: "For the audience in the last row of the presentation room to view the presentation clearly",
    arrQA: [
      "For you to be able to read from the screen during the presentation",
      "For the audience in the first few rows of the presentation to view the presentation clearly",
      "For the audience in the last row of the presentation room to view the presentation clearly",
      "For your team members to be able to view the presentation clearly",
    ],
  },
  {
    ques: "Which of the following is a behavioural-based interview question?",
    str: "Can you describe a time when you worked under pressure?",
    arrQA: [
      "What are your weaknesses?",
      "What are your qualifications?",
      "What are your long-term goals?",
      "Can you describe a time when you worked under pressure?",
    ],
  },
  {
    ques: "Assistant with over 2 years of ….. providing thorough and skillful support to senior executives.",
    str: "Experience",
    arrQA: ["Knowledge", "Experience", "Interest", "Skills"],
  },
  {
    ques: ". ……. is a position in accounting field",
    str: "All of the above",
    arrQA: [
      "Bookkeeping",
      "Chief Accountant",
      "Staff Accountant",
      "All of the above",
    ],
  },
  {
    ques: "When an audience member without a microphone in a large audience asks a question during or after your presentation, it is important for the presenter to:",
    str: "Repeat the question for the benefit of others in the audience who might not have heard it",
    arrQA: [
      "Ask the audience member to come to the front of the room and ask the question",
      "Respond to the question immediately",
      "Ask others in the audience to shout the question",
      "Repeat the question for the benefit of others in the audience who might not have heard it",
    ],
  },
  {
    ques: "What should you be prepared to ask questions about?",
    str: "The job",
    arrQA: [
      "Employer’s personal life",
      "How much money you will make",
      "The job",
      "All of these",
    ],
  },
  {
    ques: "How should you dress for a job interview?",
    str: "None of these",
    arrQA: ["Jeans", "Sweat pants", "Lots of make up", "None of these"],
  },
  {
    ques: "Information should be included when writing a Personal Profile:",
    str: "All of the above",
    arrQA: ["Qualities", "Skills", "Experience", "All of the above"],
  },
  {
    ques: "The sentence: Thank you for the kind invitation which I would be honored to accept… is:",
    str: "beginning sentence of letter accepting invitation",
    arrQA: [
      "beginning sentence of letter of invitation",
      "ending sentence of letter of invitation",
      "beginning sentence of letter accepting invitation",
      "ending sentence of letter accepting invitation",
    ],
  },
  {
    ques: "Which of the followings can be used in a letter of complaint?",
    str: "I want to express my strong dissatisfaction with… (3)",
    arrQA: [
      "Your presence would be appreciated at… (1)",
      "How can I apologize enough for… (2)",
      "I want to express my strong dissatisfaction with… (3)",
      "Both (1) and (2) are correct",
    ],
  },
  {
    ques: "What language is the following statement in the opening remark of a letter of invitation: We cordially invite you to our 25th wedding anniversary?",
    str: "Formal (1)",
    arrQA: [
      "Formal (1)",
      "Informal (2)",
      "Neither (1) nor (2)",
      "Both (1) and (2)",
    ],
  },
  {
    ques: "In a cover letter, the job title you apply for should be stated in:",
    str: "Paragraph 1",
    arrQA: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
  },
  {
    ques: "Which of the following is used to give an addition idea?",
    str: "Furthermore (3)",
    arrQA: [
      "Because (1)",
      "Nevertheless (2)",
      "Furthermore (3)",
      "All of (1), (2), (3) are correct",
    ],
  },
  {
    ques: "The outline of a presentation is a:",
    str: "List of major headings or topics to be covered in the presentation",
    arrQA: [
      "List of requirements and purpose of the presentation",
      "List of major headings or topics to be covered in the presentation",
      "List of technologies that will be used to deliver the presentation",
      "List of external sources used in the presentation",
    ],
  },
  {
    ques: "What is essential (mandatory/must be there) information in the Personal details in the C.V?",
    str: "Phone number",
    arrQA: ["Phone number", "Age/The year you are born", "Gender", "Photo"],
  },
  {
    ques: "Read the complaint: When we receive the bill, we realized that we had been charged the full price. Which of the following justifications can be match with this?",
    str: "We were told there would be a 20% discount if we ordered before June (1)",
    arrQA: [
      "We were told there would be a 20% discount if we ordered before June (1)",
      "I have only used it three times (2)",
      "I book a room with a private bathroom (3)",
      "Both (2) and (3) are correct",
    ],
  },
  {
    ques: "When using content from external sources in presentation materials, it is necessary to include:",
    str: "Citations and references",
    arrQA: [
      "Trademark symbol",
      "Copyright disclaimer",
      "Citations and references",
      "Acknowledgments",
    ],
  },
  {
    ques: "Letter of condolence is to express",
    str: "sympathy",
    arrQA: ["congratulations", "sympathy", "advice", "thanks"],
  },
  {
    ques: "In which part of a CV should you indicate your reference?",
    str: "Reference",
    arrQA: ["Personal profile", "Education", "Employment history", "Reference"],
  },
  {
    ques: "The Personal Details section is located completely at the ______ of the CV.",
    str: "top",
    arrQA: ["top", "bottom", "middle", "none of the above"],
  },
  {
    ques: "……..: Analyzed, Balanced, Budgeted, Forecasted, Marketed, Planned, Projected",
    str: "Financial skills",
    arrQA: [
      "Financial skills",
      "Management skills",
      "Technical skills",
      "Customer service skills",
    ],
  },
  {
    ques: "The style of a cover letter is:",
    str: "formal (1)",
    arrQA: [
      "formal (1)",
      "informal (2)",
      "semi-informal (3)",
      "All of (1), (2), (3) are correct",
    ],
  },
  {
    ques: "What should you do after the job interview?",
    str: "Write a thank you letter to the interviewer",
    arrQA: [
      "Write a thank you letter to the interviewer",
      "Review the job profile",
      "Call the interviewer to ask about the result of the interview",
      "do nothing",
    ],
  },
  {
    ques: "One advance preparation you can do to overcome initial nervousness when delivering a presentation is to:",
    str: "Introduce yourself to the audience before the presentation and get to know them",
    arrQA: [
      "Walk into the room just before the presentation",
      "Hydrate yourself by drinking a lot of water before the presentation",
      "Ask the audience write down their questions and give them to you in advance",
      "Introduce yourself to the audience before the presentation and get to know them",
    ],
  },
  {
    ques: "Which is NOT correct about an excellent Personal Profile Statement?",
    str: "could contain negative information",
    arrQA: [
      "Relevant",
      "Short and to the point!",
      "Only contain positive information",
      "could contain negative information",
    ],
  },
  {
    ques: "For better readability, it is preferable that bullet points are:",
    str: "Short phrases or partial sentences",
    arrQA: [
      "Short phrases or partial sentences",
      "Page of text",
      "Long sentences",
      "Complete paragraphs",
    ],
  },
  {
    ques: "Which of these are extremely important during a job interview?",
    str: "All of these",
    arrQA: ["Eye contact", "Your dress", "First impression", "All of these"],
  },
  {
    ques: "When the greeting in a letter is Dear Sir/Madam, the appropriate ending should be:",
    str: "Yours faithfully",
    arrQA: ["Yours sincerely", "Yours", "Yours faithfully", "Best regards"],
  },
  {
    ques: "When delivering a presentation as part of a team it is important to:",
    str: "Coordinate your portion with others in the team and not duplicate their presentations",
    arrQA: [
      "Coordinate your portion with others in the team and not duplicate their presentations",
      "Make sure all the team members’ names are listed in order on all the presentation materials",
      "Make sure all the team members have the same duration to present their portion",
      "Coordinate your portion with others in the team so you can present first",
    ],
  },
  {
    ques: "When delivering a presentation, you should:",
    str: "Dress formal attire",
    arrQA: [
      "Dress formal attire",
      "Speak with a mono-tone voice",
      "Fold your arms",
      "Read directly from your notes",
    ],
  },
  {
    ques: "Which is something you should do at the beginning of an interview",
    str: "All of these",
    arrQA: [
      "Shake the person’s hand",
      "Smile",
      "Tell the employer your name",
      "All of these",
    ],
  },
  {
    ques: " Despite the fact that / Although / In spite the fact that are the connectors used to show____",
    str: "a concession (2)",
    arrQA: [
      "a process (1)",
      "a concession (2)",
      "a complete contrast (3)",
      "none of (1), (2), (3) is correct",
    ],
  },
  {
    ques: "___________is a vital part of your CV and it is a short statement outlining your personal characteristics.",
    str: "Personal profile",
    arrQA: ["Employment history", "Personal profile", "Reference", "Education"],
  },
  {
    ques: "Research the company before the job interview to find out:",
    str: "All of (1), (2), (3) are correct",
    arrQA: [
      "company’s history, culture, staff (1)",
      "mission and values (2)",
      "recent success (3)",
      "All of (1), (2), (3) are correct",
    ],
  },
  {
    ques: "It is generally NOT a good practice to deliver a presentation by:",
    str: "Reading the entire presentation line by line",
    arrQA: [
      "Mentioning the highlights of what is on the screen",
      "Reading the entire presentation line by line",
      "Paraphrasing what is on the presentation materials",
      "Elaborating each bullet point on the presentation materials",
    ],
  },
  {
    ques: "Speak English ………….",
    str: "Fluently",
    arrQA: ["Very good", "Fluently", "Best", "All of the above"],
  },
  {
    ques: "Which guideline is USEFUL for writing a Cover Letter?",
    str: "Show enthusiasm for working in that company",
    arrQA: [
      "The longer Cover Letter the better. It will tell the employer how good you are",
      "If you really want this job, beg them to hire you",
      "Show enthusiasm for working in that company",
      "Copy the information in your C.V. into your Cover Letter",
    ],
  },
  {
    ques: "How should you handle a question about your weaknesses?",
    str: "Mention a weakness, then say something positive.",
    arrQA: [
      "Use humour.",
      "Mention whatever comes to mind.",
      "Mention a weakness, then say something positive.",
      "Tell the interviewer that you dont have any.",
    ],
  },
  {
    ques: "In the Education section, you could mention your high school level",
    str: "False",
    arrQA: ["True", "False"],
  },
  {
    ques: "The beginning sentence: I am writing to accept your kind invitation to the charity ball matches with the ending:",
    str: "Once again, thank you for the invitation.",
    arrQA: [
      "Please send the details soon.",
      "I hope you will accept my apology.",
      "Once again, thank you for the invitation.",
      "I hope that this advice will prove useful.",
    ],
  },
  {
    ques: "Who could be mentioned in your reference section?",
    str: "your boss",
    arrQA: ["your mom", "your close friend", "your boss", "None of the above"],
  },
  {
    ques: "When should you send a thank-you letter to the interviewers?",
    str: "Within 24 hours of the interview",
    arrQA: [
      "Within 24 hours of the interview",
      "Within 48 hours of the interview",
      "Within 72 hours of the interview",
      "Within 7 days of the interview",
    ],
  },
  {
    ques: "What information is OPTIONAL to include in the personal detail section of a CV?",
    str: "Marital Status",
    arrQA: ["Email address", "Telephone number", "Name", "Marital Status"],
  },
  {
    ques: "Which of the following statements is incorrect about letter of complaint?",
    str: "Abusive language should be used",
    arrQA: [
      "Letter of complaint is normally written in a formal style.",
      "Mild or strong language can be used depending on the feelings of the writer.",
      "Mild or strong language can be used depending on the seriousness of the complaint.",
      "Abusive language should be used",
    ],
  },
  {
    ques: "….. communication, interpersonal, and presentation skills.",
    str: "Both of them",
    arrQA: ["Good", "Strong", "Both of them", "None of them"],
  },
  {
    ques: "What is NOT a good strategy if you are unable to answer a question from an audience member during your presentation?",
    str: "Acknowledge you don’t know the answer and say the question was irrelevant to the topic of the presentation",
    arrQA: [
      "Ask the audience member to see you after the presentation so you can understand the question better and answer it",
      "Acknowledge you don’t know the answer and would think and get back to the questioner",
      "Ask others in the audience if they could answer the question",
      "Acknowledge you don’t know the answer and say the question was irrelevant to the topic of the presentation",
    ],
  },
  {
    ques: "What should NOT be mentioned in your Hobbies and Interests section?",
    str: "Al of the above",
    arrQA: [
      "risky or time-consuming hobbies",
      "political or religious affiliations",
      "Irrelevant hobbies",
      "Al of the above",
    ],
  },
  {
    ques: "The sentence: I just received your letter and I’m sorry to hear that you’re having trouble… is:",
    str: "beginning sentence of an informal letter",
    arrQA: [
      "beginning sentence of an informal letter",
      "ending sentence of an informal letter",
      "beginning sentence of a formal letter",
      "ending sentence of a formal letter",
    ],
  },
  {
    ques: "…… : Administered, Improved, Coordinated, Analyzed, Evaluated, Directed, Developed, Supervised",
    str: "Management skills",
    arrQA: [
      "Retail skills",
      "Management skills",
      "Personal skills",
      "Customer service skills",
    ],
  },
  {
    ques: "Which information is essential to include in the Personal Details section of the CV?",
    str: "All of the above",
    arrQA: [
      "Name (in big, bold writing)",
      "Email address",
      "Telephone number",
      "All of the above",
    ],
  },
  {
    ques: "The employment section can contain details of type of jobs:",
    str: "All of (1), (2), (3) are correct",
    arrQA: [
      "Permanent/temporary jobs (1)",
      "Full-time/part-time jobs (2)",
      "Voluntary jobs/ internships (3)",
      "All of (1), (2), (3) are correct",
    ],
  },
  {
    ques: "Another name for a CV is a _______",
    str: "Resume (1)",
    arrQA: [
      "Resume (1)",
      "Cover letter (2)",
      "Employment history (3)",
      "None of (1), (2), (3) is correct",
    ],
  },
  {
    ques: "Education and training should include:",
    str: "All of (1), (2), (3) are correct",
    arrQA: [
      "Academic results (1)",
      "degrees (2)",
      "diplomas and certificates (3)",
      "All of (1), (2), (3) are correct",
    ],
  },
  {
    ques: "Who shouldn’t write hobbies and interests in their CV:",
    str: "Senior professionals including executive and directors",
    arrQA: [
      "University students",
      "Candidates with little or no experience",
      "School leavers",
      "Senior professionals including executive and directors",
    ],
  },
  {
    ques: "A highly organized and ….. accountant with over 3 years experience providing services in tax department.",
    str: "Detail-oriented",
    arrQA: ["Well-known", "Detail-oriented", "Good-looking", "Successful"],
  },
  {
    ques: "Important considerations in rehearsing a presentation are:",
    str: "Timing and pace",
    arrQA: ["Attire", "Audience", "Food and beverages", "Timing and pace"],
  },
  {
    ques: "An achievement-focused CV is preferable than duties-focused CV?",
    str: "True",
    arrQA: ["True", "False"],
  },
  {
    ques: "In selecting presentation technologies, it is important to select technologies that are:",
    str: "Available and can be used at the presentation location",
    arrQA: [
      "Freely available to download and use",
      "The state-of-the-art in presentation technologies",
      "Available and can be used at the presentation location",
      "Commonly used by presenters",
    ],
  },
  {
    ques: "In which part of the CV can you list the places and job you have done in the past?",
    str: "Employment history",
    arrQA: ["Personal Profile", "Employment history", "Education", "Skills"],
  },
  {
    ques: "The appropriate greeting in an informal letter is:",
    str: "Dear Peter",
    arrQA: [
      "Dear Peter",
      "Dear Peter Pike",
      "Dear Mr. Pike",
      "Dear Mr. Peter Pike",
    ],
  },
  {
    ques: "The main body of a letter of asking for advice is about:",
    str: "description of problems",
    arrQA: [
      "the reason(s) for writing",
      "description of problems",
      "closing remarks",
      "your full name",
    ],
  },
  {
    ques: "An appropriate ending for a good formal letter should be:",
    str: "Yours sincerely/ Yours faithfully + full name",
    arrQA: [
      "Yours sincerely/ Yours faithfully + full name",
      "Yours sincerely/ Yours faithfully + first name",
      "Yours/ Best wishes + First name",
      "Yours/ Best wishes + Full name",
    ],
  },
];

const size = Questions.length;
let index = 0;
let itemPerVar = 20;
const Questions2 = [...Questions].splice(index, itemPerVar);
console.log(Questions2.length, index);
index += itemPerVar;
const Questions3 = [...Questions].splice(index, itemPerVar);
console.log(Questions3.length, index);
index += itemPerVar;
const Questions4 = [...Questions].splice(index, itemPerVar);
console.log(Questions4.length, index);
index += itemPerVar;
const Questions5 = [...Questions].splice(index, itemPerVar);
console.log(Questions5.length, index);
index += itemPerVar;
const Questions6 = [...Questions].splice(index, itemPerVar);
console.log(Questions6[Questions6.length - 1], index);

shuffle(Questions);
shuffle(Questions2);
shuffle(Questions3);
shuffle(Questions4);
shuffle(Questions5);
shuffle(Questions6);

export {
  Questions,
  Questions2,
  Questions3,
  Questions4,
  Questions5,
  Questions6,
};
