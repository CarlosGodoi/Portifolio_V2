'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImgBR from '@/app/assets/imgBr.jpg';
import ImgEUA from '@/app/assets/ImgEUA.jpg';
import { useTranslation } from 'react-i18next';
import '../../utils/translate/i18n';
import { MoboMenu } from '../modoMenu';

const navItems = [
  { labelKey: 'header.nav-initial', href: '#hero' },
  { labelKey: 'header.nav-about', href: '#about' },
  { labelKey: 'header.nav-projects', href: '#projects' },
  { labelKey: 'header.nav-stack', href: '#stack' },
  { labelKey: 'header.nav-contact', href: '#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}
    >
      <div className="mx-auto max-w-[90%] px-4 sm:px-6 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="text-2xl font-bold text-foreground">
            {t('header.title')}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                {t(item.labelKey)}
              </a>
            ))}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden cursor-pointer"
                onClick={() => handleChangeLanguage('pt')}
              >
                <Image
                  src={ImgBR}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                type="button"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden cursor-pointer"
                onClick={() => handleChangeLanguage('en')}
              >
                <Image
                  src={ImgEUA}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            {isOpen ? <X className="h5 w-5" /> : <MoboMenu />}
          </Button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.labelKey}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
