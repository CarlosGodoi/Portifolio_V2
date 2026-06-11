'use client';
import { Mail, MapPin, Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { LinkedinLogoIcon, GithubLogoIcon } from '@/components/portfolio/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import '../../utils/translate/i18n';

const socialLinks = [
  {
    icon: GithubLogoIcon,
    label: 'GitHub',
    href: 'https://github.com/CarlosGodoi',
  },
  {
    icon: LinkedinLogoIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/carlosegodoi',
  },
];

export function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: t('section-contact.card-email-title'),
      value: t('section-contact.info-email'),
      href: 'mailto:edu-godoi@hotmail.com',
    },
    {
      icon: Phone,
      label: t('section-contact.card-phone-title'),
      value: t('section-contact.info-phone'),
      href: 'tel:+5551997216453',
    },
    {
      icon: MapPin,
      label: t('section-contact.card-location-title'),
      value: t('section-contact.info-location'),
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-primary text-2xl font-medium tracking-wider uppercase">
              {t('section-contact.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t('section-contact.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('section-contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cards de contato */}
            <div className="grid sm:grid-cols-1 gap-4">
              {contactInfo.map((item) => (
                <Card key={item.label} className="bg-card border-border">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base text-muted-foreground">
                        {item.label}
                      </span>
                      <a
                        href={item.href}
                        className="text-lg text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Painel de disponibilidade e CTA */}
            <Card className="bg-card border-border overflow-hidden relative">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
              <CardContent className="p-8 flex flex-col gap-6 h-full justify-center relative">
                <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {t('section-contact.CTA-span')}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-foreground text-balance">
                    {t('section-contact.CTA-title')}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('section-contact.CTA-description')}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <a href="mailto:edu-godoi@hotmail.com">
                      {t('section-contact.CTA-button-email')}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex flex-col gap-3 pt-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    {t('section-contact.CTA-text-footer')}
                  </span>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
