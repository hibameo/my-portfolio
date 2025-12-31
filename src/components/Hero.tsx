"use client";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <p className="text-purple-400 font-medium tracking-wide uppercase text-sm">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Hiba
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 font-light">
            AI Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building intelligent, user-centric digital solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:border-purple-400 hover:text-purple-400 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
