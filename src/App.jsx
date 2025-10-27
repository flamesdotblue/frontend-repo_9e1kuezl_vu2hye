import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="text-sky-600">Amphibia</span>
            <span className="hidden text-slate-700 sm:inline">Consultants Pvt. Ltd.</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-sky-700">Services</a>
            <a href="#projects" className="hover:text-sky-700">Projects</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
          <a href="#contact" className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500 md:hidden">Contact</a>
        </div>
      </header>

      {/* Sections */}
      <main id="top">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Amphibia Consultants Private Limited. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#services" className="hover:text-sky-700">Services</a>
              <a href="#projects" className="hover:text-sky-700">Projects</a>
              <a href="#contact" className="hover:text-sky-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
