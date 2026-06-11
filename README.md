# Portfólio V2

Um portfólio pessoal moderno e responsivo construído com as mais recentes tecnologias web, apresentando seus projetos, habilidades técnicas e informações de contato de forma elegante e intuitiva.

## 📋 Descrição

Este projeto é uma aplicação web completa de portfólio pessoal desenvolvida com Next.js e React. A aplicação apresenta:

- **Página Inicial (Hero)**: Seção de destaque com apresentação pessoal
- **Sobre**: Informações detalhadas sobre mim e minhas experiências
- **Projetos**: Galeria de projetos desenvolvidos com descrições e links
- **Stack Tecnológico**: Exibição das tecnologias e ferramentas que domino
- **Contato**: Formulário para que visitantes possam entrar em contato
- **Tema Dinâmico**: Suporte a temas escuro e claro com alternância automática
- **Internacionalização**: Suporte para múltiplos idiomas (Português e Inglês)
- **Design Responsivo**: Totalmente otimizado para dispositivos móveis e desktop
- **Analytics**: Integração com Vercel Analytics para rastreamento de usuários

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 16**: Framework React com renderização de servidor e geração estática
- **React 19**: Biblioteca JavaScript para construção da interface
- **TypeScript**: Linguagem com tipagem estática para código mais seguro
- **Tailwind CSS 4**: Framework CSS utilitário para estilização rápida

### UI e Componentes
- **shadcn/ui**: Biblioteca de componentes reutilizáveis de alta qualidade
- **Radix UI**: Primitivos UI sem estilos e acessíveis
- **Lucide React**: Ícones SVG modernos e personalizáveis
- **Phosphor Icons**: Ícones versáteis e consistentes
- **Simple Icons**: Ícones de marcas populares

### Funcionalidades
- **next-themes**: Gerenciamento de temas (claro/escuro)
- **i18next**: Internacionalização e gerenciamento de traduções

### Ferramentas de Desenvolvimento
- **ESLint**: Linter para análise estática do código
- **PostCSS**: Processador CSS com suporte a Autoprefixer
- **PNPM**: Gerenciador de pacotes eficiente e rápido

### Deploy e Monitoramento
- **Vercel Analytics**: Rastreamento e análise de performance

## 📁 Estrutura de Pastas

```
.
├── app/                              # Diretório de aplicação Next.js (App Router)
│   ├── layout.tsx                    # Layout principal da aplicação
│   ├── page.tsx                      # Página inicial
│   ├── globals.css                   # Estilos globais
│   └── assets/                       # Ativos estáticos (imagens, vídeos)
│
├── components/                       # Componentes React reutilizáveis
│   ├── theme-provider.tsx            # Provedor de temas (claro/escuro)
│   ├── portfolio/                    # Componentes específicos do portfólio
│   │   ├── header.tsx                # Cabeçalho e navegação
│   │   ├── hero.tsx                  # Seção de destaque inicial
│   │   ├── about.tsx                 # Seção sobre o desenvolvedor
│   │   ├── projects.tsx              # Galeria de projetos
│   │   ├── stack.tsx                 # Tecnologias dominadas
│   │   ├── contact.tsx               # Formulário de contato
│   │   ├── footer.tsx                # Rodapé da página
│   │   └── icons.tsx                 # Componente de ícones customizado
│   │
│   └── ui/                           # Componentes UI genéricos (shadcn/ui)
│       ├── button.tsx                # Componente de botão
│       ├── card.tsx                  # Componente de card
│       ├── input.tsx                 # Componente de input
│       ├── textarea.tsx              # Componente de textarea
│       └── sonner.tsx                # Provedor de toasts
│
├── hooks/                            # Hooks customizados do React
│   ├── use-mobile.ts                 # Hook para detectar dispositivos móveis
│   └── use-toast.ts                  # Hook para gerenciar notificações
│
├── lib/                              # Funções e utilitários
│   └── utils.ts                      # Funções utilitárias gerais
│
├── utils/                            # Utilitários específicos
│   └── translate/                    # Internacionalização
│       ├── i18n.js                   # Configuração do i18next
│       ├── en.json                   # Traduções em inglês
│       └── pt.json                   # Traduções em português
│
├── public/                           # Ativos públicos estáticos
├── styles/                           # Arquivos de estilos adicionais
│   └── global.css                    # Estilos CSS globais
│
├── app/globals.css                   # Estilos globais da aplicação
├── components.json                   # Configuração do shadcn/ui
├── next.config.ts                    # Configuração do Next.js
├── tsconfig.json                     # Configuração do TypeScript
├── tailwind.config.ts                # Configuração do Tailwind CSS
├── postcss.config.mjs                # Configuração do PostCSS
├── eslint.config.mjs                 # Configuração do ESLint
├── pnpm-workspace.yaml               # Configuração do workspace PNPM
├── pnpm-lock.yaml                    # Lock file do PNPM
├── package.json                      # Dependências e scripts do projeto
└── README.md                         # Este arquivo
```

