import Link from 'next/link'

const retreatMoments = [
  {
    time: '8:00 AM',
    title: 'Slow Mornings by the Sea',
    text: 'A relaxed breakfast at the villa, fresh coffee by the ocean, and the sound of the waves to start the day.',
  },
  {
    time: '9:00 AM – 12:00 PM',
    title: 'Morning on the Courts',
    text: 'Morning pickleball session at the club. Friendly competition, coaching, and plenty of time on court.',
  },
  {
    time: '12:30 PM',
    title: 'Fresh & Healthy Lunches',
    text: 'A light and flavorful lunch prepared by your private chef at the villa.',
  },
  {
    time: '2:00 PM',
    title: 'Time to Recharge',
    text: 'A slower afternoon. Read by the pool, walk along the coastline, enjoy a massage, or simply do nothing at all.',
  },
  {
    time: '5:00 PM',
    title: 'Golden Hour & Flexible Evenings',
    text: 'Happy hour at the villa. Some guests may head back for another match, while others settle in with a cocktail to watch the sun disappear into the sea.',
  },
  {
    time: '7:00 PM',
    title: 'Dinner Barefoot in Cabarete',
    text: 'Dinner together, barefoot in the sand, in the beautiful bay of Cabarete.',
  },
]

export default function PickleballRetreatPage() {
  return (
    <main className="bg-[#f7f2ea] text-[#15211f] overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d342f]/55 backdrop-blur-md text-[#fffaf3] border-b border-white/10">
        <div className="px-[7vw] h-20 flex items-center justify-between">
          <Link href="/" className="font-serif tracking-[0.28em] text-[22px] uppercase">
            Vyllara
          </Link>

          <nav className="hidden lg:flex items-center gap-9 text-[12px] uppercase tracking-[0.18em]">
            <Link href="/">Home</Link>
            <Link href="/family-retreat">Family Retreat</Link>
            <Link href="/pickleball-retreat">Pickleball Retreat</Link>
            <Link href="#quote">Get a Quote</Link>
          </nav>
        </div>
      </header>

      <section
        className="relative min-h-[88vh] flex items-end px-[7vw] pb-24 pt-32"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(9,35,32,.72), rgba(9,35,32,.28), rgba(9,35,32,.08)), url('/images/hero-pickleball-retreat.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl text-[#fffaf3]">
          <div className="uppercase tracking-[0.24em] text-[13px] font-semibold text-[#d8c2a3] mb-5">
            Private Pickleball Retreats
          </div>

          <h1 className="font-serif text-[clamp(54px,8vw,112px)] leading-[0.95] tracking-[0.03em] mb-7">
            ACTIVE BY DAY
            <br />
            RETREAT BY NIGHT
          </h1>

          <p className="max-w-2xl text-[clamp(18px,2vw,24px)] leading-relaxed text-[#fffaf3]/90 mb-8">
            Exclusive pickleball retreats with premium villa accommodations.
            <br />
            Starting at 2250$ USD per person.
          </p>

          <a
            href="#quote"
            className="inline-flex items-center gap-4 border border-white/80 px-8 py-4 uppercase tracking-[0.18em] text-[13px] hover:bg-white/10 transition"
          >
            Get a Quote <span>→</span>
          </a>
        </div>
      </section>

      <section className="px-[7vw] py-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr_.85fr] gap-14 items-start">
          <div>
            <div className="uppercase tracking-[0.20em] text-[#a77a3b] text-[14px] font-semibold mb-5">
              At Your Own Pace
            </div>

            <p className="text-[17px] leading-[1.9] mb-8">
              At Vyllara, pickleball is more than a game — it’s a way to slow down, reconnect, and enjoy the rhythm of the Caribbean with the people you love to travel with.
            </p>

            <p className="text-[17px] leading-[1.9]">
              We welcome private pickleball retreats for groups of 8 to 20 guests, as well as smaller groups of friends simply looking to play, relax, and share memorable moments together. Through our exclusive partnerships, guests enjoy access to beautiful, high quality courts in an intimate and refined setting.
            </p>
          </div>

          <div className="lg:border-l border-[#a77a3b]/30 lg:pl-14">
            <p className="text-[17px] leading-[1.9] mb-8">
              This is not the typical pickleball retreat.
              <br />
              No large crowds. No rigid schedules. No resort atmosphere.
            </p>

            <div className="font-serif italic text-[#0d342f] text-[30px] leading-[1.5] mb-8">
              Our approach is more private, more elegant, and deeply personal.
            </div>

            <p className="text-[17px] leading-[1.9]">
              Each stay is thoughtfully designed around your group’s pace and preferences. Depending on the villa selected, retreats include your private driver, dedicated chef, daily meals at the villa, and exclusive pickleball access. Some of our villas even feature private courts, perfect for an extra session before sunset… or before apéro. ;-)
            </p>
          </div>

          <div className="lg:border-l border-[#a77a3b]/30 lg:pl-14 text-center">
            <h2 className="font-serif uppercase tracking-[0.16em] text-[34px] text-[#0d342f] mb-4">
              A Typical Retreat Day
            </h2>

            <p className="uppercase tracking-[0.13em] text-[12px] text-[#a77a3b] leading-loose">
              (subject to weather, energy levels,
              <br />
              and spontaneous moments)
            </p>
          </div>
        </div>
      </section>

      <section className="px-[7vw] pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-10 text-center">
          {retreatMoments.map((item) => (
            <div key={item.time}>
              <div className="w-14 h-14 mx-auto rounded-full border border-[#a77a3b]/40 mb-5" />

              <div className="uppercase tracking-[0.15em] text-[12px] text-[#a77a3b] font-semibold mb-3">
                {item.time}
              </div>

              <h3 className="font-serif uppercase tracking-[0.08em] text-[20px] leading-[1.3] text-[#0d342f] mb-4">
                {item.title}
              </h3>

              <p className="text-[14px] leading-[1.8]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <img
          src="/images/bandeau-pickleball.png"
          alt="Pickleball players on outdoor courts"
          className="w-full h-[390px] object-cover"
        />
      </section>

      <section id="quote" className="px-[7vw] py-28">
        <div className="grid xl:grid-cols-[1.1fr_1.5fr] gap-20 items-start">
          <div>
            <div className="uppercase tracking-[0.20em] text-[#a77a3b] text-[14px] font-semibold mb-3">
              Between
            </div>

            <div className="font-serif text-[#0d342f] text-[clamp(56px,6vw,86px)] leading-[1.03] mb-5">
              2250$ & 3000$
            </div>

            <div className="uppercase tracking-[0.18em] text-[#a77a3b] text-[14px] font-semibold mb-10">
              USD per person
            </div>

            <p className="text-[17px] leading-[1.9]">
              Final pricing depends on the villa selected, season, and group size.
              <br />
              Custom quotes available upon request.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 xl:border-l border-[#a77a3b]/30 xl:pl-16">
            <div>
              <div className="uppercase tracking-[0.16em] text-[#0d342f] text-[16px] font-semibold mb-7">
                Inclusions
              </div>

              <ul className="space-y-4 text-[16px] leading-relaxed list-disc pl-5">
                <li>Private villa accommodation</li>
                <li>Private driver</li>
                <li>Dedicated chef</li>
                <li>Daily meals at the villa</li>
                <li>Exclusive pickleball access</li>
                <li>Access to beautiful, high quality courts</li>
                <li>Concierge service</li>
              </ul>
            </div>

            <div className="md:border-l border-[#a77a3b]/30 md:pl-12">
              <div className="uppercase tracking-[0.16em] text-[#0d342f] text-[16px] font-semibold mb-7">
                Exclusions
              </div>

              <ul className="space-y-4 text-[16px] leading-relaxed list-disc pl-5">
                <li>Airfare</li>
                <li>Travel insurance</li>
                <li>Alcoholic beverages</li>
                <li>Meals and activities outside the villa</li>
                <li>Gratuities</li>
                <li>Personal expenses</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[#a77a3b]/30 flex flex-col xl:flex-row gap-10 justify-between items-center">
          <p className="font-serif text-[#0d342f] text-[clamp(26px,3vw,42px)] leading-[1.2] max-w-4xl">
            Groups of friends and pickleball coaches are welcome to contact us and plan their next retreat with Vyllara.
          </p>

          <a
            href="#"
            className="border border-[#a77a3b]/70 text-[#a77a3b] px-10 py-5 uppercase tracking-[0.18em] text-[13px] inline-flex items-center gap-4 hover:bg-[#a77a3b]/5 transition"
          >
            Get a Quote <span>→</span>
          </a>
        </div>
      </section>

      <footer className="bg-[#0d342f] text-[#fffaf3] px-[7vw] py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="font-serif tracking-[0.28em] text-[24px] uppercase mb-4">
              Vyllara
            </div>
            <p className="text-[#fffaf3]/70 text-[14px] leading-relaxed max-w-sm">
              Premium private retreats with villa accommodations, curated experiences, and time to reconnect.
            </p>
          </div>

          <div className="text-[13px] uppercase tracking-[0.16em] space-y-3 text-[#fffaf3]/75">
            <Link href="/">Home</Link>
            <br />
            <Link href="/family-retreat">Family Retreat</Link>
            <br />
            <Link href="/pickleball-retreat">Pickleball Retreat</Link>
          </div>

          <div className="md:text-right">
            <a
              href="#quote"
              className="inline-flex border border-[#fffaf3]/50 px-8 py-4 uppercase tracking-[0.18em] text-[12px] hover:bg-white/10 transition"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
