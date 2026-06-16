import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Instagram,
  MapPin,
  Mountain,
  PlayCircle,
  ChevronDown,
  Compass,
  CalendarCheck,
  Footprints,
  Mail,
  MessageCircle,
  Send,
  Star,
  Quote,
} from "lucide-react";

import { Navbar } from "@/components/landing/Navbar";
import { Reveal, CountUp } from "@/components/landing/Reveal";

import hero from "@/assets/hero.jpg";
import hawassa from "@/assets/hawassa.jpg";
import dorze from "@/assets/dorze.jpg";
import arbaminch from "@/assets/arbaminch.jpg";
import wolaita from "@/assets/wolaita.jpg";
import langano from "@/assets/langano.jpg";
import abijatta from "@/assets/abijatta.jpg";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import contactBg from "@/assets/contact-bg.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duka Hiking — Explore, Discover, Experience Ethiopia" },
      {
        name: "description",
        content:
          "Duka Travel & Tours — authentic Ethiopian hiking journeys across Hawassa, Dorze, Arba Minch, Wolaita, Langano and Abijatta. Established 2020 in Jimma.",
      },
      { property: "og:title", content: "Duka Hiking — Explore, Discover, Experience Ethiopia" },
      { property: "og:description", content: "Hike the hidden highlands of Ethiopia with local guides. Let's put our traces." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: LandingPage,
});

const destinations = [
  { name: "Hawassa", img: hawassa, blurb: "Lake views, fish markets & Sidama culture", duration: "2–3 Days" },
  { name: "Dorze Village", img: dorze, blurb: "Traditional bamboo homes & handwoven textiles", duration: "2 Days" },
  { name: "Arba Minch", img: arbaminch, blurb: "Crocodile market, Nechisar Park & Nile views", duration: "3–4 Days" },
  { name: "Wolaita Sodo", img: wolaita, blurb: "Ancient kingdom history & scenic highlands", duration: "2 Days" },
  { name: "Langano Lake", img: langano, blurb: "Relaxing lakeside retreat & birdwatching", duration: "2 Days" },
  { name: "Abijatta-Shalla", img: abijatta, blurb: "Flamingo lakes & volcanic national park", duration: "1–2 Days" },
];

