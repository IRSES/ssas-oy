'use client';
import React from 'react';

interface CyberCardProps {
    title: string;
    subtitle: string;
    highlight: string;
}

export default function CyberCard({ title, subtitle, highlight }: CyberCardProps) {
    return (
        <div className="cyber-card-wrapper noselect">
            <div className="canvas">
                {/* Создаем 25 зон для отслеживания мышки */}
                {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`tracker tr-${i + 1}`}></div>
                ))}

                <div id="card">
                    <div className="card-content">
                        <div className="card-glare"></div>
                        <div className="cyber-lines">
                            <span></span><span></span><span></span><span></span>
                        </div>

                        <p id="prompt">SSAS OY</p>

                        <div className="title">
                            {title}
                        </div>

                        <div className="glowing-elements">
                            <div className="glow-1"></div>
                            <div className="glow-2"></div>
                            <div className="glow-3"></div>
                        </div>

                        <div className="subtitle">
                            <span>{subtitle}</span>
                            <span className="highlight">{highlight}</span>
                        </div>

                        <div className="card-particles">
                            {[...Array(6)].map((_, i) => <span key={i}></span>)}
                        </div>

                        <div className="corner-elements">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div className="scan-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}