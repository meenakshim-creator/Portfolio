import { Reveal } from "./reveal";

type Project = {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: string;
  features?: string[];
  note?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Travexa",
    subtitle: "AI Smart Travel Planner",
    description:
      "An interactive travel planning platform designed to help users explore destinations, create personalized itineraries, estimate budgets, and organize travel plans.",
    tech: "HTML · CSS · JavaScript · AI-based features",
    features: [
      "Destination exploration",
      "Itinerary planning",
      "Budget estimation",
      "Package builder",
      "Travel recommendations",
    ],
  },
  {
    number: "02",
    title: "Dementia Care & Cognitive Support Platform",
    description:
      "A technology-focused solution designed to support elderly users and caregivers through cognitive activities, reminders, multilingual accessibility, and caregiver-oriented tools.",
    tech: "React · FastAPI · SQLite · AI/ML",
    features: [
      "Cognitive games",
      "Adaptive difficulty",
      "Daily reminders",
      "Memory support",
      "Multilingual interface",
      "Caregiver dashboard",
      "Offline-first approach",
    ],
    note: "Built while exploring a hackathon / SIH problem statement.",
  },
  {
    number: "03",
    title: "Smart Pill Reminder Box",
    description:
      "A smart product concept designed to help users organize medication schedules through reminders and structured pill management.",
    tech: "Hardware concept · Scheduling logic",
  },
];

export function Projects() {
  return (
    <ul className="border-t border-hairline">
      {projects.map((p, i) => (
        <Reveal key={p.number} delay={i * 80}>
          <li className="group border-b border-hairline">
            <a
              href="#contact"
              className="block px-1 py-10 transition-colors duration-500 group-hover:bg-surface md:px-6 md:py-14"
            >
              <div className="grid gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-2">
                  <span className="display text-4xl text-muted-foreground transition-colors duration-500 group-hover:text-primary md:text-5xl">
                    {p.number}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <h3 className="display text-3xl leading-tight md:text-[2.6rem]">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>
                  )}
                  <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  {p.features && (
                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      {p.features.map((f) => (
                        <li key={f} className="before:mr-2 before:text-primary before:content-['—']">
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.note && (
                    <p className="mt-6 text-sm text-muted-foreground italic">{p.note}</p>
                  )}
                </div>

                <div className="flex flex-col justify-between md:col-span-3 md:items-end md:text-right">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.tech}</p>
                  <span className="mt-6 inline-block text-sm text-foreground opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-2">
                    View project →
                  </span>
                </div>
              </div>
            </a>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
