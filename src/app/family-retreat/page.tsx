import React from "react";

export default function FamilyRetreatPage() {
  return (
    <main className="min-h-screen bg-[#f5efe5] text-[#191713]">

      {/* HERO */}
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

              <p className="font-serif text-6xl mt-3">
                $2,000 USD
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

      {/* AT YOUR OWN PACE */}
      <section className="bg-[#f8f3eb] px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-20 lg:grid-cols-2">

            <div>
              <p className="uppercase tracking-[0.34em] text-sm text-[#a87545]">
                A Typical Day
              </p>

              <h2 className="mt-5 font-serif text-6xl leading-none text-[#191713]">
                At Your
                <br />
                Own Pace
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

            <div className="rounded-lg border border-[#d9c9ae] bg-[#fffaf2] p-10">

              <p className="font-serif text-4xl leading-tight text-[#191713]">
                Near the ocean, with private pools, quiet corners to rest and easy access to sports and wellness activities.
              </p>

              <div className="my-8 h-px w-20 bg-[#a87545]" />

              <p className="text-lg leading-8 text-[#4b4339]">
                Everyone can enjoy the day at their own pace before coming together around a chef-prepared dinner at the villa.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE BANNER */}
      <section className="relative h-[420px] overflow-hidden">

        <div className="absolute inset-0 bg-[url('/experience-section.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

          <div className="max-w-5xl text-white">

            <p className="mb-6 text-sm uppercase tracking-[0.34em] text-[#e8c69b]">
              Cabarete, Dominican Republic
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              A place where every generation
              <br />
              finds its own rhythm.
            </h2>

          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-[#fffaf2] px-6 py-28 md:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.3em] text-sm text-[#a87545]">
              What’s Included
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-none text-[#191713]">
              Effortless by Design
            </h2>

            <div className="my-8 h-px w-20 bg-[#a87545]" />

          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div>
              <div className="text-5xl text-[#8f734c]">⌂</div>

              <h3 className="mt-6 font-serif text-3xl text-[#191713]">
                Luxury Villa
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#4b4339]">
                Carefully selected villas designed for comfort, privacy and meaningful family moments.
              </p>
            </div>

            <div>
              <div className="text-5xl text-[#8f734c]">♨</div>

              <h3 className="mt-6 font-serif text-3xl text-[#191713]">
                Private Chef
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#4b4339]">
                Flexible family-style dining prepared daily by your private chef.
              </p>
            </div>

            <div>
              <div className="text-5xl text-[#8f734c]">➜</div>

              <h3 className="mt-6 font-serif text-3xl text-[#191713]">
                Private Driver
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#4b4339]">
                Transportation for airport transfers, activities and local experiences.
              </p>
            </div>

            <div>
              <div className="text-5xl text-[#8f734c]">◆</div>

              <h3 className="mt-6 font-serif text-3xl text-[#191713]">
                Dedicated Concierge
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#4b4339]">
                Personalized planning before and during your entire stay.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OPTIONAL ACTIVITIES */}
      <section className="bg-[#f5efe5] px-6 py-28 md:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.3em] text-sm text-[#a87545]">
              Optional Experiences
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-none text-[#191713]">
              Curated Activities
            </h2>

            <div className="my-8 h-px w-20 bg-[#a87545]" />

          </div>

          <div className="mt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">

            <div>
              <h3 className="font-serif text-3xl text-[#191713]">
                Ocean & Adventure
              </h3>

              <ul className="mt-6 space-y-4 text-lg text-[#4b4339]">
                <li>Surf Lessons</li>
                <li>Catamaran Cruises</li>
                <li>Snorkeling</li>
                <li>Deep Sea Fishing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#191713]">
                Wellness
              </h3>

              <ul className="mt-6 space-y-4 text-lg text-[#4b4339]">
                <li>Yoga Sessions</li>
                <li>Massages</li>
                <li>Recovery Treatments</li>
                <li>Breathwork</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#191713]">
                Private Sports
              </h3>

              <ul className="mt-6 space-y-4 text-lg text-[#4b4339]">
                <li>Pickleball Coaching</li>
                <li>Tennis Lessons</li>
                <li>Padel Sessions</li>
                <li>Open Play</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#191713]">
                Local Discovery
              </h3>

              <ul className="mt-6 space-y-4 text-lg text-[#4b4339]">
                <li>Horseback Riding</li>
                <li>Waterfalls</li>
                <li>Local Experiences</li>
                <li>Cabarete Dining</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#efe4d4] px-6 py-28 text-center">

        <div className="mx-auto max-w-5xl">

          <p className="uppercase tracking-[0.34em] text-sm text-[#a87545]">
            Family Active Escapes
          </p>

          <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-tight text-[#191713]">
            Luxury family retreats designed around your own rhythm.
          </h2>

          <div className="mx-auto my-10 h-px w-20 bg-[#a87545]" />

          <p className="font-serif text-6xl text-[#a87545]">
            $2,000 USD
          </p>

          <p className="mt-3 text-lg text-[#4b4339]">
            per person
          </p>

          <button className="mt-10 bg-[#7b6a52] px-12 py-5 uppercase tracking-[0.18em] text-sm text-white">
            Get a Quote
          </button>

        </div>
      </section>

    </main>
  );
}
