import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import Home from './pages/Home';
import DetailedProject from './sections/DetailedProject';
import { useEffect } from 'react';
import ContactButton from './Components/ContactButton';

function App() {
  useEffect(() => {
    // Particles.js-ni faollashtirish
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 40,
            size_min: 0.1
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        // Interactivity-ni o'chirish
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,  // Hoverda animatsiya ishlamasligi uchun
            mode: "repulse"
          },
          onclick: {
            enable: false,  // Clickda animatsiya ishlamasligi uchun
            mode: "push"
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <>
      {/* Particles.js konteynerini yaratish */}
      <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
      <ContactButton />
      {/* Header va sahifalar */}
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/project/:id'} element={<DetailedProject />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
