import React from "react";

export default function FamilyRetreatPage() {
  return (
    <main className="min-h-screen bg-[#f5efe5] text-[#191713]">

      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('family-hero.png')] bg-cover bg-center" />
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

    </main>
  );
}
