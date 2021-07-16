const Discord = require('discord.js')

const client = new Discord.Client()

const organizers = [
  {name: "Victor Zheng (Executive Director)", ping: "@vz" }
]

const commands = [["!about", "About Bot"],
["!help", "Lists commands OR lists"],
["!rules","See hackathon rules"],
["!social", "Lists our @s!"],
["!staff-confirm", "Pings the staff. Do not abuse this."],
["!staff", "Prompts you to ping staff, if you require assistance"],
["!verify", "Verify yourself to access the rest of the discord"],
["!website", "XdHacks Mini Vancouver website!"]]




client.once('ready', () => {
 console.log("Bot is online!")
 console.log(commands[0][0])
})

client.on('message', message => {
    // If the message is "ping"
    if (message.content === '!about') {
      // Send "pong" to the same channel
      message.channel.send('XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM. Our events are where individuals come together and use technology to transform their ideas into reality.');
    }
    if (message.content === '!help'){
       commands.forEach(command => {
         message.channel.send(command[0] + "->" + command[1])
       })
      
    }

    


  });


client.login('ODU5MTUwMTkyODY3ODAzMjA2.YNof-A.HU0_yv0tQm6Ovz7kxFdEs-xgKSo')