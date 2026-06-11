'use client';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import '../../utils/translate/i18n';

export function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code2,
      title: t('section-about.cards.card-1.clean-code'),
      description: t('section-about.cards.card-1.clean-code-description'),
    },
    {
      icon: Rocket,
      title: t('section-about.cards.card-2.performance'),
      description: t('section-about.cards.card-2.performance-description'),
    },
    {
      icon: Lightbulb,
      title: t('section-about.cards.card-3.innovation'),
      description: t('section-about.cards.card-3.innovation-description'),
    },
    {
      icon: Users,
      title: t('section-about.cards.card-4.collaboration'),
      description: t('section-about.cards.card-4.collaboration-description'),
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-2xl font-medium tracking-wider uppercase">
              {t('section-about.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t('section-about.subtitle')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('section-about.paragraph-1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('section-about.paragraph-2')}
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">
                    {t('section-about.years-experience')}
                  </span>
                  <span className="text-base text-muted-foreground">
                    {t('section-about.years-text')}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">
                    {t('section-about.number-projects')}
                  </span>
                  <span className="text-base text-muted-foreground">
                    {t('section-about.projects-text')}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <Card key={item.title} className="bg-card border-border">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
