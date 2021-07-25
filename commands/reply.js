module.exports = {
  name: 'reply',
  description: 'Simular uma resposta, mencionando quem chamou o bot.',
  execute(message, args) {
    message.reply('respondendo ... ')
  },
};