'use client';
import React from 'react';

export default function Akkreditointi() {
  const items = [
    {
      title: "Ammattiliiton Hyväksymä",
      text: "Minut on akkreditoitu ja hyväksytty toimimaan alan ammattiliiton standardien mukaisesti, mikä takaa laadukkaan ja ammattitaitoisen palvelun.",
      icon: "🏆"
    },
    {
      title: "Kuluttajaviraston Sertifioima",
      text: "Olen saanut Kuluttajaviraston sertifioinnin, joka osoittaa sitoutumiseni asiakastyytyväisyyteen ja reiluun toimintaan. Voit luottaa minuun turvallisena vaihtoehtona.",
      icon: "🛡️"
    },
    {
      title: "Tyytyväisyystakuu",
      text: "Tarjoan tyytyväisyystakuun palveluilleni - mikäli et ole tyytyväinen tekemääni työhön, teen tarvittavat korjaukset tai hyvitän sinulle kustannuksia. Asiakkaan tyytyväisyys on minulle ensisijaisen tärkeä asia.",
      icon: "⭐"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0c] px-6 md:px-16 border-t border-white/5 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Luotettava muuttopalvelu: <span className="text-[#3be8e8]">Akkreditointi ja Takuut</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Yritykseni on saanut useita akkreditointeja sekä sertifikaatteja alalla toimimisesta. Voit luottaa minuun ja palveluihini, sillä minulla on myös tarjolla kattavia takuita työn laadusta ja asiakastyytyväisyydestä.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#3be8e8]/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Эффект свечения при наведении */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#3be8e8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#3be8e8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}