interface Skill {
  name: string;
  category: "roles" | "technical" | "design";
}

const skills: Skill[] = [
  { name: "AI Developer", category: "roles" },
  { name: "UI/UX Designer", category: "roles" },
  { name: "AI Robotics (Beginner)", category: "roles" },
  { name: "Python", category: "technical" },
  { name: "AI Agents", category: "technical" },
  { name: "Streamlit", category: "technical" },
  { name: "Next.js", category: "technical" },
  { name: "JavaScript", category: "technical" },
  { name: "TypeScript", category: "technical" },
  { name: "HTML", category: "technical" },
  { name: "CSS", category: "technical" },
  { name: "UI/UX Design Principles", category: "design" },
  { name: "Figma", category: "design" },
  { name: "Wireframing", category: "design" },
];

const getCategoryStyles = (category: Skill["category"]) => {
  switch (category) {
    case "roles":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "technical":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "design":
      return "bg-pink-500/20 text-pink-400 border-pink-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Roles
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills
                .filter((s) => s.category === "roles")
                .map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 rounded-full text-sm border ${getCategoryStyles(
                      skill.category
                    )}`}
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Technical
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills
                .filter((s) => s.category === "technical")
                .map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 rounded-full text-sm border ${getCategoryStyles(
                      skill.category
                    )}`}
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Design & UX
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills
                .filter((s) => s.category === "design")
                .map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 rounded-full text-sm border ${getCategoryStyles(
                      skill.category
                    )}`}
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