## 🛠️ Como Instalar e Executar

### Pré-requisitos
- Node.js 18+ instalado
- PNPM instalado (`npm install -g pnpm`)

### Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd Portifolio\ V2
```

2. Instale as dependências:
```bash
pnpm install
```

### Executar em Desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Build para Produção

```bash
pnpm build
```

### Iniciar Servidor de Produção

```bash
pnpm start
```

### Linting

```bash
pnpm lint
```

## ✨ Funcionalidades Principais

- ✅ Design responsivo e moderno
- ✅ Suporte para múltiplos idiomas (i18n)
- ✅ Otimizado para SEO
- ✅ Performance otimizada com Next.js
- ✅ Componentes acessíveis com Radix UI
- ✅ Integração com Analytics

## 🎨 Personalização

### Adicionar um Novo Idioma

1. Crie um novo arquivo JSON em `utils/translate/`:
```json
// utils/translate/es.json
{
  "hero.greeting": "¡Hola!",
  "hero.description": "Soy un desarrollador..."
}
```

2. Configure o idioma em `utils/translate/i18n.js`

### Modificar Cores e Tema

Edite o arquivo `tailwind.config.ts` para personalizar as cores e o tema do projeto.

### Atualizar Seções

Cada seção da página está em um componente separado em `components/portfolio/`:
- Edite `hero.tsx` para a seção de destaque
- Edite `about.tsx` para a seção sobre você
- Edite `projects.tsx` para adicionar/remover projetos
- Edite `stack.tsx` para atualizar as tecnologias
- Edite `contact.tsx` para customizar o formulário

## 📱 Responsividade

O projeto utiliza Tailwind CSS para garantir que o design seja completamente responsivo:
- **Mobile**: Otimizado para telas pequenas
- **Tablet**: Layout adaptado para telas médias
- **Desktop**: Layout completo com todas as funcionalidades

## 🔍 SEO

O projeto está otimizado para SEO com:
- Meta tags apropriadas
- Open Graph (OG) tags para compartilhamento em redes sociais
- Estrutura semântica HTML
- Sitemap automático (pode ser adicionado)

## 📊 Analytics

O projeto integra o Vercel Analytics para rastreamento de:
- Pageviews
- Core Web Vitals
- Comportamento do usuário
- Performance

## 🚀 Deploy

O projeto está pronto para ser deployado em:

### Vercel (Recomendado)
1. Faça push do seu código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Acesse [vercel.com](https://vercel.com)
3. Importar seu repositório
4. Clicar em Deploy

### Outras Plataformas
- Netlify
- GitHub Pages
- AWS Amplify
- DigitalOcean
- Railway

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir conforme necessário.

## 👨‍💻 Autor

Carlos Eduardo Godoi

---

**Desenvolvido com ❤️ usando Next.js e React**
