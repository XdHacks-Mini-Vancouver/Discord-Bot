const Discord = require('discord.js')

const client = new Discord.Client()

// const organizers = [
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Alexander Zhong (Co-Director of Marketing)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
//   {name: "Victor Zheng (Executive Director)", ping: "@vz#3657" },
// ]

const commands = [["!about", "About Bot"],
["!help", "Lists commands OR lists"],
["!rules", "See hackathon rules"],
["!social", "Lists our @s!"],
["!staff-confirm", "Pings the staff. Do not abuse this."],
["!staff", "Prompts you to ping staff, if you require assistance"],
["!verify", "Verify yourself to access the rest of the discord"],
["!website", "XdHacks Mini Vancouver website!"]]


const exampleEmbed = new Discord.MessageEmbed()


client.once('ready', () => {
  console.log("Bot is online!")
  
})

client.on('message', message => {
  // If the message is "ping"
  switch(message.content){
    case '!about':
      exampleEmbed
      .setColor('#0099ff')
      .setTitle('About XdHacks Mini Vancouver')
      .setURL('') //website link
      .setAuthor('XdHacks Mini Vancouver Team')
      .setDescription('XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM')
      .attachFiles(['./images/logo.png'])
      .setImage('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)

      break;
    case '!xdhelp':
      exampleEmbed
      .setColor('#0099ff')
      .setTitle("Climate Code's Server Commands")
      .setURL('') //website link
      .setAuthor('XdHacks Mini Vancouver Team')
      .setDescription(commands.join(' -> '))
      .setImage('')
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setImage('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;
    case '!rules':
      exampleEmbed
      .setColor('#0099ff')
      .setTitle("Rules")
      .setURL('https://climate-code-2021.devpost.com/rules') //website link
      .setAuthor('XdHacks Mini Vancouver Team')
      .setDescription("Rules and Policies for Climate Code")
      .setImage('')
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setImage('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');

      message.channel.send(exampleEmbed)
      break;
    case '!social':
      
      break;
    case '!staff-confirm':
      message.channel.send("@Organizers")
      break;
    case '!staff':

      break;
    case '!website':
      exampleEmbed
      .setColor('#0099ff')
      .setTitle("Check our our website!")
      .setURL('https://mini.xdhacks.com/vancouver/') //website link
      .setAuthor('XdHacks Mini Vancouver Team')
      .setDescription("XdHacks Mini Vancouver's Official Website")
      .setImage('')
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setImage('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;
    
    

  }

})







client.login('ODU5MTUwMTkyODY3ODAzMjA2.YNof-A.VQTyi05ah0b00vAzmmxBuxc-SBU')