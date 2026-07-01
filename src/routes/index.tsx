import { createFileRoute } from "@tanstack/react-router";
import heroRibeye from "@/assets/hero-ribeye.jpg";
import cutTomahawk from "@/assets/cut-tomahawk.jpg";
import cutWagyu from "@/assets/cut-wagyu.jpg";
import cutOctopus from "@/assets/cut-octopus.jpg";
import openKitchen from "@/assets/open-kitchen.jpg";
import drinkBeer from "@/assets/drink-beer.jpg";
import drinkOldFashioned from "@/assets/drink-oldfashioned.jpg";
import drinkWine from "@/assets/drink-wine.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vulcan & Vine — Live Fire Steakhouse in Chicago" },
      { name: "description", content: "An upscale smokehouse dedicated to the ancient chemistry of fire, fat, and salt. Heritage cuts finished over live white oak." },
      { property: "og:title", content: "Vulcan & Vine — Live Fire Steakhouse" },
      { property: "og:description", content: "Heritage breeds, dry-aged in-house, charred over live white oak in Chicago's West Loop." },
      { property: "og:image", content: heroRibeye },
      { name: "twitter:image", content: heroRibeye },
    ],
  }),
  component: Index,
});

const cuts = [
  {
    name: "Dry-Aged Tomahawk",
    tag: "Aged 45 Days",
    desc: "32oz of bone-in ribeye, charred over cherry wood and finished with smoked marrow butter.",
    img: cutTomahawk,
    price: "128",
  },
  {
    name: "Japanese A5 Wagyu",
    tag: "Kagoshima",
    desc: "A5 striploin served in delicate 4oz slices with house-fermented chili oil and burnt shallot.",
    img: cutWagyu,
    price: "96",
  },
  {
    name: "Hearth-Fired Octopus",
    tag: "Live Coals",
    desc: "Double-tenderized tentacle, Spanish chorizo, and saffron aioli seared over glowing embers.",
    img: cutOctopus,
    price: "38",
  },
];

const pours = [
  {
    name: "Cellar Reds",
    tag: "By the Glass",
    desc: "A rotating list of bold Old-World reds — Barolo, Rioja Gran Reserva, and Northern Rhône Syrah.",
    img: drinkWine,
  },
  {
    name: "Smoked Old Fashioned",
    tag: "House Cocktail",
    desc: "Rye, demerara, and bitters finished tableside under a dome of applewood smoke.",
    img: drinkOldFashioned,
  },
  {
    name: "Draft & Local Ales",
    tag: "On Tap",
    desc: "Six rotating drafts from Chicago's craft breweries — amber lagers, hazy IPAs, and dark stouts.",
    img: drinkBeer,
  },
];

