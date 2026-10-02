import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const serviceData = {
  "web-development": {
    number: "01",
    icon: "🌐",
    title: "Web Development",
    subtitle: "Build a powerful digital presence.",
    description:
      "We build modern, fast and responsive websites and web applications designed around your business goals.",
    tags: ["Fullstack", "Interactive", "Responsive"],

    overview:
      "Your website is often the first interaction people have with your business. We create high-performance digital experiences that look great, work smoothly and are built to grow with your business.",

    features: [
      "Business websites",
      "Landing pages",
      "Web applications",
      "E-commerce platforms",
      "Custom dashboards",
      "API integrations",
    ],
  },

  "app-development": {
    number: "02",
    icon: "📱",
    title: "App Development",
    subtitle: "Turn your idea into a mobile experience.",
    description:
      "Powerful mobile applications designed to help your business connect with customers anywhere.",
    tags: ["Mobile", "Cross-platform", "Scalable"],

    overview:
      "We design and develop mobile experiences that are fast, intuitive and scalable. From simple business apps to complex platforms, we help turn your idea into a real product.",

    features: [
      "Android applications",
      "iOS applications",
      "Cross-platform apps",
      "Business applications",
      "Customer apps",
      "API integration",
    ],
  },

  "ui-ux-design": {
    number: "03",
    icon: "🎨",
    title: "UI / UX Design",
    subtitle: "Make your product simple and enjoyable.",
    description:
      "Clean, intuitive and engaging interfaces that make digital products simple and enjoyable to use.",
    tags: ["UI Design", "UX Research", "Prototyping"],

    overview:
      "Great products aren't only functional. They should feel natural to use. We focus on user experience, visual hierarchy and interaction design to create interfaces people actually enjoy using.",

    features: [
      "UI design",
      "UX research",
      "Wireframes",
      "Interactive prototypes",
      "Design systems",
      "Website & app design",
    ],
  },

  "ai-solutions": {
    number: "04",
    icon: "🤖",
    title: "AI Solutions",
    subtitle: "Make your business smarter.",
    description:
      "Smart AI-powered tools and automation that help businesses save time and work more efficiently.",
    tags: ["AI", "Automation", "Chatbots"],

    overview:
      "AI can automate repetitive work, improve customer experiences and help teams make better decisions. We build practical AI solutions around real business problems.",

    features: [
      "AI chatbots",
      "Business automation",
      "AI assistants",
      "Document processing",
      "AI-powered workflows",
      "Custom AI integrations",
    ],
  },

  "business-software": {
    number: "05",
    icon: "📊",
    title: "Business Software",
    subtitle: "Give your business the systems it needs.",
    description:
      "Custom software to manage your business, from CRM and POS systems to HR and business management.",
    tags: ["CRM", "POS", "Management"],

    overview:
      "Every business works differently. Instead of forcing your workflow into generic software, we can build systems around the way your business actually operates.",

    features: [
      "CRM systems",
      "POS systems",
      "HR & payroll",
      "Inventory management",
      "Business dashboards",
      "Custom management software",
    ],
  },

  "digital-growth": {
    number: "06",
    icon: "🚀",
    title: "Digital Growth",
    subtitle: "Turn technology into growth.",
    description:
      "Technology and digital strategies designed to help your business reach more people and grow.",
    tags: ["SEO", "Analytics", "Strategy"],

    overview:
      "Building a great product is only the beginning. We help businesses improve their digital presence, reach the right audience and use data to make better growth decisions.",

    features: [
      "SEO",
      "Digital strategy",
      "Analytics",
      "Conversion optimization",
      "Content strategy",
      "Growth consulting",
    ],
  },
};

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = serviceData[slug];

  // Invalid service
  if (!service) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white">
            Service not found
          </h1>

          <p className="mt-4 text-slate-500">
            The service you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-lime-300"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">

        {/* Back button */}

        <Link
          to="/#services"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-lime-400"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />

          Back to Services
        </Link>

        {/* Hero */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          {/* Left */}

          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-3xl">
                {service.icon}
              </div>

              <span className="text-sm font-black tracking-widest text-lime-400">
                SERVICE {service.number}
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-lime-400 sm:text-2xl">
              {service.subtitle}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {service.description}
            </p>

            {/* Tags */}

            <div className="mt-8 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-4 font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-lime-300"
              >
                Start a Project

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 px-6 py-4 font-semibold text-slate-400 transition hover:border-slate-700 hover:text-white"
              >
                Explore Other Services
              </Link>
            </div>
          </div>

          {/* Right visual */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl">

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                    Rivon
                  </span>

                  <Sparkles
                    size={18}
                    className="text-lime-400"
                  />
                </div>

                <div className="mt-12 flex h-40 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950">
                  <span className="text-7xl">
                    {service.icon}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    What we deliver
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    Technology built around your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Built for the way you work.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              {service.overview}
            </p>
          </div>
        </div>

        {/* Features */}

        <div className="mt-24">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
              What's included
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              What we can build for you.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400/10 text-lime-400">
                    <Check size={17} />
                  </div>

                  <span className="font-semibold text-slate-300 transition-colors group-hover:text-white">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 overflow-hidden rounded-3xl border border-lime-400/20 bg-lime-400/5 p-8 text-center sm:p-12">

          <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
            Ready to build?
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Let's turn your idea into reality.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Tell us what you're trying to build and let's figure out the best
            way to make it happen.
          </p>

          <Link
            to="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-7 py-4 font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-lime-300"
          >
            Let's Talk
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;