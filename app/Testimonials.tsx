'use client';
import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Anna",
      text: "Olen erittäin tyytyväinen SSAS OY:n tarjoamaan muuttopalveluun. Kaikki meni suunnitellusti ja ammattitaitoisesti. Minulle jäi positiivinen kuva koko muuttokokemuksesta.",
      initials: "A"
    },
    {
      name: "Matti",
      text: "Käytin SSAS OY:n muuttopalvelua viime kuussa, ja en voisi olla tyytyväisempi valintaani. Kaikki sujui vaivattomasti alusta loppuun asti. Suosittelen heitä lämpimästi.",
      initials: "M"
    },
    {
      name: "Liisa",
      text: "SSAS OY:n ammattitaitoinen ja ystävällinen henkilökunta teki muutostani stressittömän ja vaivattoman. Heidän joustavuutensa ja huolellisuutensa ansaitsee kiitokseni.",
      initials: "L"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0c]/80 backdrop-blur-sm px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      {/* Koristeelliset taustavalot */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3be8e8]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4x1 md:text-5xl uppercase tracking-[4px] text-[#3be8e8] mb-4 font-bold">Kertomukset</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Asiakkaiden kokemukset SSAS OY:n muuttopalveluista
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 hover:border-[#3be8e8]/30 transition-all duration-500 group"
            >
              {/* Lainausmerkki-ikoni */}
              <div className="text-4xl text-[#3be8e8]/20 absolute top-6 right-8 group-hover:text-[#3be8e8]/40 transition-colors">
                ”
              </div>

              <div className="flex flex-col h-full">
                <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10">
                  "{review.text}"
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3be8e8]/10 border border-[#3be8e8]/30 flex items-center justify-center text-[#3be8e8] font-bold">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">— {review.name}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Tyytyväinen asiakas</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}