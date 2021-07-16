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
      .setTitle('Some title')
      .setURL('https://discord.js.org/')
      .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      .setDescription('Some description here')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png')
      .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
      message.channel.send(exampleEmbed)
      //message.channel.send("XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM. Our events are where individuals come together and use technology to transform their ideas into reality in an attempt to create a feasible solution towards solving a relevant, real-world problem. At XdHacks Mini, one of our core values is in teaching students of the importance of interdisciplinary learning in the modern technology industry. Our focus on students developing an interdisciplinary mindset sets us apart from other Hackathon organizations. We highlight the significance of soft skills such as presenting a pitch, in tandem with hard skills like coding. We believe entrepreneurship, in addition to having a deep foundation within a skill like coding, sets students up best for the future. XdHacks Mini has hosted over 10 hackathons, with the XdHacks Mini Vancouver branch on their 5th hackathon")
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