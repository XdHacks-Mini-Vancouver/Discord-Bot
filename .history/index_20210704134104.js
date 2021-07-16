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
      .setAuthor('Some name', '', 'https://discord.js.org')
      .setDescription('XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
      message.channel.send(exampleEmbed)

      break;
    case '!xdhelp':
      commands.forEach(command => {
        message.channel.send(command)
      })
      break;
    case '!rules':
      message.channel.send("https://climate-code-2021.devpost.com/rules")
      break;
    case '!social':
      let role = message.guild.roles.cache.find(role => role.name === "Organizers");
       console.log(role)
    
      break;

    

  }

})


client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});




client.login('ODU5MTUwMTkyODY3ODAzMjA2.YNof-A.VQTyi05ah0b00vAzmmxBuxc-SBU')