export const profile = {
  name: "Ram Prasad Nethi",
  role: "Senior Solutions Architect",
  employer: "Amazon Web Services",
  site: "https://ramprasadnethi.github.io",
  summary: "I work across cloud architecture, agentic AI, and cybersecurity, helping enterprises modernize distributed systems.",
  credentials: ["IEEE Senior Member", "ACM Certified Peer Reviewer", "M.S. Cybersecurity, Georgia Tech"],
  profiles: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ramnethi", description: "For judging invitations, research collaboration, and professional inquiries." },
    { name: "GitHub", url: "https://github.com/ramprasadnethi", description: "Public repositories and the source for this portfolio." },
  ],
};

export const publications = [
  {
    venue: "Medium",
    title: "Deploy Multi-DC Apache Cassandra Database using DataStax Cass Operator",
    description: "Deploying Apache Cassandra across multiple data centers with the DataStax operator.",
    url: "https://medium.com/@ramprasad.nethi/deploy-apache-multi-dc-cassandra-using-datastax-cass-operator-7489ef2402b3",
  },
  {
    venue: "AWS Migration & Modernization Blog",
    title: "Enabling single sign-on for AWS Transform with Microsoft Entra ID",
    description: "Configuring Microsoft Entra ID as the identity provider for AWS Transform single sign-on.",
    url: "https://aws.amazon.com/blogs/migration-and-modernization/enabling-single-sign-on-for-aws-transform-with-microsoft-entra-id/",
  },
  {
    venue: "AWS Migration & Modernization Blog",
    title: "Enabling single sign-on for AWS Transform with Okta Workforce Identity",
    description: "Configuring Okta Workforce Identity as the identity provider for AWS Transform single sign-on.",
    url: "https://aws.amazon.com/blogs/migration-and-modernization/enabling-single-sign-on-for-aws-transform-with-okta-workforce-identity/",
  },
  {
    venue: "AWS Workshop",
    title: "Apache HBase workshop",
    url: "https://studio.us-east-1.prod.workshops.aws/workshops/public/8f9812f7-5165-41cb-8810-32cdc02bdf63#content-permissions",
  },
  {
    venue: "HackerNoon",
    title: "Beyond Prompt Engineering: Why Better Enterprise AI Needs Better Context",
    description: "How the quality of enterprise context shapes the quality of AI responses.",
    url: "https://hackernoon.com/beyond-prompt-engineering-why-better-enterprise-ai-needs-better-context?ref=hackernoon.com",
  },
  {
    venue: "HackerNoon",
    title: "Building Enterprise Context Pipelines: Retrieval, Orchestration, and Cloud-Native Architecture",
    description: "How retrieval, ranking, and orchestration shape the context available to enterprise AI systems.",
    url: "https://hackernoon.com/building-enterprise-context-pipelines-retrieval-orchestration-and-cloud-native-architecture?ref=hackernoon.com",
  },
  {
    venue: "HackerNoon",
    title: "Governing Context at Scale: Security, Observability, and Multi-Agent AI",
    description: "How to apply access controls and traceability to the context shared by enterprise AI agents.",
    url: "https://hackernoon.com/governing-context-at-scale-security-observability-and-multi-agent-ai",
  },
  {
    venue: "AWS Big Data Blog",
    title: "Optimizing Apache HBase availability on Amazon EMR, Part 1: Coordinator startup, RegionServer recovery, and regions in transition",
    description: "Troubleshooting common HBase availability issues on Amazon EMR.",
    url: "https://aws.amazon.com/blogs/big-data/optimizing-apache-hbase-availability-on-amazon-emr-part-1-coordinator-startup-regionserver-recovery-and-regions-in-transition/",
  },
  {
    venue: "AWS Big Data Blog",
    title: "Optimizing Apache HBase availability on Amazon EMR, Part 2: Diagnose and tune compaction",
    description: "A guide to identifying compaction bottlenecks and tuning Apache HBase on Amazon EMR.",
    url: "https://aws.amazon.com/blogs/big-data/optimizing-apache-hbase-availability-on-amazon-emr-part-2-diagnose-and-tune-compaction/",
  },
];

