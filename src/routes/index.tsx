import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/nav";
import { Reveal, Section } from "@/components/site/reveal";
import { Projects } from "@/components/site/projects";
import { ContactForm } from "@/components/site/contact-form";

const title = "Meenakshi Mishra — B.Tech CSE (AI & Data Science)";
const description =
  "Personal site of Meenakshi Mishra, a second-year Computer Science student exploring software development, artificial intelligence and data science through projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skillGroups = [
  { heading: "Programming", items: "Python · C · C++" },
  {
    heading: "Computer Science",
    items:
      "Data Structures & Algorithms · OOP · Operating Systems · Computer Networks · Database Fundamentals",
  },
  {
    heading: "AI & Data",
    items: "Artificial Intelligence · Machine Learning · Data Science · Statistics",
  },
  { heading: "Web", items: "HTML · CSS · JavaScript · Responsive Design" },
  { heading: "Tools", items: "Git · GitHub · VS Code · SQLite" },
];

const learning = [
  "Data Structures & Algorithms",
  "Machine Learning",
  "Artificial Intelligence",
  "Full-Stack Development",
  "Data Science",
  "Software Engineering",
];

const activities = [
  "Programming practice",
  "AI/ML exploration",
  "Hackathon projects",
  "Technical workshops and sessions",
  "Web development",
  "Exploring entrepreneurship and technology",
];

const dotColors = ["bg-primary", "bg-dusk", "bg-marigold", "bg-blush", "bg-olive"];
const numColors = ["text-primary", "text-marigold", "text-dusk", "text-blush", "text-olive"];

function Index() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-20 pb-24 sm:px-10 md:pt-32 md:pb-36 lg:px-14">
        <p className="eyebrow rise">B.Tech CSE (AI &amp; Data Science) · 2nd Year</p>
        <h1
          className="display rise mt-8 max-w-4xl text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          style={{ animationDelay: "90ms" }}
        >
          Hi, I&rsquo;m Meenakshi.
          <br />
          <span className="text-muted-foreground">
            I build, learn &amp; explore through technology.
          </span>
        </h1>
        <p
          className="rise mt-10 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground"
          style={{ animationDelay: "180ms" }}
        >
          I&rsquo;m a Computer Science student interested in software development, artificial
          intelligence, data science, and problem solving. I enjoy turning what I learn into
          practical projects and continuously exploring new areas of technology.
        </p>
        <div
          className="rise mt-12 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href="#projects"
            className="bg-primary px-7 py-3.5 text-xs tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-85"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-foreground/25 px-7 py-3.5 text-xs tracking-[0.16em] uppercase transition-colors hover:bg-surface"
          >
            Get in Touch
          </a>
        </div>
        <p
          className="rise mt-20 border-t border-hairline pt-6 text-sm text-muted-foreground"
          style={{ animationDelay: "340ms" }}
        >
          Currently exploring —{" "}
          <span className="text-primary">AI</span> •{" "}
          <span className="text-marigold">Data Science</span> •{" "}
          <span className="text-dusk">Software Development</span>
        </p>
      </section>

      {/* About */}
      <Section id="about" label="About">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="display text-5xl md:text-6xl">A little about me</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <div className="space-y-6 text-[1.02rem] leading-relaxed text-muted-foreground">
              <p>
                I&rsquo;m currently pursuing my B.Tech in Computer Science Engineering with a
                specialization in Artificial Intelligence &amp; Data Science.
              </p>
              <p>
                As a student, I&rsquo;m focused on building strong fundamentals in programming,
                data structures, algorithms, software development, and AI. I learn best by
                experimenting, building projects, and solving problems rather than just studying
                theory.
              </p>
              <p>
                I&rsquo;m still early in my journey, but I&rsquo;m curious about how technology can
                be used to solve meaningful real-world problems.
              </p>
            </div>
            <p className="mt-10 text-sm text-primary italic">
              Based in India · Learning every day
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" label="Skills" tint="blue">
        <div className="space-y-0">
          {skillGroups.map((g, i) => (
            <Reveal key={g.heading} delay={i * 70}>
              <div className="grid gap-3 border-t border-hairline py-8 md:grid-cols-12 md:gap-10">
                <h3 className="text-base tracking-tight md:col-span-3">
                  <span
                    className={`mr-3 inline-block h-1.5 w-1.5 rounded-full align-middle ${dotColors[i % dotColors.length]}`}
                  />
                  {g.heading}
                </h3>
                <p className="text-[1.02rem] leading-relaxed text-muted-foreground md:col-span-9">
                  {g.items}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" label="Selected Projects">
        <Projects />
      </Section>

      {/* Education */}
      <Section id="education" label="Education">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="display text-5xl md:text-6xl">Where I&rsquo;m studying</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <div className="relative border-l border-hairline pl-8">
              <span className="absolute top-2 -left-[4.5px] h-2 w-2 rounded-full bg-primary" />
              <h3 className="text-lg tracking-tight">
                B.Tech — Computer Science Engineering
              </h3>
              <p className="mt-1 text-muted-foreground">
                Artificial Intelligence &amp; Data Science
              </p>
              <p className="mt-1 text-sm text-primary">Currently in 2nd Year</p>
              <p className="eyebrow mt-8">Relevant areas</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {[
                  "Programming",
                  "Data Structures & Algorithms",
                  "Artificial Intelligence",
                  "Data Science",
                  "Computer Science fundamentals",
                ].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Currently learning */}
      <Section id="learning" label="Currently Learning">
        <Reveal>
          <h2 className="display max-w-2xl text-5xl md:text-6xl">
            What I&rsquo;m learning right now
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-16 sm:grid-cols-2">
          {learning.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <div className="flex items-baseline gap-6 border-t border-hairline py-6">
                <span
                  className={`display text-xl ${numColors[i % numColors.length]}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.02rem]">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Activities */}
      <Section id="activities" label="Learning & Activities" tint="rose">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="display text-5xl md:text-6xl">Things I&rsquo;m involved in</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <ul className="text-[1.02rem]">
              {activities.map((a) => (
                <li key={a} className="border-t border-hairline py-4 text-muted-foreground">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="display text-6xl md:text-7xl">Let&rsquo;s talk.</h2>
            <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
              Whether it&rsquo;s a project, an internship opportunity, a technical discussion, or
              simply an interesting idea — I&rsquo;d be happy to connect.
            </p>
            <dl className="mt-12 space-y-4 text-[1.02rem]">
              {[
                ["Email", "your-email@example.com"],
                ["LinkedIn", "linkedin.chttps://www.linkedin.com/in/meenakshi-mishra-27327a380?utm_source=share_via&utm_content=profile&utm_medium=member_androidom/in/your-profile"],
                ["GitHub", "https://github.com/meenakshim-creator"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-wrap items-baseline gap-x-6">
                  <dt className="eyebrow w-20">{k}</dt>
                  <dd className="link-underline text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-14 sm:px-10 md:flex-row md:items-end md:justify-between lg:px-14">
          <div>
            <p className="display text-2xl">Meenakshi Mishra</p>
            <p className="mt-2 text-sm text-muted-foreground">
              B.Tech CSE — AI &amp; Data Science
            </p>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#contact" className="link-underline hover:text-foreground">
              GitHub
            </a>
            <a href="#contact" className="link-underline hover:text-foreground">
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Meenakshi Mishra</p>
        </div>
      </footer>
    </div>
  );
}
