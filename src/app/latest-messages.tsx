"use client";

import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";

type Message = {
  id: string;
  videoId: string;
  title: string;
  publishedAt: string;
};

const messages: Message[] = [
  {
    id: "prophecy-king",
    videoId: "ckX2FAbPX3g",
    title: "Did You Know Jesus Will Fulfill a 2,500-Year-Old Prophecy as King of the World?",
    publishedAt: "Recent Message"
  },
  {
    id: "deep-dive-faith",
    videoId: "Ozcq-Mbd4dU",
    title: "Deep Dive into Faith: Discovering the Real Reasons Behind Christianity",
    publishedAt: "Recent Teaching"
  },
  {
    id: "why-christian",
    videoId: "Y1x93p8GyAE",
    title: "This Sermon Will Change Your Perspective: Why Are You Really a Christian?",
    publishedAt: "Latest Upload"
  },
  {
    id: "keeping-faith",
    videoId: "6RyMOLPzH4s",
    title: "Prayer for CPMA October 2024 - Keeping the Faith to be Established",
    publishedAt: "Prayer Message"
  },
  {
    id: "discipleship-kenosha",
    videoId: "qb4veYVUGWg",
    title: "Discover Jesus' Teachings on Discipleship at Kenosha Church This Sunday",
    publishedAt: "Community Message"
  },
  {
    id: "trust-established",
    videoId: "4ZGjjEjSv4o",
    title: "The Church of God Prayer for CPMA Message September 2024 - Trust Established",
    publishedAt: "Prayer Message"
  }
];

function getThumbnail(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function LatestMessages() {
  const [activeMessage, setActiveMessage] = useState<Message | null>(null);

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
    <section id="ministries" className="border-t border-slate-200 py-16">
      <div className="container grid gap-16 md:grid-cols-[0.31fr_0.69fr]">
        <div className="pt-12">
          <p className="text-sm font-extrabold uppercase text-gold">Latest Messages</p>
          <h2 className="serif-title mt-4 text-[34px] font-bold leading-tight text-navy md:text-5xl">Watch Recent Worship and Scripture Teaching</h2>
          <div className="mt-5 h-1 w-10 bg-gold" />
          <p className="mt-7 text-[15px] font-semibold leading-8 text-navy md:text-base">
            Recent worship and Scripture-centered messages from The Church of God Community channel.
          </p>
          <a className="mt-9 inline-flex min-h-14 items-center justify-between gap-8 rounded bg-navy px-8 text-sm font-bold uppercase text-white shadow-soft" href="https://www.youtube.com/@thechurchofgod-community" target="_blank" rel="noreferrer">
            Visit YouTube Channel <span className="text-2xl leading-none">›</span>
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((message) => (
            <button key={message.id} type="button" onClick={() => setActiveMessage(message)} className="group overflow-hidden rounded-lg bg-white text-left shadow-soft transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gold/35">
              <span className="relative block h-40 overflow-hidden">
                <img src={getThumbnail(message.videoId)} alt={`${message.title} thumbnail`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-navy/25" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-soft transition group-hover:bg-gold group-hover:text-white">
                  <Play size={28} fill="currentColor" className="ml-1" />
                </span>
              </span>
              <span className="block px-7 pb-7 pt-8">
                <span className="block text-xs font-extrabold uppercase tracking-wide text-gold">{message.publishedAt}</span>
                <span className="mt-4 block text-sm font-extrabold uppercase leading-6 text-navy">{message.title}</span>
              </span>
            </button>
          ))}
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
