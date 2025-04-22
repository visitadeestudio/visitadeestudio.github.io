'use client'

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function PostesCanvas() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Detectar si el sistema está en modo oscuro
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        // Escuchar cambios en el modo oscuro
        const handleChange = (event) => {
            setIsDarkMode(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const sketch = () => {
        let poste;

        class Poste {
            constructor(x, y, diametro) {
                this.x = x;
                this.y = y;
                this.diametro = diametro;
                this.shadowX = x;
                this.shadowY = y;
            }

            actualizar(mouseX, mouseY) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const angle = Math.atan2(dy, dx);
                const distance = Math.hypot(dx, dy);
                const shadowLength = Math.min(Math.pow(distance, 2), window.innerWidth);
                const targetX = this.x - shadowLength * Math.cos(angle);
                const targetY = this.y - shadowLength * Math.sin(angle);
                this.shadowX = lerp(this.shadowX, targetX, 0.1);
                this.shadowY = lerp(this.shadowY, targetY, 0.1);
            }

            dibujar(p) {
                // Usar color de sombra basado en el modo oscuro o claro
                const shadowColor = isDarkMode ? 255 : 0;  // Blanco si es dark mode, negro si es light mode

                p.stroke(shadowColor);
                p.strokeWeight(this.diametro);
                p.line(this.x, this.y, this.shadowX, this.shadowY);
                p.fill(shadowColor);
                p.noStroke();
                p.ellipse(this.x, this.y, this.diametro);
            }
        }

        function lerp(a, b, t) {
            return a + (b - a) * t;
        }

        const sketchInstance = (p) => {
            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
              
                // Crear un solo poste en el centro de la ventana
                poste = new Poste(p.windowWidth / 2, p.windowHeight / 2, 0.5);

                p.mouseX = p.windowWidth / 2;
                p.mouseY = p.windowHeight / 2;
            };

            p.draw = () => {
                p.clear();
                poste.actualizar(p.mouseX, p.mouseY);
                poste.dibujar(p);
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
                // Actualizar la posición del poste cuando cambia el tamaño de la ventana
                poste.x = p.windowWidth / 2;
                poste.y = p.windowHeight / 2;
            };
        };

        // Espera a que p5 esté disponible globalmente
        if (window.p5) {
            new window.p5(sketchInstance);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && window.p5) {
            sketch();
        } else {
            // Espera a que cargue el script
            const interval = setInterval(() => {
                if (window.p5) {
                    clearInterval(interval);
                    sketch();
                }
            }, 100);
        }
    }, [isDarkMode]); // Vuelve a cargar el sketch cuando el modo oscuro cambia

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.min.js"
                strategy="beforeInteractive"
            />
        </>
    );
}