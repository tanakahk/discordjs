module.exports = {
  name: 'kick',
  description: 'Simular a expulsão de um usuário. É importante mencionar alguém quando for executar esse comando.',
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.channel.send('Vc precisa marcar alguém para kikar essa pessoa');
    }
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Vc quer kikar: ${taggedUser.username}`);
  },
};