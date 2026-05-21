import React from "react";

export default function FamilyRetreatPage() {
  return (
    <main className="min-h-screen bg-[#f5efe5] text-[#191713]">

      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/family-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex min-h-[92vh] items-center px-6 md:px-20">
          <div className="max-w-[640px] text-white">

            <h1 className="font-serif text-6xl md:text-8xl leading-none">
              Family Retreats
            </h1>

            <p className="mt-6 uppercase tracking-[0.28em] text-[#e8c69b]">
              Active by day. Retreat by night.
            </p>

            <div className="my-8 h-px w-20 bg-[#e8c69b]" />

            <p className="max-w-xl text-lg leading-8 text-white/85">
              7-night luxury villa stays in Cabarete including curated family experiences.
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
<section className="bg-[#f8f3eb] px-6 py-24 md:px-16">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-3xl">
      <p className="uppercase tracking-[0.3em] text-sm text-[#a87545]">
        A Typical Day
      </p>

      <h2 className="mt-5 font-serif text-5xl md:text-6xl leading-none text-[#191713]">
        At Your Own Pace
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
  </div>
</section>
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
    </main>
  );
}

