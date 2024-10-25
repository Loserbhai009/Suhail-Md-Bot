const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Loser08:<uWeyOsjkFwvHGJyT>@cluster0.namy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_56_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU1dBWW50R0g5MXhWdXN0TUtNZ1FiVHBmNVN5dk15Tk9QQ2FTYlc3clpMQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSUhvcHc3VnFUdHlhVGM4bjFkZjJXUVwiLFxuICBcInBob25lSWRcIjogXCJmZWViYmNkZC1hNzI5LTQ3NTUtODgwZi0zY2U4NTRkZmUzYTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgNjcsXG4gICAgICAzOCxcbiAgICAgIDEwOSxcbiAgICAgIDQxLFxuICAgICAgMzUsXG4gICAgICAxNzgsXG4gICAgICAxNjksXG4gICAgICAxMixcbiAgICAgIDE4NyxcbiAgICAgIDY3LFxuICAgICAgMTMyLFxuICAgICAgNzIsXG4gICAgICA3NSxcbiAgICAgIDEzNCxcbiAgICAgIDEwMixcbiAgICAgIDQxLFxuICAgICAgMTg1LFxuICAgICAgMjQsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMTAyLFxuICAgICAgNjQsXG4gICAgICAzMSxcbiAgICAgIDE3MixcbiAgICAgIDU2LFxuICAgICAgMTgyLFxuICAgICAgMjI0LFxuICAgICAgMjIyLFxuICAgICAgMjQsXG4gICAgICAxMDMsXG4gICAgICAyMzcsXG4gICAgICA4NyxcbiAgICAgIDg2LFxuICAgICAgNzIsXG4gICAgICA1OSxcbiAgICAgIDU5LFxuICAgICAgMTYxLFxuICAgICAgMzYsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlREODg1WFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5NzQ4MTAxMjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3MjI3NDYxMTY5NDA2OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovWjJlUUZFT2JUNzdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVmxvdVdGVmlWQlV6ZTV6ckpiRy85VHVQZG1lMFM4dXJtcmV4NXRONW1qVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTcHVoMVpwT1ljVUNSV1lMU3JLSTZUVEpnMWxnNmVQTzA0ZllEdnBQbzVFQjFicHprazRZdFhLWmJoRnNkMkpOUUxNblkxeWpJZWRMajBXVk5lUjRBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyZXNXM3FONWgwMkt1dExjVkFkZzRMTGJyZE5rNFp2ektlQ25HV0ptNldrSnN5MWZlVFNPRGE3QVlXKzdCWUk1TXlFVGplS3hGYkJZU3p6anl0QnRDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTc0ODEwMTI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTg4MjYwMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
