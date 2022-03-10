const Discord = require('discord.js')
const moment = require('moment')
require('dotenv').config()

const client = new Discord.Client()

//List of Commands
const commands = [
  "💁🏻‍♂️ **About Us**" + " - " + "``$about``",
  "Learn about XdHacks Mini Vancouver!",
  "",
  "❓ **Help**" + " - " + "``$help``",
  "To view our list of commands!",
  "",
  "✅ **Rules**" + " - " + "``$rules``",
  "See hackathon rules!",
  "",
  "🙋🏻‍♂️ **Social**" + " - " + "``$social``",
  "List of our social media!",
  "",
  "👨🏻‍💻 **Staff**" + " - " + "``$staff``",
  "Pings the staff. Do not abuse this.",
  "",
  "🖥 **Website**" + " - " + "``$website``",
  "XdHacks Mini Vancouver's Website!",
  "",
  "❔ **FAQ**" + " - " + "``$faq``",
  "Review frequently asked questions",
  "",
  "📩 **Links**" + " - " + "``$links``",
  "Check out our additional resoures!"
]

const socialMedia = [["**Instagram:** " + 'https://www.instagram.com/xdhacksmini_van/'],
["**Facebook:** " + 'https://www.facebook.com/XdHacksMiniVancouver/'],
["**Linkedin:** " + 'https://www.linkedin.com/company/xdhacks/?originalSubdomain=ca'],
["**Our Website:** " + 'https://mini.xdhacks.com/vancouver/']
]
//change it to link

