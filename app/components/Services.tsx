"use client";

import { useState } from "react";
import { Service } from "../data/portfolioData";

interface ServicesProps {
  services: Service[];
}

const SectionNumber = ({ num }: { num: number }) => (
  <span className="text-[var(--accent-cyan)] font-mono text-sm mr-2">
    0{num}.
  </span>
);

export default function Services({ services }: ServicesProps) {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="py-16 md:py-24 px-6 sm:px-12 md:px-24 lg:px-36 max-w-[1200px] mx-auto"
    >
      <h2 className="flex items-center text-2xl md:text-[28px] font-semibold text-[var(--heading-dark)] mb-8 md:mb-10">
        <SectionNumber num={2} /> Services
        <span className="flex-1 h-px bg-[var(--bg-secondary)] ml-5 max-w-[300px]" />
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0">
        {/* Tabs */}
        <div className="flex flex-col border-l-2 border-[var(--bg-secondary)]">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-5 py-3 text-left border-l-2 -ml-[2px] transition-all duration-200 ${
                activeService === index
                  ? "bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)] text-[var(--accent-cyan)]"
                  : "bg-transparent border-transparent text-[var(--text-dim)] hover:bg-[var(--accent-cyan)]/5"
              } font-mono text-xs whitespace-nowrap cursor-pointer`}
            >
              {service.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="py-2.5 px-0 md:pl-8 min-h-[180px] md:min-h-[200px]">
          <h3 className="text-lg md:text-xl text-[var(--heading-dark)] mb-2 flex items-center gap-2.5">
            {services[activeService].title}
            {services[activeService].plus && (
              <span className="text-[11px] px-2 py-1 bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] rounded font-mono">
                Shopify Plus
              </span>
            )}
          </h3>
          <ul className="list-none p-0 m-0 mt-5">
            {services[activeService].items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 mb-3.5 leading-relaxed text-sm md:text-base text-[var(--text-primary)]"
              >
                <span className="text-[var(--accent-cyan)] mt-0.5">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
