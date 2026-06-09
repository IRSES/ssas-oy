'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Выносим форму в отдельный компонент для работы с поисковыми параметрами Next.js
function ContactForm() {
    const searchParams = useSearchParams();

    // Стейты для всех полей формы
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');

    // Слушаем URL-параметры при загрузке страницы
    useEffect(() => {
        const queryName = searchParams.get('name');
        const queryEmail = searchParams.get('email');
        const queryMessage = searchParams.get('message');

        if (queryName) setName(queryName);
        if (queryEmail) setEmail(queryEmail);
        if (queryMessage) setMessage(queryMessage);
    }, [searchParams]);

    // Обработчик финальной отправки на почту
    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    city,
                    message
                }),
            });

            const result = await response.json();

            // Проверяем и статус ответа, и поле success из твоего API-роута
            if (response.ok && result.success) {
                alert("Kiitos! Viesti on lähetetty onnistuneesti.");

                // Очищаем форму после успешной отправки
                setName('');
                setEmail('');
                setPhone('');
                setAddress('');
                setCity('');
                setMessage('');
            } else {
                // Если возникла ошибка, выводим её текст. 
                // Если текста нет, пишем понятную заглушку вместо "undefined"
                const errorMessage = result.error || "Tuntematon virhe tapahtui.";
                alert(`Virhe: ${errorMessage}`);
            }
        } catch (error) {
            console.error("Lähetysvirhe:", error);
            alert("Yhteysvirhe. Tarkista nettiyhteys.");
        }
    };

    return (
        <form onSubmit={handleFinalSubmit} className="relative bg-[#0d0d0f]/80 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-3xl space-y-6">
            <div className="mb-8 text-center lg:text-left">
                <h2 className="text-4xl font-black uppercase tracking-tighter">Ota <span className="text-[#3be8e8]">yhteyttä</span></h2>
                <p className="text-gray-400 text-sm mt-2">Täytä lomake ja vastaamme sinulle mahdollisimman pian.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Etu- ja sukunimi *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:border-[#3be8e8] outline-none transition-all placeholder:text-gray-600 text-white"
                    required
                />
                <input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:border-[#3be8e8] outline-none transition-all placeholder:text-gray-600 text-white"
                    required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="tel"
                    placeholder="Puhelinnumero *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:border-[#3be8e8] outline-none transition-all placeholder:text-gray-600 text-white"
                    required
                />
                <input
                    type="text"
                    placeholder="Osoite *"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:border-[#3be8e8] outline-none transition-all placeholder:text-gray-600 text-white"
                    required
                />
            </div>

            <input
                type="text"
                placeholder="Kaupunki *"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:border-[#3be8e8] outline-none transition-all placeholder:text-gray-600 text-white"
                required
            />

            <textarea
                placeholder="Viesti *"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:border-[#3be8e8] outline-none transition-all placeholder:text-gray-600 resize-none text-white"
                required
            ></textarea>

            <div className="flex items-center gap-3 py-2">
                <input type="checkbox" id="news" className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#3be8e8] focus:ring-[#3be8e8] transition" />
                <label htmlFor="news" className="text-sm text-gray-400 cursor-pointer select-none">Yes, I want to receive news about promotions.</label>
            </div>

            {/* CAPTCHA BOX */}
            <div className="bg-black/60 border border-white/5 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-6 h-6 border-2 border-[#3be8e8] rounded flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-[#3be8e8] rounded-sm"></div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300">I am human</span>
                </div>
                <div className="text-[10px] text-gray-700 font-black uppercase text-right leading-none">
                    Friendly<br />Captcha
                </div>
            </div>

            <button type="submit" className="w-full bg-[#3be8e8] text-black font-black py-5 rounded-xl uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(59,232,232,0.2)] hover:shadow-[#3be8e8]/40">
                Lähetä viesti
            </button>
        </form>
    );
}

export default function Yhteystiedot() {
    return (
        <main className="relative min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden font-sans">

            {/* --- ЕДИНСТВЕННЫЙ РОБОТ/ГОРОД НА ЗАДНЕМ ФОНЕ --- */}
            <div className="fixed inset-0 z-0">
                <Spline scene="https://prod.spline.design/0tYCUPl0xm6yi-zs/scene.splinecode" />
                <div className="absolute inset-0 bg-black/40 z-[1]" />
            </div>

            <div className="relative z-10">
                {/* ХЕДЕР */}
                <header className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-white/5 bg-black/20 backdrop-blur-md">
                    <div className="flex items-center">
                        <Image
                            src="/logo_main.png"
                            alt="Ssas oy Logo"
                            width={180}
                            height={60}
                            priority
                            className="object-contain"
                        />
                    </div>
                    <nav className="flex items-center gap-2 md:gap-6 text-sm font-medium text-gray-200">
                        <Link href="/" className="hover:text-[#3be8e8] transition px-2 py-1">Koti</Link>
                        <Link href="/yritys" className="hover:text-[#3be8e8] transition px-2 py-1">Yritys</Link>
                        <Link href="/kodinkoneet-vaajakoski" className="hover:text-[#3be8e8] transition px-2 py-1">Kodinkoneet Vaajakoski</Link>
                        <Link href="/kodinkoneet" className="hover:text-[#3be8e8] transition px-2 py-1">Kodinkoneet Savonlinna</Link>
                        <Link href="/huonekalut" className="hover:text-[#3be8e8] transition px-2 py-1">Huonekalut</Link>
                        <Link href="/muuttopalvelu" className="hover:text-[#3be8e8] transition px-2 py-1">Muuttopalvelu</Link>
                        <Link href="/projektit" className="hover:text-[#3be8e8] transition px-2 py-1">Projektit</Link>
                        <Link href="/yhteystiedot" className="text-[#3be8e8] border-b-2 border-[#3be8e8] px-2 py-1">Yhteystiedot</Link>
                    </nav>
                </header>

                {/* КОНТЕНТ */}
                <section className="container mx-auto px-6 py-12 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* ИНФОРМАЦИЯ (ЛЕВО) */}
                        <div className="space-y-12 bg-black/30 p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
                            <div>
                                <h2 className="text-[#3be8e8] text-sm uppercase tracking-[4px] mb-8 font-bold">Aukioloajat</h2>
                                <div className="space-y-3 text-gray-300">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Maanantai</span><span>10.00 - 17.00</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Tiistai</span><span>10.00 - 17.00</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Keskiviikko</span><span>10.00 - 17.00</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Torstai</span><span>10.00 - 17.00</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Perjantai</span><span>10.00 - 17.00</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Lauantai</span><span>11.00 - 14.00</span></div>
                                    <div className="flex justify-between text-[#3be8e8] font-black italic"><span>Sunnuntai</span><span>Suljettu</span></div>
                                </div>
                                <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-500">Myös sopimuksen mukaan</p>
                            </div>

                            <div>
                                <h2 className="text-[#3be8e8] text-sm uppercase tracking-[4px] mb-4 font-bold">Osoite</h2>
                                <address className="not-italic text-2xl font-light tracking-tight text-white/90">
                                    Vaajakoskentie 123<br />
                                    40800 Vaajakoski<br />
                                    Finland
                                </address>
                            </div>
                        </div>

                        {/* ФОРМА (ПРАВО) */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#3be8e8]/20 to-[#1a73e8]/20 rounded-3xl blur-xl opacity-50"></div>

                            {/* Обертываем форму в Suspense, так как используются поисковые URL-параметры */}
                            <Suspense fallback={<div className="text-white text-center p-12 bg-[#0d0d0f]/80 border border-white/10 rounded-3xl backdrop-blur-3xl">Ladataan lomaketta...</div>}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}