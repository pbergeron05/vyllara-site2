import React from "react";

export default function FamilyRetreatPage() {
  const day = [
    ["8 AM", "Slow Mornings", "Breakfast at the villa, coffee by the pool and a relaxed start to the day."],
    ["10 AM", "Private Sports", "Pickleball, tennis or surf lessons tailored to your family."],
    ["12 PM", "Lunch at the Villa", "Fresh local cuisine prepared by your private chef."],
    ["2 PM", "Relax or Explore", "Poolside reading, beach walks, local adventures or simply doing nothing."],
    ["5 PM", "Sunset Hour", "Fresh juices, cocktails and quiet moments as the sun goes down."],
    ["7 PM", "Dinner Together", "Beachfront dining or a relaxed evening back at the villa."]
  ];

  return (
    <main className="min-h-screen bg-[#f5efe5] text-[#191713]">
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/family-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex min-h-[92vh] items-center px-6 md:px-20">
          <div className="max-w-[640px] text-white">
            <h1 className="font-serif text-6xl md:text-8xl leading-none">
              Family Retreats
            </h1>

            <p className="mt-6 uppercase tracking-[0.28em] text-[#e8c69b]">
              Active by day. Retreat by night.
            </p>

            <div className="mt-10">
              <p className="uppercase tracking-[0.22em] text-sm text-white/60">
                Starting from
              </p>
              <p className="font-serif text-6xl mt-3">$2,000 USD</p>
              <p className="mt-2 text-white/75">per person</p>
            </div>

            <button className="mt-10 bg-[#7b6a52] px-10 py-5 uppercase tracking-[0.16em] text-sm">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f3eb] px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="uppercase tracking-[0.34em] text-sm text-[#a87545]">
                A Typical Day
              </p>

              <h2 className="mt-5 font-serif text-6xl leading-none text-[#191713]">
                At Your<br />Own Pace
              </h2>

              <div className="my-8 h-px w-20 bg-[#a87545]" />

              <div className="space-y-6 text-lg leading-8 text-[#4b4339]">
                <p>
                  Vyllara offers a retreat concept thoughtfully designed for families and multigenerational stays.
                </p>
                <p>
                  We work with private properties welcoming between 8 and 20 guests, allowing everyone to naturally find their own rhythm throughout the stay.
                </p>
                <p>
                  Every generation can enjoy the experience differently while still sharing meaningful moments together.
                </p>
              </div>
            </div>

            <div className="border-l border-[#d9c9ae] pl-8 md:pl-12">
              {day.map(([time, title, text]) => (
                <div key={time} className="relative border-b border-[#ddd0bb] py-7 first:pt-0 last:border-b-0">
                  <span className="absolute -left-[39px] top-8 h-3 w-3 rounded-full border border-[#a87545] bg-[#f8f3eb] md:-left-[55px]" />

                  <div className="grid gap-4 md:grid-cols-[90px_1fr]">
                    <p className="text-sm uppercase tracking-[0.22em] text-[#a87545]">
                      {time}
                    </p>

                    <div>
                      <h3 className="font-serif text-3xl text-[#191713]">
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

      <section className="relative h-[420px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/family-day.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-5xl text-white">
            <p className="mb-6 text-sm uppercase tracking-[0.34em] text-[#e8c69b]">
              Cabarete, Dominican Republic
            </p>
            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              A place where every generation<br />finds its own rhythm.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#a87545]">
                What’s Included
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-none text-[#191713]">
                Effortless by Design
              </h2>

              <div className="my-8 h-px w-20 bg-[#a87545]" />

              <div className="space-y-8">
                {[
                  ["⌂", "Luxury Villa", "Carefully selected villas designed for comfort, privacy and meaningful family moments."],
                  ["♨", "Private Chef", "Flexible family-style dining prepared daily by your private chef."],
                  ["➜", "Private Driver", "Transportation for airport transfers, activities and local experiences."],
                  ["◆", "Dedicated Concierge", "Personalized planning before and during your entire stay."]
                ].map(([icon, title, text]) => (
                  <div key={title} className="flex gap-6 border-b border-[#e4d6c2] pb-7 last:border-b-0">
                    <div className="w-12 text-5xl leading-none text-[#8f734c]">
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-[#191713]">
                        {title}
                      </h3>
                      <p className="mt-2 text-lg leading-8 text-[#4b4339]">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#a87545]">
                What’s Not Included
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-none text-[#191713]">
                Additional Costs
              </h2>

              <div className="my-8 h-px w-20 bg-[#a87545]" />

              <div className="space-y-8">
                {[
                  ["✈", "International Flights", "Round-trip airfare to the Dominican Republic."],
                  ["◇", "Travel Insurance", "Strongly recommended for all travelers."],
                  ["⌬", "Alcoholic Beverages", "Wine, cocktails and specialty beverages outside villa inclusions."],
                  ["≈", "Optional Activities", "Private lessons, excursions and experiences arranged à la carte."]
                ].map(([icon, title, text]) => (
                  <div key={title} className="flex gap-6 border-b border-[#e4d6c2] pb-7 last:border-b-0">
                    <div className="w-12 text-5xl leading-none text-[#8f734c]">
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-[#191713]">
                        {title}
                      </h3>
                      <p className="mt-2 text-lg leading-8 text-[#4b4339]">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 border-t border-[#e4d6c2] pt-16">
            <p className="text-center uppercase tracking-[0.3em] text-sm text-[#a87545]">
              Optional Experiences
            </p>

            <h2 className="mt-5 text-center font-serif text-5xl leading-none text-[#191713]">
              Curated Activities
            </h2>

            <div className="mx-auto my-8 h-px w-20 bg-[#a87545]" />

            <div className="mt-16 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Ocean & Adventure", ["Surf Lessons", "Catamaran Cruises", "Snorkeling", "Deep Sea Fishing"]],
                ["Wellness", ["Yoga Sessions", "Massages", "Recovery Treatments", "Breathwork"]],
                ["Private Sports", ["Pickleball Coaching", "Tennis Lessons", "Padel Sessions", "Open Play"]],
                ["Local Discovery", ["Horseback Riding", "Waterfalls", "Local Experiences", "Cabarete Dining"]]
              ].map(([title, items]) => (
                <div key={title as string}>
                  <h3 className="font-serif text-3xl text-[#191713]">
                    {title as string}
                  </h3>
                  <ul className="mt-6 space-y-4 text-lg text-[#4b4339]">
                    {(items as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efe4d4] px-6 py-28 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="uppercase tracking-[0.34em] text-sm text-[#a87545]">
            Family Active Escapes
          </p>

          <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-tight text-[#191713]">
            Luxury family retreats designed around your own rhythm.
          </h2>

          <div className="mx-auto my-10 h-px w-20 bg-[#a87545]" />

          <p className="font-serif text-6xl text-[#a87545]">$2,000 USD</p>

          <p className="mt-3 text-lg text-[#4b4339]">per person</p>

          <button className="mt-10 bg-[#7b6a52] px-12 py-5 uppercase tracking-[0.18em] text-sm text-white">
            Get a Quote
          </button>
        </div>
      </section>
    </main>
  );
}
