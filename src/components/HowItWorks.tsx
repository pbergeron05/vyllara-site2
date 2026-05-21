import { ArrowRight } from "lucide-react";

const steps = [
  [
    "01",
    "Tell us about your group",
    "Families, friends or private retreats.",
  ],
  [
    "02",
    "Select your favorite sports",
    "Pickleball, padel, surf, tennis and more.",
  ],
  [
    "03",
    "We choose the best villa for you",
    "Based on your group’s interests and size.",
  ],
  [
    "04",
    "Receive your tailored quote",
    "Most retreats range from $2K to $3K USD per guest.",
  ],
  [
    "05",
    "Arrive & enjoy your retreat",
    "We handle everything during your stay in the Dominican Republic.",
  ],
];

function StepIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 64 64"
      fill="none"
      className="opacity-100"
    >
      <g
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="32" r="18" />
        <path d="M22 35C28 28 36 28 42 35" />
      </g>
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section
      id="reserve"
      className="bg-[#f7f3ec] px-7 py-24 md:px-14 lg:px-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.28em] text-gold">
          How it works
        </p>

        <div className="mx-auto mb-7 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gold/70" />
          <div className="h-1.5 w-1.5 rounded-full bg-gold" />
          <div className="h-px w-16 bg-gold/70" />
        </div>

        <h2 className="font-serif text-[4rem] leading-[0.94] tracking-[-0.05em] md:text-[6.5rem] lg:text-[7rem]">
          Simple steps. Unforgettable stays.
        </h2>

        <div className="mt-20 grid gap-y-14 md:grid-cols-5">
          {steps.map(([num, title, text], i) => (
            <div
              key={num}
              className={`px-6 text-center ${
                i > 0 ? "md:border-l md:border-gold/30" : ""
              }`}
            >
              <p className="font-serif text-[3.5rem] leading-none text-gold md:text-[4rem]">
                {num}
              </p>

              <div className="mx-auto mt-4 h-px w-12 bg-gold/70" />

              <div className="mt-8 flex scale-[1.2] justify-center text-charcoal">
                <StepIcon />
              </div>

              <h3 className="mt-7 font-serif text-[2rem] leading-[1.05] tracking-[-0.04em] md:text-[2.15rem]">
                {title}
              </h3>

              <p className="mx-auto mt-5 max-w-[205px] text-[14px] leading-[1.75] text-charcoal/70">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center gap-8">
          <div className="hidden h-px flex-1 bg-gold/40 md:block" />

          <div>
            <p className="mb-7 font-serif text-[3rem] tracking-[-0.04em] md:text-[3.6rem]">
              Ready to plan your retreat?
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-4 rounded-xl border border-gold/70 px-12 py-6 text-sm uppercase tracking-[0.26em] text-gold transition hover:bg-gold hover:text-white"
            >
              Get a Quote <ArrowRight size={20} />
            </a>
          </div>

          <div className="hidden h-px flex-1 bg-gold/40 md:block" />
        </div>
      </div>
    </section>
  );
}
