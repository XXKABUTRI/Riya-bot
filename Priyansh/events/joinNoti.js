module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "PREM BABU",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`${global.config.BOTNAME} 【 ${global.config.PREFIX} 】`, threadID, api.getCurrentUserID());
		return api.sendMessage(`लो में आ गया आपका राजा बाबू जल्दी से स्वागत करो हमारा 😀👈\n●============================================●\n\nऔर मेरे प्यारे दोस्तो जल्दी से मेरे बॉस राजा बाबू को रिक्वेस्ट भेज दो 😌👈\n●============================================●\nhttps://https://www.facebook.com/subham.verma.7311352\n●============================================●\n\n𝗽𝗿𝗲𝗳𝗶𝘅 => 👉 ${global.config.PREFIX} 👈\n●============================================●\n\nबोट अप्रूवल के लिए ${global.config.PREFIX}request लिख के Send कर दो 🙂🖐️`, threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			
			var mentions = [], nameArray = [], memLength = [], i = 0;
			
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  
    
				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });
      
				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝗥𝗮𝗝𝗮 𝐁𝐚𝐛𝐮 𝐁𝐨𝐭 😇👈\n●============================================●\n\n𝐎𝐰𝐧𝐞𝐫 ➻        🌹राजा बाबू🌹\n●============================================●\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊👈\n\nराजा https://www.facebook.com/subham.verma.7311352\n●============================================●\n\n                 🥰 𝐌𝐨𝐬𝐭 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 🥰 \n●============================================●\n\n                      💋 {uName} 💋 \n●============================================●\n\n{threadName}\n●============================================●\n\nआप इस ग्रुप के {soThanhVien}th मेंबर हो तो खाओ पियो और मेरे साथ मस्ती करो 🙂🖐️ आपका 🥀राजा बाबू🌴 " : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/qGJqZW7.jpg",
"https://i.imgur.com/VgTZp9f.jpg",
"https://i.imgur.com/KF7Gp2S.jpg",
"",
     ];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
}
