const fs = require("fs");
module.exports.config = {
	name: "Love",
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
	if(react.includes("LOVE") ||
     react.includes("love") || react.includes("Love") || react.includes("love you") ||
react.includes("I Love you") ||
react.includes("Bot i love you")) {
		var msg = {
				body: `💖💋🍒𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍🍒💋💖`,attachment: fs.createReadStream(__dirname + `/wall/love.webp`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
