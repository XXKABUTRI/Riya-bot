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
	if(react.includes("DOSA") ||
     react.includes("dosa") || react.includes("dossa") || react.includes("Dosa") ||
react.includes("DoSa") ||
react.includes("Dossa")) {
		var msg = {
				body: `💖 𝐋𝐎 𝐊𝐇𝐀𝐋𝐎 𝐁𝐀𝐃𝐄 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐀𝐍𝐀𝐘𝐀 𝐇𝐄 😋💖`,attachment: fs.createReadStream(__dirname + `/wall/dosa.webp`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
