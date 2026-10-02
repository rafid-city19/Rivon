import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive and high-performance websites built for businesses and brands.",
      link: "/services/web-development",
    },
    {
      title: "App Development",
      description:
        "Powerful and user-friendly mobile applications designed to help businesses grow.",
      link: "/services/app-development",
    },
    {
      title: "UI/UX Design",
      description:
        "Clean and intuitive digital experiences designed around your users.",
      link: "/services/ui-ux",
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Strategies that help your business reach more people and build a stronger online presence.",
      link: "/services/seo-digital-marketing",
    },
    {
      title: "Business Solutions",
      description:
        "Custom digital solutions including POS, CRM, HR and other business management systems.",
      link: "/services/business-solutions",
    },
    {
      title: "AI Solutions",
      description:
        "Smart AI-powered solutions that automate tasks and improve the way businesses operate.",
      link: "/services/ai-solutions",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
            What We Do
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Digital solutions built for{" "}
            <span className="text-lime-400">growth.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            From websites and mobile apps to AI and business solutions, we
            build technology that helps businesses move forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:bg-slate-900/70"
            >
              {/* Number */}
              <span className="text-sm font-bold text-slate-600 transition-colors duration-300 group-hover:text-lime-400">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-lime-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-500 transition-all duration-300 group-hover:gap-3 group-hover:text-lime-400">
                Explore
                <span>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;