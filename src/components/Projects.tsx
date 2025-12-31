import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "Digital Student Report Card System",
    description:
      "A comprehensive system for managing and generating student report cards with automated grading and performance analytics.",
    techStack: ["Python", "Streamlit", "Database"],
    githubLink: "https://github.com",
  },
  {
    title: "Digital Student ID Card System",
    description:
      "Digital ID card management system for students with verification and authentication features.",
    techStack: ["Python", "Streamlit", "QR Codes"],
    githubLink: "https://github.com",
  },
  {
    title: "AI-Powered Email Assistant",
    description:
      "Intelligent email assistant that helps organize, categorize, and draft responses using AI algorithms.",
    techStack: ["Python", "AI Agents", "Next.js"],
    githubLink: "https://github.com",
  },
  {
    title: "Personal Library Manager",
    description:
      "Application for managing personal book collections with search, categorization, and reading progress tracking.",
    techStack: ["Python", "Streamlit", "Database"],
    githubLink: "https://github.com",
  },
  {
    title: "Health & Wellness AI Agent",
    description:
      "AI-powered wellness companion providing personalized health recommendations and tracking.",
    techStack: ["Python", "AI Agents", "Streamlit"],
    githubLink: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
