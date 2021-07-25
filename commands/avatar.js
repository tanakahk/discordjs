module.exports = {
  name: 'avatar',
  description: 'Retornar o avatar do usuário que vc mencionar junto ao comando (pode pedir mais de um avatar no msm comando, é só marcar a galera)',
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.channel.send(`Seu avatar é: <${message.author.displayAvatarURL({format: 'png', dynamic: true})}>`)
    };
    const avatarList = message.mentions.users.map(user => {
      return `O avatar de ${user.username} é: <${user.displayAvatarURL({format: 'png', dynamic: true})}>`
    });
    message.channel.send(avatarList);
  },
};