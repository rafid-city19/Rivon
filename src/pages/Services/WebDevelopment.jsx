import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const WebDevelopment = () => {
  const services = [
    {
      number: "01",
      title: "Business Websites",
      description:
        "Professional websites built to establish credibility, communicate your brand and turn visitors into customers.",
    },
    {
      number: "02",
      title: "Web Applications",
      description:
        "Interactive web applications built around your business workflows, users and specific requirements.",
    },
    {
      number: "03",
      title: "E-Commerce",
      description:
        "Modern online stores designed to make product discovery, purchasing and management simple.",
    },
    {
      number: "04",
      title: "Custom Platforms",
      description:
        "Scalable digital platforms created for businesses with unique ideas, processes and technical needs.",
    },
    {
      number: "05",
      title: "Frontend Development",
      description:
        "Fast, responsive and polished interfaces built with modern frontend technologies.",
    },
    {
      number: "06",
      title: "Backend Development",
      description:
        "Reliable backend systems, APIs and databases that power your digital products.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your business, audience, goals and exactly what your website or application needs to achieve.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We define the structure, features, technology and development approach before writing the code.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create a clear and modern interface that connects your brand with a great user experience.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "Our developers turn the design into a fast, responsive and functional digital product.",
    },
    {
      number: "05",
      title: "Test",
      description:
        "We test responsiveness, functionality, performance and usability across different devices.",
    },
    {
      number: "06",
      title: "Launch",
      description:
        "Once everything is ready, we deploy your product and help you move confidently into the next stage.",
    },
  ];

  const benefits = [
    "Responsive on every device",
    "Modern technology",
    "Fast performance",
    "Scalable architecture",
    "SEO-friendly structure",
    "Built around your business",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* HEADER */}
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

      {/* HERO */}
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
                Web Development
              </span>

            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build the web{" "}
              <span className="text-lime-400">
                around your vision.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              We build fast, modern and scalable websites and web applications
              that help businesses turn ideas into digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Start a Web Project

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

          {/* CODE VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative aspect-square">

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

              <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-black/50">

                <div className="rounded-2xl bg-slate-950 p-6 sm:p-8">

                  {/* Window */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />

                    </div>

                    <div className="h-2 w-20 rounded bg-slate-800" />

                  </div>

                  {/* Browser */}
                  <div className="mt-7 overflow-hidden rounded-xl border border-slate-800">

                    <div className="border-b border-slate-800 bg-slate-900 px-4 py-3">

                      <div className="flex items-center gap-3">

                        <div className="h-7 w-7 rounded-lg bg-lime-400" />

                        <div className="h-2 w-24 rounded bg-slate-700" />

                        <div className="ml-auto h-2 w-16 rounded bg-slate-800" />

                      </div>

                    </div>

                    <div className="p-5">

                      <div className="grid grid-cols-2 gap-5">

                        <div className="pt-4">

                          <div className="h-4 w-28 rounded bg-slate-700" />

                          <div className="mt-3 h-3 w-full rounded bg-slate-800" />

                          <div className="mt-2 h-3 w-4/5 rounded bg-slate-800" />

                          <div className="mt-5 h-8 w-24 rounded-lg bg-lime-400" />

                        </div>

                        <div className="h-32 rounded-xl bg-lime-400/10" />

                      </div>

                    </div>

                  </div>

                  {/* Code */}
                  <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-4">

                    <div className="space-y-2 font-mono text-xs">

                      <div>
                        <span className="text-lime-400">&lt;div</span>{" "}
                        <span className="text-slate-500">className=</span>
                        <span className="text-slate-400">
                          "website"
                        </span>
                        <span className="text-lime-400">&gt;</span>
                      </div>

                      <div className="pl-5">
                        <span className="text-lime-400">&lt;h1&gt;</span>{" "}
                        <span className="text-slate-300">
                          Build something great
                        </span>{" "}
                        <span className="text-lime-400">
                          &lt;/h1&gt;
                        </span>
                      </div>

                      <div>
                        <span className="text-lime-400">&lt;/div&gt;</span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating badge */}
              <div className="absolute bottom-8 left-0 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Performance
                </p>

                <p className="mt-1 text-lg font-black text-lime-400">
                  Fast & Reliable
                </p>

              </div>

              {/* Floating badge */}
              <div className="absolute right-0 top-10 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Technology
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  Built to Scale
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="border-y border-slate-900 bg-slate-950/80">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-900 sm:grid-cols-4">

          {[
            ["01", "Responsive"],
            ["02", "Fast"],
            ["03", "Scalable"],
            ["04", "Modern"],
          ].map(([number, text]) => (

            <div
              key={number}
              className="px-5 py-10 sm:px-8"
            >

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

      {/* INTRO */}
      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Beyond The Code
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              A website is more than code.{" "}
              <span className="text-slate-500">
                It's your digital presence.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-lg leading-8 text-slate-400">
              We combine development, design and strategy to create digital
              products that are not only technically strong, but also useful,
              accessible and aligned with your business goals.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-slate-900/30 px-6 py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              What We Build
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Digital products built around{" "}
              <span className="text-lime-400">
                your goals.
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

      {/* BENEFITS */}
      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              The Advantage
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Build something that{" "}
              <span className="text-lime-400">
                lasts.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Your digital product should be able to grow with your business.
              We build with performance, maintainability and scalability in
              mind from the beginning.
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

      {/* PROCESS */}
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
              From idea to{" "}
              <span className="text-lime-400">
                launch.
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

      {/* WHY RIVON */}
      <section className="relative overflow-hidden bg-lime-400 px-6 py-24 text-slate-950 sm:py-32">

        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-white/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-800">
              Why Rivon
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Don't just build a website. Build a digital foundation.
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "Business-first development",
              "Modern technologies",
              "Performance focused",
              "Responsive by default",
              "Scalable architecture",
              "Long-term maintainability",
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

      {/* CTA */}
      <section
        id="contact"
        className="px-6 py-24 sm:py-32"
      >

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/50 px-7 py-16 text-center sm:px-12">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Let's Build
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Have an idea? Let's build it for the web.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us what you're building and we'll explore how to turn your
              idea into a reliable digital product.
            </p>

            <a
              href="mailto:hello@rivon.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-lime-400 px-7 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Discuss a Web Project

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

export default WebDevelopment;