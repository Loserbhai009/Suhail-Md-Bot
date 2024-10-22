const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Loser08:<db_dB9l3d8HbSAQwiL2>@cluster0.namy7.mongodb.net/"
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

  sessionName:process.env.SESSION_ID || "SUHAIL_09_16_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDYyLFxuICAgICAgICA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDc2LFxuICAgICAgICA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFSM2p5eTJMZmIxdGVRZXdGKzdyekZvekJwVHFCZUYxSXdHQmtoNTZxeU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdpR3pFVFJuUlQ2ZVVEbkplVkJlaWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjEwOWE3ZjItNTcwOS00MjM5LThkYjYtZTg0Y2Y2ZDhmYzVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDE1LFxuICAgICAgMjUwLFxuICAgICAgMjE4LFxuICAgICAgMTk0LFxuICAgICAgMTMzLFxuICAgICAgMTAsXG4gICAgICAxODQsXG4gICAgICA0NSxcbiAgICAgIDIwOCxcbiAgICAgIDEwMixcbiAgICAgIDE3OSxcbiAgICAgIDIzMCxcbiAgICAgIDI4LFxuICAgICAgMjAwLFxuICAgICAgNDEsXG4gICAgICAyMjgsXG4gICAgICAxODEsXG4gICAgICAxMzQsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDI0MCxcbiAgICAgIDIwMSxcbiAgICAgIDE3MSxcbiAgICAgIDQxLFxuICAgICAgMTY2LFxuICAgICAgNDIsXG4gICAgICAxMzYsXG4gICAgICAyMzgsXG4gICAgICAxMDksXG4gICAgICAwLFxuICAgICAgNzMsXG4gICAgICAxNDAsXG4gICAgICA4LFxuICAgICAgMTQ1LFxuICAgICAgMjIyLFxuICAgICAgMTgzLFxuICAgICAgMjQ1LFxuICAgICAgMTE1LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlMWlhQV0I2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwOTc0ODEwMTI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3MjI3NDYxMTY5NDA2OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmpaMmVRRkVNVGEzYmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWbG91V0ZWaVZCVXplNXpySmJHLzlUdVBkbWUwUzh1cm1yZXg1dE41bWpVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhPRWZENzJpMFRIeGxqY01vbEU4K0tUYjI3TGhtalJZTmFwcUpnUWRaSlBhRDJETWVlS3IrSUt4N2RmMVJHKzNRZ1NRNDJ0amhmMGpTcjhMQnFaRENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImQ3RlRuLzdUcENiajE4YUlNOG9IZkFEUngvWFp3RXM5SVFxY3gxdkdMYVRwTUJ6dmtFbm92Mmx1bTNFa2QwUk9PaDNYcVgzaGpnaGJXYVhibHlVSmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5NzQ4MTAxMjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk1ODg1NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBZlJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFmUi5qc29uIjogIntcImtleURhdGFcIjpcIkVCU0llSFpGT1NoUDg1eE00ZEZUYUIwdXlaT0JDVXBNUVJORk1VaUhMMEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1MzM2MjA3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTU3NDM1ODcyN1wifSIKfQ==",  // PUT SESSION ID HERE 
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
 
