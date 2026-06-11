import api from './api';

export async function sendMessageToBot(message: string) {
	try {
		const response = await api.post('/chat', { message });
		return response.data.reply;
	} catch (error) {
		console.error('Erro ao enviar mensagem para o bot:', error);
		return 'Desculpe, ocorreu um erro ao tentar responder sua pergunta.';
	}
}
