const Discord = require('discord.js')
const moment = require('moment')

const client = new Discord.Client()

//List of Commands
const commands = [
  "ππ»ββοΈ**About Us**" + " - " + "``$about``",
  "Learn about XdHacks Mini Vancouver!",
  "",
  "β**Help**" + " - " + "``$help``",
  "To view our list of commands!",
  "",
  "β**Rules**" + " - " + "``$rules``",
  "See hackathon rules!",
  "",
  "ππ»ββοΈ**Social**" + " - " + "``$social``",
  "List of our social media!",
  "",
  "π¨π»βπ»**Staff**" + " - " + "``$staff``",
  "Pings the staff. Do not abuse this.",
  "",
  "π₯**Website**" + " - " + "``$website``",
  "XdHacks Mini Vancouver's Website!",
  "",
  "β**FAQ**" + " - " + "``$faq``",
  "Review frequently asked questions",
  "",
  "π©**Links**" + " - " + "``$links``",
  "Check out our additional resoures!"
]

const socialMedia = [["**Instagram:** " + 'https://www.instagram.com/xdhacksmini_van/'],
["**Facebook:** " + 'https://www.facebook.com/XdHacksMiniVancouver/'],
["**Linkedin:** " + 'https://www.linkedin.com/company/xdhacks/?originalSubdomain=ca'],
["**Our Website:** " + 'https://mini.xdhacks.com/vancouver/']
]
//change it to link

const questions = [
  "β **Q: What is a hackathon?**",
  "β **A:** *A Hackathon is a combination of the words 'hack' and 'marathon'. At XdHacks Mini, we believe  the word 'hack' means to create. Itβs an event where people come together and use technology to transform ideas into reality. Additionally, students can create projects, attend workshops, meet new people, improve their programming, and have lots of fun!*",
  "",
  "β **Q: How does a virtual hackathon work?**",
  "β **A:** *XdHacks-Climate Code takes place exclusively online. Registration will be held on HackHub exclusively and discord will be the communication platform during the Hackathon where webinars and Q &A sessions will be hosted. Technical instructions will be sent to you via email before the Hackathon begins.*",
  "",
  "β **Q: What activities are planned?**",
  "β **A:** *There will be webinars, online side games and plenty of other fun activities to keep you busy. We will have some online team building sessions, so feel free to register alone!*",
  "",
  "β **Q: What am I expected to create?**",
  "β **A:** *Our event encourages students to develop their product as much as they can, we do not expect a product ready to be put on the market. Prototyping is a huge part of product creation and, at XdHacks, we are celebrating the creativity and innovative ideas highschool students have to approach a real-world issue.*",
  "",
  "β **Q: Are there participation requirements?**",
  "β **A:** *The only participation requirements are that you are a current high-school student as of 2021~2022 with internet access. No coding experience is required!*",
  "",
  "β **Q: What if I still have questions?**",
  "β **A:** *Make sure to ping the organizers if you have any more questions*"
]


//Base Embed
const exampleEmbed = new Discord.MessageEmbed()
exampleEmbed.setColor('#7B68EE')


// client.channels.cache.get('857452101747998733').send("hi")
client.once('ready', () => {
  console.log("Bot is online!")
  updateTime()
})
// "August 6th 2021, 6:50:00 pm"
function updateTime(){
  setInterval(() => {
    if(moment().format('MMMM Do YYYY, h:mm:ss a') === "July 15th 2021, 3:47:00 pm"){
      exampleEmbed
      .setTitle('Join us for our Official Opening Ceremony!')
      .setURL(null) 
      .setDescription('Welcome to Climate Code 2021! Important information will be shared, rules will be reviewed, submissions, prizes, sponsors, packages, and a special guest! \n \n **Date&Time: ** Friday, August 6th 2021 @ 7:00PM \n \n **Name of workshop: ** Opening Ceremony \n\n **Speaker(s): ** XdHacks Mini Vancouver Team \n\n **Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 7:20:00 pm"){
      console.log("event2")
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 7:20:00 pm"){
      console.log("event2")
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 7:50:00 pm"){
      console.log("event2")
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 8:50:00 pm"){
      console.log("event2")
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 9:50:00 pm"){
      console.log("event2")
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 10:50:00 pm"){
      console.log("event2")
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 11:50:00 pm"){
      console.log("event2")
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 12:50:00 am"){
      console.log("event2")
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 1:50:00 am"){
      console.log("event2")
    }

  }, 1000)

  
}



//7/15/2021, 11:54:00 AM --format



//functions

client.on('message', message => {

//change logo thumbnail of the bot
//scheduled command

  switch(message.content){
    case '$about':
      exampleEmbed
      .setTitle('ππ»ββοΈ**About XdHacks Mini Vancouver**ππ»')
      .setURL('https://mini.xdhacks.com/vancouver/about_us') 
      .setDescription('XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;

    case '$xdhelp':
      exampleEmbed
    .setTitle("β**Server Commands** - ``$help``")
    .setURL(null)
    .setDescription("Check out all commands of this bot")
    .setDescription(commands)
    .setTimestamp()
    .attachFiles(['./images/logo.png'])
    .setFooter('XdHacks Mini', 'attachment://logo.png');
    message.channel.send(exampleEmbed)
      break;
  
    case '$rules':
      exampleEmbed
      .setTitle("β**Rules**")
      .setURL('https://climate-code-2021.devpost.com/rules') 
      .setDescription("Rules and Policies for Climate Code")
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');

      message.channel.send(exampleEmbed)
      break;

    case '$social':
      exampleEmbed
      .setTitle("ππ»ββοΈ**Our social media @s!**")
      .setURL(null)
      .setDescription(socialMedia)
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini Vancouver', 'attachment://logo.png');

      message.channel.send(exampleEmbed)
      break;

    case '$staff':
      message.channel.send('<@&859593630217011211>')
      break;

    case '$website':
      exampleEmbed
      .setTitle("π₯**Check our our website!**")
      .setURL('https://mini.xdhacks.com/vancouver/') 
      .setDescription("XdHacks Mini Vancouver's Official Website")
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;

    case '$faq': //change to text
    
      exampleEmbed
      .setTitle("β**Frequently Asked Questions**")
      .setURL(null)
      .setDescription(questions)
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;

    case '$blogs':

      //node
      break;

    case '$links':
      exampleEmbed
      .setTitle("π©**XdHacks Mini Vancouver's Resources Page**")
      .setURL('https://beacons.page/xdhacksmini_van/') 
      .setDescription("Check out our beacons page for more info and resources!")
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