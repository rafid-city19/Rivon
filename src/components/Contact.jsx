import React, { useState } from "react";
import {
  CalendarDays,
  Clock3,
  Video,
  ChevronRight,
  ChevronLeft,
  Check,
  User,
  Mail,
  Building2,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [step, setStep] = useState(1);

  const [meetingData, setMeetingData] = useState({
    meetingType: "",
    date: "",
    time: "",
    duration: "30",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const meetingTypes = [
    {
      id: "discovery",
      title: "Discovery Call",
      description: "Let's understand your idea and goals.",
      duration: "30 min",
      icon: Sparkles,
    },
    {
      id: "project",
      title: "Project Discussion",
      description: "Discuss your project, requirements and timeline.",
      duration: "45 min",
      icon: MessageSquare,
    },
    {
      id: "consultation",
      title: "Tech Consultation",
      description: "Get guidance on technology and development.",
      duration: "30 min",
      icon: Video,
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  const handleChange = (e) => {
    setMeetingData({
      ...meetingData,
      [e.target.name]: e.target.value,
    });
  };

  const selectMeetingType = (type) => {
    setMeetingData({
      ...meetingData,
      meetingType: type.id,
      duration: type.duration.replace(" min", ""),
    });
  };

  const selectTime = (time) => {
    setMeetingData({
      ...meetingData,
      time,
    });
  };

  const nextStep = () => {
    if (step === 1 && !meetingData.meetingType) return;
    if (step === 2 && (!meetingData.date || !meetingData.time)) return;

    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Meeting booked:", meetingData);

    setStep(4);
  };

  const today = new Date().toISOString().split("T")[0];

  const selectedMeeting = meetingTypes.find(
    (meeting) => meeting.id === meetingData.meetingType
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-[140px]" />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-lime-400/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-sm font-semibold text-lime-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
            Book a Meeting
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's talk about
            <span className="text-lime-400"> your idea.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Pick a convenient time and let's discuss what you're building,
            what you need, and how Rivon can help.
          </p>
        </div>

        {/* ================= MEETING AREA ================= */}

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-2xl shadow-black/20 backdrop-blur-xl">
            
            {/* ================= PROGRESS BAR ================= */}

            {step !== 4 && (
              <div className="border-b border-slate-800 px-6 py-5 sm:px-10">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((number) => (
                    <React.Fragment key={number}>
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                            step >= number
                              ? "bg-lime-400 text-slate-950"
                              : "border border-slate-700 bg-slate-950 text-slate-600"
                          }`}
                        >
                          {step > number ? (
                            <Check size={15} />
                          ) : (
                            number
                          )}
                        </div>

                        <span
                          className={`hidden text-xs font-semibold sm:block ${
                            step >= number
                              ? "text-slate-300"
                              : "text-slate-600"
                          }`}
                        >
                          {number === 1
                            ? "Meeting"
                            : number === 2
                            ? "Date & Time"
                            : "Your Details"}
                        </span>
                      </div>

                      {number !== 3 && (
                        <div className="mx-3 h-px flex-1 bg-slate-800">
                          <div
                            className={`h-full bg-lime-400 transition-all duration-500 ${
                              step > number ? "w-full" : "w-0"
                            }`}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* ================= STEP 1 ================= */}

            {step === 1 && (
              <div className="p-6 sm:p-10">
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
                    Step 01
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    What would you like to discuss?
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Choose the type of meeting that fits your needs.
                  </p>
                </div>

                <div className="grid gap-4">
                  {meetingTypes.map((meeting) => {
                    const Icon = meeting.icon;
                    const isSelected =
                      meetingData.meetingType === meeting.id;

                    return (
                      <button
                        key={meeting.id}
                        type="button"
                        onClick={() => selectMeetingType(meeting)}
                        className={`group relative flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-lime-400/60 bg-lime-400/10 shadow-lg shadow-lime-400/5"
                            : "border-slate-800 bg-slate-950/50 hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-950"
                        }`}
                      >
                        {/* Icon */}
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all ${
                            isSelected
                              ? "bg-lime-400 text-slate-950"
                              : "border border-slate-800 bg-slate-900 text-lime-400 group-hover:border-lime-400/30"
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-bold text-white">
                              {meeting.title}
                            </h4>

                            <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                              {meeting.duration}
                            </span>
                          </div>

                          <p className="mt-1 text-sm text-slate-500">
                            {meeting.description}
                          </p>
                        </div>

                        {/* Check */}
                        <div
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                            isSelected
                              ? "border-lime-400 bg-lime-400 text-slate-950"
                              : "border-slate-700 text-transparent"
                          }`}
                        >
                          <Check size={14} />
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!meetingData.meetingType}
                  className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_10px_40px_rgba(163,230,53,0.2)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  Continue
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            )}

            {/* ================= STEP 2 ================= */}

            {step === 2 && (
              <div className="p-6 sm:p-10">
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
                    Step 02
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Pick a date & time
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Choose a convenient time for our meeting.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  {/* DATE */}

                  <div>
                    <label
                      htmlFor="date"
                      className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-300"
                    >
                      <CalendarDays size={16} className="text-lime-400" />
                      Select a date
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={today}
                      value={meetingData.date}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4 text-sm text-white outline-none transition-all [color-scheme:dark] focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/10"
                    />

                    {/* Timezone */}

                    <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                      <div className="flex items-center gap-3">
                        <Clock3
                          size={17}
                          className="shrink-0 text-lime-400"
                        />

                        <div>
                          <p className="text-xs font-semibold text-slate-500">
                            Timezone
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-300">
                            Bangladesh Standard Time (BST)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TIME */}

                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                        <Clock3 size={16} className="text-lime-400" />
                        Available times
                      </label>

                      <span className="text-xs text-slate-600">
                        {timeSlots.length} slots
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                      {timeSlots.map((time) => {
                        const isSelected = meetingData.time === time;

                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => selectTime(time)}
                            className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-200 ${
                              isSelected
                                ? "border-lime-400 bg-lime-400 text-slate-950 shadow-lg shadow-lime-400/10"
                                : "border-slate-800 bg-slate-950 text-slate-400 hover:border-lime-400/40 hover:text-lime-400"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* NAVIGATION */}

                <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 px-6 py-4 font-semibold text-slate-400 transition-all hover:border-slate-700 hover:text-white"
                  >
                    <ChevronLeft size={18} />
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!meetingData.date || !meetingData.time}
                    className="group flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_10px_40px_rgba(163,230,53,0.2)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 sm:min-w-[220px]"
                  >
                    Continue
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 3 ================= */}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="p-6 sm:p-10">
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
                    Step 03
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Tell us a little about you
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    We'll use these details to prepare for the meeting.
                  </p>
                </div>

                {/* Meeting summary */}

                <div className="mb-8 grid gap-3 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-slate-600">Meeting</p>
                    <p className="mt-1 text-sm font-bold text-white">
                      {selectedMeeting?.title}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-600">Date</p>
                    <p className="mt-1 text-sm font-bold text-white">
                      {meetingData.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-600">Time</p>
                    <p className="mt-1 text-sm font-bold text-lime-400">
                      {meetingData.time}
                    </p>
                  </div>
                </div>

                {/* Name / Email */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Your name
                    </label>

                    <div className="relative">
                      <User
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                      />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={meetingData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={meetingData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/10"
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}

                <div className="mt-5">
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Company
                    <span className="ml-1 text-slate-700">(optional)</span>
                  </label>

                  <div className="relative">
                    <Building2
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                    />

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company or organization"
                      value={meetingData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/10"
                    />
                  </div>
                </div>

                {/* Message */}

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    What would you like to discuss?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us briefly about your project, idea, problem or goals..."
                    value={meetingData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/10"
                  />
                </div>

                {/* NAVIGATION */}

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 px-6 py-4 font-semibold text-slate-400 transition-all hover:border-slate-700 hover:text-white"
                  >
                    <ChevronLeft size={18} />
                    Back
                  </button>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_10px_40px_rgba(163,230,53,0.25)] sm:min-w-[220px]"
                  >
                    Confirm Meeting
                    <Check
                      size={18}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-slate-700">
                  We'll only use your information to arrange and prepare for
                  this meeting.
                </p>
              </form>
            )}

            {/* ================= STEP 4 ================= */}

            {step === 4 && (
              <div className="px-6 py-16 text-center sm:px-10 sm:py-20">
                {/* Success icon */}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-slate-950 shadow-lg shadow-lime-400/20">
                    <Check size={26} strokeWidth={3} />
                  </div>
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-widest text-lime-400">
                  Meeting request received
                </p>

                <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  You're on the calendar.
                </h3>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                  Thanks, {meetingData.name || "there"}. We've received your
                  meeting request and will contact you at{" "}
                  <span className="font-semibold text-slate-300">
                    {meetingData.email}
                  </span>{" "}
                  with the confirmation.
                </p>

                {/* Meeting card */}

                <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-left">
                  <div className="border-b border-slate-800 bg-slate-900/60 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                      Meeting details
                    </p>
                  </div>

                  <div className="grid gap-5 p-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-slate-600">Type</p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {selectedMeeting?.title}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-600">Date</p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {meetingData.date}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-600">Time</p>
                      <p className="mt-1 text-sm font-bold text-lime-400">
                        {meetingData.time}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 px-5 py-4">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Clock3 size={14} />
                      {meetingData.duration} minutes · Bangladesh Standard Time
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setMeetingData({
                      meetingType: "",
                      date: "",
                      time: "",
                      duration: "30",
                      name: "",
                      email: "",
                      company: "",
                      message: "",
                    });
                  }}
                  className="mt-8 text-sm font-semibold text-slate-500 transition-colors hover:text-lime-400"
                >
                  Book another meeting →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================= BOTTOM TRUST ================= */}

        {step !== 4 && (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Check size={14} className="text-lime-400" />
              No commitment required
            </div>

            <div className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Video size={14} className="text-lime-400" />
              Online meeting
            </div>

            <div className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Clock3 size={14} className="text-lime-400" />
              Flexible scheduling
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;