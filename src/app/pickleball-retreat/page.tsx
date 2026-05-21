import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type DayItem = {
  time: string;
  title: string;
  text: string;
  icon: React.ReactNode;
};

function SunIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 39h40" />
      <path d="M20 39a12 12 0 0 1 24 0" />
      <path d="M8 47h10M24 47h16M46 47h10" />
      <path d="M32 14V7M18 23l-5-5M46 23l5-5" />
    </svg>
  );
}

function PaddleIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 43 39 26c4-4 10-4 14 0s4 10 0 14L36 57" />
      <path d="M28 57 11 40c-4-4-4-10 0-14s10-4 14 0l17 17" />
      <circle cx="47" cy="14" r="6" />
      <path d="M45 12h.1M49 12h.1M47 16h.1" />
    </svg>
  );
}

function LunchIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 28h34v6a17 17 0 0 1-34 0v-6Z" />
      <path d="M20 50h24" />
      <path d="M25 25c-4-7-2-13 4-17" />
      <path d="M34 25c-1-7 2-12 9-16" />
      <path d="M25 25c6-2 12-2 18 0" />
    </svg>
  );
}

function LoungeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 45h37" />
      <path d="M19 45 38 22l10 8-15 15" />
      <path d="M48 45h7" />
      <path d="M52 31v18" />
      <path d="M47 36h10" />
      <path d="M50 24c4-4 9-4 12 0" />
    </svg>
  );
}

function CocktailIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 13h32L32 34 16 13Z" />
      <path d="M32 34v18" />
      <path d="M23 52h18" />
      <circle cx="49" cy="13" r="7" />
      <path d="M45 8l8 10" />
    </svg>
  );
}

function DinnerIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 40h44" />
      <path d="M19 40a13 13 0 0 1 26 0" />
      <path d="M10 48h10M27 48h11M45 48h9" />
      <path d="M50 24c4-8 10-10 10-10" />
      <path d="M50 24c7-3 12-1 12-1" />
      <path d="M50 25v15" />
    </svg>
  );
}

