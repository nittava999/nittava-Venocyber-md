//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "94701222478";
global.owner = process.env.OWNER_NUMBER || "94701222478";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "TRUE",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "TRUE";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktYd296YXJkcEg2cXFyc3h6dElKRnVqdmZqOEdCOU5kTGkxZGwwbGkzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1IvN0FoazI5YjREbHR0aENwWlpnaEtOYndZdkJMWDZMQUdIY1QvY0Frbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSFhXa1dQVnN2QnBIUmFBc3VmcVZ2akppRzJ5Y05PZWh2NWtxdk1BL1hvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTXczdEJrdEY2L3h4cEhoaktGeWkvMW9HTWZwUFpocHpWRnJTK01VZEZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklDRzY2UkFVRDdUejc5V3h2Zmw5ZmdVWnZUOEpKa0tVeHlibWpyMEg1bTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdOWDdBOFFoQ2hicVF0RmhTcUd4YjJvNElnY3U1M244SW54dHFpQmhrZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0t5ZklxaTFoMUs5R1RNLzdZQnUwR0hOMGhPNk1PbGR3dk80Z2ZVNk1IWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWRyZVU2dnE0cndVYWVHSWpUcWZ2MzkrczJITXBYMU1jRHAwaFUzR1hIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNtY2xuUXNTbUpFNFlpL0ZxdGtkM2ZqNm42SUtoYXFlZTdwSUQ3MnM4MkhUdW9pMkx2SytLcmQvRG5TMTBPblQ1K05OY2tUVnZlQUtLUWRkSkR5Q2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJTbUdjWi9MZjl5bWYrbXRlWlovdzdTMENBK1RYdU03QkVGWjFGVUZvUXFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzUsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozNSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnWkdmZUMyVVRHZUZIbWdTMS14bkZnIiwicGhvbmVJZCI6ImEyZGRjM2JhLTdkOWUtNGJjNi04NWFmLWFjMmE4MWI2YzhhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUEoyZUhzLzc4V09pZzNST2w0ckYxL1ZXakk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBUQVZEcGJqWDQrLzdXaW1DMGNXeXVOTzlSaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01IVXhJd0ZFUDJJamJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFqN1pSbzE3MVJRc0N0WXdaa0xVVkpSYkpiUWlSM2FUS1pTQmkxTkZjQ1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFpaXpwSGRUZ1BLWGJUMkNvN3VLSFU5OFdjUHdrZTZPaUUxUTJ0dmF3a2hyaVIwenV5d3AvUE0zU0F4MG9lQndYN1owSUpxM1VPYlI1Qk84VmdTRkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMdnNVZ1RzRkRPMmFDMjVBWkxUQ2diVHJvUGpodFR2T3ZwU0xyS0RDK3dsdUxQTElPb0VycXBmYzRJcE5wdHFDV3VkUzdoVk84Y2dZZnBUYVRMQ0NqZz09In0sIm1lIjp7ImlkIjoiOTQ3MDEyMjI0Nzg6MzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCiIFxu4oCiXG7igKIgXG7igKIgIFxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAoiBcbuKAolxuIOKAolxuIOKAolxu4oCiXG7igKIg8J2QkfCdkITwnZCA8J2QiyDwnZCS8J2Qk/CdkIDwnZCT8J2QlPCdkJIg8J2QivCdkIjwnZCN8J2QhiDwnZCK8J2QiPCdkJLwnZCA8J2QiyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTIyMjQ3ODozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXbysyVWFOZTlVVUxBcldNR1pDMUZTVVd5VzBJa2Qya3ltVWdZdFRSWEFrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTc2MzI2fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is CYBER ROUDY,
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "CYBER ROUDY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "KISAL DAHANAYAKA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
