'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Точные категории из технического задания
const CATEGORIES = [
    "Kaikki", "Pöydät", "Sohvat", "Puutarhatuolit", "Parveketuolit", 
    "Jakkarat", "Lipastot", "Nojatuolit", "Työpöydät", "Hyllyköt", "Laatikostot"
];

/* СПИСОК ТОВАРОВ ДЛЯ РУЧНОГО РЕДАКТИРОВАНИЯ
  Просто копируй блок {...} внутри массива, чтобы добавить новый товар.
  Картинки закидывай в папку: public/images/
*/
const PRODUCTS_DATA = [
    {
        id: 1,
        title: "Antiikki yöpöytä",
        category: "Lipastot",
        price: "100 €",
        description: "Mitat: Korkeus 61cm, Leveys: 47.5cm, syvyys 38.7cm. Kunto: Hyvä.",
        imageUrl: "/images/placeholder-table1.jpg", // Путь к картинке в папке public/images/
        toriUrl: "https://www.tori.fi/recommerce/forsale/item/28645604" // Ссылка на объявление в Tori
    },
    // Сюда можно добавлять новые товары по аналогии...
];

export default function Huonekalut() {
    const [selectedCategory, setSelectedCategory] = useState("Kaikki");

    // Фильтрация локального массива товаров
    const filteredProducts = selectedCategory === "Kaikki"
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

    return (
        <main className="relative min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden font-sans flex flex-col">
            {/* Фоновые декоративные свечения */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3be8e8]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#1a73e8]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col flex-1">
                {/* ХЕДЕР */}
                <header className="flex-none flex justify-between items-center px-6 md:px-16 py-4 border-b border-white/5 bg-black/20 backdrop-blur-md">
                    <div className="flex items-center">
                        <Image src="/logo_main.png" alt="Ssas oy Logo" width={150} height={50} priority className="object-contain" />
                    </div>
                    <nav className="hidden lg:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                        <Link href="/" className="hover:text-[#3be8e8] transition px-2 py-1">Koti</Link>
                        <Link href="/yritys" className="hover:text-[#3be8e8] transition px-2 py-1">Yritys</Link>
                        <Link href="/muuttopalvelu" className="hover:text-[#3be8e8] transition px-2 py-1">Muuttopalvelu</Link>
                        <Link href="/projektit" className="hover:text-[#3be8e8] transition px-2 py-1">Projektit</Link>
                        <Link href="/huonekalut" className="text-[#3be8e8] border-b-2 border-[#3be8e8] px-2 py-1">Huonekalut</Link>
                        <Link href="/yhteystiedot" className="hover:text-[#3be8e8] transition px-2 py-1">Yhteystiedot</Link>
                    </nav>
                </header>

                {/* ИНФОРМАЦИОННЫЙ БАННЕР */}
                <section className="container mx-auto px-6 pt-10 pb-6 text-center lg:text-left">
                    <div className="bg-gradient-to-r from-black/40 to-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-xl shadow-2xl max-w-4xl mx-auto lg:mx-0">
                        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4">
                            Myyntitilat & <span className="text-[#3be8e8]">Huonekalut</span>
                        </h1>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-2xl">
                            Myymälämme sijaitsee <span className="text-white font-semibold">Vaajakoskentie 123</span> toimitiloissa, 
                            josta meiltä löytyy eri valikoima erilaisia käytettyjä huonekaluja. Kaikki myytävät tuotteet ovat nähtävillä myyntitiloissamme.
                        </p>
                    </div>
                </section>

                {/* ФИЛЬТРЫ КАТЕГОРИЙ */}
                <section className="container mx-auto px-6 py-4">
                    <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start overflow-x-auto pb-2 scrollbar-none">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${
                                    selectedCategory === category
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
                <section className="container mx-auto px-6 py-6 flex-1">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20 bg-black/20 rounded-2xl border border-white/5">
                            <p className="text-gray-500 text-xs uppercase tracking-widest">Ei tuotteita tässä kategoriassa</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <div 
                                    key={product.id}
                                    className="group bg-[#0d0d0f]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-3xl flex flex-col transition-all hover:border-[#3be8e8]/30 duration-300"
                                >
                                    {/* Изображение товара */}
                                    <div className="relative aspect-[4/3] w-full bg-white/5 border-b border-white/5 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                        
                                        {/* Ценник */}
                                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-md text-[10px] font-black text-[#3be8e8] z-20">
                                            {product.price}
                                        </div>

                                        {/* Локальная картинка из папки public */}
                                        <img 
                                            src={product.imageUrl} 
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Информация о товаре */}
                                    <div className="p-4 flex flex-col flex-1 space-y-2">
                                        <div className="text-[8px] uppercase tracking-widest text-[#3be8e8] font-bold">
                                            {product.category}
                                        </div>
                                        <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-[#3be8e8] transition-colors duration-300">
                                            {product.title}
                                        </h3>
                                        <p className="text-[11px] text-gray-400 line-clamp-3 leading-normal flex-1 whitespace-pre-wrap">
                                            {product.description}
                                        </p>
                                        
                                        {/* Кнопка перехода на Tori */}
                                        <a 
                                            href={product.toriUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full mt-2 bg-white/5 hover:bg-[#3be8e8] hover:text-black border border-white/10 hover:border-[#3be8e8] text-center text-[10px] font-black uppercase tracking-widest py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5"
                                        >
                                            Osta Torista
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