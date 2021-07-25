module.exports = {
  name: 'prune',
  description: 'Deletar as mensagens do chat atual. É importante passar junto ao comando um número de 2 a 100.',
  execute(message, args) {
    const amount = parseInt(args[0]);
    if (isNaN(amount)) {
      return message.reply('Vc não digitou um número. Tenta denovo.');
    } else if (amount <= 2 || amount >= 100) {
      return message.reply('Vc precisa digitar um número entre 2 e 100 para funcionar')
    }
    message.channel.bulkDelete(amount, true);
  }

}