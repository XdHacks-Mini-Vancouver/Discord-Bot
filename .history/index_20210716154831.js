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


client.once('ready', () => {
  console.log("Bot is online!")
  updateTime()
})

function updateTime(){
  setInterval(() => {
    if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 6:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈJoin us for our Official Opening Ceremony!')
      .setURL(null) 
      .setDescription('Welcome to Climate Code 2021! Important information will be shared, rules will be reviewed, submissions, prizes, sponsors, packages, and a special guest! \n \n **πDate&Time: ** Friday, August 6th 2021 @ 7:00PM \n \n **π’Name of workshop: ** Opening Ceremony \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 7:20:00 pm"){
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send('**Submissions are now OPEN! Start hacking!**')
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 7:20:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈ**Team Formation Activity!**')
      .setURL(null) 
      .setDescription('Meet other teammates and participants in a super-friendly environment! \n \n **πDate&Time: ** Friday, August 6th 2021 @ 7:30PM \n \n **π’Name of workshop: ** Team Formation Activity \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 7:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈHTML/CSS Programming Basics')
      .setURL(null) 
      .setDescription('A workshop that will introduce you to the basics of HTML and CSS. \n \n **πDate&Time: ** Friday, August 6th 2021 @ 8:00PM \n \n **π’Name of workshop: ** HTML/CSS Basics \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 8:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈIntroduction to JavaScript - Building a game')
      .setURL(null) 
      .setDescription('A workshop that will introduce you to the basics of Javascript. \n \n **πDate&Time: ** Friday, August 6th 2021 @ 9:00PM \n \n **π’Name of workshop: ** Intro to Javascript \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 9:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈDiscord Bot Programming Basics')
      .setURL(null) 
      .setDescription('Build your own Discord Bot while learning the fundamentals of Discord.py! \n \n **πDate&Time: ** Friday, August 6th 2021 @ 10:00PM \n \n **π’Name of workshop: ** Intro to Discord.py \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 10:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈMinecraft Battles!')
      .setURL(null) 
      .setDescription("Have fun while meeting new people! Play one of the world's most famous games while winning a variety of prizes! ! \n \n **πDate&Time: ** Friday, August 6th 2021 @ 11:00PM \n \n **π’Name of workshop: ** Minecraft Battle \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ")
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 11:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈMidnight Games!')
      .setURL(null) 
      .setDescription('A variety of games with lots of prizes! Will be hosted on Discord! \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 12:00AM \n \n **π’Name of workshop: ** Midnight Games \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Discord (Channel: )')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 1:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈBedtime Stories!')
      .setURL(null) 
      .setDescription('Still awake? Have some fun with a variety of bedtime stories! \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 2:00PM \n \n **π’Name of workshop: ** Bedtime Stories \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


    //Do SATURDAY August 7th


    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 8:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈProgramming Languages and choosing one')
      .setURL(null) 
      .setDescription('Learn the various programming languages, and which one you should learn. \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 9:00AM \n \n **π’Name of workshop: ** Intro to Programming \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 9:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈBuild Responsive Web Apps with React')
      .setURL(null) 
      .setDescription('Learn about one of the most popular front-end JavaScript libraries for building user interfaces. \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 10:00AM \n \n **π’Name of workshop: ** React Workshop \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 10:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈEchoAR Workshop: Build a Cloud-Connected AR/VR App in 15 Minutes or Less')
      .setURL(null) 
      .setDescription('The workshop will show how to quickly create AR/VR apps with no technical skills or coding required and scale existing apps by connecting them to the cloud.  \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 11:00AM \n \n **π’Name of workshop: ** EchoAR Workshop \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 12:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈProtips for Joining the Video Game Industry')
      .setURL(null) 
      .setDescription('How do you start a career in the games industry? How do you stand out when applying to your favorite gaming companies? How do you take your rad game ideas from concept to reality? Learn the answers to these questions and more! \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 1:00PM \n \n **π’Name of workshop: ** Tips for joining the Game Industry \n\n **π£Speaker(s): ** Kevin Hodges, Senior Software Engineer at Riot Games \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 1:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈBrief overview of websites and their vulnerabilities Part 1')
      .setURL(null) 
      .setDescription('A look into how websites work, starting from the basics to the advanced topics. \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 2:00PM \n \n **π’Name of workshop: ** How Websites Work \n\n **π£Speaker(s): ** Brian Han, John Kang \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 2:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈTips and tricks for jump-starting your career')
      .setURL(null) 
      .setDescription('A brief overview of how Alex made it to Microsoft, including his experiences, his passions, and his career story.  \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 3:00PM \n \n **π’Name of workshop: ** Tips and tricks for jump-starting your career \n\n **π£Speaker(s): ** Alex Kwan, Engineering Manager \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


   
    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 3:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈFlow States Workshop')
      .setURL(null) 
      .setDescription('Try out Centeredβs newly released Flow Hall to concentrate on becoming more productive while working on your βhackβ.  \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 4:00PM \n \n **π’Name of workshop: ** Flow States Workshop \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 4:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈMaking Money with Affiliate Marketing')
      .setURL(null) 
      .setDescription('What is affiliate marketing and how you can build sales funnels and develop an audience on social media to create passive income without paying money upfront. \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 5:00PM \n \n **π’Name of workshop: ** Affiliate Marketing Workshop \n\n **π£Speaker(s): ** Alex Kwan, Engineering Manager \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 6:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈBrief overview of websites and their vulnerabilities Part 2')
      .setURL(null) 
      .setDescription('A look into how hacking works. Previous attendance at βHow websites workβ is recommended.  \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 7:00PM \n \n **π’Name of workshop: ** How hacking works Workshop \n\n **π£Speaker(s): ** Brian Han, John Kang \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 7:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈSpecial Speaker #3: Berkeley SWE Organization')
      .setURL(null) 
      .setDescription('SWE  Berkeley presents a special workshop. \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 8:00PM \n \n **π’Name of workshop: ** Workshop from Berkeley SWE \n\n **π£Speaker(s): ** Berkeley SWE \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }
    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 8:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈLive Pitching Schedule Released')
      .setURL(null) 
      .setDescription('More info will be shared on event day...  \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 9:00PM \n \n **π’Name of workshop: ** Live Pitching Schedule will be released! \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }
    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 8:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈHow to pitch your hack: tips and tricks')
      .setURL(null) 
      .setDescription('An overview of how to effectively pitch your hack to judges and utilize your presentation time.   \n \n **πDate&Time: ** Saturday, August 7th 2021 @ 9:00PM \n \n **π’Name of workshop: ** Tips and tricks for jump-starting your career \n\n **π£Speaker(s): ** Alex Kwan, Engineering Manager \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }
    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 11:50:00 pm"){
      exampleEmbed
      .setTitle('ππ»ββοΈMidnight Games')
      .setURL(null) 
      .setDescription('Play some Midnight Games and make some new friends! \n \n **πDate&Time: ** Sunday, August 8th 2021 @ 12:00AM \n \n **π’Name of workshop: ** Midnight Games! \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 8th 2021, 8:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈSubmissions Close')
      .setURL(null) 
      .setDescription('Submissions will be closing in 10 mins!  \n \n **πDate&Time: ** Sunday, August 8th 2021 @ 8:50AM \n \n **π’Name of workshop: ** Submissions closing! \n\n **π£Speaker(s): ** XdHacks Mini Vancouver \n\n **π Location: ** - ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 8th 2021, 8:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈLive Pitching Starting in 10 mins')
      .setURL(null) 
      .setDescription('Live Pitching will proceed in the order described in the schedule provided. Instructions will be sent before the event begins.   \n \n **πDate&Time: ** Sunday, August 8th 2021 @ 9:00AM ~ 11:00AM \n \n **π’Name of workshop: ** Live Pitch Starting \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 8th 2021, 8:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈUniversity Programs with regard to STEM')
      .setURL(null) 
      .setDescription('A look into University Programs involving STEM fields, and how to enter them.  \n \n **πDate&Time: ** Sunday, August 8th 2021 @ 9:00AM \n \n **π’Name of workshop: ** University Programs related to STEM \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 8th 2021, 9:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈResume Building and Cover Letters')
      .setURL(null) 
      .setDescription('A review of what to put in your resume, with a focus on STEM. \n \n **πDate&Time: ** Sunday, August 8th 2021 @ 10:00AM \n \n **π’Name of workshop: ** Building your resume/CV \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 8th 2021, 10:50:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈWorkshop TBA')
      .setURL(null) 
      .setDescription(' TBA \n \n **πDate&Time: ** Sunday, August 8th 2021 @ 11:00AM \n \n **π’Name of workshop: ** TBA \n\n **π£Speaker(s): ** TBA \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 8th 2021, 11:35:00 am"){
      exampleEmbed
      .setTitle('ππ»ββοΈClosing Ceremony starting in 10 mins!')
      .setURL(null) 
      .setDescription(' Winners will be announced at the closing ceremony! Prizes will be awarded to all winners.  \n \n **πDate&Time: ** Sunday, August 8th 2021 @ 11:45AM \n \n **π’Name of workshop: ** Closing Ceremony \n\n **π£Speaker(s): ** XdHacks Mini Vancouver Team \n\n **π Location: ** Zoom (link: ----) ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

  }, 1000)

  
}


client.on('message', message => {



  switch(message.content){
    case '$about':
      exampleEmbed
      .setTitle('ππ»ββοΈ **About XdHacks Mini Vancouver** ππ»')
      .setURL('https://mini.xdhacks.com/vancouver/about_us') 
      .setDescription('XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      message.channel.send(exampleEmbed)
      break;

    case '$help':
      exampleEmbed
    .setTitle("β **Server Commands** - ``$help``")
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
      .setTitle("β **Rules**")
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
      .setTitle("ππ»ββοΈ **Our social media @s!**")
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
      .setTitle("π₯ **Check our our website!**")
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
      .setTitle("β **Frequently Asked Questions**")
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
      .setTitle("π© **XdHacks Mini Vancouver's Resources Page**")
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