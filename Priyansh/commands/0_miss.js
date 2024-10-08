const fs = require("fs");
module.exports.config = {
	name: "miss",
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
	if(react.includes("miss") ||
     react.includes("miss") || react.includes("MISS") || react.includes("Miss") ||
react.includes("Miss") ||
react.includes("miss")) {
		var msg = {
				body: `💖𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐉𝐀𝐀𝐍💖`,attachment: fs.createReadStream(__dirname + `/ravi/miss2.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}