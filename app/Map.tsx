'use client';
import React from 'react';

export default function Map() {
  // Ссылка на Vaajakoskentie 123
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.8943710777587!2d25.86591067744319!3d62.2474499751421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4685ce9442f1e583%3A0x17ad1519eb42a4dc!2sVaajakoskentie%20123%2C%2040800%20Jyv%C3%A4skyl%C3%A4!5e0!3m2!1sfi!2sfi!4v1711111111111!5m2!1sfi!2sfi";

  return (
    <section className="w-full h-[500px] border-t border-white/5 bg-[#0a0a0c] overflow-hidden">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ 
          border: 0, 
          // grayscale(1) делает карту черно-белой
          // brightness(0.6) делает ее темной
          filter: 'brightness(0.5)' 
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Toimiston sijainti"
        className="hover:filter-none transition-all duration-1000 ease-in-out"
      ></iframe>
    </section>
  );
}