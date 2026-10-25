export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise' | 'AI & ML' | 'Algorithms' | 'Broadcasting';
  description: string;
  architecture: string[];
  metrics: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  details: string;
}

export interface SkillItem {
  name: string;
  level: string;
  usage: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface PortfolioProfile {
  name: string;
  shortName: string;
  handle: string;
  title: string;
  tagline: string;
  location: string;
  institution: string;
  degree: string;
  cgpa: string;
  radioRole: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  photo: string;
  workstationPhoto: string;
}

export interface PillarItem {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: string;
  note: string;
}

export interface PortfolioData {
  profile: PortfolioProfile;
  foundation: {
    headline: string;
    subtitle: string;
    bio: string[];
    stats: StatItem[];
    pillars: PillarItem[];
  };
  arsenal: SkillCategory[];
  projects: Project[];
}
