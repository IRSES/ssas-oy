'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function YritysPage() {
    return (
        <main className="relative min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden font-sans">
            <div className="relative z-10">
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
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link href="/" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Koti</Link>
                        <Link href="/yritys" className="text-[#3be8e8]">Yritys</Link>
                        <a href="#" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Kodinkoneet Vaajakoski</a>
                        <a href="#" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Kodinkoneet Savonlinna</a>
                        <a href="#" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Huonekalut</a>
                        <Link href="/muuttopalvelu" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Muuttopalvelu</Link>
                        <Link href="/projektit" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Projektit</Link>
                        <a href="#" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Yhteystiedot</a>
                    </nav>
                </header>

                {/* HERO СЕКЦИЯ - О НАС */}
                <section className="py-24 px-6 md:px-16 container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm uppercase tracking-[4px] text-[#3be8e8] mb-4 font-bold">Tarina meistä</h2>
                            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
                                SSAS OY -<br />
                                <span className="text-[#3be8e8]">Luotettava muuttopalvelu</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Yritys on perustettu 2021. Minä muutan tavarat nopeasti ja luotettavasti. Käytössäni on koppa-auto takalaitanostimella 23m3. Tarvittaessa vuokraan muuttolaatikot, toimitan ne paikalle ja haen muuton jälkeen pois.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Me yrityksenä haluamme tyydyttää kaikkien tarpeet. Meillä on yli kahdeksan vuoden kokemus ja odotamme saavamme lisää kokemusta, jotta voimme tyydyttää asiakkaidemme vaatimukset. Tarjoamme asiakkaillemme seuraavat palvelut, muutto, muuttolaatikoiden vuokraus ,pakkaus-ja purkupalvelu, pianon kuljetus,muttosiivous ja tilanvuokraus sekä tarjoamme erikoispalveluita asiakkaillemme, jotka tarvitsisivat paikan tavaroilleen säilytykseen kunnes haluavat. Tervetullut yritykseemme ja palvelemme sinua mielellämme.
                            </p>
                        </div>

                        {/* Декоративный блок / Изображение главы компании */}
                        <div className="relative group">
                            {/* Эффект неонового свечения вокруг рамки */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#3be8e8] to-[#1a73e8] rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>

                            <div className="relative bg-[#0d0d0f] border border-white/10 rounded-2xl overflow-hidden aspect-square">
                                {/* Само изображение */}
                                <img
                                    src="/owner.png" // Укажи здесь путь к фото (например, положить в папку public)
                                    alt="Yrityksen johtaja"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />

                                {/* Градиентный слой поверх фото для читаемости текста */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>

                                {/* Текст поверх изображения */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-[4px] drop-shadow-lg">
                                        Ammattimuutot
                                    </h3>
                                    <div className="w-12 h-1 bg-[#3be8e8] mx-auto mt-2 rounded-full shadow-[0_0_10px_#3be8e8]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* СЕКЦИЯ: ARVOT (ЦЕННОСТИ) */}
                <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/5 px-6 md:px-16">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-center text-4xl font-bold mb-20 uppercase tracking-tighter">Meidän <span className="text-[#3be8e8]">arvomme</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Luottamus", text: "Pidämme kiinni lupauksistamme ja hoidamme omaisuutesi kuin se olisi omaamme.", icon: "💎" },
                                { title: "Tehokkuus", text: "Aika on rahaa. Työskentelemme nopeasti, mutta koskaan laadusta tinkimättä.", icon: "⚡" },
                                { title: "Yksilöllisyys", text: "Jokainen muutto on erilainen. Räätälöimme palvelun juuri sinun tarpeisiisi.", icon: "👤" }
                            ].map((val, i) => (
                                <div key={i} className="text-center p-8 border border-white/5 rounded-3xl bg-black/40 hover:border-[#3be8e8]/40 transition-all duration-500">
                                    <div className="text-5xl mb-6">{val.icon}</div>
                                    <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{val.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* СЕКЦИЯ: STATS (ЦИФРЫ) */}
                <section className="py-24 px-6 md:px-16 container mx-auto max-w-7xl text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-[#3be8e8] mb-2">2021</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">Perustamisvuosi</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-[#3be8e8] mb-2">800+</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">Onnistunutta muuttoa</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-[#3be8e8] mb-2">100%</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">Tyytyväisyystakuu</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-[#3be8e8] mb-2">24/7</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">Asiakastuki</div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}