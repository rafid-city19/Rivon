import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      setTimeout(() => {
        setHide(true);
      }, 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-slate-950 transition-opacity duration-700 ${
        loading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative">
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
            Rivon<span className="text-lime-400">.</span>
          </h1>

          {/* Glow */}
          <div className="absolute -inset-4 -z-10 rounded-full bg-lime-400/10 blur-2xl" />
        </div>

        {/* Loading line */}
        <div className="mt-8 h-0.5 w-40 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/2 animate-loading bg-lime-400" />
        </div>

        <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          Loading
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;