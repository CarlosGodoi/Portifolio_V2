'use client';
import { useTranslation } from 'react-i18next';
import '../../utils/translate/i18n';

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-foreground">{name}</span>
        <span className="text-base text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function Stack() {
  const { t } = useTranslation();

  const technologies = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'NestJS', level: 60 },
    ],
    database: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Prisma', level: 85 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 55 },
      { name: 'Vercel', level: 90 },
      { name: 'Figma', level: 70 },
    ],
  };

  return (
    <section id="stack" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-2xl font-medium tracking-wider uppercase">
              {t('section-stack.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t('section-stack.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('section-stack.description')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('section-stack.title-habilitie-1')}
              </h3>
              <div className="flex flex-col gap-4">
                {technologies.frontend.map((tech) => (
                  <SkillBar key={tech.name} {...tech} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('section-stack.title-habilitie-2')}
              </h3>
              <div className="flex flex-col gap-4">
                {technologies.backend.map((tech) => (
                  <SkillBar key={tech.name} {...tech} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('section-stack.title-habilitie-3')}
              </h3>
              <div className="flex flex-col gap-4">
                {technologies.database.map((tech) => (
                  <SkillBar key={tech.name} {...tech} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('section-stack.title-habilitie-4')}
              </h3>
              <div className="flex flex-col gap-4">
                {technologies.tools.map((tech) => (
                  <SkillBar key={tech.name} {...tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
