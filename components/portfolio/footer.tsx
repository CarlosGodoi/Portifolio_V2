'use client';

import { Mail, Heart } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { LinkedinLogoIcon } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import '../../utils/translate/i18n';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{t('footer.text-1')}</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>{t('footer.text-2')}</span>
            <span className="text-foreground font-medium">
              {t('footer.text-3')}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/CarlosGodoi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/carlosegodoi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogoIcon size={25} />
            </a>
            <a
              href="mailto:edu-godoi@hotmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
