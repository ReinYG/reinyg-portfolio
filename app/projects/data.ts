export type ProjectCaseStudy = {
  no: string;
  slug: string;
  type: string;
  title: string;
  summary: string;
  problem: string;
  built: string;
  role: string;
  technologies: string[];
  features: string[];
  outcomes: string[];
  variant: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    no: "01",
    slug: "accounting-operations-portal",
    type: "Accounting Technology",
    title: "Accounting Operations Portal",
    summary:
      "A centralized operations platform for recurring processing, workflow routing, validations, monitoring, reporting, user controls, and structured day-to-day administration.",
    problem:
      "Recurring operational work can become fragmented across spreadsheets, email threads, shared files, and manually maintained monitoring lists. That makes status visibility, accountability, validation, and reporting harder to manage as volume grows.",
    built:
      "I designed a centralized portal concept that brings workflow requests, processing queues, status monitoring, validation, reporting, and administrative controls into one structured application. The public prototype intentionally uses generic data and terminology.",
    role:
      "Process analyst, systems designer, automation architect, developer, tester, and workflow owner—from translating operational requirements into system logic through iterative testing and refinement.",
    technologies: ["Python", "PostgreSQL", "JavaScript", "HTML / CSS", "Workflow Automation", "Git"],
    features: [
      "Centralized processing dashboard",
      "Role-aware work queues",
      "Structured request and status lifecycle",
      "Validation and exception handling",
      "Operational reporting and monitoring",
      "Audit-friendly activity history",
    ],
    outcomes: [
      "Reduces reliance on disconnected manual trackers",
      "Improves visibility of work in progress",
      "Creates a repeatable and controlled process",
      "Makes reporting easier to standardize",
    ],
    variant: "accounting",
  },
  {
    no: "02",
    slug: "audit-firm-management-portal",
    type: "Professional Services",
    title: "Audit Firm Management Portal",
    summary:
      "A business system for organizing client records, engagements, assignments, documents, activity monitoring, dashboards, and role-based access for an audit practice.",
    problem:
      "Professional-service teams need a clear way to organize clients, engagements, documents, responsibilities, and work progress without relying on scattered files and disconnected tracking tools.",
    built:
      "I developed a portal structure centered on a client registry, engagement workflow, document organization, role-based access, dashboards, and administrative monitoring. The portfolio version uses representative content only.",
    role:
      "Systems designer and developer responsible for workflow structure, information architecture, client-record experience, permissions thinking, interface refinement, and iterative feature delivery.",
    technologies: ["Web Application", "JavaScript", "Database Design", "Role-Based Access", "Document Workflow", "Git"],
    features: [
      "Client and engagement registry",
      "Assignment and status tracking",
      "Role-based access controls",
      "Document organization",
      "Dashboard and activity overview",
      "Administrative workflow visibility",
    ],
    outcomes: [
      "Creates one operational view of client work",
      "Supports clearer assignment ownership",
      "Improves document and engagement organization",
      "Provides better management visibility",
    ],
    variant: "audit",
  },
  {
    no: "03",
    slug: "bir-registration-workflow-portal",
    type: "Compliance Workflow",
    title: "BIR Registration Workflow Portal",
    summary:
      "A structured portal for registration, document preparation, stage tracking, attachments, workflow monitoring, and administrative visibility across a multi-step compliance process.",
    problem:
      "Registration and compliance work involves many forms, supporting documents, approvals, stages, and follow-ups. Manual tracking can make it difficult to see what is complete, pending, overdue, or waiting on another step.",
    built:
      "I designed a stage-driven registration portal with structured records, document attachments, guided workflow states, dashboards, administrative controls, and database-backed tracking. Public prototypes use fictitious records and no confidential forms.",
    role:
      "Product and workflow designer, full-stack developer, database designer, form-mapping designer, tester, and administrator-experience designer.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Google Drive Integration", "Workflow Design"],
    features: [
      "Stage-based registration tracking",
      "Structured document requirements",
      "Attachment management",
      "Dashboard and SLA visibility",
      "Role-aware administrative workflows",
      "Form and record generation concepts",
    ],
    outcomes: [
      "Makes multi-stage work easier to understand",
      "Improves visibility of pending requirements",
      "Supports consistent document handling",
      "Creates a foundation for workflow automation",
    ],
    variant: "registration",
  },
  {
    no: "04",
    slug: "real-time-payroll-workforce-system",
    type: "Workforce Technology",
    title: "Real-Time Payroll & Workforce System",
    summary:
      "A payroll and workforce application focused on real-time calculations, employee records, attendance-linked processing, summaries, approvals, and management visibility.",
    problem:
      "Payroll workflows often depend on multiple inputs and repeated calculations. When employee data, attendance, adjustments, approvals, and summaries live in separate places, verification becomes slower and more error-prone.",
    built:
      "I created a real-time workforce and payroll system concept that unifies employee records, payroll inputs, live calculation views, validation states, summaries, and management dashboards within one workflow.",
    role:
      "Systems designer and developer responsible for workflow modeling, calculation logic design, data structures, dashboard concepts, validation rules, and user-focused interface design.",
    technologies: ["Web Application", "Database", "Real-Time Data", "Business Logic", "Dashboarding", "Automation"],
    features: [
      "Employee master records",
      "Real-time payroll calculations",
      "Attendance-linked processing concepts",
      "Validation and review states",
      "Payroll summaries and dashboards",
      "Approval-ready workflow structure",
    ],
    outcomes: [
      "Brings payroll information into one view",
      "Reduces repeated manual calculations",
      "Makes review states easier to follow",
      "Improves visibility for administrators",
    ],
    variant: "payroll",
  },
  {
    no: "05",
    slug: "law-firm-operations-portal",
    type: "Professional Services",
    title: "Law Firm Operations Portal",
    summary:
      "A centralized workspace for client and matter records, task tracking, document organization, workflow stages, user roles, and administrative oversight.",
    problem:
      "Legal work generates many matters, deadlines, documents, assignments, and status changes. A general file repository alone does not provide enough operational context for a growing practice.",
    built:
      "I designed a matter-centered operations portal with client records, task and stage monitoring, document organization, role-aware access, dashboard summaries, and administrative oversight.",
    role:
      "Business-process analyst, systems designer, developer, and UX designer focused on translating professional-service workflows into a clear digital workspace.",
    technologies: ["Web Application", "Database Design", "RBAC", "Document Management", "Workflow", "Dashboarding"],
    features: [
      "Client and matter registry",
      "Matter-stage monitoring",
      "Task and responsibility tracking",
      "Document organization",
      "Role-based user access",
      "Administrative dashboards",
    ],
    outcomes: [
      "Creates a structured view of active matters",
      "Improves task and status visibility",
      "Keeps records and documents organized",
      "Supports repeatable operating workflows",
    ],
    variant: "legal",
  },
  {
    no: "06",
    slug: "google-excel-business-applications",
    type: "Automation Toolkit",
    title: "Google & Excel Business Applications",
    summary:
      "A collection of web apps, automated workbooks, validation tools, reporting utilities, file-processing routines, and business automations built with Apps Script, Excel VBA, and related technologies.",
    problem:
      "Many useful business processes begin in spreadsheets, but repeated manual encoding, validation, consolidation, exporting, emailing, and reporting can quickly consume time and create avoidable errors.",
    built:
      "I built reusable automation patterns that turn spreadsheets into structured business tools—from triggered validations and automated exports to Google web applications, email workflows, dashboards, and file-processing utilities.",
    role:
      "Automation designer and developer responsible for requirements analysis, formulas and scripts, interface design, validation logic, file workflows, testing, and user support.",
    technologies: ["Google Apps Script", "JavaScript", "Google Sheets", "Google Drive", "Excel VBA", "Automation"],
    features: [
      "Google web application forms",
      "Triggered validation and processing",
      "Automated email and Drive workflows",
      "Excel VBA business tools",
      "Import / export automation",
      "Reporting and dashboard utilities",
    ],
    outcomes: [
      "Reduces repetitive spreadsheet work",
      "Standardizes validation and outputs",
      "Speeds up recurring reporting tasks",
      "Turns familiar tools into practical applications",
    ],
    variant: "automation",
  },
];

export function getProjectBySlug(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}
