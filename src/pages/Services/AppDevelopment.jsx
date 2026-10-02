import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const AppDevelopment = () => {
  const services = [
    {
      number: "01",
      title: "Mobile Applications",
      description:
        "Modern mobile applications designed to give your users a fast, intuitive and reliable experience.",
    },
    {
      number: "02",
      title: "Cross-Platform Apps",
      description:
        "Build once and reach multiple platforms with efficient cross-platform application development.",
    },
    {
      number: "03",
      title: "Business Applications",
      description:
        "Custom applications that help businesses manage operations, customers, teams and workflows.",
    },
    {
      number: "04",
      title: "Customer Apps",
      description:
        "Engaging digital experiences that help businesses connect with customers and deliver better services.",
    },
    {
      number: "05",
      title: "Dashboard & Admin Systems",
      description:
        "Powerful dashboards and management systems that give your team control over your application.",
    },
    {
      number: "06",
      title: "API & Backend Integration",
      description:
        "Connect your application with APIs, databases and existing business systems through reliable integrations.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your idea, users and business goals before defining the right product direction.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We map out the features, architecture and technology required to turn the idea into a scalable product.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create intuitive interfaces and user experiences that make your application simple and enjoyable to use.",
    },
    {
      number: "04",
      title: "Develop",
      description:
        "Our development process turns the approved designs into a functional, reliable application.",
    },
    {
      number: "05",
      title: "Test",
      description:
        "We test performance, usability, responsiveness and edge cases before your application goes live.",
    },
    {
      number: "06",
      title: "Launch & Improve",
      description:
        "After launch, we monitor the product and continuously improve it based on real-world usage and feedback.",
    },
  ];

  const benefits = [
    "Reach customers on mobile",
    "Improve customer experience",
    "Automate business processes",
    "Create new revenue channels",
    "Centralize business operations",
    "Build scalable digital products",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =========================================================
          SERVICE PAGE HEADER
      ========================================================= */}
      <div className="fixed left-0 right-0 top-0 z-50 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            Riv<span className="text-lime-400">on</span>.
          </Link>

          {/* Back Button */}
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

        {/* Background Effects */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-lime-400/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-slate-800" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* HERO CONTENT */}
          <div>

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                App Development
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build an app people{" "}
              <span className="text-lime-400">actually want to use.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              We build modern, scalable applications that turn ideas into
              useful digital products and meaningful user experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Start Your App

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

          {/* APP VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative aspect-square">

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

              {/* Phone */}
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border-8 border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-black/60">

                <div className="relative h-full overflow-hidden rounded-[2.3rem] bg-slate-950">

                  {/* Phone Notch */}
                  <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-900" />

                  {/* App Header */}
                  <div className="px-6 pt-14">

                    <div className="flex items-center justify-between">

                      <div>
                        <div className="h-3 w-20 rounded bg-slate-700" />
                        <div className="mt-2 h-2 w-14 rounded bg-slate-800" />
                      </div>

                      <div className="h-9 w-9 rounded-full bg-lime-400/20" />

                    </div>

                  </div>

                  {/* App Cards */}
                  <div className="mt-8 space-y-4 px-5">

                    <div className="rounded-2xl bg-lime-400 p-5">
                      <div className="h-2 w-16 rounded bg-slate-950/30" />

                      <div className="mt-5 h-3 w-28 rounded bg-slate-950/20" />

                      <div className="mt-2 h-2 w-20 rounded bg-slate-950/20" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">

                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <div className="h-8 w-8 rounded-lg bg-lime-400/10" />
                        <div className="mt-5 h-2 w-14 rounded bg-slate-700" />
                        <div className="mt-2 h-2 w-10 rounded bg-slate-800" />
                      </div>

                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <div className="h-8 w-8 rounded-lg bg-lime-400/10" />
                        <div className="mt-5 h-2 w-14 rounded bg-slate-700" />
                        <div className="mt-2 h-2 w-10 rounded bg-slate-800" />
                      </div>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                      <div className="flex items-center justify-between">
                        <div className="h-2 w-20 rounded bg-slate-700" />
                        <div className="h-2 w-8 rounded bg-lime-400/60" />
                      </div>

                      <div className="mt-5 h-20 rounded-xl bg-slate-950" />

                    </div>

                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950/95 px-5 py-5">

                    <div className="flex items-center justify-around">

                      <div className="h-2 w-8 rounded bg-lime-400" />

                      <div className="h-2 w-8 rounded bg-slate-800" />

                      <div className="h-2 w-8 rounded bg-slate-800" />

                      <div className="h-2 w-8 rounded bg-slate-800" />

                    </div>

                  </div>

                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute bottom-10 left-0 rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Experience
                </p>

                <p className="mt-1 text-lg font-black text-lime-400">
                  User First
                </p>

              </div>

              {/* Floating Badge 2 */}
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

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-slate-900 bg-slate-950/80">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-900 sm:grid-cols-4">

          {[
            ["01", "Fast"],
            ["02", "Scalable"],
            ["03", "Reliable"],
            ["04", "User-Focused"],
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
              More Than An App
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Build something{" "}
              <span className="text-slate-500">
                people remember.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-lg leading-8 text-slate-400">
              A successful application isn't just about writing code. It's
              about understanding users, solving real problems and creating an
              experience that keeps people coming back.
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
              What We Build
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Applications designed for{" "}
              <span className="text-lime-400">
                real-world use.
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
              Turn your idea into{" "}
              <span className="text-lime-400">
                something real.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              The right application can simplify operations, connect you with
              customers and create entirely new opportunities for your
              business.
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
              From idea to{" "}
              <span className="text-lime-400">
                application.
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
              Don't build an app just to have an app.
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "User-first approach",
              "Modern technology",
              "Scalable architecture",
              "Clean interfaces",
              "Reliable development",
              "Long-term support",
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
              Start Building
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Have an app idea? Let's build it.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us about your idea, the problem you're trying to solve and
              what you want your application to achieve.
            </p>

            <a
              href="mailto:hello@rivon.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-lime-400 px-7 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Discuss Your App

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default AppDevelopment;