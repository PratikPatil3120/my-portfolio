import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pratik Patil</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="p-10 text-center bg-blue-50">
        <h2 className="text-3xl font-semibold mb-2">React Developer</h2>
        <p className="text-gray-600">
          Building scalable, high-performance web applications
        </p>
      </section>

      {/* About */}
      <section id="about" className="p-10">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I am a React Developer with 2+ years of experience working on ERP
          systems, performance optimization, and large datasets.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-white">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Dairy ERP System</h3>
            <p className="text-sm text-gray-600 mt-2">
              Full ERP system for milk dispatch, demand, and tracking.
            </p>
            <div className="mt-3 space-x-3">
              <a href="#" className="text-blue-500">
                GitHub
              </a>
              <a href="#" className="text-blue-500">
                Live Demo
              </a>
            </div>
          </div>

          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Another Project</h3>
            <p className="text-sm text-gray-600 mt-2">
              Add your second project here.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-10">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Redux",
            "RTK Query",
            "JavaScript",
            "CSS",
            "Bootstrap",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white shadow rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 bg-white">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>Email: patilpratik3120@gmail.com</p>
        <p>Phone: +91 9145490750</p>
        <div className="mt-3">
          <a href="#" className="text-blue-500 mr-4">
            GitHub
          </a>
          <a href="#" className="text-blue-500">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-500">
        © 2026 Pratik Patil
      </footer>
    </div>
  );
}
