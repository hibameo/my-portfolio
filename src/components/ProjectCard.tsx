interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:-translate-y-1 group">
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors text-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
