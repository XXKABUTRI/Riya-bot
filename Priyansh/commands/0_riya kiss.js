const fs = require("fs");
module.exports.config = {
	name: "Khana",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Riya Roy", 
	description: "Just Respond",
	commandCategory: "ravi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("kiss") ||
     react.includes("kissi") || react.includes("lunch") || react.includes("Kiss") ||
react.includes("KISS") ||
react.includes("💋")) {
		var msg = {
				body: `💋💋💋...𝗨𝗺𝗺𝗮𝗮𝗮𝗮 𝗕𝗲𝗕𝘆....💋💋💋`,attachment: fs.createReadStream(__dirname + `/wall/khana.webp`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
