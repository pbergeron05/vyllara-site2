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

        <p className="text-lg leading-8 text-[#4b4339]">
          Vyllara offers a retreat concept designed for families and multigenerational stays, where everyone can enjoy the day at their own rhythm before coming together at the villa.
        </p>
      </div>

      <div className="space-y-8">
        {[
          ["8 AM", "Slow Mornings", "Breakfast at the villa, coffee by the pool and a relaxed start to the day."],
          ["10 AM", "Private Sports Session", "Pickleball, tennis or surf lessons tailored to your family."],
          ["12 PM", "Lunch at the Villa", "Fresh local cuisine prepared by your private chef."],
          ["2 PM", "Relax or Explore", "Poolside reading, beach walks, local adventures or simply doing nothing."],
          ["5 PM", "Sunset Hour", "Fresh juices, cocktails and quiet moments as the sun goes down."],
          ["7 PM", "Dinner in Cabarete", "Beachfront dining or a relaxed evening back at the villa."]
        ].map(([time, title, text]) => (
          <div key={time} className="border-b border-[#d9c9ae] pb-6">
            <p className="text-sm uppercase tracking-[0.22em] text-[#a87545]">
              {time}
            </p>
            <h3 className="mt-2 font-serif text-3xl text-[#191713]">
              {title}
            </h3>
            <p className="mt-3 text-lg leading-8 text-[#4b4339]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
