'use client';
import { AssistantButton } from '@/components/botAssistant/assistantButton';
import { ChatWindow } from '@/components/botAssistant/chatWindow';
import { About } from '@/components/portfolio/about';
import { Contact } from '@/components/portfolio/contact';
import { Footer } from '@/components/portfolio/footer';
import { Header } from '@/components/portfolio/header';
import { Hero } from '@/components/portfolio/hero';
import { Projects } from '@/components/portfolio/projects';
import { Stack } from '@/components/portfolio/stack';
import { useState } from 'react';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />

        {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}

        <div onClick={() => setChatOpen((prev) => !prev)}>
          <AssistantButton />
        </div>
      </main>
      <Footer />
    </>
  );
}
