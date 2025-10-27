import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pt-20 pb-10 md:flex-row md:items-center md:gap-10">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-3 py-1 text-sky-200 ring-1 ring-sky-300/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Ocean Survey Specialists
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Amphibia Consultants Private Limited
          </h1>
          <p className="mt-4 max-w-2xl text-sky-100/90">
            Headquartered in Navi Mumbai, we deliver marine hydrographic, geophysical survey and geotechnical investigation services across India and worldwide. From offshore to nearshore, we support every stage of your project with integrated, innovative and safe solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-white/40">
              Explore Services
            </a>
            <a href="#projects" className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40">
              View Projects
            </a>
          </div>
        </div>
        <div className="pointer-events-none relative mt-10 hidden h-[420px] w-full items-center justify-center md:mt-0 md:flex md:w-1/2">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-900/60 via-sky-900/0 to-sky-900/20"></div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-800 via-sky-800/80 to-transparent"></div>
    </section>
  );
}
