const fs = require("fs");
module.exports.config = {
	name: "Pizza",
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
	if(react.includes("PIZZA") ||
     react.includes("pizza") || react.includes("Pizza") || react.includes("PiZzA") ||
react.includes("Pizza") ||
react.includes("pizzza")) {
		var msg = {
				body: `💖 लो बेबी आपको भूख लगी होगी खालों बड़े प्यार से बनाया है 😋💖`,attachment: fs.createReadStream(__dirname + `/ravi/pizza.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}