module.exports = {
  name: 'args-info',
  description: 'Testar o recebimento de um argumento e interpretar ele. Se vc passar "foo" como argumento, ele vai retornar algo diferente.',
  execute(message, args) {
    if (!args.length) {
      return message.channel.send(`Vc n passou nenhum argumento, ${message.author}!`)
    } else if (args[0] === 'foo') {
      return message.channel.send('bar')
    }
    message.channel.send(`Primeiro argumento: ${args[0]}`)
  },
};