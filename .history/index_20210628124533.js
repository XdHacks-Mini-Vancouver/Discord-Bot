const Discord = require('discord.js')

const client = new Discord.Client()


client.once('ready', () => {
 console.log("Bot is online!")
})

client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
  });

client.login('ODU5MTUwMTkyODY3ODAzMjA2.YNof-A.HU0_yv0tQm6Ovz7kxFdEs-xgKSo')