import {
  AppWindow,
  Contact,
  CreditCardIcon,
  FileUser,
  FolderBookmark,
  Languages,
  LayersPlus,
  LogOutIcon,
  Menu,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import '../../utils/translate/i18n';

export function MoboMenu() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Menu className="h5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2">
        <DropdownMenuItem>
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            <AppWindow />
            {t('header.nav-initial')}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="#about"
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            <FileUser />
            {t('header.nav-about')}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="#projects"
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            <FolderBookmark />
            {t('header.nav-projects')}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="#stack"
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            <LayersPlus />
            {t('header.nav-stack')}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            <Contact />
            {t('header.nav-contact')}
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleChangeLanguage('pt')}>
          <Languages />
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage('en')}>
          <Languages />
          Inglês
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
