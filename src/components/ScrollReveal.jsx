import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directions = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transform transition-all duration-700 ease-out ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${directions[direction]} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;