const fs = require("fs");
module.exports.config = {
	name: "bay",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "RAVI KUMAR", 
	description: "Just Respond",
	commandCategory: "ravi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("bay") ||
     react.includes("by") || react.includes("By") || react.includes("Byy") ||
react.includes("BYY") ||
react.includes("byyy")) {
		var msg = {
				body: `💖𝐁𝐚𝐘 𝐁𝐚𝐘 🌺 𝐓𝐚𝐓𝐚 𝐀𝐀𝐏𝐍𝐀 🙈 𝐊𝐇𝐈𝐘𝐀𝐋 🙈𝐑𝐀𝐊𝐇𝐍𝐀😘 𝐁𝐄𝐁𝐘💖`,attachment: fs.createReadStream(__dirname + `/ravi/bay.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}