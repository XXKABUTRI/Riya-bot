const fs = require("fs");
module.exports.config = {
	name: "imoge2",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "riya roy", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
		var msg = {
				body: `😳...𝐒𝐚𝐃 𝐊𝐲𝐎 , 𝐁𝐚𝐁𝐮 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎...🥺🥺`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
