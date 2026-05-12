'use client'; // Обязательно для работы Spline
import Spline from '@splinetool/react-spline';
import Image from 'next/image';

import CyberCard from './CyberCard';
import Infographic from './Infographic';
import Akkreditointi from './Akkreditointi';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Map from './Map';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden font-sans">
      
      {/* --- СЛОЙ 1: 3D АНИМАЦИЯ SPLINE (ФОН) --- */}
      {/* Мы фиксируем этот слой, чтобы город не двигался при скролле */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <Spline 
          scene="https://prod.spline.design/TRGETJGCZvx-IpMj/scene.splinecode" 
        />
        {/* Добавляем легкое затемнение, чтобы текст читался лучше */}
        <div className="absolute inset-0 bg-black/10 z-[1]" />
      </div>

      {/* --- СЛОЙ 2: КОНТЕНТ САЙТА (ПОВЕРХ АНИМАЦИИ) --- */}
      <div className="relative z-10">
        
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
            <a href="#" className="bg-gray-700/50 px-4 py-1.5 rounded-md hover:bg-gray-700 transition">Koti</a>
            <a href="#" className="hover:text-white transition">Yritys</a>
            
            {/* Меню с выпадающим списком */}
            <div className="relative group flex items-center gap-1.5 cursor-pointer">
              <span>Kodinkoneet</span>
              <span className="text-xs group-hover:rotate-180 transition-transform">▼</span>
            </div>

            <a href="#" className="hover:text-white transition">Kodinkoneet Savonlinna</a>
            <a href="#" className="hover:text-white transition">Huonekalut</a>
            
            <div className="relative group flex items-center gap-1.5 cursor-pointer">
              <span>Lisää</span>
              <span className="text-xs group-hover:rotate-180 transition-transform">▼</span>
            </div>
          </nav>
        </header>

        {/* ГЛАВНАЯ СЕКЦИЯ (Hero) */}
        <section className="h-[calc(100vh-150px)] flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-5xl">
            {/* Главный заголовок */}
            <h1 className="text-6xl md:text-6xl font-extrabold mb-6 leading-[1.05] tracking-tight drop-shadow-lg">
              Ainutlaatuisia ratkaisuja <br /> 
              <span className="text-[#3be8e8]">menestykseesi.</span>
            </h1>
            
            {/* Описание */}
            <p className="text-xl md:text-1.5xl text-gray-300 mb-8 max-w-3xl leading-relaxed drop-shadow-md">
              Tarjoamme nopeaa ja luotettavaa muuttopalvelua kaikkiin tarpeisiin. Ota yhteyttä, niin hoidan muuttonne vaivattomasti ja ammattitaitoisesti. Yritys on perustettu 2021.
            </p>

            {/* Кнопка действия */}
            <button className="group flex items-center gap-4 border-2 border-white/10 bg-black/50 px-10 py-5 rounded-full hover:border-[#3be8e8]/50 hover:bg-[#3be8e8]/10 transition-all duration-300 shadow-xl">
              <span className="text-lg font-semibold text-white group-hover:text-[#3be8e8]">Ota minuun yhteyttä</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform text-[#3be8e8]">→</span>
            </button>
          </div>
        </section>

        <section className="relative z-10 py-24 bg-[#0a0a0c]/50 backdrop-blur-md border-t border-white/5">
          <div className="container mx-auto px-6 md:px-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
              Miksi työskennellä kanssani <br></br> <span className="text-[#3be8e8]">SSAS OY:n muuttopalvelu - luotettava valinta</span>
            </h2>

            {/* Сетка карточек: 1 колонка на мобилках, 3 на десктопе */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center">
              <CyberCard 
                title="Hoidamme muuttopalvelu turvallisesti ja tehokkaasti. Pitkä kokemus alalla ja ammattitaitoiset muuttomiehemme ovat takuu onnistuneelle lopputulokselle." 
                subtitle="Kokemukseni" 
                highlight="alalta" 
              />
              <CyberCard 
                title="Minulle on tärkeää, että asiakkaat ovat tyytyväisiä palveluihini. Pyrin aina ylittämään odotukset ja huolehtimaan asiakkaiden tarpeista parhaalla mahdollisella tavalla." 
                subtitle="Asiakaslähtöinen" 
                highlight="palveluasenne" 
              />
              <CyberCard 
                title="Tarjoan korkealaatuista muuttopalvelua kilpailukykyiseen hintaan. Haluan varmistaa, että palveluni ovat saatavilla laadukkaasti ja edullisesti kaikille asiakkaille." 
                subtitle="Kilpailukykyinen" 
                highlight="hinnoittelu" 
              />
            </div>
          </div>
        </section>
        <Infographic />
        <Akkreditointi />
        <Testimonials />
        <Contact />
        <Map />
      </div>
    </main>
  );
}