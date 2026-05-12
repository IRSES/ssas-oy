'use client';
import React from 'react';

export default function Infographic() {
  const steps = [
    { id: '01', text: 'Yhteydenotto ja muuton suunnittelu asiakkaan tarpeiden mukaan.' },
    { id: '02', text: 'Tavaroiden huolellinen pakkaaminen ja suojaaminen kuljetusta varten.' },
    { id: '03', text: 'Turvallinen kuljetus uuteen osoitteeseen nykyaikaisella kalustolla.' },
    { id: '04', text: 'Purkaminen ja asennuspalvelut perillä – muutto on valmis!' },
  ];

  return (
    <section className="py-24 bg-[#0a0a0c] px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
        Miten <span className="text-[#3be8e8]">toimimme</span>
      </h2>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 max-w-7xl">
        
        {/* Список этапов (4 маленьких круга) */}
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="info-item-custom flex items-center gap-6 group">
              <div className="number-circle-custom">
                {step.id}
              </div>
              <div className="text-gray-400 text-sm max-w-[280px] group-hover:text-white transition-colors duration-300">
                {step.text}
              </div>
            </div>
          ))}
        </div>

        {/* Большой круг со статистикой */}
        <div className="gauge-wrapper relative">
          <div className="gauge-main">
            {/* SVG для прогресс-бара */}
            <svg className="absolute inset-0 w-full h-full rotate-[-135deg]" viewBox="0 0 380 380">
              <circle 
                cx="190" cy="190" r="140"
                fill="none"
                stroke="rgba(59, 232, 232, 0.1)"
                strokeWidth="20"
                strokeDasharray="660 220"
                strokeLinecap="round"
              />
              <circle 
                cx="190" cy="190" r="140"
                fill="none"
                stroke="#3be8e8"
                strokeWidth="20"
                strokeDasharray="660"
                strokeDashoffset="150" /* Здесь регулируется заполнение */
                strokeLinecap="round"
                className="gauge-progress-anim"
                style={{ filter: 'drop-shadow(0 0 10px #3be8e8)' }}
              />
            </svg>

            <div className="gauge-inner-content">
              <span className="text-gray-500 text-xs uppercase tracking-[3px] mb-2">Suoritetut muutot</span>
              <span className="text-white text-6xl font-black tracking-tighter tabular-nums">
                1250+
              </span>
              <span className="text-[#3be8e8] text-[10px] mt-4 font-bold tracking-widest uppercase">
                Tyytyväistä asiakasta
              </span>
            </div>
          </div>
          
          {/* Декоративная точка на кольце */}
          <div className="gauge-dot" />
        </div>
      </div>
    </section>
  );
}