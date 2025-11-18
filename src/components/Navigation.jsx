// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    id: 'home',
    label: '首页'
  }, {
    id: 'skills',
    label: '技能'
  }, {
    id: 'projects',
    label: '项目'
  }, {
    id: 'experience',
    label: '经历'
  }, {
    id: 'contact',
    label: '联系'
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                  Portfolio
                </h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-white/10'}`}>
                      {item.label}
                    </button>)}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && <div className="md:hidden bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left">
                    {item.label}
                  </button>)}
              </div>
            </div>}
        </nav>;
}