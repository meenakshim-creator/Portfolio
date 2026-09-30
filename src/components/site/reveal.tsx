import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(16px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  label,
  tint,
  children,
}: {
  id: string;
  label: string;
  tint?: "blue" | "rose";
  children: ReactNode;
}) {
  const tintCls = tint === "blue" ? "bg-wash-blue" : tint === "rose" ? "bg-wash-rose" : "";
  return (
    <section id={id} className={`border-t border-hairline ${tintCls}`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28 lg:px-14">
        <Reveal>
          <p className="eyebrow mb-12 md:mb-16">{label}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
