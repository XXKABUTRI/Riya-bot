const fs = require("fs");
module.exports.config = {
	name: "Pizza",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "𝐑𝐢𝐲𝐚 𝐑𝐨𝐲", 
	description: "Just Respond",
	commandCategory: "ravi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("pani") ||
     react.includes("Pani") || react.includes("PANI") ||  react.includes("paNi") ||
react.includes("PaNi") ||
react.includes("Wather")) {
		var msg = {
				body: `💖💦💦 𝐏𝐈𝐋𝐎 𝐏𝐀𝐍𝐈 𝐀𝐀𝐏𝐊𝐄 𝐋𝐈𝐘𝐄 𝐋𝐀𝐈 💦💦💖`,attachment: fs.createReadStream(__dirname + `/wall/pani.webp`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💦", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
