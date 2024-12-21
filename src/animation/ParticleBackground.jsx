import React from 'react';
import Particles from 'react-particles-js';

const ParticleBackground = () => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 100, // Zarralar soni
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: '#ffffff' // Zarralar rangi
                        },
                        shape: {
                            type: 'circle', // Zarralar shakli
                            stroke: {
                                width: 0,
                                color: '#000000'
                            }
                        },
                        opacity: {
                            value: 0.5, // Zarralar shaffofligi
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 3, // Zarralar o'lchami
                            random: true,
                            anim: {
                                enable: true,
                                speed: 4,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true, // Chiziqlarni ulash
                            distance: 150,
                            color: '#ffffff', // Chiziqlar rangi
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true, // Zarralar harakatlanishi
                            speed: 6,
                            direction: 'none',
                            random: true,
                            straight: false,
                            out_mode: 'out',
                            bounce: false
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse' // Hoverda zarralar tarqaladi
                            },
                            onclick: {
                                enable: true,
                                mode: 'push' // Klikda yangi zarralar qo'shiladi
                            }
                        }
                    },
                    retina_detect: true // Retina displeylari uchun
                }}
            />
        </div>
    );
}

export default ParticleBackground;
