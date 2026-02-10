import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import NetworkMap from './pages/NetworkMap';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body">
      <Navbar />
      <main className="pt-2">
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>
        <section id="network" className="scroll-mt-24">
          <NetworkMap />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
