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

const command = [
  ""
]

const socialMedia = [["Instagram: " + "@xdhacksmini_van"],
["Facebook: " + "@XdHacksMiniVancouver"],
["LinkedIn: " + 'XdHacks Mini']
]
//change it to link

const questions = [
  "**Q: What is a hackathon?**",
  "**A**: *A Hackathon is a combination of the words 'hack' and 'marathon'. At XdHacks Mini, we believe  the word 'hack' means to create. It’s an event where people come together and use technology to transform ideas into reality. Additionally, students can create projects, attend workshops, meet new people, improve their programming, and have lots of fun!*",
  "",
  "**Q: How does a virtual hackathon work?**",
  "**A**: *XdHacks-Climate Code takes place exclusively online. Registration will be held on HackHub exclusively and discord will be the communication platform during the Hackathon where webinars and Q &A sessions will be hosted. Technical instructions will be sent to you via email before the Hackathon begins.*",
  "",
  "**Q: What activities are planned?**",
  "**A**: *There will be webinars, online side games and plenty of other fun activities to keep you busy. We will have some online team building sessions, so feel free to register alone!*",
  "",
  "**Q: What am I expected to create?**",
  "**A**: *Our event encourages students to develop their product as much as they can, we do not expect a product ready to be put on the market. Prototyping is a huge part of product creation and, at XdHacks, we are celebrating the creativity and innovative ideas highschool students have to approach a real-world issue.*",
  "",
  "**Q: Are there participation requirements?**",
  "**A**: *The only participation requirements are that you are a current high-school student with internet access. No coding experience is required!*"
]

let n = 1
//Base Embed
const exampleEmbed = new Discord.MessageEmbed()
exampleEmbed.setColor('#7B68EE').setAuthor('XdHacks Mini Vancouver Team')

client.once('ready', () => {
  console.log("Bot is online!")
  
  var d = new Date("2020-04-13T00:00:00.000+08:00");
  d.toLocaleString('en-US', { timeZone: 'America/New_York' });
  console.log(d)


})


//functions

client.on('message', message => {

//change prefix
//change name of bot
//change !help command content
//change logo
//change logo thumbnail of the bot
//change the !help design
//change the footer logo
//add faq question for what if i still have a question
//faq links to about us
//change link tree link to beacon and change description
//add website to social
//delete author
//figure 



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
      .setDescription(questions)
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