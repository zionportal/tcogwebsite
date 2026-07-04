"use client";

import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";

type Message = {
  id: string;
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
};

const messages: Message[] = [
  {
    id: "sunday-worship",
    videoId: "ckX2FAbPX3g",
    title: "Did You Know Jesus Will Fulfill a 2,500-Year-Old Prophecy as King of the World?",
    description: "A Scripture-centered message pointing to the hope and authority of Jesus Christ as King.",
    publishedAt: "Recent Message"
  },
  {
    id: "scripture-encouragement",
    videoId: "Ozcq-Mbd4dU",
    title: "Deep Dive into Faith: Discovering the Real Reasons Behind Christianity",
    description: "Bible-centered teaching for daily faith, discipleship, and a deeper walk with Christ.",
    publishedAt: "Recent Teaching"
  },
  {
    id: "community-service",
    videoId: "Y1x93p8GyAE",
    title: "This Sermon Will Change Your Perspective: Why Are You Really a Christian?",
    description: "A direct sermon inviting believers to examine faith, purpose, and commitment to God's Word.",
    publishedAt: "Latest Upload"
  }
];

function getThumbnail(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function LatestMessages() {
  const [activeMessage, setActiveMessage] = useState<Message | null>(null);
  const featuredMessage = messages[0];

  useEffect(() => {
    if (!activeMessage) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMessage(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeMessage]);

  return (
    <section id="about" className="py-10 md:py-16">
      <div className="container grid items-center gap-16 md:grid-cols-[0.64fr_0.36fr]">
        <div className="relative pb-0 md:pb-28">
          <button type="button" onClick={() => setActiveMessage(featuredMessage)} className="group relative block h-[360px] w-full overflow-hidden rounded-xl shadow-soft focus:outline-none focus:ring-4 focus:ring-gold/35" aria-label={`Play ${featuredMessage.title}`}>
            <img src={getThumbnail(featuredMessage.videoId)} alt={`${featuredMessage.title} thumbnail`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/10 to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-soft transition group-hover:bg-gold group-hover:text-white">
              <Play size={34} fill="currentColor" className="ml-1" />
            </span>
          </button>
          <div className="mt-5 grid gap-5 rounded-xl bg-white px-6 py-7 shadow-soft md:absolute md:bottom-0 md:left-[-40px] md:right-[-24px] md:mt-0 md:grid-cols-3 md:px-8">
            {messages.map((message) => (
              <button key={message.id} type="button" onClick={() => setActiveMessage(message)} className="group text-left focus:outline-none focus:ring-4 focus:ring-gold/35">
                <span className="relative mb-5 block h-28 overflow-hidden rounded-lg">
                  <img src={getThumbnail(message.videoId)} alt={`${message.title} thumbnail`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-navy/25" />
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-soft transition group-hover:bg-gold group-hover:text-white">
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                  </span>
                </span>
                <span className="block text-xs font-extrabold uppercase tracking-wide text-gold">{message.publishedAt}</span>
                <span className="mt-3 block text-sm font-extrabold uppercase leading-6 text-navy">{message.title}</span>
                <span className="mt-3 block text-sm font-semibold leading-6 text-navy">{message.description}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase text-gold">Latest Messages</p>
          <h2 className="serif-title mt-4 max-w-full text-[30px] font-bold leading-tight text-navy sm:text-[34px] md:text-5xl">Watch Recent Worship and Scripture Teaching</h2>
          <div className="mt-5 h-1 w-10 bg-gold" />
          <p className="mt-7 max-w-full text-[15px] font-semibold leading-8 text-navy md:text-base">
            Stay connected with worship services and Scripture-centered community content from The Church of God Community channel.
          </p>
          <a className="mt-9 inline-flex min-h-14 items-center justify-between gap-8 rounded bg-navy px-8 text-sm font-bold uppercase text-white shadow-soft" href="https://www.youtube.com/@thechurchofgod-community" target="_blank" rel="noreferrer">
            Visit YouTube Channel <span className="text-2xl leading-none">›</span>
          </a>
        </div>
      </div>

      {activeMessage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/85 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${activeMessage.title} video player`} onClick={() => setActiveMessage(null)}>
          <div className="w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-soft" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-xs font-extrabold uppercase text-gold">Now Playing</p>
                <h3 className="text-base font-extrabold text-navy md:text-xl">{activeMessage.title}</h3>
              </div>
              <button type="button" onClick={() => setActiveMessage(null)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white" aria-label="Close video modal">
                <X size={22} />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${activeMessage.videoId}?autoplay=1&rel=0`} title={activeMessage.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