const strip = ["Hawassa", "Dorze", "Arba Minch", "Wolaita", "Debre Zeit", "Langano", "Abijatta"];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={hero}
          alt="Ethiopian highlands at sunrise with a lone hiker on a ridge"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover animate-fade-in-slow"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, oklch(0 0 0 / 0.78) 0%, oklch(0 0 0 / 0.55) 40%, oklch(0 0 0 / 0.12) 80%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 lg:px-10">
          <div className="max-w-2xl pt-28 pb-24 text-white">
            <div className="eyebrow text-gold animate-fade-up" style={{ animationDelay: "120ms" }}>
              Est. 2020 · Jimma, Ethiopia
            </div>
            <h1
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-balance animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              Discover Ethiopia,
              <br />
              <span className="italic font-medium text-gold/95">one trail</span> at a time.
            </h1>
            <p
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 animate-fade-up"
              style={{ animationDelay: "440ms" }}
            >
              We guide you through the hidden highlands, ancient cultures, and breathtaking
              landscapes of Ethiopia — the way only locals know them.
            </p>
            <div
              className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "620ms" }}
            >
              <a
                href="#tours"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-forest-foreground shadow-elegant transition-transform hover:scale-[1.04] hover:bg-forest-deep"
              >
                Explore Our Tours
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <PlayCircle size={18} /> Watch Our Story
              </a>
            </div>
          </div>
        </div>

        <a
          href="#destinations"
          aria-label="Scroll to destinations"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce-down"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* DESTINATIONS STRIP */}
      <section className="relative bg-forest-deep">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-5 lg:px-10">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="eyebrow mr-3 text-gold">Where we trek →</span>
            {strip.map((s) => (
              <a
                key={s}
                href="#destinations"
                className="inline-flex items-center gap-1.5 rounded-full bg-earth px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <MapPin size={14} /> {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative bg-parchment py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <Reveal>
            <div className="eyebrow text-forest">Who we are</div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-foreground text-balance">
              Ethiopia is not just a place.
              <br />
              <span className="italic text-earth">It&rsquo;s an experience.</span>
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-forest" />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Duka Travel &amp; Tours was founded in 2020 with one mission: to show the world the
                Ethiopia we know and love. From the misty highlands of the south to the ancient
                traditions of Dorze weavers, we craft journeys that go beyond the tourist trail.
              </p>
              <p>
                We are hikers, storytellers, and proud Ethiopians — and we want to leave our traces
                with you.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-deep"
            >
              Meet Our Team <ArrowRight size={15} />
            </a>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative h-[520px] w-full">
              <img
                src={about2}
                alt="Misty Ethiopian highland trail"
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute right-0 top-0 h-[78%] w-[72%] rounded-3xl object-cover shadow-elegant"
              />
              <img
                src={about1}
                alt="Hikers on an Ethiopian mountain trail"
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute bottom-0 left-0 h-[62%] w-[60%] rounded-3xl object-cover shadow-elegant ring-8 ring-parchment"
              />
              <div className="absolute -bottom-4 right-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-elegant">
                <Mountain size={16} /> 5+ Years of Trails
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESTINATIONS / TOURS */}
      <section id="destinations" className="relative bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow text-forest">Featured journeys</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">
                Where Will You Go?
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Our most loved destinations across Ethiopia.
              </p>
            </div>
          </Reveal>

          <div id="tours" className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <Reveal key={d.name} delay={i * 90}>
                <article className="group relative h-[420px] overflow-hidden rounded-3xl shadow-card-soft hover-lift">
                  <img
                    src={d.img}
                    alt={`${d.name} — ${d.blurb}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
                    {d.duration}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                      <MapPin size={14} /> {d.name}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold leading-tight">{d.blurb}</h3>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-1"
                    >
                      View Tour <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "var(--gradient-forest)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center text-white">
              <div className="eyebrow text-gold">Your journey</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold">How We Take You There</h2>
              <p className="mt-4 text-white/75">Three simple steps from idea to summit.</p>
            </div>
          </Reveal>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden border-t border-dashed border-white/30 md:block" />
            {[
              { icon: Compass, title: "Choose Your Destination", text: "Browse our curated destinations and pick your dream trail." },
              { icon: CalendarCheck, title: "Plan With Us", text: "We customize your itinerary, accommodation, and guide." },
              { icon: Footprints, title: "Hit the Trail", text: "Pack your bags and let us handle the rest." },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 120}>
                  <div className="relative flex flex-col items-center text-center text-white">
                    <div className="relative grid h-20 w-20 place-items-center rounded-full bg-forest-deep ring-4 ring-white/15 shadow-elegant">
                      <Icon size={32} className="text-gold" />
                    </div>
                    <div className="mt-5 text-xs font-bold tracking-[0.25em] text-gold">STEP 0{i + 1}</div>
                    <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 max-w-xs text-sm text-white/75">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-earth-deep py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 text-center text-white md:grid-cols-4 lg:px-10">
          {[
            { value: 1885, suffix: "+", label: "Followers" },
            { value: 7, suffix: "+", label: "Destinations" },
            { value: 2020, suffix: "", label: "Founded", prefix: "Est. " },
            { value: 100, suffix: "%", label: "Ethiopian Guides" },
          ].map((s) => (
            <Reveal key={s.label}>
              <div>
                <div className="font-display text-5xl font-bold text-gold">
                  {s.prefix}<CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm tracking-wider text-white/80 uppercase">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow text-forest">Voices from the trail</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">What Travelers Say</h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              { q: "Duka Hiking gave us the most authentic Ethiopian experience we could have hoped for. The guides knew every trail and story.", n: "Sarah M.", f: "🇩🇪" },
              { q: "From Hawassa to Dorze, every stop was perfectly planned. We felt like locals, not tourists.", n: "James K.", f: "🇬🇧" },
              { q: "The Langano lake trip was unforgettable. Highly recommend for anyone wanting real Ethiopia.", n: "Amina T.", f: "🇸🇦" },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 120}>
                <figure className="relative h-full rounded-3xl bg-card p-8 shadow-card-soft ring-1 ring-border">
                  <Quote className="text-forest/30" size={42} strokeWidth={1.5} />
                  <blockquote className="mt-3 text-base leading-relaxed italic text-foreground">
                    &ldquo;{t.q}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center justify-between">
                    <figcaption className="text-sm font-semibold text-foreground">
                      {t.n} <span className="ml-1">{t.f}</span>
                    </figcaption>
                    <div className="flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow text-forest">Field journal</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Follow Our Journey</h2>
              <p className="mt-3 text-muted-foreground">
                <a
                  href="https://www.instagram.com/duka_hiking/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-forest hover:text-forest-deep"
                >
                  @duka_hiking
                </a>{" "}
                on Instagram
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {[hero, hawassa, dorze, arbaminch, langano, abijatta].map((img, i) => (
              <Reveal key={i} delay={i * 60}>
                <a
                  href="https://www.instagram.com/duka_hiking/"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-2xl"
                >
                  <img
                    src={img}
                    alt="Duka Hiking Instagram post"
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-2 bg-forest-deep/70 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Instagram size={20} />
                    <span className="text-sm font-semibold">View Post</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/duka_hiking/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-earth"
            >
              <Instagram size={16} /> Follow on Instagram
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-28">
        <img
          src={contactBg}
          alt="Ethiopian mountain at sunset"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
          <Reveal>
            <div className="eyebrow text-gold">Let&rsquo;s talk</div>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Ready to Leave Your Traces?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Get in touch and let&rsquo;s plan your Ethiopian adventure together.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-3xl bg-white/10 p-6 text-left backdrop-blur-md ring-1 ring-white/20 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-gold focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-gold focus:outline-none"
                />
              </div>
              <select
                defaultValue=""
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none [&>option]:text-foreground"
              >
                <option value="" disabled>Choose a destination…</option>
                {destinations.map((d) => (
                  <option key={d.name} value={d.name}>{d.name}</option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your dream trip…"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-gold focus:outline-none"
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
                >
                  <Send size={16} /> Send Message
                </button>
                <a
                  href="https://wa.me/251000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-forest-foreground transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[oklch(0.18_0.012_60)] text-white/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Duka Hiking" width={48} height={48} className="h-12 w-12 object-contain" />
              <div>
                <div className="text-sm font-bold tracking-[0.2em] text-white">DUKA HIKING</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/60">Travel &amp; Tours</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/65 max-w-xs">
              Explore · Discover · Experience Ethiopia <span>🇪🇹</span>
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/duka_hiking/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors hover:bg-forest hover:border-forest"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-xs font-bold transition-colors hover:bg-forest hover:border-forest"
              >
                TT
              </a>
            </div>
          </div>

          <div>
            <div className="eyebrow text-gold">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["Home", "Destinations", "Tours", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white/70 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-gold">Get in touch</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={14} /> hello@dukahiking.com
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Instagram size={14} /> @duka_hiking
              </li>
              <li className="text-white/70">TikTok: @dukahiking</li>
              <li className="text-white/70">Jimma, Ethiopia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © 2025 Duka Travel &amp; Tours. All rights reserved. — Let&rsquo;s put our traces.
        </div>
      </footer>
    </div>
  );
}
