const fs = require("fs");
module.exports.config = {
	name: "prem aa gya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "riya", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Prem",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("owner")==0 || event.body.indexOf("Owner")==0 || event.body.indexOf("riya")==0 || event.body.indexOf("Riya")==0) {
		var msg = {
				body: "💖💖😍☞𝐑𝐢𝐘𝐚 𝐑𝐨𝐘☜😍💖💖✧═════════•❁❀❁•═════════✧           💖   💖 ✧═════════•❁❀❁•═════════✧   💝🥀𝐎𝐖𝐍𝐄𝐑 :-  ☞💖👑 ℝ𝕚𝕪𝕒 ℝ𝕠𝕪 👑💖☜ ✧═════════•❁❀❁•═════════✧   💝🥀𝐎𝐖𝐍𝐄𝐑 :-☞💖👑 𝗞𝗔𝗕𝗨𝗧𝗥𝗜 👑💖☜ ✧═════════•❁❀❁•═════════✧                     💖💖☞︎𝙼𝙰𝚂𝚃𝙸 𝙺𝙰𝚁𝙾 𝙼𝙴𝚁𝙴 𝚂𝙰𝚃𝙷☜︎💖💖✧═════════•❁❀❁•═════════✧   𝙿𝙰𝙶𝙰𝙻 𝚃𝚄𝙼𝙰𝚁𝙰 𝙶𝙾𝙻𝚄 𝙼𝙾𝙻𝚄 𝙱𝙰𝙱𝚄 𝙷𝚄 𝙼𝙴✧═════════•❁❀❁•═════════✧    💖𝗢𝗪𝗡𝗘𝗥÷ 𝗠𝗔𝗗𝗘 𝗕𝗬 𝗥𝗜𝗬𝗔 𝗥𝗢𝗬 ✧═════════•❁❀❁•═════════✧      💖𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗 :- 👇 https://www.facebook.com/yi.riya.roya.apane.lav?mibextid=ZbWKwL ✧═════════•❁❀❁•═════════✧ किसी भी तरह की हेल्प के लिए कांटेक्ट करे 👉 [+91 🤭🤭🤭🤭🤭]",
				attachment: fs.createReadStream(__dirname + `/noprefix/riya2.png.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
