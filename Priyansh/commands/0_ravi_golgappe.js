const fs = require("fs");
module.exports.config = {
	name: "Golgappe",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "RAVI KUMAR", 
	description: "hihihihi",
	commandCategory: "ravi",
	usages: "golgappe",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Golgappe")==0 || event.body.indexOf("GOLGAPPE")==0 || event.body.indexOf("golgappe")==0 || event.body.indexOf("Pani puri")==0) {
		var msg = {
				body: "🌺💖 लो खालों गोलगप्पे मेरे मालिक ने बड़े प्यार से भेजा है 😁😁😁 💖🌺",
				attachment: fs.createReadStream(__dirname + "/ravi/golgappe.gif")
			}
		api.sendMessage(msg, threadID, messageID);
		api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}