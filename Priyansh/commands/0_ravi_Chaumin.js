const fs = require("fs");
module.exports.config = {
	name: "Chaumin",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "RAVI KUMAR", 
	description: "hihihihi",
	commandCategory: "ravi",
	usages: "chaumin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chaumin")==0 || event.body.indexOf("CHAUMIN")==0 || event.body.indexOf("chaumin")==0 || event.body.indexOf("चाउमिन")==0) {
		var msg = {
				body: "🌺💖 लो खालों चाउमिन आपके लिए बनाई हे मेरे मालिक रिया रॉय ने 😁😁😁",
				attachment: fs.createReadStream(__dirname + "/wall/chaumin.webp")
			}
		api.sendMessage(msg, threadID, messageID);
		api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
