import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const SEODigitalMarketing = () => {
  const services = [
    {
      number: "01",
      title: "Search Engine Optimization",
      description:
        "Improve your website's visibility in search engines and attract people actively looking for your products or services.",
    },
    {
      number: "02",
      title: "Technical SEO",
      description:
        "Optimize your website structure, performance, crawlability and technical foundation for better search visibility.",
    },
    {
      number: "03",
      title: "Content Strategy",
      description:
        "Create useful, search-focused content designed to answer questions, build authority and attract the right audience.",
    },
    {
      number: "04",
      title: "Local SEO",
      description:
        "Help local customers discover your business through stronger local search visibility and optimized business profiles.",
    },
    {
      number: "05",
      title: "Social Media Marketing",
      description:
        "Build a consistent digital presence and connect your brand with the audience that matters to your business.",
    },
    {
      number: "06",
      title: "Performance Marketing",
      description:
        "Use targeted digital campaigns to reach potential customers and turn attention into measurable business results.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Research",
      description:
        "We study your business, audience, competitors and search landscape to understand where opportunities exist.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We build a focused digital strategy based on your goals, audience and competitive environment.",
    },
    {
      number: "03",
      title: "Optimize",
      description:
        "We improve your website, content and digital presence to create a stronger foundation for growth.",
    },
    {
      number: "04",
      title: "Create",
      description:
        "We develop useful content and campaigns designed to attract attention and generate meaningful engagement.",
    },
    {
      number: "05",
      title: "Measure",
      description:
        "We monitor rankings, traffic, engagement and other important metrics to understand what's working.",
    },
    {
      number: "06",
      title: "Improve",
      description:
        "Digital marketing is continuous, so we refine the strategy based on real data and changing opportunities.",
    },
  ];

  const benefits = [
    "Increase online visibility",
    "Reach the right audience",
    "Generate more organic traffic",
    "Build brand credibility",
    "Create consistent growth",
    "Turn visitors into customers",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <div className="fixed left-0 right-0 top-0 z-50 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            Riv<span className="text-lime-400">on</span>.
          </Link>

          <Link
            to="/"
            className="group flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-2.5 text-sm font-bold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-lime-400/40 hover:text-lime-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Rivon
          </Link>

        </div>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-lime-400/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-slate-800" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* HERO CONTENT */}
          <div>

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                SEO & Digital Marketing
              </span>

            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Get your brand{" "}
              <span className="text-lime-400">
                discovered.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              We help businesses build stronger digital visibility, reach the
              right audience and turn online attention into meaningful growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Grow Your Business

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-6 py-3.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:text-lime-400"
              >
                Explore Services
              </a>

            </div>

          </div>

          {/* =====================================================
              SEO VISUAL
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative aspect-square">

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

              {/* Dashboard */}
              <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-black/50">

                <div className="rounded-2xl bg-slate-950 p-6 sm:p-8">

                  {/* Header */}
                  <div className="flex items-center justify-between">

                    <div>

                      <div className="h-3 w-28 rounded bg-slate-700" />

                      <div className="mt-2 h-2 w-20 rounded bg-slate-800" />

                    </div>

                    <div className="h-9 w-9 rounded-full bg-lime-400/20" />

                  </div>

                  {/* Ranking */}
                  <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-[10px] uppercase tracking-wider text-slate-500">
                          Search Visibility
                        </p>

                        <p className="mt-2 text-2xl font-black text-white">
                          +72%
                        </p>

                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-xl font-black text-slate-950">
                        ↑
                      </div>

                    </div>

                    <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">

                      <div className="h-full w-[72%] rounded-full bg-lime-400" />

                    </div>

                  </div>

                  {/* Search Result */}
                  <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 text-xs font-black text-slate-950">
                        R
                      </div>

                      <div className="flex-1">

                        <div className="h-2 w-28 rounded bg-slate-700" />

                        <div className="mt-2 h-2 w-20 rounded bg-slate-800" />

                      </div>

                      <span className="text-xs font-bold text-lime-400">
                        #1
                      </span>

                    </div>

                    <div className="mt-5 h-2 w-full rounded bg-slate-800" />

                    <div className="mt-2 h-2 w-4/5 rounded bg-slate-800" />

                  </div>

                  {/* Keywords */}
                  <div className="mt-4 grid grid-cols-3 gap-3">

                    {[
                      ["SEO", "↑ 42%"],
                      ["Traffic", "↑ 68%"],
                      ["Leads", "↑ 35%"],
                    ].map(([label, value]) => (

                      <div
                        key={label}
                        className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                      >

                        <p className="text-[9px] uppercase tracking-wider text-slate-500">
                          {label}
                        </p>

                        <p className="mt-2 text-sm font-black text-lime-400">
                          {value}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-0 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Visibility
                </p>

                <p className="mt-1 text-lg font-black text-lime-400">
                  Get Discovered
                </p>

              </div>

              {/* Floating Badge */}
              <div className="absolute right-0 top-10 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Growth
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  Data Driven
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-slate-900 bg-slate-950/80">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-900 sm:grid-cols-4">

          {[
            ["01", "Visible"],
            ["02", "Targeted"],
            ["03", "Measurable"],
            ["04", "Scalable"],
          ].map(([number, text]) => (

            <div key={number} className="px-5 py-10 sm:px-8">

              <p className="text-xs font-bold text-lime-400">
                {number}
              </p>

              <p className="mt-2 text-sm font-bold text-slate-300 sm:text-base">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Digital Growth
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Being online isn't enough.{" "}
              <span className="text-slate-500">
                You need to be found.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-lg leading-8 text-slate-400">
              Your customers are already searching, scrolling and comparing.
              We help make sure your brand is visible when and where those
              customers are looking.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="bg-slate-900/30 px-6 py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              What We Do
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Digital marketing built for{" "}
              <span className="text-lime-400">
                real growth.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-800 bg-slate-800 md:grid-cols-2 lg:grid-cols-3">

            {services.map((item) => (

              <div
                key={item.number}
                className="group bg-slate-950 p-8 transition-all duration-300 hover:bg-slate-900"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm font-bold text-slate-600 transition-colors group-hover:text-lime-400">
                    {item.number}
                  </span>

                  <span className="text-xl text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-400">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              The Opportunity
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Turn attention into{" "}
              <span className="text-lime-400">
                opportunity.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Strong digital visibility creates more opportunities for people
              to discover your brand, trust your business and eventually
              become customers.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {benefits.map((benefit, index) => (

              <div
                key={benefit}
                className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30"
              >

                <div className="flex items-center gap-4">

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-black text-slate-950">
                    {index + 1}
                  </span>

                  <span className="text-sm font-bold text-slate-300 transition-colors group-hover:text-white">
                    {benefit}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section
        id="process"
        className="bg-slate-900/30 px-6 py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              How We Work
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              From visibility to{" "}
              <span className="text-lime-400">
                growth.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {process.map((item) => (

              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30"
              >

                <span className="text-sm font-black text-lime-400">
                  {item.number}
                </span>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY RIVON
      ========================================================= */}
      <section className="relative overflow-hidden bg-lime-400 px-6 py-24 text-slate-950 sm:py-32">

        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-white/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-800">
              Why Rivon
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Don't chase every trend. Build a digital presence that lasts.
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "Strategy before execution",
              "Data-driven decisions",
              "Quality-focused content",
              "Long-term SEO thinking",
              "Audience-focused marketing",
              "Continuous optimization",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-slate-950/10 bg-slate-950/5 p-5"
              >

                <div className="flex items-center gap-3">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-lime-400">
                    ✓
                  </span>

                  <span className="text-sm font-bold">
                    {item}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        id="contact"
        className="px-6 py-24 sm:py-32"
      >

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/50 px-7 py-16 text-center sm:px-12">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Grow Online
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Ready to get your business discovered?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us about your business and your growth goals. Let's build a
              digital strategy that actually makes sense for you.
            </p>

            <a
              href="mailto:hello@rivon.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-lime-400 px-7 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Discuss Your Growth

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default SEODigitalMarketing;