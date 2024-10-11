const fs = require("fs");
module.exports.config = {
	name: "Dance",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Riya Roy", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("dance") ||
     react.includes("nach") || react.includes("party") || react.includes("Party") ||
react.includes("naach") ||
react.includes("nacho")) {
		var msg = {
				body: `𝗡𝗮𝗰𝗵𝗼 𝗠𝗲𝗿𝗶 𝗝𝗮𝗮𝗻 𝗡𝗮𝗰𝗵𝗼 🙂🤟`,attachment: fs.createReadStream(__dirname + `/wall/dance.webp`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥳", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
