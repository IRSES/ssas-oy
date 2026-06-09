'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Muuttopalvelu() {
    const services = [
        {
            title: "Kuljetuspalvelu",
            description: "Luotettava kuljetuskalusto takaa tavaroiden turvallisen ja nopean siirtymisen. Meillä on kattava tavarakuljetusvakuutus.",
            price: "Sisältyy palveluun",
            details: ["Auto 23m3", "Kuljettaja mukana", "Tavarakuljetusvakuutus"],
            icon: "🚛"
        },
        {
            title: "Pakkausmateriaalit",
            description: "Hanki laadukkaat ja kestävät materiaalit kauttani. Varmistan, että tavarasi pysyvät suojattuina koko matkan ajan.",
            price: "Kysy tarjous",
            details: ["Muuttolaatikot", "Toimitus & Nouto", "Pakkaustarvikkeet"],
            icon: "📦"
        },
        {
            title: "Kantoapu & Nostopalvelu",
            description: "Hoitelen raskaiden tavaroiden kantamisen ja nostamisen puolestasi. Varmistan turvallisen siirron paikasta toiseen.",
            price: "50 EUR / h",
            details: ["Raskaat nostot", "Pianon siirrot", "Ammattitaitoinen kantoapu"],
            icon: "💪"
        },
        {
            title: "Varastointipalvelu",
            description: "Tarjoan turvallista varastointia ylimääräisille tavaroillesi valvotussa tilassa, kunnes olet valmis noutamaan ne.",
            price: "8 EUR / m2",
            details: ["0,15 EUR / vrk laatikko", "Lämmin varasto", "24/7 valvonta"],
            icon: "🏢"
        }
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-[#3be8e8]/30">
            {/* ШАПКА (Такая же, как на главной) */}
            <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-white/5 bg-black/20 backdrop-blur-md">
                <div className="flex items-center">
                    <a href="/">
                        <Image
                            src="/logo_main.png"
                            alt="Ssas oy Logo"
                            width={240}
                            height={240}
                            className="object-contain cursor-pointer"
                        />
                    </a>
                </div>
                <nav className="flex items-center gap-2 md:gap-6 text-sm font-medium text-gray-200">
                    <Link href="/" className="hover:text-[#3be8e8] transition px-2 py-1">Koti</Link>
                    <Link href="/yritys" className="hover:text-[#3be8e8] transition px-2 py-1">Yritys</Link>
                    <Link href="/kodinkoneet-vaajakoski" className="hover:text-[#3be8e8] transition px-2 py-1">Kodinkoneet Vaajakoski</Link>
                    <Link href="/kodinkoneet" className="hover:text-[#3be8e8] transition px-2 py-1">Kodinkoneet Savonlinna</Link>
                    <Link href="/huonekalut" className="hover:text-[#3be8e8] transition px-2 py-1">Huonekalut</Link>
                    <Link href="/muuttopalvelu" className="text-[#3be8e8] border-b-2 border-[#3be8e8] px-2 py-1">Muuttopalvelu</Link>
                    <Link href="/projektit" className="hover:text-[#3be8e8] transition px-2 py-1">Projektit</Link>
                    <Link href="/yhteystiedot" className="hover:text-[#3be8e8] transition px-2 py-1">Yhteystiedot</Link>
                </nav>
            </header>

            {/* Hero-osio */}
            <section className="py-20 px-6 md:px-16 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[#3be8e8]/10 blur-[120px] rounded-full -z-10" />
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Muutto- ja <span className="text-[#3be8e8]">Kuljetuspalvelut</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Kaikki mitä tarvitset onnistuneeseen muuttoon – kalustosta kantoapuun ja varastointiin.
                </p>
            </section>

            {/* Palvelukortit */}
            <section className="py-20 px-6 md:px-16 container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-1 bg-white/5 rounded-3xl border border-white/10 hover:border-[#3be8e8]/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className="p-8 h-full bg-[#0d0d0f] rounded-[calc(1.5rem-1px)] flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-5xl">{service.icon}</span>
                                    <div className="text-right">
                                        <span className="text-[10px] uppercase tracking-[3px] text-gray-500 block mb-1">Hinta alkaen</span>
                                        <span className="text-[#3be8e8] font-bold text-xl">{service.price}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#3be8e8] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <ul className="grid grid-cols-1 gap-3">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-xs text-gray-300">
                                                <span className="w-1.5 h-1.5 bg-[#3be8e8] rounded-full" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info-alue hintoihin liittyen */}
                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#3be8e8]/10 to-transparent border border-[#3be8e8]/20 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-2">Tarvitsetko räätälöidyn ratkaisun?</h4>
                        <p className="text-gray-400 text-sm">Tarjoamme myös erikoispalveluita ja tilapäistä säilytystä sopimuksen mukaan.</p>
                    </div>
                    <Link
                        href="/yhteystiedot"
                        className="px-8 py-4 bg-[#3be8e8] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(59,232,232,0.4)] transition-all whitespace-nowrap"
                    >
                        PYYDÄ TARJOUS
                    </Link>
                </div>
            </section>
        </main>
    );
}