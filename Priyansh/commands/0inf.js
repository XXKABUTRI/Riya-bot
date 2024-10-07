module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Riya Roy",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/Uh2GF7H.jpeg" , "https://i.imgur.com/3e0sHWW.jpeg"];
var callback = () => api.sendMessage({body:`🌹𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍FO 🌹

𝗕𝗢𝗧 𝗡𝗔𝗠𝗘÷
♪♪♪♪♪♪♪『 ☞︎︎︎ ${global.config.BOTNAME} ☜︎︎︎ 』.♪♪♪♪♪♪♪

╭───────────╮
🌻𝐎𝐖𝐍𝐄𝐑 ꧁☞︎🍒💖𝐑𝐢𝐘𝐚 𝐑𝐨𝐘💖🍒☜︎꧂
╰───────────╯ ╭────────────╮
🥀𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 ꧁☞︎💖👑 𝐊𝐚𝐁𝐮𝐓𝐫𝐈 👑💖☜︎꧂ 🤸  💞 
╰────────────╯
🍇𝐎𝐖𝐍𝐄𝐑 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊🍇
───────https://www.facebook.com/yi.riya.roya.apane.lav?mibextid=ZbWKwL

✧══════•❁❀❁•══════✧

💖𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫💖☞︎︎︎ [ ${global.config.PREFIX} ] ☜︎︎︎

🕊️ 𝗨𝗣𝗧𝗜𝗠𝗘 🕊️

🕊️𝗧𝗼𝗱𝗮𝘆 𝗜𝘀🕊️ ☞︎︎︎ [ ${juswa} ] ☜︎︎︎

⚡𝗕𝗼𝘁 𝗜𝘀 𝗥𝘂𝗻𝗶𝗻𝗴⚡ ☞︎︎︎ [ ${hours}:${minutes}:${seconds}. ] ☜︎︎︎

💖💖💖💖💖𝗧𝗵𝗻𝗸 𝘆𝗼𝘂 𝘀𝗼 𝗺𝘂𝗰𝗵 𝗴𝘂𝘆𝘀💖💖💖💖


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒🅁🄸🅈🄰🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
