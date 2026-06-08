'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  
  // Создаем стейты для полей первой формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const openingHours = [
    { day: "Maanantai", time: "10.00 - 17.00" },
    { day: "Tiistai", time: "10.00 - 17.00" },
    { day: "Keskiviikko", time: "10.00 - 17.00" },
    { day: "Torstai", time: "10.00 - 17.00" },
    { day: "Perjantai", time: "10.00 - 17.00" },
    { day: "Lauantai", time: "11.00 - 14.00" },
    { day: "Sunnuntai", time: "Suljettu", special: true },
  ];

  // Функция перенаправления с параметрами
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Кодируем данные в безопасную для URL строку
    const queryParams = new URLSearchParams({
      name: name,
      email: email,
      message: message
    }).toString();

    // Перенаправляем на страницу контактов
    router.push(`/yhteystiedot?${queryParams}`);
  };

  return (
    <section className="py-24 bg-[#0a0a0c] px-6 md:px-16 border-t border-white/5 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* VASEN PUOLI: Tiedot */}
          <div>
            <h2 className="text-sm uppercase tracking-[4px] text-[#3be8e8] mb-4 font-bold">Yhteystiedot</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Ota yhteyttä ja soita suoraan!</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Tarjoan henkilökohtaista palvelua ja vastaan puhelimeen itse. Soita minulle rohkeasti!
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <span className="text-[#3be8e8] text-xl">📍</span>
                <div>
                  <p className="text-white">Vaajakoskentie 123, 40800 Vaajakoski</p>
                  <p className="text-white">Hakintie 7B, 01380 Vantaa</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#3be8e8] text-xl">📞</span>
                <a href="tel:+358503870873" className="text-white hover:text-[#3be8e8] transition">+358 503 870 873</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#3be8e8] text-xl">✉️</span>
                <a href="mailto:ssasmuutto@gmail.com" className="text-white hover:text-[#3be8e8] transition">ssasmuutto@gmail.com</a>
              </div>
            </div>

            {/* Aukioloajat */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span>🕒</span> Aukioloajat
              </h4>
              <div className="space-y-2">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.day}</span>
                    <span className={item.special ? "text-red-400" : "text-white"}>{item.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#3be8e8] mt-4 uppercase tracking-widest font-bold">
                Myös sopimuksen mukaan
              </p>
            </div>
          </div>

          {/* OIKEA PUOLI: Lomake */}
          <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Nimi *</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3be8e8] outline-none transition"
                  placeholder="Matti Meikäläinen"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Sähköpostiosoite *</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3be8e8] outline-none transition"
                  placeholder="esimerkki@mail.fi"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Viesti *</label>
                <textarea 
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3be8e8] outline-none transition"
                  placeholder="Kerro muutostasi..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="news" className="accent-[#3be8e8] w-4 h-4" />
                <label htmlFor="news" className="text-xs text-gray-400 cursor-pointer">
                  Kyllä, haluan saada uutisia kampanjoista.
                </label>
              </div>

              <button type="submit" className="w-full bg-[#3be8e8] hover:bg-[#2dbdbd] text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(59,232,232,0.3)]">
                LÄHETÄ VIESTI
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}