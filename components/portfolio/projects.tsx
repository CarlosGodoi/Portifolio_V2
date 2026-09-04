'use client';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AgendaMedImg from '@/app/assets/Agendamed.png';
import PrestigeImg from '@/app/assets/Prestige.png';
import LibriXImg from '@/app/assets/LibriX.png';
import { useTranslation } from 'react-i18next';
import '../../utils/translate/i18n';

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('section-projects.card-1.title'),
      description: t('section-projects.card-1.description'),
      tags: t('section-projects.card-1.tecnologies', {
        returnObjects: true,
      }) as string[],
      image: AgendaMedImg,
      liveUrl: 'https://agendamed-front.vercel.app/',
      githubUrl: 'https://github.com/CarlosGodoi/agendamed_front',
    },
    {
      title: t('section-projects.card-2.title'),
      description: t('section-projects.card-2.description'),
      tags: t('section-projects.card-2.tecnologies', {
        returnObjects: true,
      }) as string[],
      image: PrestigeImg,
      liveUrl: 'https://real-state-front-blue.vercel.app/',
      githubUrl: 'https://github.com/CarlosGodoi/real_state_front',
    },
    {
      title: t('section-projects.card-3.title'),
      description: t('section-projects.card-3.description'),
      tags: t('section-projects.card-3.tecnologies', {
        returnObjects: true,
      }) as string[],
      image: LibriXImg,
      liveUrl: 'Em breve',
      githubUrl: 'https://github.com/CarlosGodoi/librix_front',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-2xl font-medium tracking-wider uppercase">
              {t('section-projects.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t('section-projects.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('section-projects.description')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-card border-border overflow-hidden group flex flex-col h-full"
              >
                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-xl bg-primary/10 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="rounded-md object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col gap-4 flex-1 justify-between">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-base rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t('section-projects.link-live-project')}
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="gap-2"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="h-4 w-4" />
                          {t('section-projects.link-github-project')}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