const questions = [
  "❓ **Q: What is a hackathon?**",
  "✅ **A:** *A Hackathon is a combination of the words 'hack' and 'marathon'. At XdHacks Mini, we believe  the word 'hack' means to create. It’s an event where people come together and use technology to transform ideas into reality. Additionally, students can create projects, attend workshops, meet new people, improve their programming, and have lots of fun!*",
  "",
  "❓ **Q: How does a virtual hackathon work?**",
  "✅ **A:** *XdHacks-Hack the Pulse takes place exclusively online. Registration will be held on HackHub exclusively and discord will be the communication platform during the Hackathon where webinars and Q &A sessions will be hosted. Technical instructions will be sent to you via email before the Hackathon begins.*",
  "",
  "❓ **Q: What activities are planned?**",
  "✅ **A:** *There will be webinars, online side games and plenty of other fun activities to keep you busy. We will have some online team building sessions, so feel free to register alone!*",
  "",
  "❓ **Q: What am I expected to create?**",
  "✅ **A:** *Our event encourages students to develop their product as much as they can, we do not expect a product ready to be put on the market. Prototyping is a huge part of product creation and, at XdHacks, we are celebrating the creativity and innovative ideas highschool students have to approach a real-world issue.*",
  "",
  "❓ **Q: Are there participation requirements?**",
  "✅ **A:** *The only participation requirements are that you are a current high-school student as of 2021~2022 with internet access. No coding experience is required!*",
  "",
  "❓ **Q: What if I still have questions?**",
  "✅ **A:** *Make sure to ping the organizers if you have any more questions*"
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
    if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 11th 2022, 6:50:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ Join us for our Official Opening Ceremony!')
      .setURL(null) 
      .setDescription('Welcome to Hack the Pulse 2022! Important information will be shared, rules will be reviewed, submissions, prizes, sponsors, packages, and a special guest! \n \n **📆Date&Time: ** Friday, March 11th 2022 @ 7:00PM \n \n **📢Name of workshop: ** Opening Ceremony \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86437459913) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 11th 2022, 9:00:00 pm"){
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send('**Submissions are now OPEN! Start hacking!**')
    }

    /*else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 7:20:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ **What Could Go Wrong?**')
      .setURL(null) 
      .setDescription('Meet other teammates and participants in a super-friendly environment! \n \n **📆Date&Time: ** Friday, March 11th 2022 @ 7:30PM \n \n **📢Name of workshop: ** Team Formation Activity \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86471487101?pwd=U3YrNzQxL0xMMjNKOVA3OTRDL2dJQT09) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    } */

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 11th 2022, 5:50:00 pm"){
      exampleEmbed
      .setTitle('Intro to Design Thinking')
      .setURL(null) 
      .setDescription('Taking five steps–Empathize, Define, Ideate, Prototype, and Test–design thinking is used to create many of the products, experiences, and software that you use on a daily basis. This workshop will give an overview of the process and methods of design thinking, and then prompt participants to go through an abbreviated example themselves. \n \n **📆Date&Time: ** Friday, March 11th 2022 @ 6:00PM \n \n **📢Name of workshop: ** Intro to Design Thinking \n\n **🗣Speaker(s): ** Alvin Leung - Square \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 11th 2022, 7:50:00 pm"){
      exampleEmbed
      .setTitle('Lets Git Going - Hands on!')
      .setURL(null) 
      .setDescription('Hands-on workshop introducing using Git and GitLab. We will talk a little about what Git is, and why its the most popular Version Control system for teams! We will use VS Code for us all to work with, but the skills you learn will serve you well in any environment. Will also introduce the projects that Dr. Brians students are working on for health care referrals in Uganda and Sierra Leone. \n \n **📆Date&Time: ** Friday, March 11th 2022 @ 8:00PM \n \n **📢Name of workshop: ** Lets Git Going - Hands on! \n\n **🗣Speaker(s): ** Brian Fraser - SFU \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 11th 2022, 8:50:00 pm"){
      exampleEmbed
      .setTitle(' Brainstorming')
      .setURL(null) 
      .setDescription('Brainstorming activity to spark ideas for your project! \n \n **📆Date&Time: ** Friday, March 11th 2022 @ 9:00PM \n \n **📢Name of workshop: ** Idea Brainstorming \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 6th 2021, 9:50:00 pm"){
      exampleEmbed
      .setTitle('Live Q&A from the Organizing Team + Mentors')
      .setURL(null) 
      .setDescription("Ask any questions you may have regarding the event, technical questions, or anything else! \n \n **📆Date&Time: ** Friday, March 11th 2022 @ 10:00PM \n \n **📢Name of workshop: ** Live Q&A from the Organizing Team + Mentors \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' ")
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 11th 2022, 10:50:00 pm"){
      exampleEmbed
      .setTitle('echoAR Workshop: Build a Cloud-Connected AR/VR App in 15 Minutes or Less')
      .setURL(null) 
      .setDescription('The workshop will show how to quickly create AR/VR apps with no technical skills or coding required and scale existing apps by connecting them to the cloud. \n \n **📆Date&Time: ** Saturday, March 11th 2022 @ 11:00AM \n \n **📢Name of workshop: ** echoAR Workshop: Build a Cloud-Connected AR/VR App in 15 Minutes or Less \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 11th 2022, 11:50:00 pm"){
      exampleEmbed
      .setTitle('Midnight Games!')
      .setURL(null) 
      .setDescription('A variety of games with lots of chances to win points that will count towards your final score for prizes! \n \n **📆Date&Time: ** Saturday, March 12th 2022 @ 12:00AM \n \n **📢Name of workshop: ** Midnight Games! \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Discord')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


    //Do SATURDAY March 12


    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 12th 2022, 9:50:00 am"){
      exampleEmbed
      .setTitle('Expansion 101')
      .setURL(null) 
      .setDescription('Turn your idea into a reality with this step-by-step and story-like workshop from Galicia Gordon, the Founder of Leading Learners. \n \n **📆Date&Time: ** Saturday, March 12th 2022 @ 10:00AM \n \n **📢Name of workshop: ** Expansion 101 \n\n **🗣Speaker(s): ** Galacia Gordon - Leading Learners \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 12th 2022, 12:50:00 pm"){
      exampleEmbed
      .setTitle('Introduction to Java')
      .setURL(null) 
      .setDescription('This workshop is geared towards complete beginners and experienced coders who want to learn the basics of Java. Topics covered in the workshop include: types of variables, declaring variables, conditional statements, using loops, manipulating strings, and a brief introduction to object-oriented programming. This workshop is especially handy for those who are interested in AP Computer Science. \n \n **📆Date&Time: ** Saturday, March 12th 2022 @ 1:00PM \n \n **📢Name of workshop: ** Introduction to Java \n\n **🗣Speaker(s): ** Phuong Ngo & Jeff Lu \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 12th 2022, 3:50:00 pm"){
      exampleEmbed
      .setTitle('Jackbox Games')
      .setURL(null) 
      .setDescription('Jackbox Party Pack 3 We will be playing some of our favourite games on Jackbox! Winners will receive prizes! \n \n **📆Date&Time: ** Saturday, March 12th 2022 @ 4:00PM \n \n **📢Name of workshop: ** Jackbox Games \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Discord' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 12th 2022, 5:50:00 pm"){
      exampleEmbed
      .setTitle('Flow States workshop (80% will be a hacking period)')
      .setURL(null) 
      .setDescription('Try out Centereds newly released Flow Hall to concentrate on becoming more productive while working on your “hack”. \n \n **📆Date&Time: ** Saturday, March 12th 2022 @ 6:00PM \n \n **📢Name of workshop: ** Flow States workshop (80% will be a hacking period) \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 12th 2022, 7:50:00 pm"){
      exampleEmbed
      .setTitle('Activities')
      .setURL(null) 
      .setDescription('Wikipedia Search, Code names, Spyfall \n \n **📆Date&Time: ** Saturday, March 12th 2022 @ 8:00PM \n \n **📢Name of workshop: ** Activities \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


    /*else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 7:50:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ Tips and tricks for jump-starting your career')
      .setURL(null) 
      .setDescription('A brief overview of how Alex made it to Microsoft, including his experiences, his passions, and his career story.  \n \n **📆Date&Time: ** Saturday, August 7th 2021 @ 3:00PM \n \n **📢Name of workshop: ** Tips and tricks for jump-starting your career \n\n **🗣Speaker(s): ** Alex Kwan, Engineering Manager \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86471487101?pwd=U3YrNzQxL0xMMjNKOVA3OTRDL2dJQT09) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


   
    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 3:50:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ Flow States Workshop')
      .setURL(null) 
      .setDescription('Try out Centered’s newly released Flow Hall to concentrate on becoming more productive while working on your “hack”.  \n \n **📆Date&Time: ** Saturday, August 7th 2021 @ 4:00PM \n \n **📢Name of workshop: ** Flow States Workshop \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86471487101?pwd=U3YrNzQxL0xMMjNKOVA3OTRDL2dJQT09) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 4:50:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ Making Money with Affiliate Marketing')
      .setURL(null) 
      .setDescription('What is affiliate marketing and how you can build sales funnels and develop an audience on social media to create passive income without paying money upfront. \n \n **📆Date&Time: ** Saturday, August 7th 2021 @ 5:00PM \n \n **📢Name of workshop: ** Affiliate Marketing Workshop \n\n **🗣Speaker(s): ** Alex Kwan, Engineering Manager \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86471487101?pwd=U3YrNzQxL0xMMjNKOVA3OTRDL2dJQT09) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 6:50:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ Brief overview of websites and their vulnerabilities Part 2')
      .setURL(null) 
      .setDescription('A look into how hacking works. Previous attendance at “How websites work” is recommended.  \n \n **📆Date&Time: ** Saturday, August 7th 2021 @ 7:00PM \n \n **📢Name of workshop: ** How hacking works Workshop \n\n **🗣Speaker(s): ** Brian Han, John Kang \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86471487101?pwd=U3YrNzQxL0xMMjNKOVA3OTRDL2dJQT09) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 7:50:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ Special Speaker #3: Berkeley SWE Organization')
      .setURL(null) 
      .setDescription('SWE  Berkeley presents a special workshop. \n \n **📆Date&Time: ** Saturday, August 7th 2021 @ 8:00PM \n \n **📢Name of workshop: ** Workshop from Berkeley SWE \n\n **🗣Speaker(s): ** Berkeley SWE \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86471487101?pwd=U3YrNzQxL0xMMjNKOVA3OTRDL2dJQT09) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }
    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 8:50:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ Live Pitching Schedule Released')
      .setURL(null) 
      .setDescription('More info will be shared on event day...  \n \n **📆Date&Time: ** Saturday, August 7th 2021 @ 9:00PM \n \n **📢Name of workshop: ** Live Pitching Schedule will be released! \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86471487101?pwd=U3YrNzQxL0xMMjNKOVA3OTRDL2dJQT09) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }
    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 7th 2021, 8:50:00 pm"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ How to pitch your hack: tips and tricks')
      .setURL(null) 
      .setDescription('An overview of how to effectively pitch your hack to judges and utilize your presentation time.   \n \n **📆Date&Time: ** Saturday, August 7th 2021 @ 9:00PM \n \n **📢Name of workshop: ** Tips and tricks for jump-starting your career \n\n **🗣Speaker(s): ** Alex Kwan, Engineering Manager \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86471487101?pwd=U3YrNzQxL0xMMjNKOVA3OTRDL2dJQT09) \n Webinar ID: 864 7148 7101\n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    } */
    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 12th 2022, 11:50:00 pm"){
      exampleEmbed
      .setTitle('Movie Night!')
      .setURL(null) 
      .setDescription('Home Alone 2, come join us and watch a classic! \n \n **📆Date&Time: ** Sunday, March 13th 2022 @ 12:00AM \n \n **📢Name of workshop: ** Movie Night! \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Discord ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    // Do Sunday March 13

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 13th 2022, 8:50:00 am"){
      exampleEmbed
      .setTitle('Submissions Close')
      .setURL(null) 
      .setDescription('Projects submissions close in 10 minutes!  \n \n **📆Date&Time: ** Sunday, March 13th 2022 @ 9:00AM \n \n **📢Name of workshop: ** Submissions closing! \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom: (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID:  827 5318 7275 \n Passcode: 2021 ')
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    /*else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "August 8th 2021, 8:50:00 am"){
      exampleEmbed
      .setTitle('💁🏻‍♂️ Live Pitching Starting in 10 mins')
      .setURL(null) 
      .setDescription('Live Pitching will proceed in the order described in the schedule provided. Instructions will be sent before the event begins.   \n \n **📆Date&Time: ** Sunday, August 8th 2021 @ 9:00AM ~ 11:00AM \n \n **📢Name of workshop: ** Live Pitch Starting \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82753187275?pwd=TVI4VVk0NnhMOFVHQXh5dlQxeXd5Zz09) \n Webinar ID:  827 5318 7275 \n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    } */

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 13th 2022, 8:50:00 am"){
      exampleEmbed
      .setTitle('Activities with prizes: $20, $15, $5 prizes')
      .setURL(null) 
      .setDescription('Wikipedia Search, Crossword puzzle, Online Scavenger Hunt.  \n \n **📆Date&Time: ** Sunday, March 13th 2022 @ 9:00AM \n \n **📢Name of workshop: ** Activities with prizes: $20, $15, $5 prizes \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID:  827 5318 7275 \n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 13th 2022, 10:20:00 am"){
      exampleEmbed
      .setTitle('Innovations in Medical Oxygen')
      .setURL(null) 
      .setDescription('A review of what to put in your resume, with a focus on STEM. \n \n **📆Date&Time: ** Sunday, March 13th 2022 @ 10:30AM \n \n **📢Name of workshop: ** Innovations in Medical Oxygen \n\n **🗣Speaker(s): ** Sheillah Bagayana - FreO2 Foundation \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID:  827 5318 7275 \n Passcode: 2021 ' )
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }


    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 13th 2022, 11:20:00 am"){
      exampleEmbed
      .setTitle('Introduction to Azure')
      .setURL(null) 
      .setDescription("This workshop will introduce you to cloud computing and Azure. \n \n **📆Date&Time: ** Sunday, March 13th 2022 @ 11:30AM \n \n **📢Name of workshop: ** Introduction to Azure \n\n **🗣Speaker(s): ** Haimantika Mitra - Microsoft \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/82830735690) \n Webinar ID:  827 5318 7275 \n Passcode: 2021 ")
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setTimestamp()
      .setFooter('XdHacks Mini', 'attachment://logo.png');
      client.channels.cache.get('857452101747998733').send('<@&865043435273977876>')
      client.channels.cache.get('857452101747998733').send(exampleEmbed)
    }

    else if(moment().format('MMMM Do YYYY, h:mm:ss a') === "March 13th 2022, 12:20:00 pm"){
      exampleEmbed
      .setTitle(' Closing Ceremony starting in 10 mins!')
      .setURL(null) 
      .setDescription(' Winners will be announced at the closing ceremony! Prizes will be awarded to all winners.  \n \n **📆Date&Time: ** Sunday, March 13th 2022 @ 12:30PM \n \n **📢Name of workshop: ** Closing Ceremony \n\n **🗣Speaker(s): ** XdHacks Mini Vancouver Team \n\n **🌠Location: ** Zoom (Link: https://us02web.zoom.us/j/86437459913) \n Webinar ID:  827 5318 7275 \n Passcode: 2021 ' )
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
      .setTitle('💁🏻‍♂️ **About XdHacks Mini Vancouver** 💁🏻')
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
    .setTitle("❓ **Server Commands** - ``$help``")
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
      .setTitle("✅ **Rules**")
      .setURL('https://hack-the-pulse.devpost.com/rules') 
      .setDescription("Rules and Policies for Hack the Pulse")
      .setTimestamp()
      .attachFiles(['./images/logo.png'])
      .setThumbnail('attachment://logo.png')
      .setFooter('XdHacks Mini', 'attachment://logo.png');

      message.channel.send(exampleEmbed)
      break;

    case '$social':
      exampleEmbed
      .setTitle("🙋🏻‍♂️ **Our social media @s!**")
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
      .setTitle("🖥 **Check our our website!**")
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
      .setTitle("❔ **Frequently Asked Questions**")
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
      .setTitle("📩 **XdHacks Mini Vancouver's Resources Page**")
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



client.login(process.env.token)