module.exports = [
  {
    id: "m1",
    title: "Introduction to the Australian Property Management Industry",
    track: "free",
    duration: "Free · 1 hour live (Zoom) + self-study",
    objectives: [
      "Describe what a property manager does for a rental provider",
      "Name the main state laws and regulators that govern tenancies",
      "Use core Australian industry terms correctly",
    ],
    lessons: [
      {
        title: "What a property manager does",
        paragraphs: [
          "A property manager acts for the rental provider (the owner). They find tenants, collect rent, arrange repairs and inspections, and manage the tenancy until it ends. The agency is paid a fee, often a percentage of rent plus leasing fees, as set out in the management agreement.",
          "Property management is a licensed profession. The licensed property manager is accountable for the agency's work, even when assistants do much of the administration.",
        ],
      },
      {
        title: "Who makes the rules: state and territory law",
        paragraphs: [
          "Tenancy law is set by each state and territory, not nationally. Confirm you are working from the current version of the Act and the regulator's website, because laws are amended regularly.",
        ],
        table: {
          headers: ["State", "Tenancy law (examples)", "Regulator / bond authority (examples)"],
          rows: [
            ["NSW", "Residential Tenancies Act 2010", "NSW Fair Trading; Rental Bonds Online"],
            ["VIC", "Residential Tenancies Act 1997", "Consumer Affairs Victoria; Residential Tenancies Bond Authority"],
            ["QLD", "Residential Tenancies and Rooming Accommodation Act 2008", "Office of Fair Trading; RTA bond lodgement"],
            ["WA", "Residential Tenancies Act 1987", "Consumer Protection (Bond Administrator)"],
            ["SA", "Residential Tenancies Act 1995", "Consumer and Business Services"],
          ],
        },
      },
    ],
    keyTerms: [
      ["Rental provider", "The Australian term for landlord or owner"],
      ["Tenancy agreement", "The lease. Also called a residential tenancy agreement"],
      ["Bond", "Security deposit held by a government bond authority, not by the agency"],
      ["Routine inspection", "Periodic inspection of the property, with notice given as state law requires"],
      ["Trust account", "Separate account holding money that belongs to others, such as rent and bonds"],
      ["Tradie", "A tradesperson such as a plumber, electrician or carpenter"],
    ],
    activity: {
      title: "Map your state",
      steps: [
        "Choose one Australian state.",
        "Find its tenancy Act, regulator, bond authority and tribunal (for example NCAT in NSW or VCAT in Victoria).",
        "Create a one-page summary table with those four items, and add the date you checked them.",
      ],
    },
    caseStudy: {
      title: "Which law applies?",
      scenario:
        "You manage a unit in Brisbane and a house in Sydney. A tenant in Brisbane asks how long the bond refund takes after they move out. Your supervisor is in a meeting.",
      questions: [
        "Which state's tenancy law applies, and how do you know?",
        "Which authority holds the bond in each state?",
        "Why should you not answer from memory alone, and what should you do instead?",
      ],
    },
    quiz: [
      {
        id: "m1q1",
        question: "Who does a property manager primarily work for?",
        options: ["The tenant", "The rental provider (owner)", "The bond authority", "The local council"],
        answer: 1,
        explanation: "The property manager acts on behalf of the rental provider under the management agreement.",
      },
      {
        id: "m1q2",
        question: "Which is the Australian term for a landlord?",
        options: ["Occupant", "Guarantor", "Rental provider", "Proprietor-tenant"],
        answer: 2,
        explanation: "'Rental provider' is the standard term used in tenancy legislation and industry practice.",
      },
    ],
  },

  {
    id: "m2",
    title: "Roles and Responsibilities of a Property Manager Assistant",
    track: "free",
    duration: "Free · 1 hour live (Zoom) + self-study",
    objectives: [
      "List the day-to-day tasks of a property manager assistant",
      "Identify which decisions must be escalated to the licensed property manager",
      "Write professional, scripted replies for common enquiries",
    ],
    lessons: [
      {
        title: "What you do",
        paragraphs: [
          "As an assistant you support the team with administration: recording data in the software, answering routine enquiries from approved scripts, logging maintenance requests, booking inspections, preparing documents for review, and tracking rent and lease dates.",
          "Your work must be accurate and auditable. Every change you make should be traceable to a date, a person and a reason.",
        ],
      },
      {
        title: "The limits of the role",
        paragraphs: [
          "Assistants are usually unlicensed. You do not give legal advice, agree to lease changes, approve repairs above the owner's limit, or decide on rent arrears, termination or eviction. Escalate these to the licensed property manager.",
          "Rule of thumb: when in doubt, escalate, and tell the person you are passing it on and when they can expect an answer.",
        ],
      },
    ],
    keyTerms: [
      ["Escalate", "Pass a matter to a more senior or licensed person"],
      ["Scripted response", "An approved, pre-written reply for routine questions"],
      ["Audit trail", "A record showing who did what, and when"],
      ["Confidentiality", "Keeping tenant and owner information private"],
    ],
    activity: {
      title: "Write and classify three scripted replies",
      steps: [
        "Write a reply to a tenant whose rent is 3 days late.",
        "Write a reply to a tenant reporting an urgent leak.",
        "Write a reply to a tenant asking whether they can end the lease early.",
        "For each reply, mark whether you can answer it or must escalate it, and say why.",
      ],
    },
    caseStudy: {
      title: "The early lease exit",
      scenario:
        "A tenant emails at 4pm: 'My job moved me interstate. Can I leave early without paying anything?' Nothing in the file shows an agreed exit.",
      questions: [
        "What should your reply say, and what should it avoid saying?",
        "Who makes the decision, and what information do they need from you?",
        "What do you record in the software?",
      ],
    },
    quiz: [
      {
        id: "m2q1",
        question: "A tenant asks whether they can break their lease early without penalty. What do you do?",
        options: [
          "Answer from memory of the law",
          "Escalate to the licensed property manager",
          "Tell them to stop paying rent",
          "Ignore the email",
        ],
        answer: 1,
        explanation: "Lease exits involve legal and contractual decisions that belong to the licensed property manager.",
      },
      {
        id: "m2q2",
        question: "Which task is normally within an assistant's role?",
        options: [
          "Approving a $2,000 repair",
          "Logging a maintenance request with photos",
          "Deciding on an eviction",
          "Signing the lease for the owner",
        ],
        answer: 1,
        explanation: "Logging requests accurately is core admin work. Approvals and legal decisions are not.",
      },
    ],
  },

  {
    id: "m3",
    title: "Understanding the Role of Each Person Involved",
    track: "free",
    duration: "Free · 1 hour live (Zoom) + self-study",
    objectives: [
      "Describe the role of each party in a tenancy",
      "Know who to contact for approvals, repairs and disputes",
      "Trace a single request through the people involved",
    ],
    lessons: [
      {
        title: "The people in a tenancy",
        paragraphs: [
          "Every tenancy involves several people who each have a clear role. Knowing who decides what prevents delays and mistakes.",
        ],
        table: {
          headers: ["Role", "What they do", "You will usually deal with them about"],
          rows: [
            ["Rental provider", "Owns the property; approves major decisions", "Owner statements, approvals"],
            ["Tenant", "Lives in the property; pays rent; reports repairs", "Rent, requests, enquiries"],
            ["Licensed property manager", "Accountable for the agency's work and trust money", "Escalations, sign-offs"],
            ["Property manager assistant", "Provides admin support", "Data, scheduling, records"],
            ["Leasing consultant", "Markets properties; screens applicants", "Listings, applications"],
            ["Tradies", "Carry out repairs (plumbers, electricians)", "Quotes, bookings, completion"],
            ["Strata or body corporate manager", "Runs shared property in apartments and strata schemes", "Common-area issues"],
          ],
        },
      },
      {
        title: "When people disagree: tribunals",
        paragraphs: [
          "If parties cannot settle a dispute, it may go to a state tribunal, such as NCAT (NSW), VCAT (Victoria), QCAT (Queensland), SAT (WA) or SACAT (SA). Tribunal matters are always handled by the licensed property manager, with records kept carefully.",
        ],
      },
    ],
    keyTerms: [
      ["Owner statement", "A periodic report of income, expenses and net payment to the rental provider"],
      ["Strata", "Shared ownership of an apartment or community building"],
      ["Body corporate", "The Queensland term for a strata owners' body"],
      ["Tribunal", "A state body that resolves tenancy and property disputes"],
    ],
    activity: {
      title: "Trace a hot water repair",
      steps: [
        "A tenant reports no hot water on a Monday morning.",
        "Write the chain of communication: who you tell, who approves, who books the tradie, and who informs the tenant.",
        "Mark which steps are yours and which need the licensed property manager or the rental provider.",
      ],
    },
    caseStudy: {
      title: "Repair above the limit",
      scenario:
        "A plumber quotes $1,650 to replace a hot water system. The management agreement sets the owner's approval limit at $1,000. The tenant has two children and no hot water.",
      questions: [
        "Who must approve the quote, and under what document?",
        "What information must your approval request contain?",
        "What do you tell the tenant while approval is pending?",
      ],
    },
    quiz: [
      {
        id: "m3q1",
        question: "Who usually approves repairs above the owner's approval limit?",
        options: [
          "The tenant",
          "The rental provider, as set out in the management agreement",
          "The property manager assistant",
          "The tradie",
        ],
        answer: 1,
        explanation: "The approval threshold and process are set in the management agreement with the rental provider.",
      },
      {
        id: "m3q2",
        question: "Which body in NSW typically handles residential tenancy disputes?",
        options: ["NCAT", "VCAT", "QCAT", "SAT"],
        answer: 0,
        explanation: "NCAT (NSW Civil and Administrative Tribunal) hears most NSW residential tenancy matters.",
      },
    ],
  },

  {
    id: "m4",
    title: "Understanding the Admin Software",
    track: "free",
    duration: "Free · 1 hour live (Zoom) + self-study",
    objectives: [
      "Explain what property management software does",
      "Identify the main platforms you will meet in the industry",
      "Explain why data accuracy matters",
    ],
    lessons: [
      {
        title: "What the software does",
        paragraphs: [
          "Property management software is the agency's central record. It holds properties, owners, tenants, leases, the rent ledger, trust accounting, maintenance jobs, inspections, documents and communication. Many systems also include owner and tenant portals.",
        ],
      },
      {
        title: "Platforms you will meet",
        paragraphs: [
          "Vendors update features often. Confirm details against each vendor's current documentation or your employer's training before relying on them.",
        ],
        table: {
          headers: ["Platform", "Typical use in an agency"],
          rows: [
            ["PropertyMe", "Full property management: leases, rent, trust accounting, maintenance"],
            ["VaultRE", "Agency platform combining CRM, listings and property management"],
            ["Ignite", "Property management software with accounting and maintenance workflows"],
            ["Inspection Express", "Mobile inspection reports and condition documentation"],
          ],
        },
      },
    ],
    keyTerms: [
      ["Ledger", "Record of everything charged and paid on a tenancy"],
      ["Trust account", "Account that holds money belonging to others"],
      ["CRM", "Customer relationship management: tracks enquiries and leads"],
      ["Data hygiene", "Keeping records complete, correct and up to date"],
    ],
    activity: {
      title: "Compare the platforms",
      steps: [
        "Create a table with the four platforms and one column named 'What I would use it for'.",
        "For each platform, write two questions you would ask a vendor before buying it.",
        "Share your table in the Zoom session for discussion.",
      ],
    },
    caseStudy: {
      title: "The wrong payee",
      scenario:
        "A rent payment is recorded against the wrong tenancy because of a data-entry error. The owner statement is now incorrect, and the tenant has received an arrears notice.",
      questions: [
        "What caused the problem, and at what stage did it start?",
        "How do you correct the record without deleting the original entry?",
        "Who must be told, and how should you explain it?",
      ],
    },
    quiz: [
      {
        id: "m4q1",
        question: "Which area of the software tracks money held on behalf of others?",
        options: ["Inspection reports", "Trust accounting", "Listings", "Tenant portal"],
        answer: 1,
        explanation: "Trust accounting keeps money belonging to others, such as rent, separate from agency funds.",
      },
      {
        id: "m4q2",
        question: "Why does data accuracy matter in property management?",
        options: [
          "So the ledger and records are correct and auditable",
          "So the software looks busy",
          "It does not matter much",
          "So tenants receive more emails",
        ],
        answer: 0,
        explanation: "Ledgers, owner statements and trust records must be accurate and traceable.",
      },
    ],
  },

  {
    id: "m5",
    title: "Understanding Actual Daily Property Management Workflows",
    track: "paid",
    duration: "Paid · Live session 1 hour + workflow practice",
    objectives: [
      "Structure a typical working day in an agency",
      "Explain the leasing workflow from listing to move-in",
      "Describe the arrears and end-of-tenancy processes at a high level",
    ],
    lessons: [
      {
        title: "A typical day",
        paragraphs: [
          "Start by checking the shared inbox and the overdue rent report. Next, review new maintenance requests, leases ending in the next 60 to 90 days, inspections due this week, and bonds that must be lodged within your state's deadline.",
          "Midday is for processing payments, updating records and calling tradies. End the day with clear notes and a handover so the next person knows what is outstanding.",
        ],
      },
      {
        title: "The leasing workflow",
        paragraphs: ["Each step has a record and a responsible person. Missing a step causes problems later."],
        diagram:
          "Listing → Enquiry → Inspection → Application → Referencing → Offer\n   ↓\nAgreement → Bond lodged → Keys handed over → Entry condition report → Move-in",
      },
    ],
    keyTerms: [
      ["Entry condition report", "Signed record of the property's condition at the start of a tenancy"],
      ["Referencing", "Checking an applicant's identity, income and rental history"],
      ["Arrears", "Rent that is overdue"],
      ["Exit inspection", "Inspection at the end of a tenancy to compare with the entry report"],
      ["Bond claim", "A request to the bond authority to pay part of the bond to the owner or tenant"],
    ],
    activity: {
      title: "Draw the leasing flow",
      steps: [
        "On paper or in a diagram tool, draw the leasing workflow from listing to move-in.",
        "Label the step where the bond is lodged and the step where the condition report is completed.",
        "Mark the three steps where a mistake would cost the most, and explain why.",
      ],
    },
    caseStudy: {
      title: "The missing condition report",
      scenario:
        "A tenant moves in on Friday. The condition report is not completed. Three months later, the tenant vacates and the owner claims damage to the carpet.",
      questions: [
        "Which step in the workflow was missed, and why does it matter here?",
        "What evidence helps the agency now, and what does it lack?",
        "What should the process look like next time?",
      ],
    },
    quiz: [
      {
        id: "m5q1",
        question: "Which document records the property's condition at the start of a tenancy?",
        options: ["Owner statement", "Entry condition report", "Bond claim", "Rent ledger"],
        answer: 1,
        explanation: "The entry condition report is the baseline used to compare the property at the end of the tenancy.",
      },
      {
        id: "m5q2",
        question: "Which step normally comes first in the leasing workflow?",
        options: ["Keys handed over", "Application", "Bond lodgement", "Condition report"],
        answer: 1,
        explanation: "Applications come after enquiries and inspections, and before referencing and the offer.",
      },
    ],
  },

  {
    id: "m6",
    title: "Tutorial: Navigating Each Software for Daily Tasks",
    track: "paid",
    duration: "Paid · Live session 1 hour + hands-on demo practice",
    objectives: [
      "Map each daily task to the right area of the software",
      "Practise common tasks safely in a demo account",
      "Use a repeatable method to learn any new system",
    ],
    lessons: [
      {
        title: "Task-to-software map",
        paragraphs: [
          "Menu names differ between platforms, so learn the task first and then find where it lives. The table shows typical areas to look for.",
        ],
        table: {
          headers: ["Task", "Typical area to look for"],
          rows: [
            ["Create a property record", "Properties"],
            ["Add a tenant and lease", "Tenancies / Leases"],
            ["Record a rent payment", "Ledger / Receipts"],
            ["Log a maintenance request", "Maintenance / Jobs"],
            ["Schedule an inspection", "Inspections / Calendar"],
            ["Produce an owner statement", "Reports / Owner statements"],
            ["Reconcile a trust account", "Trust accounting"],
          ],
        },
      },
      {
        title: "A repeatable method for any system",
        paragraphs: [
          "1) Read the task. 2) Predict which section it lives in. 3) Do it in a demo or trial account. 4) Check the record appears where you expect. 5) Write a short note on what you learned.",
          "Never use real tenant or owner data for practice. Use only demo or trial accounts.",
        ],
      },
    ],
    keyTerms: [
      ["Demo account", "A practice environment with fake data"],
      ["Two-factor authentication", "A second step, such as a code, to confirm your login"],
      ["Reconciliation", "Checking that records match bank balances"],
    ],
    activity: {
      title: "Practice in a demo account",
      steps: [
        "Create one dummy property, one dummy tenant and one dummy maintenance job.",
        "Take a screenshot of each step and annotate it with the section name you used.",
        "Write one sentence explaining why each record belongs where it does.",
      ],
    },
    caseStudy: {
      title: "The duplicate tenant",
      scenario:
        "A new tenant is entered twice in the system by two team members. Rent payments are going to the duplicate record.",
      questions: [
        "How would you confirm which record is correct without changing data yet?",
        "What is the safest way to merge or correct the records?",
        "What should you record for the audit trail?",
      ],
    },
    quiz: [
      {
        id: "m6q1",
        question: "Why should training use a demo account?",
        options: [
          "To avoid exposing real personal and financial data",
          "Because demo accounts are faster",
          "Because demo accounts have more features",
          "So you can skip the training",
        ],
        answer: 0,
        explanation: "Real tenant and owner data is private and must be protected. Demo accounts keep it safe.",
      },
      {
        id: "m6q2",
        question: "What is the best first step when learning a new task?",
        options: [
          "Guess and click until it works",
          "Read the task and predict which section it lives in",
          "Ask the tenant",
          "Delete old data",
        ],
        answer: 1,
        explanation: "Predicting the location first builds understanding and reduces errors.",
      },
    ],
  },

  {
    id: "m7",
    title: "Practical: Maintenance Job Lifecycle (Creating, Quoting, Approving, Completing)",
    track: "paid",
    duration: "Paid · Live session 1 hour + case-based practice",
    objectives: [
      "Triage a maintenance request by urgency and safety",
      "Obtain and compare tradie quotes",
      "Manage owner approval, completion and job close-out",
    ],
    lessons: [
      {
        title: "Triage: safety first",
        paragraphs: [
          "Life or safety risks come first. For a gas smell or fire, the tenant must leave the property and call 000 before any agency process. Then log the job and escalate to the licensed property manager immediately.",
        ],
        table: {
          headers: ["Category", "Examples", "Typical response"],
          rows: [
            ["Emergency", "Gas leak, fire, sewage overflow, serious flooding", "Safety instructions first, then escalate immediately"],
            ["Urgent", "No hot water in winter, blocked toilet, broken external lock", "Same day or next business day, per agency policy"],
            ["Routine", "Dripping tap, cosmetic wear, minor repairs", "Schedule within the agency's routine timeframe"],
          ],
        },
      },
      {
        title: "Quotes, approval and close-out",
        paragraphs: [
          "Gather quotes from suitable tradies, comparing scope, price, availability, licence and insurance. If the cost exceeds the approval threshold in the management agreement, get the rental provider's approval before booking.",
          "After the job: check completion, upload the invoice and photos, approve payment, notify the tenant, and close the job with notes.",
        ],
        diagram:
          "Request logged → Triage → Quotes → Owner approval (if over threshold)\n   → Book tradie → Tenant informed → Work done → Invoice checked → Paid → Job closed",
      },
    ],
    keyTerms: [
      ["Triage", "Sorting requests by urgency and safety"],
      ["Scope of work", "A clear description of what the tradie will do"],
      ["Approval threshold", "The cost above which the owner must approve, set in the management agreement"],
      ["Work order", "The instruction given to a tradie to carry out a job"],
      ["Close-out", "The final checks and records that finish a job"],
    ],
    activity: {
      title: "Build a maintenance job",
      steps: [
        "In a demo account, log a job titled 'Hot water system not working'. Add two placeholder photos.",
        "Record two dummy quotes: $1,850 and $1,650 (the cheaper tradie is unavailable until Thursday).",
        "Draft an approval email to the licensed property manager that recommends one option and explains why.",
      ],
    },
    caseStudy: {
      title: "Hot water on a Monday morning",
      scenario:
        "A tenant reports no hot water at 9am on Monday. They have two children. The cheaper quote is $1,650, but that tradie cannot attend until Thursday. The owner's approval threshold is $1,000.",
      questions: [
        "How do you triage this request, and why?",
        "Who must approve the quote, and what must your approval request include?",
        "What do you tell the tenant today?",
        "What do you record in the job notes?",
      ],
    },
    quiz: [
      {
        id: "m7q1",
        question: "A tenant reports a strong gas smell. What is the first action?",
        options: [
          "Log a routine job and wait",
          "Tell the tenant to leave the property and call 000, then escalate",
          "Wait until the next business day",
          "Book the cheapest tradie",
        ],
        answer: 1,
        explanation: "Safety comes first. The tenant must leave and call emergency services before any agency process.",
      },
      {
        id: "m7q2",
        question: "When is owner approval needed for a repair?",
        options: [
          "For every job",
          "When the cost exceeds the approval threshold in the management agreement",
          "Never",
          "Only when the tenant asks",
        ],
        answer: 1,
        explanation: "The management agreement sets the threshold. Costs above it need the owner's approval.",
      },
    ],
  },

  {
    id: "m8",
    title: "Practical Assessment, Remote Work Readiness and Job Preparation",
    track: "paid",
    duration: "Paid · Live session 1 hour + assessment (completed in your own time)",
    objectives: [
      "Set up a secure, reliable remote work environment",
      "Work across time zones and handle personal data correctly",
      "Complete the practical assessment and prepare for job applications",
    ],
    lessons: [
      {
        title: "Remote work readiness",
        paragraphs: [
          "Reliable internet is essential. Test your speeds, and keep a backup such as a mobile hotspot. Use a headset, a quiet workspace, a secure device with up-to-date antivirus, a password manager, and two-factor authentication on every work account. Never share logins, and use only agency-approved access methods.",
          "Time zones: Manila is UTC+8. Sydney is UTC+10 in winter (AEST) and UTC+11 in summer daylight saving (AEDT). Manila is 2 hours behind Sydney in winter and 3 hours behind in summer. Always check meeting invites for the local time.",
        ],
      },
      {
        title: "Privacy and the Privacy Act",
        paragraphs: [
          "The Privacy Act 1988 and the Australian Privacy Principles govern how personal information is handled. Store tenant and owner information only in approved systems. Never post it on social media or send it to personal email. Report any suspected data breach to your supervisor immediately.",
        ],
      },
      {
        title: "The practical assessment",
        paragraphs: ["Your assessment has four parts, marked against the rubric below."],
        table: {
          headers: ["Criteria", "Weight", "What the assessor looks for"],
          rows: [
            ["Accuracy", "30%", "Correct data, correct terms, correct legal framing"],
            ["Process", "30%", "Steps completed in the right order with the right approvals"],
            ["Communication", "20%", "Clear, professional Australian English"],
            ["Record-keeping", "20%", "Complete, traceable notes and records"],
          ],
        },
      },
    ],
    keyTerms: [
      ["Two-factor authentication", "A second verification step when logging in"],
      ["AEST / AEDT", "Australian Eastern Standard Time and Eastern Daylight Time"],
      ["Notifiable data breach", "A breach likely to cause serious harm, which must be reported under the Privacy Act"],
    ],
    activity: {
      title: "Assessment and job prep",
      steps: [
        "Complete the maintenance job from Module 7 end to end in a demo account, using the rubric as a checklist.",
        "Write one professional tenant email in Australian English about a delayed repair.",
        "Draft a CV line using these keywords where true: property management, tenancy administration, trust accounting awareness, PropertyMe, VaultRE, Ignite, remote work.",
        "Prepare answers to: 'Why property management?', 'How do you handle an angry tenant?' and 'How do you protect confidential information?'",
      ],
    },
    caseStudy: {
      title: "The angry tenant email",
      scenario:
        "A tenant has waited three weeks for a repair and sends an angry email with the subject 'Unacceptable'. You need to reply professionally while the licensed property manager is in a tribunal hearing.",
      questions: [
        "What should your reply acknowledge, and what should it avoid?",
        "What can you promise, and what must you escalate?",
        "What do you record once the reply is sent?",
      ],
    },
    quiz: [
      {
        id: "m8q1",
        question: "During daylight saving (AEDT), what is the time difference between Manila and Sydney?",
        options: ["Sydney is 2 hours behind", "Sydney is 3 hours ahead", "They are at the same time", "Sydney is 5 hours ahead"],
        answer: 1,
        explanation: "Manila is UTC+8 and Sydney is UTC+11 during AEDT, so Sydney is 3 hours ahead.",
      },
      {
        id: "m8q2",
        question: "What is the best way to protect tenant data when working from home?",
        options: [
          "Share your login with a teammate",
          "Use two-factor authentication and approved systems only",
          "Save files to personal social media",
          "Email tenant documents to a personal address",
        ],
        answer: 1,
        explanation: "Approved systems with two-factor authentication keep personal information secure and traceable.",
      },
      {
        id: "m8q3",
        question: "Which quality matters most in tenant communication?",
        options: [
          "Slang and emojis",
          "Clear, professional Australian English",
          "Long answers with no clear outcome",
          "Promises you cannot guarantee",
        ],
        answer: 1,
        explanation: "Clear, professional and accurate communication builds trust and reduces disputes.",
      },
    ],
  },
];
