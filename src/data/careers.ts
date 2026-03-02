export interface Role {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface Career {
  id: string;
  name: string;
  icon: string;
  description: string;
  roles: Role[];
}

export const careers: Career[] = [
  {
    id: "architecture",
    name: "Architecture",
    icon: "Building2",
    description: "Design buildings and spaces that shape the world around us.",
    roles: [
      { id: "arch-intern", title: "Architectural Intern", description: "Assist senior architects with design projects and client presentations.", difficulty: "Beginner" },
      { id: "arch-designer", title: "Project Designer", description: "Lead design development for residential and commercial projects.", difficulty: "Intermediate" },
      { id: "arch-principal", title: "Principal Architect", description: "Oversee major projects and manage the firm's design vision.", difficulty: "Advanced" },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: "Shield",
    description: "Protect digital systems and data from cyber threats.",
    roles: [
      { id: "cyber-analyst", title: "Security Analyst", description: "Monitor networks for security breaches and investigate violations.", difficulty: "Beginner" },
      { id: "cyber-engineer", title: "Security Engineer", description: "Build and maintain security infrastructure and tools.", difficulty: "Intermediate" },
      { id: "cyber-ciso", title: "Chief Information Security Officer", description: "Lead the entire security strategy for an organization.", difficulty: "Advanced" },
    ],
  },
  {
    id: "engineering",
    name: "Engineering",
    icon: "Wrench",
    description: "Apply science and math to solve real-world problems.",
    roles: [
      { id: "eng-junior", title: "Junior Engineer", description: "Work on component-level designs under senior guidance.", difficulty: "Beginner" },
      { id: "eng-project", title: "Project Engineer", description: "Manage engineering projects from concept to completion.", difficulty: "Intermediate" },
      { id: "eng-director", title: "Engineering Director", description: "Set technical direction and lead engineering teams.", difficulty: "Advanced" },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    icon: "Palette",
    description: "Create visual content to communicate messages and ideas.",
    roles: [
      { id: "gd-junior", title: "Junior Designer", description: "Create graphics for social media, web, and print materials.", difficulty: "Beginner" },
      { id: "gd-art-director", title: "Art Director", description: "Lead visual direction for campaigns and brand identity.", difficulty: "Intermediate" },
      { id: "gd-creative", title: "Creative Director", description: "Shape the overall creative vision for a studio or agency.", difficulty: "Advanced" },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "Heart",
    description: "Diagnose, treat, and help prevent diseases and injuries.",
    roles: [
      { id: "hc-nurse", title: "Registered Nurse", description: "Provide patient care and coordinate with medical teams.", difficulty: "Beginner" },
      { id: "hc-physician", title: "Physician Assistant", description: "Examine patients, diagnose illnesses, and prescribe treatments.", difficulty: "Intermediate" },
      { id: "hc-surgeon", title: "Surgeon", description: "Perform complex surgical operations and lead medical teams.", difficulty: "Advanced" },
    ],
  },
  {
    id: "law",
    name: "Law",
    icon: "Scale",
    description: "Advocate for justice and navigate the legal system.",
    roles: [
      { id: "law-paralegal", title: "Paralegal", description: "Research cases and prepare legal documents for attorneys.", difficulty: "Beginner" },
      { id: "law-associate", title: "Associate Attorney", description: "Handle cases, represent clients, and build your practice.", difficulty: "Intermediate" },
      { id: "law-partner", title: "Managing Partner", description: "Lead a law firm and handle high-profile cases.", difficulty: "Advanced" },
    ],
  },
  {
    id: "software",
    name: "Software Development",
    icon: "Code",
    description: "Build applications and systems that power the digital world.",
    roles: [
      { id: "sw-junior", title: "Junior Developer", description: "Write code, fix bugs, and learn from senior developers.", difficulty: "Beginner" },
      { id: "sw-senior", title: "Senior Developer", description: "Architect solutions and mentor junior team members.", difficulty: "Intermediate" },
      { id: "sw-cto", title: "CTO", description: "Define the technology strategy for an entire organization.", difficulty: "Advanced" },
    ],
  },
  {
    id: "teaching",
    name: "Teaching",
    icon: "GraduationCap",
    description: "Educate and inspire the next generation of learners.",
    roles: [
      { id: "teach-assistant", title: "Teaching Assistant", description: "Support lead teachers and work with small student groups.", difficulty: "Beginner" },
      { id: "teach-teacher", title: "Lead Teacher", description: "Design curriculum and manage your own classroom.", difficulty: "Intermediate" },
      { id: "teach-principal", title: "School Principal", description: "Lead an entire school's academic and administrative operations.", difficulty: "Advanced" },
    ],
  },
];

export interface Achievement {
  roleId: string;
  roleTitle: string;
  careerName: string;
  progress: number;
  rank: string;
  tasksCompleted: number;
  totalTasks: number;
}

export const achievements: Achievement[] = [
  { roleId: "sw-junior", roleTitle: "Junior Developer", careerName: "Software Development", progress: 75, rank: "Silver", tasksCompleted: 6, totalTasks: 8 },
  { roleId: "hc-nurse", roleTitle: "Registered Nurse", careerName: "Healthcare", progress: 40, rank: "Bronze", tasksCompleted: 4, totalTasks: 10 },
  { roleId: "cyber-analyst", roleTitle: "Security Analyst", careerName: "Cybersecurity", progress: 90, rank: "Gold", tasksCompleted: 9, totalTasks: 10 },
  { roleId: "gd-junior", roleTitle: "Junior Designer", careerName: "Graphic Design", progress: 20, rank: "Bronze", tasksCompleted: 2, totalTasks: 10 },
];

export const userProfile = {
  name: "Alex Rivera",
  age: 20,
  major: "Computer Science",
  statement: "Passionate about exploring the intersection of technology and creativity. Eager to find a career that lets me build solutions that make a real difference in people's lives.",
  avatar: "AR",
  experiencesCompleted: 4,
  totalHours: 12,
};
