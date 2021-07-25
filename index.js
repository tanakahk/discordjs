const fs = require('fs');
const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands').filter(file => file !== 'model.js' && file.endsWith('.js'));

client.commands = new Discord.Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (!client.commands.has(command)) return;

  try {
    if (command === 'help') {
      client.commands.get(command).execute(message, args, client.commands);
    } else {
      client.commands.get(command).execute(message, args);
    }
  } catch (error) {
    console.error(error);
    message.reply('houve um erro!');
  }
});

client.once('ready', () => {
  console.log('Ready!');
  // console.log('client.commands', client.commands);
});

client.login(token);