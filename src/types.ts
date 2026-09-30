export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  clientSector: string;
  role: string;
  problem: string;
  solution: string;
  stack: string[];
  metrics: string[];
  features: string[];
  architectureNotes: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}
