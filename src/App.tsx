import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Mail, ChevronDown } from 'lucide-react';

// Images extracted from the user's provided HTML
const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1m75w-MQezQjIlwO-6MWLH3LEqHX8S5g5qOE6IzGccXblQqVwk58KNzRa37hH0B89JlFuvehtNc2n7Ghhp92i9ztOh_fHO7k3_FosbhqBRQMhMArVcA61vD30XxgrDpb8XLuFDks0ZrnopfBjFKYa8qfaMKoy-noY6QmTVGhE_7DHs7cHPIIM1to0tXofdcZkI9LISJYMzjScO1Gd0zSQ-jf4M0CVkvLUty5i3QHQlqxXomNN9w8mWIk2K34uf2WH2eLcv_MJIIx",
  portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmeFAFE8SJX5ap7ljGp9WfaL5WoYcrmdYPftjJhoUP__-5DzvvXG25sNlHwPx-B7s94MQ2fVvNwdrJkoSMtKHqSarbk6SmLzGS4tIf_XdYiFk7KF3YtA4TE2s2lMpHQVY2fomYoKptn0nRLJdKi-vYGuY8k7_Bl873wqfLn-_S5LIpCqzDz_Og2fxmjqI4xIKK1JKzeSzQJWk7C3vgRh68DrHkRoiXyYWb-adzXCZXweHG6zWo6N4n4XccJ6pZxug7VIUGAMbYolv3",
  stillLife: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3beSB4UqWrYbdmzgNx3nhnt2ivL500q5I_j1u-lYpl74KXjhOpLtiQ9ZnMuXChNyjDrIEAm7PkrsdKLUTkBKEKCVA4yVZKJJk3-TEHpQadIsU6ZRHo6iZl1bg4pLhpTf2LJTHNFOYGPVrT58u_hugn3yGRK2Pl4vS3F0sHg2h35m25gzt8L8vpOBsOYNYSdnXFbc03KwSrdj90qf1t_yBFFJhoSsEVMQ0mbCqaLgvrYcV9c41h4XjcAi9AZ9e0k0XqWsahC6gyaYD",
  landscape: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_WiXbwERVrGoEMWYQxr2OL8k7LPM1x5ZkReI2r72Lva0TeA2Hr0UYTFd8f1X401qNUEfjp6hVKgrapVybUY9FuNnEIEJ-1Ils6SFahzolfsbREasEoIglavefLw9pAWsXpEYlDkmeBSS7pMUxselIj7izxPgUUaWeWHPjLFHpUbdOcWlE1NFTx2gu07jT8ZrNM5vJTreQoCtkyeNjhvXO4apPcHMDV9DzrHRlYchjQlihYJk0WpdwR9gJWpjuUyUw21jMYxYD0lSC",
  architecture: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcP5uEvySSVYJseHg3rS9adJdRe3rcO1iflqEk6AAXVxh05_tSCQAiYGr6zAIEURLGrIF3SaNQ6VjOulXuZvbJSmW0EKjcwj6xaBDGC0704XbuqVWL8zjIYdAW1mNW7AYVioNlUa2_5YFiXuYqd4In-JX8i0ugEvgBoq-U7h4ewbF01x-BnZaIEhYcoZMhcSMViu0pKJcyZjtF28etXGGNzmzF_dDBP5PPORtUaOsNRWUfkbDwsNuXbQABbWaxtfrdb9dPD7BiEAaQ",
  interior: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkfMV3pC9eB3bnDg3XvQZmiK-aGbVy06FmsJsaYVFdwERg3UMTJzxvLcN9SWg6Ojd4FUtnio053uI0QfAmrsq0kR0HTbYcX010ogI74P5fwo6zLMtz1J2RPGUu7kYXCs3hvoaW0ixV31WVrOkG2wjYyqpAyjBjyaqgcsu9ltEVKJaXOVzTLzNZrYepjrlcotsqf83Q89WnKLSHjVoig67XnntUmR6QBo7c3ylB8nVZCqjvHZ5aDqsGfX-cJjFqcVplMKu58WwYu4l1"
};

const NAV_LINKS = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'À propos', href: '#about' },
  { name: 'Tarifs', href: '#pricing' },
  { name: 'Contact', href: '#contact' }
];

const PROJECTS = [
  { id: 1, title: "Lumière d'Aube", category: "Portrait", image: IMAGES.portrait },
  { id: 2, title: "Textures Douces", category: "Nature Morte", image: IMAGES.stillLife },
  { id: 3, title: "Horizon Brumeux", category: "Paysage", image: IMAGES.landscape },
  { id: 4, title: "Lignes Pures", category: "Architecture", image: IMAGES.architecture },
  { id: 5, title: "Espace Minimal", category: "Intérieur", image: IMAGES.interior },
  { id: 6, title: "Épure", category: "Éditorial", image: IMAGES.hero }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl tracking-tight text-text-main group">
            Éléonore Photo
            <span className="block h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-main p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-background border-b border-outline p-8 flex flex-col gap-6 items-center md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm uppercase tracking-widest font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
          {/* Subtle Background Texture/Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-10">
            <img 
              src={IMAGES.hero} 
              alt="Texture background" 
              className="w-full h-full object-cover blur-3xl scale-125"
            />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-8xl font-serif text-text-main leading-tight mb-8"
            >
              Capturer l'Éphémère
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-text-muted font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Photographie éditoriale et portraits poétiques. Un regard subtil sur la beauté du quotidien, figé dans un instant suspendu.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#portfolio" 
                className="px-10 py-4 bg-primary text-white text-xs uppercase tracking-widest font-semibold transition-transform hover:scale-105"
              >
                Explorer la Galerie
              </a>
              <a 
                href="#contact" 
                className="px-10 py-4 border border-outline text-text-main text-xs uppercase tracking-widest font-semibold transition-colors hover:bg-surface"
              >
                Me Contacter
              </a>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-text-muted">Découvrir</span>
            <div className="w-px h-16 bg-outline-variant"></div>
          </motion.div>
        </section>

        {/* Portfolio / Gallery Section */}
        <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif">Portfolio</h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Une sélection de mes travaux récents, explorant la lumière naturelle et les textures douces.
              </p>
            </div>
          </div>

          <div className="masonry-grid max-w-7xl mx-auto">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="masonry-item group relative cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-auto overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0 transition-grayscale"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-serif opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-12 py-5 border border-outline text-xs uppercase tracking-widest font-semibold hover:bg-background transition-colors">
              Voir tout le portfolio
            </button>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-32 bg-sand/30 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif">Une histoire à raconter ?</h2>
            <p className="text-text-muted text-lg font-light leading-relaxed italic">
              "La photographie est un instant de sincérité capturé pour l'éternité."
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-8">
              <a href="mailto:contact@eleonorephoto.com" className="flex items-center gap-3 text-sm tracking-widest font-semibold hover:text-primary transition-colors">
                <Mail size={18} /> contact@eleonorephoto.com
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm tracking-widest font-semibold hover:text-primary transition-colors">
                <Instagram size={18} /> @eleonore_photo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-outline-variant py-16 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-2">Éléonore Photo</h3>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">Photographie éditoriale & Fine Art</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest font-bold text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">Presse</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          </div>

          <div className="text-[10px] uppercase tracking-widest font-medium text-text-muted">
            © {new Date().getFullYear()} Éléonore Photo. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* Decorative vertical line */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden md:block">
        <div className="h-32 w-px bg-outline/30 mb-8"></div>
        <div className="vertical-text text-[8px] uppercase tracking-[0.5em] text-outline opacity-50 select-none" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Portfolio 2024
        </div>
      </div>
    </div>
  );
}
