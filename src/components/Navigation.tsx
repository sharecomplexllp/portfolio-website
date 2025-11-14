import  { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <img src="/logo.jpg" alt="ShareComplex LLP" className="h-12 w-auto" />
            </div>
            <span className="text-[#1B5E7E] font-bold text-xl">
              Abhay Bhimajiani
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Expertise', 'Philosophy', 'Vision', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-700 hover:text-[#1B5E7E] transition-colors font-medium">
                  {item}
                </button>)}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {['About', 'Expertise', 'Philosophy', 'Vision', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left text-gray-700 hover:text-[#1B5E7E] transition-colors font-medium py-2">
                  {item}
                </button>)}
          </div>
        </div>}
    </nav>;
}