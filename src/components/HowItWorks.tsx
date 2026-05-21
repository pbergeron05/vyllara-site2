import { ArrowRight } from "lucide-react";

const steps = [
  ["01", "Tell us about your group", "Families, friends or private retreats."],
  ["02", "Select your favorite sports", "Pickleball, padel, surf, tennis and more."],
  ["03", "We choose the best villa for you", "Based on your group’s interests and size."],
  ["04", "Receive your tailored quote", "Most retreats range from $2K to $3K USD per guest."],
  ["05", "Arrive & enjoy your retreat", "We handle everything during your stay in the Dominican Republic."],
];

function StepIcon({ num }: { num: string }) {
  return (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {num === "01" && (
          <>
            <circle cx="40" cy="24" r="8" />
            <circle cx="24" cy="32" r="6" />
            <circle cx="56" cy="32" r="6" />
            <path d="M25 56C26 46 32 39 40 39C48 39 54 46 55 56" />
            <path d="M12 56C13 48 18 43 24 43" />
            <path d="M68 56C67 48 62 43 56 43" />
          </>
        )}

        {num === "02" && (
          <>
            <ellipse cx="25" cy="31" rx="8" ry="13" transform="rotate(-18 25 31)" />
            <path d="M28 43L34 62" />
            <ellipse cx="47" cy="31" rx="8" ry="13" transform="rotate(18 47 31)" />
            <path d="M44 43L38 62" />
            <circle cx="39" cy="17" r="4" />
            <path d="M61 19C57 28 57 40 62 53" />
            <path d="M61 19C68 29 70 40 67 53" />
          </>
        )}

        {num === "03" && (
          <>
            <path d="M12 58H68" />
            <path d="M21 58V38L40 25L59 38V58" />
            <path d="M32 58V44H48V58" />
            <path d="M58 35C59 23 66 17 75 16" />
            <path d="M75 16C68 20 64 26 63 35" />
            <path d="M63 35C69 32 74 32 79 36" />
            <path d="M63 35V58" />
          </>
        )}

        {num === "04" && (
          <>
            <rect x="25" y="13" width="30" height="46" rx="4" />
            <path d="M33 25H47" />
            <path d="M33 35H47" />
            <path d="M33 45H42" />
            <path d="M40 13V8" />
            <path d="M35 8H45" />
            <path d="M40 23V39" />
            <path d="M35 27C35 24.5 37 23 40 23C43 23 45 24.5 45 27C45 29.5 43 31 40 31C37 31 35 32.5 35 35C35 37.5 37 39 40 39C43 39 45 37.5 45 35" />
            <circle cx="56" cy="57" r="9" />
            <path d="M52 57L55 60L61 53" />
          </>
        )}

        {num === "05" && (
          <>
            <path d="M13 61C23 56 33 54 43 54C52 54 61 56 69 61" />
            <path d="M21 66C33 60 47 60 60 66" />
            <path d="M32 52C32 38 39 28 50 20" />
            <path d="M50 20C45 31 45 43 50 55" />
            <path d="M53 49C59 42 66 39 73 41" />
            <circle cx="66" cy="22" r="5" />
            <path d="M66 10V6" />
            <path d="M66 38V34" />
            <path d="M54 22H50" />
            <path d="M80 22H76" />
          </>
        )}
      </g>
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section id="reserve" className="bg-[#f7f3ec] px-7 py-24 md:px-14 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.28em] text-gold">How it works</p>

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
            <div key={num} className={`px-6 text-center ${i > 0 ? "md:border-l md:border-gold/30" : ""}`}>
              <p className="font-serif text-[3.5rem] leading-none text-gold md:text-[4rem]">{num}</p>
              <div className="mx-auto mt-4 h-px w-12 bg-gold/70" />

              <div className="mt-8 flex justify-center text-charcoal">
                <StepIcon num={num} />
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
