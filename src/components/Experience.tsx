interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "experience";
}

const experiences: Experience[] = [
  {
    title: "AI & Web Development Student",
    organization: "Agentic AI Program",
    period: "Current",
    description:
      "Focused on building intelligent AI agents and modern web applications using cutting-edge technologies.",
    type: "education",
  },
  {
    title: "Teaching Experience",
    organization: "Education Sector",
    period: "2 Years",
    description:
      "Developed strong communication and problem-solving skills through teaching. Guided students in technical concepts.",
    type: "experience",
  },
  {
    title: "Hackathon & Academic Projects",
    organization: "Various Competitions",
    period: "Ongoing",
    description:
      "Active participant in hackathons and academic projects, applying AI and web development skills to solve real problems.",
    type: "experience",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-600 group-hover:scale-125 transition-transform" />
                  {index !== experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-white/10 group-hover:bg-purple-500/30 transition-colors" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-purple-400 font-medium px-3 py-1 bg-purple-500/10 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-purple-300 text-sm mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
