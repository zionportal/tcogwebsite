import Image from "next/image";
import {
  Bell,
  BookOpen,
  Church,
  Crown,
  Facebook,
  Globe2,
  Heart,
  Mail,
  MapPin,
  Menu,
  Music,
  Phone,
  Shield,
  Star,
  Users,
  Youtube
} from "lucide-react";

const nav = ["Home", "About", "Ministries", "Churches", "Events", "Resources", "Contact"];

const stats = [
  { icon: Church, value: "125+", label: "Churches", sub: "Across the Region" },
  { icon: Users, value: "15,000+", label: "Members", sub: "Worshipping Together" },
  { icon: Globe2, value: "38", label: "Communities", sub: "Reached" },
  { icon: Shield, value: "10+", label: "Years", sub: "of Faithful Service" }
];

const values = [
  { icon: Crown, title: "Faithful", body: "Anchored in God's truth and unwavering in our faith." },
  { icon: Users, title: "United", body: "We are better together as the Body of Christ." },
  { icon: Star, title: "Governed", body: "Led by Christ our King under God's divine authority." }
];

const ministries = [
  {
    title: "Youth Ministry",
    body: "Empowering young people to know Christ and live boldly for Him.",
    image: "/assets/crops/ministry-youth.png",
    icon: BookOpen
  },
  {
    title: "Worship Ministry",
    body: "Leading hearts into meaningful worship and encounters.",
    image: "/assets/crops/ministry-worship.png",
    icon: Music
  },
  {
    title: "Outreach Ministry",
    body: "Reaching our communities with the love of Christ in practical ways.",
    image: "/assets/crops/ministry-outreach.png",
    icon: Heart
  },
  {
    title: "Women's Ministry",
    body: "Equipping women to grow in faith and walk in their God-given purpose.",
    image: "/assets/crops/ministry-women.png",
    icon: Crown
  },
  {
    title: "Men's Ministry",
    body: "Building men of integrity who lead, protect, and serve.",
    image: "/assets/crops/ministry-men.png",
    icon: Shield
  },
  {
    title: "Missions Ministry",
    body: "Taking the Gospel to the world and making disciples.",
    image: "/assets/crops/ministry-missions.png",
    icon: Globe2
  }
];

const events = [
  { month: "Jun", day: "22", title: "Youth Night", meta: "Friday at 7:00 PM", place: "Kingdom City Campus", image: "/assets/crops/event-youth.png" },
  { month: "Jun", day: "29", title: "Community Outreach", meta: "Saturday at 10:00 AM", place: "Downtown Community", image: "/assets/crops/event-outreach.png" },
  { month: "Jul", day: "06", title: "Global Assembly 2025", meta: "July 23 - 27, 2025", place: "Atlanta, GA", image: "/assets/crops/event-assembly.png" }
];