function Index() {
  return (
    <div className="bg-hearth-bg text-hearth-text font-sans antialiased min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-hearth-border bg-hearth-bg/80 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-xl font-medium tracking-tight">VULCAN &amp; VINE</span>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-hearth-text/60">
            <a href="#menu" className="hover:text-hearth-text transition-colors">The Menu</a>
            <a href="#hearth" className="hover:text-hearth-text transition-colors">The Hearth</a>
            <a href="#location" className="hover:text-hearth-text transition-colors">Location</a>
          </div>
          <a
            href="#reserve"
            className="bg-ember text-hearth-text text-sm h-9 px-4 flex items-center gap-2 rounded-sm ring-1 ring-ember hover:bg-ember/90 transition-colors font-medium"
          >
            Reserve Table
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full blur-[120px] opacity-30"
          style={{ background: "var(--ember)" }}
        />
        <div className="max-w-screen-xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="text-ember text-[11px] uppercase tracking-[0.3em] font-medium mb-6 block">
                Est. 2018 — West Loop, Chicago
              </span>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance font-medium mb-8">
                Where the flame meets the <span className="italic">prime cut.</span>
              </h1>
              <p className="text-lg md:text-xl text-hearth-text/70 max-w-[48ch] text-pretty mb-10">
                An upscale smokehouse dedicated to the ancient chemistry of fire, fat, and salt. Sourced from heritage breeds, finished over live white oak.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#reserve"
                  className="h-11 px-7 bg-hearth-text text-hearth-bg text-sm font-medium rounded-sm inline-flex items-center hover:bg-hearth-text/90 transition-colors"
                >
                  Reserve a Table
                </a>
                <a href="#menu" className="text-sm text-hearth-text/70 hover:text-hearth-text underline underline-offset-8 decoration-ember/60">
                  View tonight&rsquo;s selection
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-md ring-1 ring-hearth-border">
                <img
                  src={heroRibeye}
                  alt="Marbled ribeye with sea salt crystals"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Cuts */}
      <section id="menu" className="py-24 px-6 bg-hearth-surface/50 border-y border-hearth-border">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="font-display text-3xl md:text-5xl font-medium text-balance max-w-[18ch]">
              The Butcher&rsquo;s Selection
            </h2>
            <p className="text-hearth-text/50 text-sm max-w-[40ch]">
              Every cut is dry-aged in-house for 45 days before hitting the live fire grill.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cuts.map((c) => (
              <article key={c.name} className="group">
                <div className="w-full aspect-square overflow-hidden rounded-md ring-1 ring-hearth-border mb-6">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-ember">{c.tag}</span>
                  <span className="text-sm text-hearth-text/60 italic">${c.price}</span>
                </div>
                <h3 className="font-display text-2xl font-medium mb-2">{c.name}</h3>
                <p className="text-sm text-hearth-text/60 leading-relaxed text-pretty">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="hearth" className="py-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-[60ch] mx-auto text-center mb-16">
            <span className="text-ember text-[11px] uppercase tracking-[0.3em] font-medium mb-6 block">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] font-medium mb-8 text-balance">
              The discipline of the flame and the patience of the age.
            </h2>
            <p className="text-lg text-hearth-text/70 text-pretty">
              We don&rsquo;t use gas. We don&rsquo;t use electric. Our kitchen is powered entirely by artisanal charcoal and sustainable hardwoods, creating a depth of flavor that modern techniques simply cannot replicate.
            </p>
          </div>
          <div className="w-full aspect-[21/9] overflow-hidden rounded-md ring-1 ring-hearth-border">
            <img
              src={openKitchen}
              alt="Chef working the open fire grill"
              loading="lazy"
              width={1600}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              ["45 days", "In-house dry aging"],
              ["540°C", "Live coal heat"],
              ["3 woods", "Oak, cherry, hickory"],
              ["100%", "Heritage breeds"],
            ].map(([k, v]) => (
              <div key={v} className="text-center border-l border-hearth-border first:border-l-0 md:first:border-l-0 pl-4">
                <dt className="font-display text-3xl font-medium text-ember">{k}</dt>
                <dd className="text-[11px] uppercase tracking-widest text-hearth-text/50 mt-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Reservation + Location */}
      <section id="reserve" className="py-24 px-6 border-t border-hearth-border">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16">
          <div id="location">
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">Find the Flame</h2>
            <div className="space-y-8">
              <div>
                <p className="text-[11px] text-hearth-text/40 uppercase tracking-widest mb-2">Address</p>
                <p className="text-lg">822 Ember Alley, West Loop<br />Chicago, IL 60607</p>
              </div>
              <div>
                <p className="text-[11px] text-hearth-text/40 uppercase tracking-widest mb-2">Hours</p>
                <p className="text-base">Tue – Thu · 17:00 – 22:00</p>
                <p className="text-base">Fri – Sat · 17:00 – 23:30</p>
                <p className="text-base text-hearth-text/50">Sun – Mon · Closed</p>
              </div>
              <div>
                <p className="text-[11px] text-hearth-text/40 uppercase tracking-widest mb-2">Contact</p>
                <p className="text-base">+1 (312) 555 0184</p>
                <p className="text-base">hello@vulcanandvine.com</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-hearth-surface p-8 md:p-10 rounded-md border border-hearth-border h-fit"
          >
            <h3 className="font-display text-3xl font-medium mb-2">Join Us Tonight</h3>
            <p className="text-sm text-hearth-text/50 mb-8">Tables release two weeks in advance.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-widest text-hearth-text/40">Party</span>
                  <select className="mt-2 w-full h-11 px-3 bg-hearth-bg border border-hearth-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-ember">
                    {[2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n}>{n} guests</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-widest text-hearth-text/40">Date</span>
                  <input
                    type="date"
                    className="mt-2 w-full h-11 px-3 bg-hearth-bg border border-hearth-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-ember [color-scheme:dark]"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-[10px] uppercase tracking-widest text-hearth-text/40">Time</span>
                <select className="mt-2 w-full h-11 px-3 bg-hearth-bg border border-hearth-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-ember">
                  {["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-widest text-hearth-text/40">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full h-11 px-3 bg-hearth-bg border border-hearth-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-ember placeholder:text-hearth-text/30"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-ember text-hearth-text h-12 font-medium rounded-sm hover:bg-ember/90 transition-colors mt-2"
              >
                Confirm Availability
              </button>
              <p className="text-[11px] text-center text-hearth-text/30 italic">
                For parties over 8, please contact us directly.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-hearth-border">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg">VULCAN &amp; VINE</p>
            <p className="text-xs text-hearth-text/40">© 2026 · Live Fire Cookery</p>
          </div>
          <div className="flex gap-8 text-[11px] uppercase tracking-widest text-hearth-text/40">
            <a href="#" className="hover:text-hearth-text">Instagram</a>
            <a href="#" className="hover:text-hearth-text">Press</a>
            <a href="#" className="hover:text-hearth-text">Careers</a>
            <a href="#" className="hover:text-hearth-text">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
