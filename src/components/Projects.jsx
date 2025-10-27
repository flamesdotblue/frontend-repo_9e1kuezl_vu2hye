import React from 'react';

const projects = [
  {
    title: 'ADCP Survey at Karnataka Coast',
    desc: 'Provision of ADCPs for comprehensive current measurement survey work along Karnataka coastline.',
    client: 'Coastal Development Authority',
    year: '2018',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'JNPT Channel Survey Operations',
    desc: 'Dedicated survey boat for monitoring and surveying of navigation channel at JN Port.',
    client: 'Jawaharlal Nehru Port Trust',
    year: '2016-2017',
    image: 'https://images.unsplash.com/photo-1529511582893-2d7e684dd128?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'BBG Deep Water Survey',
    desc: 'Comprehensive deep water survey for Bay of Bengal Gateway Cable System installation route planning.',
    client: 'Alcatel Lucent / Vodafone',
    year: '2014-2015',
    image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Upper Ganga Canal Study',
    desc: 'Navigational feasibility study and detailed survey for the Upper Ganga Canal development project in Uttar Pradesh.',
    client: 'Irrigation Department, UP',
    year: '2010-2011',
    image: 'https://images.unsplash.com/photo-1698560875663-7d9e91a55ae3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVcHBlciUyMEdhbmdhJTIwQ2FuYWwlMjBTdHVkeXxlbnwwfDB8fHwxNzYxNTQxNTE4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'TGN-Gulf Cable Route Survey',
    desc: 'Route survey and engineering for the Tata Global Network (TGN) Gulf cable system connecting India to the Middle East.',
    client: 'Tata Communications',
    year: '2012',
    image: 'https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Mumbai Port Dredging Survey',
    desc: 'Pre and post-dredging bathymetric surveys supporting capital dredging within Mumbai Port Trust limits.',
    client: 'Mumbai Port Trust',
    year: '2019',
    image: 'https://images.unsplash.com/photo-1579521697262-88396ba31929?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBQb3J0JTIwRHJlZGdpbmclMjBTdXJ2ZXl8ZW58MHwwfHx8MTc2MTU0MTUxOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selected Projects</h2>
          <p className="mt-3 text-slate-600">A glimpse of our past work delivering measurable value for clients.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span className="font-medium">{p.client}</span>
                  <span>{p.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