const impactStats = [
  { value: "125+", label: "Churches", icon: Church },
  { value: "15,000+", label: "Members", icon: Users },
  { value: "12,500+", label: "People Served", icon: Heart },
  { value: "4,800+", label: "Youth Reached", icon: Users },
  { value: "38", label: "Communities Impacted", icon: Globe2 }
];

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a className="inline-flex min-h-12 items-center justify-center gap-3 rounded bg-navy px-7 text-sm font-bold uppercase tracking-normal text-white shadow-soft transition hover:bg-deep" href="#contact">
      {children}
    </a>
  );
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <a className="inline-flex min-h-12 items-center justify-center gap-3 rounded border border-gold px-7 text-sm font-bold uppercase tracking-normal text-gold transition hover:bg-gold hover:text-white" href="#churches">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="bg-navy text-white">
        <div className="container flex min-h-12 items-center justify-between text-[12px] font-semibold">
          <span>ONE GOD • ONE FAITH • ONE MIND</span>
          <div className="hidden items-center gap-8 md:flex">
            <span>Go ye therefore, and teach all nations. — Matthew 28:19-20</span>
            <a className="inline-flex items-center gap-2 rounded bg-gold px-5 py-2 font-bold uppercase" href="#give">
              <Heart size={15} fill="currentColor" /> Give
            </a>
          </div>
        </div>
      </section>

      <header className="relative z-20 bg-white">
        <div className="container flex h-28 items-center justify-between">
          <a className="flex items-center" href="#">
            <Image src="/assets/tcog-header-logo-transparent.png" alt="The Church of God General Headquarters logo" width={1032} height={201} className="h-auto w-[300px] object-contain md:w-[330px]" priority />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item, index) => (
              <a key={item} className={`text-[12px] font-extrabold uppercase ${index === 0 ? "border-b-2 border-gold pb-2 text-navy" : "text-deep"}`} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden min-h-12 items-center gap-2 rounded bg-gold px-6 text-sm font-bold uppercase text-white shadow-soft md:inline-flex" href="#churches">
              Find a Church <MapPin size={17} />
            </a>
            <button className="inline-flex h-11 w-11 items-center justify-center rounded border border-navy/15 lg:hidden" aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[610px] bg-white">
        <div className="absolute inset-y-0 right-0 hidden w-[64%] md:block">
          <Image src="/assets/crops/hero-scene.png" alt="Church family looking across a sunrise mountain valley" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
        <div className="wave-red absolute inset-0 hidden bg-redwave md:block" />
        <div className="wave-hero absolute inset-0 hidden bg-gradient-to-r from-navy via-purplewave to-deep md:block" />
        <div className="container relative z-10 grid min-h-[610px] items-center md:grid-cols-[0.42fr_0.58fr]">
          <div className="py-16 md:py-0">
            <h1 className="serif-title max-w-full text-[43px] font-bold uppercase leading-[0.98] text-navy sm:text-[52px] md:text-[70px]">
              One Faith.
              <br />
              One Family.
              <br />
              One Mission.
            </h1>
            <div className="mt-6 h-1 w-10 bg-gold" />
            <p className="mt-6 max-w-[420px] text-base font-semibold leading-8 text-navy sm:text-lg">
              We are a worldwide church, committed to the truth of God's Word, the power of the Holy Spirit, and the preaching of the Gospel to every creature.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton>
                <Users size={17} /> Connect With Us
              </PrimaryButton>
              <OutlineButton>
                <Bell size={17} /> Find a Church
              </OutlineButton>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-30 pb-16 md:-mt-24">
        <div className="container grid gap-3 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="rounded-lg bg-white px-8 py-8 text-center shadow-soft">
              <Icon className="mx-auto mb-4 text-navy" size={36} fill={label === "Churches" ? "currentColor" : "none"} />
              <div className="serif-title text-4xl font-bold text-navy">{value}</div>
              <div className="mt-2 text-sm font-semibold text-navy">{label}</div>
              <div className="mt-1 text-sm text-navy">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-10 md:py-16">
        <div className="container grid items-center gap-16 md:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-sm font-extrabold uppercase text-gold">Our Purpose</p>
            <h2 className="serif-title mt-4 max-w-full text-[30px] font-bold leading-tight text-navy sm:text-[34px] md:text-5xl">Our Mission is Changing Lives</h2>
            <div className="mt-5 h-1 w-10 bg-gold" />
            <p className="mt-7 max-w-full text-[15px] font-semibold leading-8 text-navy md:text-base">
              The Church of God General Headquarters is a worldwide church that preaches the Gospel of Jesus Christ, makes disciples, and evangelizes our region with the truth of God's Word and the power of the Holy Spirit.
            </p>
            <a className="mt-9 inline-flex min-h-14 items-center justify-between gap-8 rounded bg-navy px-8 text-sm font-bold uppercase text-white shadow-soft" href="#about">
              Learn More About Us <span className="text-2xl leading-none">›</span>
            </a>
          </div>
          <div className="relative pb-0 md:pb-24">
            <Image src="/assets/crops/bible-scene.png" alt="Open Bible on a table at sunrise" width={872} height={340} className="h-[360px] w-full rounded-xl object-cover shadow-soft" />
            <div className="mt-5 grid gap-6 rounded-xl bg-white px-7 py-8 shadow-soft md:absolute md:bottom-0 md:left-[-32px] md:right-[-18px] md:mt-0 md:grid-cols-3 md:px-10">
              {values.map(({ icon: Icon, title, body }, index) => (
                <div key={title} className="flex gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white ${index === 1 ? "bg-purplewave" : index === 2 ? "bg-redwave" : "bg-navy"}`}>
                    <Icon size={23} fill="currentColor" />
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold uppercase text-navy">{title}</h3>
                    <p className="mt-4 text-sm font-semibold leading-6 text-navy">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ministries" className="border-t border-slate-200 py-16">
        <div className="container grid gap-16 md:grid-cols-[0.31fr_0.69fr]">
          <div className="pt-12">
            <p className="text-sm font-extrabold uppercase text-gold">Live Your Faith</p>
            <h2 className="serif-title mt-4 text-[34px] font-bold leading-tight text-navy md:text-5xl">Ministries That Make an Impact</h2>
            <div className="mt-5 h-1 w-10 bg-gold" />
            <p className="mt-7 text-[15px] font-semibold leading-8 text-navy md:text-base">
              From youth programs to outreach initiatives, our ministries are here to help every generation grow in faith, build community, and serve with purpose.
            </p>
            <a className="mt-9 inline-flex min-h-14 items-center justify-between gap-8 rounded bg-navy px-8 text-sm font-bold uppercase text-white shadow-soft" href="#ministries">
              Explore Ministries <span className="text-2xl leading-none">›</span>
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map(({ title, body, image, icon: Icon }, index) => (
              <article key={title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-36">
                  <Image src={image} alt={`${title} gathering`} fill className="object-cover" />
                </div>
                <div className="relative px-7 pb-7 pt-8">
                  <span className={`absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-white ${index % 3 === 0 ? "bg-purplewave" : "bg-navy"}`}>
                    <Icon size={22} />
                  </span>
                  <h3 className="text-sm font-extrabold uppercase text-navy">{title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-navy">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container grid items-center gap-14 lg:grid-cols-[0.52fr_0.48fr]">
          <div>
            <p className="text-sm font-extrabold uppercase text-gold">Together, We Make a Difference</p>
            <h2 className="serif-title mt-4 text-[34px] font-bold leading-tight md:text-5xl">Strengthening Communities. Changing Eternities.</h2>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-5">
              {impactStats.map(({ value, label, icon: Icon }) => {
                return (
                  <div key={label} className="border-r border-white/20 pr-5 last:border-r-0">
                    <Icon size={34} className="mb-4" fill="currentColor" />
                    <div className="serif-title text-3xl font-bold">{value}</div>
                    <div className="mt-2 text-sm">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative pb-20">
            <Image src="/assets/crops/community-scene.png" alt="Church members serving a neighborhood community" width={646} height={360} className="h-[320px] w-full rounded-xl object-cover" />
            <blockquote className="absolute bottom-0 left-6 max-w-[430px] rounded bg-navy px-10 py-8 shadow-soft">
              <p className="text-lg font-semibold leading-8">Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.</p>
              <cite className="mt-5 block text-sm font-extrabold uppercase not-italic text-gold">Matthew 28:19</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="events" className="py-14">
        <div className="container grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 flex items-center justify-between">
              <h2 className="text-lg font-extrabold uppercase text-gold">Upcoming Events</h2>
              <a className="text-sm font-extrabold uppercase text-navy" href="#events">View All Events</a>
            </div>
            <div className="space-y-5">
              {events.map((event) => (
                <article key={event.title} className="grid grid-cols-[76px_1fr_160px] items-center gap-5">
                  <div className="rounded border border-slate-200 py-4 text-center shadow-sm">
                    <div className="text-sm font-bold uppercase">{event.month}</div>
                    <div className="serif-title text-3xl font-bold">{event.day}</div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy">{event.title}</h3>
                    <p className="mt-1 text-sm font-semibold leading-6">{event.meta}<br />{event.place}</p>
                  </div>
                  <Image src={event.image} alt={`${event.title} event`} width={190} height={88} className="h-20 rounded object-cover" />
                </article>
              ))}
            </div>
          </div>
          <div id="contact" className="relative">
            <h2 className="text-lg font-extrabold uppercase text-gold">Stay Connected</h2>
            <p className="mt-6 max-w-sm text-sm font-semibold leading-7">Get the latest news, events, and encouragement delivered to your inbox.</p>
            <form className="mt-7 max-w-md space-y-4">
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="Enter your email address" className="h-12 w-full rounded border border-slate-300 px-5 text-sm outline-none focus:border-gold" />
              <button type="button" className="flex h-12 w-full items-center justify-center gap-3 rounded bg-navy text-sm font-bold uppercase text-white">
                <Mail size={17} /> Subscribe
              </button>
            </form>
            <h3 className="mt-12 text-sm font-extrabold uppercase text-navy">Follow Us</h3>
            <div className="mt-6 flex gap-6">
              {[Facebook, Users, Youtube, Globe2].map((Icon, index) => (
                <a key={index} href="#contact" aria-label="Social media link" className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white">
                  <Icon size={23} fill="currentColor" />
                </a>
              ))}
            </div>
            <div className="pointer-events-none absolute right-0 top-8 hidden opacity-10 md:block">
              <Image src="/assets/tcog-dark-logo.png" alt="" width={310} height={130} />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-navy pt-12 text-white">
        <div className="absolute right-0 top-0 h-7 w-64 rounded-bl-full bg-redwave" />
        <div className="container grid gap-10 pb-10 md:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
          <div>
            <Image src="/assets/crops/footer-logo.png" alt="The Church of God footer logo" width={360} height={94} className="h-20 w-80 object-contain object-left" />
            <p className="mt-5 max-w-sm text-sm leading-6">We are a worldwide church, committed to the truth of God's Word, the power of the Holy Spirit, and the preaching of the Gospel to every creature.</p>
            <div className="mt-6 flex gap-5">
              {[Facebook, Users, Youtube, Globe2].map((Icon, index) => (
                <a key={index} href="#contact" aria-label="Footer social media link"><Icon size={22} /></a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase">Quick Links</h3>
            {["About Us", "Our Beliefs", "Ministries", "Events", "Resources", "News & Media", "Contact Us"].map((item) => (
              <a key={item} className="block py-1 text-sm" href="#about">{item}</a>
            ))}
          </div>
          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase">Ministries</h3>
            {["Children", "Youth", "Men", "Women", "Outreach", "Missions", "Worship"].map((item) => (
              <a key={item} className="block py-1 text-sm" href="#ministries">{item}</a>
            ))}
          </div>
          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase">Contact Us</h3>
            <p className="mb-4 flex gap-3 text-sm"><MapPin size={20} /> 1234 Faith Avenue<br />Global City, GC 10001</p>
            <p className="mb-4 flex gap-3 text-sm"><Phone size={20} /> (123) 456-7890</p>
            <p className="mb-4 flex gap-3 text-sm"><Mail size={20} /> info@tcogrm.net</p>
            <p className="flex gap-3 text-sm"><Globe2 size={20} /> tcogrm.net</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-5">
          <div className="container flex flex-col justify-between gap-3 text-sm md:flex-row">
            <span>© 2025 The Church of God General Headquarters. All Rights Reserved.</span>
            <span>MATTHEW 28:19-20</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
