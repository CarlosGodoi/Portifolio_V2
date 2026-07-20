'use client';
import Image from 'next/image';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { LinkedinLogoIcon } from '@/components/portfolio/icons';
import { Button } from '@/components/ui/button';
import FotoPerfil from '@/app/assets/foto portifolio.png';
import { useTranslation } from 'react-i18next';
import '../../utils/translate/i18n';
import { useEffect, useState } from 'react';

export function Hero() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Lado Esquerdo - Texto de Apresentação */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('section-hero.span-text')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              {t('section-hero.title')}{' '}
              <span className="text-primary">{t('section-hero.subtitle')}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
              {t('section-hero.text-apresentation')}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2">
              <Button asChild size="lg" className="gap-2">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  {t('section-hero.button-contact')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#projects">{t('section-hero.button-projects')}</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="/Carlos_Godoi_Frontend_Curriculo.pdf" download>
                  <Download className="h-4 w-4" />
                  {t('section-hero.button-CV')}
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 mb-8 lg:mb-0">
              <a
                href="https://github.com/CarlosGodoi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/carlosegodoi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <LinkedinLogoIcon size={20} />
              </a>
              <a
                href="mailto:edu-godoi@hotmail.com"
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Lado Direito - Foto do Desenvolvedor */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              {/* Efeito de glow */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"></div>
              {/* Círculos decorativos */}
              <div className="absolute -inset-8 border border-primary/10 rounded-full"></div>
              <div className="absolute -inset-16 border border-primary/5 rounded-full"></div>
              {/* Imagem principal */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
                <Image
                  src={FotoPerfil}
                  alt="Foto do desenvolvedor"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  );
}
