const Discord = require('discord.js')

const client = new Discord.Client()


client.once('ready', () => {
 console.log("Bot is online!")
})

client.on('message', message => {
    // If the message is "ping"
    if (message.content === '!about') {
      // Send "pong" to the same channel
      message.channel.send('XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM. Our events are where individuals come together and use technology to transform their ideas into reality.');
    }
  });

client.login('ODU5MTUwMTkyODY3ODAzMjA2.YNof-A.HU0_yv0tQm6Ovz7kxFdEs-xgKSo')