import React from 'react';
import { Phone, Mail, Clock, Building2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get in touch</h2>
            <p className="mt-3 text-slate-600">
              Let’s discuss your offshore or nearshore project requirements. Our team will respond promptly.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <Building2 className="mt-1 h-5 w-5 text-sky-600" />
                <div>
                  <div className="font-semibold text-slate-900">Corporate Office</div>
                  <div className="text-slate-600">C-003, Platform Floor, Tower No.8, CBD Belapur Railway Station Complex, CBD Belapur, Navi Mumbai - 400614, Maharashtra, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-600" />
                <a href="tel:+912227595138" className="text-slate-700 hover:text-sky-700">+91 22 2759 5138</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-600" />
                <a href="mailto:amphibia@amphibia.in" className="text-slate-700 hover:text-sky-700">amphibia@amphibia.in</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-sky-600" />
                <div>
                  <div className="text-slate-700">Monday - Friday: 9 AM - 6 PM</div>
                  <div className="text-slate-700">Saturday: 9 AM - 2 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-100 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-slate-900">Company Profile</h3>
              <p className="mt-2 text-slate-700">
                We provide a comprehensive range of marine hydrographic and geophysical survey services, supporting every stage of offshore and nearshore projects. By working closely with clients, we deliver high-quality, safe and innovative solutions aligned to project objectives.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
                <li>Hydrographic, geophysical and geotechnical investigations</li>
                <li>Integrated project support across India and worldwide</li>
                <li>Emphasis on quality deliverables and safety of people and environment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
