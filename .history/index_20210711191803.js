const Discord = require('discord.js')

const client = new Discord.Client()

//july 28th
//deployment

//List of Commands
const commands = [["!about" + " --> " + "About Bot"],
["!help" + " --> " + "Lists commands OR lists"],
["!rules" + " --> " + "See hackathon rules"],
["!social" + " --> " + "Lists our @s!"],
["!staff-confirm" + " --> " + "Pings the staff. Do not abuse this."],
["!staff" + " --> " + "Prompts you to ping staff, if you require assistance"],
["!verify" + " --> " + "Verify yourself to access the rest of the discord"],
["!website" + " --> " + "XdHacks Mini Vancouver website!"]]

const socialMedia = [["Instagram" + ' --> ' + "@xdhacksini_van"],
["FaceBook" + ' --> ' + "@XdHacksMiniVancouver"],
["Discord" + ' --> ' + "https://discord.com/invite/AgAzDcg"],
["Linkedin" + ' --> ' + 'XdHacks Mini']
]
//Base Embed
const exampleEmbed = new Discord.MessageEmbed()
exampleEmbed.setColor('#7B68EE').setAuthor('XdHacks Mini Vancouver Team')

client.once('ready', () => {
  console.log("Bot is online!")
  

  const date = new Date() //UTC
  if(date.isToday()){
    client.channels.get("857452101747998730").send("Hello World!");
    console.log("asdnadsdsda")
  }else{
    return null
  }

  Date.prototype.isToday = function () {
    const today = new Date('11 July, 07:30:00 PST')
    return this.getDate() === today.getDate() &&
    this.getMonth() === today.getMonth() &&
    this.getFullYear() === today.getFullYear() && 
    this.getHours() === today.getHours() &&
    this.getMinutes() === today.getMinutes() &&
    this.getSeconds() === today.getSeconds();
};
})

//functions

client.on('message', message => {



  switch(message.content){
    case '!about':
      exampleEmbed
      .setTitle('About XdHacks Mini Vancouver')
      .setURL('https://mini.xdhacks.com/vancouver/about_us') 
      .setDescription('XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;

    case '!xdhelp':
      exampleEmbed
    .setTitle("Climate Code's Server Commands")
    .setDescription(commands)
    .setTimestamp()
    .attachFiles(['./images/logo.png'])
    .setFooter('XdHacks Mini', 'attachment://logo.png');
    message.channel.send(exampleEmbed)
      break;
  
    case '!rules':
      exampleEmbed
      .setTitle("Rules")
      .setURL('https://climate-code-2021.devpost.com/rules') 
      .setDescription("Rules and Policies for Climate Code")
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');

      message.channel.send(exampleEmbed)
      break;

    case '!social':
      exampleEmbed
      .setTitle("Our social media @s!")
      .setDescription(socialMedia)
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');

      message.channel.send(exampleEmbed)
      break;

    case '!staff':
      message.channel.send('<@&859593630217011211>')
      break;

    case '!website':
      exampleEmbed
      .setTitle("Check our our website!")
      .setURL('https://mini.xdhacks.com/vancouver/') 
      .setDescription("XdHacks Mini Vancouver's Official Website")
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;

    case '!faq': //change to text
      exampleEmbed
      .setTitle("Frequently Asked Questions")
      .setURL('https://mini.xdhacks.com/vancouver/faq') 
      .setDescription("Check out and review any frequently asked questions!")
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;

    case '!blogs':

      //node
      break;

    case '!links':
      exampleEmbed
      .setTitle("XdHacks Mini Vancouver's Linktree")
      .setURL('https://linktr.ee/XdHacksMiniVancouver') 
      .setDescription("Check out our link tree for more info and resources!")
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;
    
   

  }

  
})
// 859593630217011211
// 857452101747998730





client.login('ODU5MTUwMTkyODY3ODAzMjA2.YNof-A.VQTyi05ah0b00vAzmmxBuxc-SBU')