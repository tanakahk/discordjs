module.exports = {
  name: 'help',
  description: 'Ajudar a vc a usar esse BOT',
  execute(message, args, commands) {
    const msgIn = [''];   
    const collect = async() => {
      await commands.each(c => msgIn.push(`A função \`${c.name}\` serve para: ${c.description}\n`));
    } 
    collect();

    message.reply({
      embed: {
        color: 3447003,
        title: 'Meus comandos são:',
        description: `${msgIn.join('')}`,
      }
    });
  },
};