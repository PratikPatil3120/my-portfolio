import React from "react";

export default function Portfolio() {
  const skills = [
    "React JS",
    "Redux Toolkit",
    "RTK Query",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "REST API",
    "Git",
    "Vercel",
  ];

  const projects = [
    {
      title: "Dairy ERP Management",
      desc: "Built enterprise ERP system for milk dispatch, route planning, stock management, billing, and production operations.",
    },
    {
      title: "Billing App (MERN)",
      desc: "Developed complete billing software with customer invoices, reports, Prints, and Pending Payment analytics.",
    },
    {
      title: "KOT DashBoard",
      desc: "Developed a complete Kitchen Orders Dashboard with item names, quantities, invoices, and reports. Implemented black & white themes, drag-and-drop functionality, and role-based login with designations.",
    },
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio built using React and Tailwind with fast loading and clean UI.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
            Pratik Patil
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 font-semibold mb-3">Hello, I'm</p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            <span className="text-slate-400">ReactJs Developer</span>
          </h2>

          <p className="text-slate-300 text-lg leading-8 mb-8">
            I build scalable web applications, dashboards, ERP systems, and
            high-performance user interfaces with modern technologies.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-7xl font-bold">
              PP
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h3 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h3>

        <p className="text-slate-300 leading-8 text-lg max-w-4xl">
          I am a passionate React Developer with 2+ years of experience creating
          ERP systems, admin dashboards, billing applications, and optimized web
          solutions. I specialize in frontend architecture, API integrations,
          state management, and scalable code structure.
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h3 className="text-3xl font-bold mb-10 text-cyan-400">Projects</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:border-cyan-500 transition duration-300"
            >
              <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
              <p className="text-slate-400 leading-7">{item.desc}</p>

              <button className="mt-6 text-cyan-400 font-semibold hover:text-cyan-300">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h3 className="text-3xl font-bold mb-10 text-cyan-400">Skills</h3>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h3 className="text-3xl font-bold mb-8 text-cyan-400">Contact</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-slate-300 text-lg">
            <p>Email: pratikpatil3120@gmail.com</p>
            <p>Phone: +91 9145490750</p>
            <p>Pune, Maharashtra, India</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/PratikPatil3120"
              className="px-5 py-3 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pratik-patil-67a8a4259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="px-5 py-3 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 py-8 border-t border-slate-800">
        © 2026 Pratik Patil | React Developer
      </footer>
    </div>
  );
}
