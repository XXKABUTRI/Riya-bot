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
		return api.sendMessage(`🍒💙•••𝐋𝐨 𝐌𝐞 𝐀𝐚 𝐆𝐚𝐘𝐢 𝐀𝐚𝐩𝐊𝐢 𝐏𝐲𝐀𝐫𝐈 𝐑𝐢𝐘𝐚 𝐉𝐚𝐋𝐝𝐈 𝐒𝐢 𝐖𝐞𝐋𝐜𝐎𝐦𝐄 𝐊𝐚𝐑𝐨 𝐌𝐞𝐑𝐚 •••💞🌿\n✧═════════•❁❀❁•═════════✧\n🍒💙•••𝐎𝐫 𝐌𝐞𝐑𝐞 𝐏𝐲𝐀𝐫𝐄 𝐃𝐨𝐒𝐭𝐎 𝐑𝐢𝐘𝐚 𝐑𝐨𝐘 𝐊𝐞 𝐏𝐚𝐒 𝐑𝐞𝐐𝐮𝐄𝐬𝐓 𝐁𝐡𝐄𝐣 𝐃𝐨•••💞🍓\n✧═════════•❁❀❁•═════════✧\n🍒💙•••https://www.facebook.com/yi.riya.roya.apane.lav?mibextid=ZbWKwL•••💞💝\n✧═════════•❁❀❁•═════════✧\n\n𝗽𝗿𝗲𝗳𝗶𝘅 => 👉 [ ${global.config.PREFIX} 👈\n✧═════════•❁❀❁•═════════✧\n┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓🌸✦✧✧✧✧✰🍒🇷 🇮 🇾 🇦 🌿✰✧✧✧✧✦🌸  ┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛`, threadID);
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
			
			(typeof threadData.customJoin == "undefined") ? msg = "💖💖😍☞𝐑𝐢𝐘𝐚 𝐑𝐨𝐘☜😍💖💖✧═════════•❁❀❁•═════════✧   💖            🇼 🇪 🇱 🇨 🇴 🇲 🇪          💖 ✧═════════•❁❀❁•═════════✧   💝🥀𝐎𝐖𝐍𝐄𝐑 :-  ☞💖👸 ℝ𝕀𝕐𝔸 ℝ𝕆𝕐  👸💖☜ ✧═════════•❁❀❁•═════════✧   💝🥀𝐎𝐖𝐍𝐄𝐑 :-☞💖👑 𝗞𝗔𝗕𝗨𝗧𝗥𝗜 👑💖☜ ✧═════════•❁❀❁•═════════✧    ☞︎𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁 𝙺𝙾 𝙳𝙸𝙻 𝚂𝙴 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚁𝙸𝚈𝙰 𝚁𝙾𝚈 𝙹𝙸 𝙾𝚁 𝚂𝙴 𝙼𝙰𝚂𝚃𝙸 𝙺𝙰𝚁𝙾 𝙰𝙱 𝙼𝙴𝚁𝙴 𝚂𝙰𝚃𝙷 𝙰𝙰𝙿𝙺𝙸 𝙿𝚈𝙰𝚁𝙸 𝙺𝙰𝙱𝚄𝚃𝚁𝙸😍🙈 ☜︎✧═════════•❁❀❁•═════════✧  💖 𝗡𝗔𝗠𝗘÷ ☞︎💖[ {uName} ]💖☜︎  ✧═════════•❁❀❁•═════════✧ 💖𝗚𝗥𝗢𝗨𝗣 𝗡𝗔𝗠𝗘÷ ☞︎[ {threadName} ]☜︎ ✧═════════•❁❀❁•═════════✧ 𝐀𝐀𝐏 𝐄𝐒 𝐆𝐑𝐎𝐔𝐏 𝐊𝐄  ☞︎ [ {soThanhVien}𝐓𝐇 ]☜︎ 𝐇𝐎 𝐓𝐎 𝐊𝐇𝐀𝐎 𝐏𝐈𝐘𝐎 𝐎𝐑 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐌𝐀𝐒𝐓𝐈 𝐊𝐀𝐑𝐎 🙂🖐️ 𝐀𝐀𝐏𝐊𝐈 🥀☞︎ 𝐑𝐈𝐘𝐀 𝐑𝐎𝐘 ☜︎🌴 ✧═════════•❁❀❁•═════════✧ 𝗢𝗪𝗡𝗘𝗥 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗 :- 👇 https://www.facebook.com/yi.riya.roya.apane.lav?mibextid=ZbWKwL ✧═════════•❁❀❁•═════════✧ किसी भी तरह की हेल्प के लिए कांटेक्ट करे 👉 [+91 🍓🍓🍓🍓🍓]" : msg = threadData.customJoin;
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
