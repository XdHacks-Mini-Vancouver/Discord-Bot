const Discord = require('discord.js')

const client = new Discord.Client()


client.once('ready', () => {
 console.log("Bot is online!")
})

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
  });
client.login('ODU5MTUwMTkyODY3ODAzMjA2.YNof-A.HU0_yv0tQm6Ovz7kxFdEs-xgKSo')