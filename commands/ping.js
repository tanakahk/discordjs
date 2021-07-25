module.exports = {
  name: 'ping',
  description: 'Testar se o bot está funcionando.',
  execute(message, args) {
    // ----------- Forma 1 -----------
    // message.channel.send('Pong.');

    // ----------- Forma 2 -----------
    // if (message.content === `${prefix}ping`) {
    //   message.channel.send('Pong.');
    // }

    // ----------- Forma 3 -----------
    if (message.content.startsWith(`${prefix}ping`)) {
      message.channel.send('Pong.');
    }
  },
};