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
	   if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤓") || (event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😸") || event.body.toLowerCase() == "😺")) {
		var msg = {
				body: `🍒🍒🍒...𝐄𝐭𝐍𝐈 𝐇𝐚𝐒𝐢 𝐀𝐚 𝐑𝐚𝐇𝐢 𝐇𝐞 𝐁𝐚𝐁𝐮...🤪😝😛`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
