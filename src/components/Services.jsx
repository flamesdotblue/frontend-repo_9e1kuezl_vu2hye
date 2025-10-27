import React from 'react';
import { Anchor, Compass, Map, Waves, Wind } from 'lucide-react';

const services = [
  {
    icon: Anchor,
    title: 'Offshore & Cable Route Surveys',
    items: [
      'Offshore Platform Site & Pipeline Route',
      'Submarine Cable Route Surveys',
      'Ports & Harbour Development',
    ],
  },
  {
    icon: Map,
    title: 'Hydrography & Topography',
    items: [
      'Hydrography Services',
      'Topographic Survey',
      'Wide Area Positioning Services',
    ],
  },
  {
    icon: Compass,
    title: 'Geophysical & UXO',
    items: [
      'Geophysical Surveys',
      'Gradiometer Surveys for UXO Search',
      'Route Engineering Support',
    ],
  },
  {
    icon: Waves,
    title: 'Metocean & Oceanography',
    items: [
      'Shallow & Deep Water Oceanography',
      'Metocean Services',
      'Weather Forecasting Services',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-slate-600">
            Integrated marine scientific capabilities tailored for offshore and nearshore projects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, items }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-100 opacity-0 blur-2xl transition group-hover:opacity-80" />
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 p-8 text-white">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">Safety, Quality, Reliability</h3>
              <p className="mt-1 text-white/90">
                We collaborate closely with clients to understand objectives and deliver superior results with uncompromised safety.
              </p>
            </div>
            <a href="#contact" className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/30 hover:bg-white/20">Discuss Your Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