export const research = [
  { title: "Edge AI", description: "Energy-aware orchestration and resilience for AI workloads at the edge." },
  { title: "Enterprise context graphs", description: "Modeling relationships across enterprise data to support grounded retrieval and reasoning." },
  { title: "Modernization benchmarking", description: "Evaluating architectural trade-offs across reliability, operational effort, and cost." },
];

type Engagement = {
  name: string;
  date?: string;
  detail?: string;
  links?: { label: string; url: string }[];
};

export const judging: Engagement[] = [
  {
    name: "Georgia Tech Hacklytics 2026",
    date: "February 22, 2026",
    links: [{ label: "LinkedIn post", url: "https://www.linkedin.com/posts/ramnethi_hacklytics2026-georgiatech-hackathon-activity-7439532524940300288-GXO5" }],
  },
  {
    name: "University of Virginia HooHacks 2026",
    date: "March 23, 2026",
  },
  {
    name: "IBM x UNSA Hackathon 2026",
    date: "May 8–10, 2026",
    links: [
      { label: "LinkedIn post", url: "https://www.linkedin.com/posts/asma-ahmed67_ibm-x-unsa-hackathon-activity-7446957856186175488-dNwv" },
      { label: "Devpost event", url: "https://ibm-unsa-hackathon.devpost.com/" },
    ],
  },
  { name: "CS Girlies Hackathon 2026", date: "August 16, 2026" },
  { name: "KSU Coles AI Hackathon 2026", date: "September 18, 2026" },
  { name: "Hacklanta at Georgia State University 2026", date: "October 11, 2026" },
  {
    name: "AWS Builder Weekend Challenge: Give your Agent a Tool 2026",
    links: [{ label: "AWS Builder event", url: "https://builder.aws.com/build/hackathons/2e275689-b202-316e-93b8-10cd6d6d1e4a/weekend-challenge-give-your-agent-a-tool" }],
  },
  {
    name: "AWS Builder Weekend Challenge: Map It 2026",
    links: [{ label: "AWS Builder participants", url: "https://builder.aws.com/build/hackathons/e7a301ea-4d84-3b9e-95be-7340a70f7781/weekend-challenge-map-it?tab=participants" }],
  },
];

export const mentoring: Engagement[] = [
  {
    name: "University of Georgia student mentoring",
    date: "February 24, 2026",
    links: [{ label: "LinkedIn post", url: "https://www.linkedin.com/posts/kavitachhabria_genai-aws-partyrock-activity-7443316926040203264-aMY4" }],
  },
  {
    name: "Georgia Tech business capstone mentoring",
    date: "April 17, 2026",
    detail: "Mentored business students on their capstone project and received a letter of participation.",
    links: [{ label: "LinkedIn post", url: "https://www.linkedin.com/posts/kavitachhabria_gratitudetoconnectwithstudents-georgiatech-activity-7453281532364009472-2AMv" }],
  },
];

export const pages = {
  "engineering-impact": { title: "Engineering Impact", label: "Engineering Impact", description: "Cloud architecture, enterprise modernization, and agentic AI." },
  research: { title: "Research & Publications", label: "Research", description: "Published articles, an AWS workshop, and research interests in edge AI, enterprise context graphs, and modernization benchmarking." },
  judging: { title: "Hackathon Judging & Mentoring", label: "Judging & Mentoring", description: "Hackathon judging experience and technical mentoring." },
  about: { title: "About", label: "About", description: "Background, credentials, and engineering focus." },
  contact: { title: "Contact", label: "Contact", description: "Connect about hackathon judging, mentoring, research, or cloud architecture." },
};

export type PageSlug = keyof typeof pages;