export default function PickleballRetreatPage() {
  const day: DayItem[] = [
    {
      time: "8:00 AM",
      title: "Slow Mornings by the Sea",
      text: "A relaxed breakfast at the villa, fresh coffee by the ocean, and the sound of the waves to start the day.",
      icon: <SunIcon />,
    },
    {
      time: "9:00 AM – 12:00 PM",
      title: "Morning on the Courts",
      text: "Morning pickleball session at the club. Friendly competition, coaching, and plenty of time on court.",
      icon: <PaddleIcon />,
    },
    {
      time: "12:30 PM",
      title: "Fresh & Healthy Lunches",
      text: "A light and flavorful lunch prepared by your private chef at the villa.",
      icon: <LunchIcon />,
    },
    {
      time: "2:00 PM",
      title: "Time to Recharge",
      text: "A slower afternoon. Read by the pool, walk along the coastline, enjoy a massage, or simply do nothing at all.",
      icon: <LoungeIcon />,
    },
    {
      time: "5:00 PM",
      title: "Golden Hour & Flexible Evenings",
      text: "Happy hour at the villa. Some guests may head back for another match, while others settle in with a cocktail to watch the sun disappear into the sea.",
      icon: <CocktailIcon />,
    },
    {
      time: "7:00 PM",
      title: "Dinner Barefoot in Cabarete",
      text: "Dinner together, barefoot in the sand, in the beautiful bay of Cabarete.",
      icon: <DinnerIcon />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5efe5] text-[#191713]">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pickleball-retreat.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex min-h-[92vh] items-center px-6 md:px-20">
          <div className="max-w-[760px] text-white">
            <h1 className="font-serif text-6xl md:text-8xl leading-none uppercase">
              Active by Day
              <br />
              Retreat by Night
            </h1>

            <p className="mt-6 uppercase tracking-[0.28em] text-[#e8c69b]">
              Private Pickleball Retreats
            </p>

            <div className="mt-10">
              <p className="text-xl leading-8 text-white/85 md:text-2xl">
                Exclusive pickleball retreats with premium villa accommodations.
              </p>

              <p className="mt-6 uppercase tracking-[0.22em] text-sm text-white/60">
                Starting from
              </p>

              <p className="font-serif text-6xl mt-3">
                $2,250 USD
              </p>

              <p className="mt-2 text-white/75">
                per person
              </p>
            </div>

            <button className="mt-10 bg-[#7b6a52] px-10 py-5 uppercase tracking-[0.16em] text-sm">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* INTRO + TYPICAL DAY */}
      <section className="bg-[#f8f3eb] px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl grid gap-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="uppercase tracking-[0.34em] text-sm text-[#a87545]">
              At Your Own Pace
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-none">
              Private<br />Pickleball<br />Retreats
            </h2>

            <div className="my-8 h-px w-20 bg-[#a87545]" />

            <div className="space-y-6 text-lg leading-8 text-[#4b4339]">
              <p>
                At Vyllara, pickleball is more than a game — it’s a way to slow down, reconnect, and enjoy the rhythm of the Caribbean with the people you love to travel with.
              </p>

              <p>
                We welcome private pickleball retreats for groups of 8 to 20 guests, as well as smaller groups of friends simply looking to play, relax, and share memorable moments together. Through our exclusive partnerships, guests enjoy access to beautiful, high quality courts in an intimate and refined setting.
              </p>

              <p>
                This is not the typical pickleball retreat.<br />
                No large crowds. No rigid schedules. No resort atmosphere.
              </p>

              <p className="font-serif text-3xl leading-tight text-[#191713]">
                Our approach is more private, more elegant, and deeply personal.
              </p>

              <p>
                Each stay is thoughtfully designed around your group’s pace and preferences. Depending on the villa selected, retreats include your private driver, dedicated chef, daily meals at the villa, and exclusive pickleball access. Some of our villas even feature private courts, perfect for an extra session before sunset… or before apéro. ;-)
              </p>
            </div>
          </div>

          <div className="border-l border-[#d9c9ae] pl-8 md:pl-12">
            <p className="uppercase tracking-[0.34em] text-sm text-[#a87545]">
              A Typical Retreat Day
            </p>

            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#8f734c]">
              subject to weather, energy levels, and spontaneous moments
            </p>

            <div className="mt-8">
              {day.map(({ time, title, text, icon }) => (
                <div
                  key={time}
                  className="relative border-b border-[#ddd0bb] py-7 first:pt-0 last:border-b-0"
                >
                  <span className="absolute -left-[39px] top-8 h-3 w-3 rounded-full border border-[#a87545] bg-[#f8f3eb] md:-left-[55px]" />

                  <div className="flex gap-6">
                    <div className="hidden shrink-0 text-[#8f734c] sm:block">
                      {icon}
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-[#a87545]">
                        {time}
                      </p>

                      <h3 className="mt-2 font-serif text-3xl">
                        {title}
                      </h3>

                      <p className="mt-2 text-lg leading-8 text-[#4b4339]">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PICKLEBALL BANNER */}
      <section className="relative h-[420px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bandeau-pickleball.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.34em] text-[#e8c69b]">
              Cabarete, Dominican Republic
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Play, reconnect and retreat
              <br />
              at your own pace.
            </h2>
          </div>
        </div>
      </section>

      {/* INCLUDED / EXCLUDED */}
      <section className="bg-[#fffaf2] px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl grid gap-20 lg:grid-cols-2">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#a87545]">
              What’s Included
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-none">
              Effortless by Design
            </h2>

            <div className="my-8 h-px w-20 bg-[#a87545]" />

            {[
              ["Private Villa", "Premium villa accommodation selected according to your group size and retreat style."],
              ["Private Driver", "Transportation for airport transfers, pickleball sessions, activities and local evenings."],
              ["Dedicated Chef", "Daily meals prepared at the villa with a relaxed and flexible approach."],
              ["Pickleball Access", "Exclusive access to beautiful, high quality courts through our local partnerships."],
              ["Concierge Service", "Personalized support before and during your stay."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-[#e4d6c2] py-7"
              >
                <h3 className="font-serif text-3xl">
                  {title}
                </h3>

                <p className="mt-2 text-lg leading-8 text-[#4b4339]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#a87545]">
              What’s Not Included
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-none">
              Additional Costs
            </h2>

            <div className="my-8 h-px w-20 bg-[#a87545]" />

            {[
              ["International Flights", "Round-trip airfare to the Dominican Republic."],
              ["Travel Insurance", "Strongly recommended for all travelers."],
              ["Alcoholic Beverages", "Wine, cocktails and specialty beverages outside villa inclusions."],
              ["Meals Outside the Villa", "Restaurants, beach dinners and optional experiences arranged à la carte."],
              ["Personal Expenses", "Gratuities and personal expenses during the stay."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-[#e4d6c2] py-7"
              >
                <h3 className="font-serif text-3xl">
                  {title}
                </h3>

                <p className="mt-2 text-lg leading-8 text-[#4b4339]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#efe4d4] px-6 py-28 text-center" id="quote">
        <div className="mx-auto max-w-5xl">
          <p className="uppercase tracking-[0.34em] text-sm text-[#a87545]">
            Private Pickleball Retreats
          </p>

          <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-tight">
            Groups of friends and pickleball coaches are welcome to contact us.
          </h2>

          <div className="mx-auto my-10 h-px w-20 bg-[#a87545]" />

          <p className="font-serif text-5xl md:text-6xl text-[#a87545]">
            $2,250 – $3,000 USD
          </p>

          <p className="mt-3 text-lg text-[#4b4339]">
            per person • depending on villa selection, group size and season
          </p>

          <button className="mt-10 bg-[#7b6a52] px-12 py-5 uppercase tracking-[0.18em] text-sm text-white">
            Get a Quote
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
