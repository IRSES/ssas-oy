'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Категории для Вааякоски (включая кофеварки/чайники и мебель из твоего списка)
const CATEGORIES = [
    "Kaikki",
    "Pyykinpesukoneet",
    "Kuivausrummut",
    "Astianpesukoneet",
    "Sähköhellat",
    "Jääkaapit",
    "Pakastimet",
    "Mikroaaltouunit",
    "Keittimet", // Kahvi- ja vedenkeittimet
    "Huonekalut"
];

/* СПИСОК ТОВАРОВ ДЛЯ РУЧНОГО РЕДАКТИРОВАНИЯ ВААЯКОСКИ
   Картинки просто закидывай в папку public/images/vaajakoski/
*/
const APPLIANCES_DATA = [
    {
        id: 1,
        title: "Moccamaster Kahvinkeitin",
        category: "Keittimet",
        price: "45 €",
        description: "Hyväkuntoinen ja kalkista puhdistettu klassikkokeitin. Testattu, toimii täydellisesti.",
        imageUrl: "/images/vaajakoski/kahvinkeitin.jpg", // Путь к картинке
        toriUrl: "https://www.tori.fi/"
    },
    {
        id: 2,
        title: "Rosenlew Jääkaappipakastin",
        category: "Jääkaapit",
        price: "220 €",
        description: "Siisti ja hajuton jääkaappipakastin. Mitat: 175cm. Tarkastettu ja puhdistettu, 2 kk takuu.",
        imageUrl: "/images/vaajakoski/jaakaappi.jpg",
        toriUrl: "https://www.tori.fi/"
    }
];

export default function KodinkoneetVaajakoski() {
    const [selectedCategory, setSelectedCategory] = useState("Kaikki");

    const filteredAppliances = selectedCategory === "Kaikki"
        ? APPLIANCES_DATA
        : APPLIANCES_DATA.filter(item => item.category === selectedCategory);

    return (
        <main className="relative min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden font-sans flex flex-col">
            {/* Декоративное свечение */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#3be8e8]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col flex-1">
                {/* ХЕДЕР */}
                <header className="flex-none flex justify-between items-center px-6 md:px-16 py-4 border-b border-white/5 bg-black/20 backdrop-blur-md">
                    <div className="flex items-center">
                        <Image src="/logo_main.png" alt="Ssas oy Logo" width={150} height={50} priority className="object-contain" />
                    </div>
                    <nav className="flex items-center gap-2 md:gap-6 text-sm font-medium text-gray-200">
                        <Link href="/" className="hover:text-[#3be8e8] transition px-2 py-1">Koti</Link>
                        <Link href="/yritys" className="hover:text-[#3be8e8] transition px-2 py-1">Yritys</Link>
                        <Link href="/kodinkoneet-vaajakoski" className="text-[#3be8e8] border-b-2 border-[#3be8e8] px-2 py-1">Kodinkoneet Vaajakoski</Link>
                        <Link href="/kodinkoneet" className="hover:text-[#3be8e8] transition px-2 py-1">Kodinkoneet Savonlinna</Link>
                        <Link href="/huonekalut" className="hover:text-[#3be8e8] transition px-2 py-1">Huonekalut</Link>
                        <Link href="/muuttopalvelu" className="hover:text-[#3be8e8] transition px-2 py-1">Muuttopalvelu</Link>
                        <Link href="/projektit" className="hover:text-[#3be8e8] transition px-2 py-1">Projektit</Link>
                        <Link href="/yhteystiedot" className="hover:text-[#3be8e8] transition px-2 py-1">Yhteystiedot</Link>
                    </nav>
                </header>

                {/* ИНФОРМАЦИОННЫЙ БЛОК VAAJAKOSKI */}
                <section className="container mx-auto px-6 pt-10 pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* Главное описание локации и складов */}
                        <div className="lg:col-span-2 bg-gradient-to-r from-black/40 to-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col justify-center">
                            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4">
                                Myyntitilat & <span className="text-[#3be8e8]">Kodinkoneet</span> <span className="text-gray-500 text-lg block md:inline md:ml-2">Vaajakoski</span>
                            </h1>
                            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
                                Myymälämme sijaitsee <span className="text-white font-semibold">Vaajakoskentie 123</span> toimitiloissa, josta meiltä löytyy laaja valikoima erilaisia käytettyjä kodinkoneita ja huonekaluja.
                            </p>
                            <p className="text-gray-400 text-xs leading-relaxed border-l-2 border-[#3be8e8]/40 pl-3 italic">
                                Myytävistä kodinkoneista vain osa sijaitsee varsinaisissa myyntitiloissa, mutta käytössämme on myös kattavat varastotilat vieressä, josta tuotteita löytyy lisää.
                            </p>
                        </div>

                        {/* Гарантия и стандарты качества */}
                        <div className="bg-[#0d0d0f] border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#3be8e8] mb-2">Laatutakuu</h3>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    Kaikki käytetyt kodinkoneet on tarkastettu ja puhdistettu huolellisesti ennen myyntiä.
                                </p>
                            </div>

                            <div className="border-t border-white/5 pt-3 space-y-2 text-xs">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">Takuu laitteille:</span>
                                    <span className="font-bold text-white bg-[#3be8e8]/10 text-[#3be8e8] px-2 py-0.5 rounded border border-[#3be8e8]/20">1 - 3 Kuukautta</span>
                                </div>
                                <div className="flex justify-between"><span className="text-gray-500">Sijainti:</span><span className="font-bold text-white">Vaajakoskentie 123</span></div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ФИЛЬТРЫ КАТЕГОРИЙ */}
                <section className="container mx-auto px-6 py-4">
                    <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start overflow-x-auto pb-2 scrollbar-none max-w-6xl mx-auto">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${selectedCategory === category
                                        ? 'bg-[#3be8e8] text-black border-[#3be8e8] shadow-[0_0_15px_rgba(59,232,232,0.2)]'
                                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* СЕТКА ТОВАРОВ */}
                <section className="container mx-auto px-6 py-6 flex-1 max-w-6xl">
                    {filteredAppliances.length === 0 ? (
                        <div className="text-center py-20 bg-black/20 rounded-2xl border border-white/5">
                            <p className="text-gray-500 text-xs uppercase tracking-widest">Ei tuotteita tässä kategoriassa</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredAppliances.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-[#0d0d0f]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-3xl flex flex-col transition-all hover:border-[#3be8e8]/30 duration-300"
                                >
                                    {/* Фото товара */}
                                    <div className="relative aspect-[4/3] w-full bg-white/5 border-b border-white/5 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

                                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-md text-[10px] font-black text-[#3be8e8] z-20">
                                            {item.price}
                                        </div>

                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Информация */}
                                    <div className="p-4 flex flex-col flex-1 space-y-2">
                                        <div className="text-[8px] uppercase tracking-widest text-[#3be8e8] font-bold">
                                            {item.category}
                                        </div>
                                        <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-[#3be8e8] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] text-gray-400 line-clamp-3 leading-normal flex-1 whitespace-pre-wrap">
                                            {item.description}
                                        </p>

                                        <a
                                            href={item.toriUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full mt-2 bg-white/5 hover:bg-[#3be8e8] hover:text-black border border-white/10 hover:border-[#3be8e8] text-center text-[10px] font-black uppercase tracking-widest py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5"
                                        >
                                            Katso Torista
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}