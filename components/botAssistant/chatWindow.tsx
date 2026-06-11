import { useState, useEffect } from 'react';
import { sendMessageToBot } from '@/services/chatbot';
import { useTranslation } from 'react-i18next';
import LoadingDots from '@/components/loading';

export const ChatWindow = ({ onClose }: { onClose: () => void }) => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: t('chat.text-apresentation'),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Atualiza a mensagem de apresentação quando o idioma muda
  useEffect(() => {
    setMessages((messages) => {
      // Se não houver mensagens ou a primeira mensagem não for do bot, retorna as mensagens como estão
      if (!messages.length || messages[0].sender !== 'bot') return messages;

      // Cria um novo array com a primeira mensagem atualizada
      const updatedMessages = [...messages];
      updatedMessages[0] = {
        ...updatedMessages[0],
        text: t('chat.text-apresentation'),
      };
      return updatedMessages;
    });
  }, [t, i18n.language]); // Executa quando a linguagem ou a função de tradução muda

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botReply = await sendMessageToBot(input);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Erro ao responder sua pergunta.' },
      ]);
      console.error('Erro ao enviar mensagem para o bot:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-10 md:bottom-40 md:right-16 w-80 max-h-[50vh] md:w-96 md:max-h-[70vh] bg-white border rounded-xl shadow-lg flex flex-col z-50">
      <div className="bg-primary text-zinc-800 font-medium p-4 rounded-t-xl flex justify-between">
        <span>{t('chat.title')}</span>
        <button className="cursor-pointer" onClick={onClose}>
          ✖
        </button>
      </div>
      <div className="flex-1 p-2 overflow-y-auto space-y-2 text-zinc-800 text-sm bg-zinc-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-md ${
              msg.sender === 'user'
                ? 'bg-cyan-200 self-end text-right'
                : 'bg-gray-300 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && <LoadingDots />}
      </div>
      <div className="p-2 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 h-10 text-zinc-800 text-sm border rounded px-2 py-1"
          placeholder={t('chat.placeholder')}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          className={`px-3 py-1 rounded text-sm ${
            isLoading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-zinc-800 cursor-pointer'
          }`}
          disabled={isLoading}
        >
          {t('chat.button-send')}
        </button>
      </div>
    </div>
  );
};
