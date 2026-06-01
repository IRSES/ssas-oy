'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projektit() {
    const projects = [
        {
            tag: "Toimistomuutto",
            title: "Uusi toimistosi vaatii huolellisen muuton",
            challenge: "Suuri määrä arvokkaita toimistokalusteita, jotka vaativat erityistä huomiota.",
            solution: "Tarkka suunnittelu, kalusteiden purkaminen ja pakkaaminen erityismateriaaleihin.",
            result: "Onnistunut siirto ilman vaurioita tai viivästyksiä.",
            icon: "🏢"
        },
        {
            tag: "Pikamuutto",
            title: "Yllättävä muutto kiireellä hoidettuna",
            challenge: "Asiakkaan äkillinen ja kiireellinen tarve muuttopalvelulle.",
            solution: "Innovatiivinen aikataulutus ja resurssien priorisointi nopeuden varmistamiseksi.",
            result: "Ripeä toiminta ja siirto ilman komplikaatioita – asiakkaan kiitokset.",
            icon: "⚡"
        },
        {
            tag: "Kotimuutto",
            title: "Kodin muutto monimutkaisista tiloista",
            challenge: "Kapeat portaikot ja hankalat kulmat, jotka vaikeuttavat kantoa.",
            solution: "Innovatiiviset nostovälineet ja tehokas tiimityöskentely.",
            result: "Turvallinen ja sujuva siirto sekä positiivinen palaute asiakkaalta.",
            icon: "🏠"
        },
        {
            tag: "Erikoiskuljetus",
            title: "Arvokkaan taideteoksen turvallinen siirto",
            challenge: "Herkän ja arvokkaan taideteoksen muutto ilman riskejä.",
            solution: "Erityiset suojausmenetelmät ja räätälöidyt kuljetusratkaisut.",
            result: "Teos perillä virheettömässä kunnossa ilman vahinkoja.",
            icon: "🖼️"
        }
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0c] text-white font-sans">
            {/* ХЕДЕР (Навигация) */}
            <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-white/5 bg-black/10 backdrop-blur-sm">
                {/* Левая часть: Только Логотип */}
                <div className="flex items-center">
                    <Image
                        src="/logo_main.png"       // Путь к файлу в папке public
                        alt="Ssas oy Logo"   // Описание для SEO
                        width={240}          // Укажи нужную ширину в пикселях
                        height={240}          // Укажи нужную высоту в пикселях
                        priority             // Добавь это, чтобы логотип загружался мгновенно
                        className="object-contain" // Сохранит пропорции картинки
                    />
                </div>

                {/* Правая часть: Меню */}
                <nav className="flex items-center gap-2 md:gap-6 text-sm font-medium text-gray-200">
                    <Link href="/" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Koti</Link>
                    <Link href="/yritys" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Yritys</Link>
                    <a href="#" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Kodinkoneet Vaajakoski</a>
                    <a href="#" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Kodinkoneet Savonlinna</a>
                    <a href="#" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Huonekalut</a>
                    <Link href="/muuttopalvelu" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Muuttopalvelu</Link>
                    <Link href="/projektit" className="text-[#3be8e8]">Projektit</Link>
                    <Link href="/yhteystiedot" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Yhteystiedot</Link>
                </nav>
            </header>

            {/* Projektilistaus */}
            <section className="py-16 px-6 md:px-14 text-center relative overflow-hidden">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    Luotettava muuttopalvelu <span className="text-[#3be8e8]">SSAS OY:lta</span>
                </h1>
            </section>

            <section className="py-12 px-6 md:px-16 container mx-auto max-w-6xl">
                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#3be8e8]/30 transition-all duration-500"
                        >
                            <div className="flex-shrink-0 w-20 h-20 bg-[#3be8e8]/10 rounded-2xl flex items-center justify-center text-4xl border border-[#3be8e8]/20">
                                {project.icon}
                            </div>

                            <div className="flex-grow">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#3be8e8]/10 text-[#3be8e8] text-[10px] font-bold uppercase tracking-widest mb-4">
                                    {project.tag}
                                </span>
                                <h3 className="text-2xl font-bold mb-6 group-hover:text-[#3be8e8] transition-colors">
                                    {project.title}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Haaste</h4>
                                        <p className="text-sm text-gray-300">{project.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] text-[#3be8e8] uppercase tracking-widest font-bold mb-2">Ratkaisu</h4>
                                        <p className="text-sm text-gray-300">{project.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] text-green-400 uppercase tracking-widest font-bold mb-2">Lopputulos</h4>
                                        <p className="text-sm text-gray-300">{project.result}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Alaosio */}
                <div className="mt-24 text-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                    <h2 className="text-3xl font-bold mb-4">Onko sinulla haastava muutto edessä?</h2>
                    <p className="text-gray-400 mb-8">Me ratkaisemme vaikeimmatkin logistiset pähkinät ammattitaidolla.</p>
                    <Link
                        href="/#contact"
                        className="inline-block px-10 py-4 bg-[#3be8e8] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(59,232,232,0.5)] transition-all"
                    >
                        OTA YHTEYTTÄ
                    </Link>
                </div>
            </section>
        </main>
    );
}