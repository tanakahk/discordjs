const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(token);

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // const args = message.content.slice(prefix.length).trim().split(/ +/);
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  
  
  if (message.content === `${prefix}ping`) {
    message.channel.send('Pong.');
  } else if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`Vc n passou nenhum argumento, ${message.author}!`)
    } else if (args[0] === 'foo') {
      return message.channel.send('bar')
    }
    // message.channel.send(`Primeiro argumento: ${args[0]}`);
    message.channel.send(`Argumentos: ${args}`)
  }
});

