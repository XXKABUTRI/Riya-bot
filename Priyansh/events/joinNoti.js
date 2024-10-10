module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS", //fixing ken gusler
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("𝗛𝗘𝗟𝗟𝗢 𝗘𝗩𝗘𝗥𝗬𝗢𝗡𝗘 🙋‍♂️ 𝗞𝗔𝗕𝗨𝗧𝗥𝗜 𝗕𝗢𝗧 𝗜𝗦 𝗡𝗢𝗪 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 ⛓️💝🕊️🍓", event.threadID, () => api.sendMessage({body:`🌹🪷🌸...𝗞𝗮𝗕𝘂𝗧𝗿𝗜  𝗕𝗼𝗧...🌸🪷🌹\n✧═════════•❁❀❁•═════════✧\n💝𝗢𝘄𝗻𝗲𝗿÷ ☞︎ [ ꧁ 𝐑𝐈𝐘𝐀 𝐑𝐎𝐘 ꧂ ] ☜︎ 😍😘\n✧═════════•❁❀❁•═════════✧\n🩷🖤🇪 🇳 🇹 🇦 🇷 🖤🩷\n✧═════════•❁❀❁•═════════✧\n🍒🕊️🍓..𝙻𝙾 𝙼𝙴 𝙰𝙰 𝙶𝚈𝙸 𝙰𝙰𝙿𝙺𝙸 𝙿𝚈𝙰𝚁𝙸 𝙺𝙰𝙱𝚄𝚃𝚁𝙸 𝙱𝙾𝚃 𝙰𝙱 𝙹𝙰𝙻𝙳𝙸 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝙺𝙰𝚁𝙾 𝙼𝙴𝚁𝙰 𝙴𝚅𝙴𝚁𝚈𝙾𝙽𝙴..🍒🕊️🍓\n✧═════════•❁❀❁•═════════✧\n💖🙈💝..𝕆ℝ 𝕄𝔼ℝ𝕀 𝔹𝕆𝕊𝕊 ℝ𝕀𝕐𝔸 ℝ𝕆𝕐  𝕂𝕆 ℝ𝔼ℚ𝕌𝔼𝕊𝕋 𝕊𝔼ℕ𝔻 𝕂𝔸ℝ 𝕂𝔸ℝ𝔻𝕆 𝕁𝔸𝕃𝔻𝕀 𝕁𝔸𝕃𝔻𝕀..🤭🙈💝\n✧═════════•❁❀❁•═════════✧\n💖🕊️💝🆈🅴÷🅼🅴🆁🅸÷🅱🅾🆂🆂÷🆁🅸🆈🅰÷🅺🅸÷🅵🅰🅲🅴🅱🅾🅾🅺÷🅸🅳÷🅺🅸÷🅻🅸🅽🅺÷🅷🅴÷ <<<<[ https://www.facebook.com/yi.riya.roya.apane.lav?mibextid=ZbWKwL ]>>>>💖🙈💝\n✧═════════•❁❀❁•═════════✧\n💖🍓 𝐌𝐲 𝐏𝐑𝐄𝐅𝐈𝐗 ÷ ☞︎ [ ${global.config.PREFIX} ] ☜︎ 🍓💖\n✧═════════•❁❀❁•═════════✧\n┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓🌸✦✧✧✧✧✰🍒🇷 🇮 🇾 🇦 🌿✰✧✧✧✧✦🌸  ┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛`, attachment: fs.createReadStream(__dirname + "/cache/botjond.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "💖💖😍☞𝐑𝐢𝐘𝐚 𝐑𝐨𝐘 𝗕𝗼𝗧☜😍💖💖\n✧═════════•❁❀❁•═════════✧\n💖            🇼 🇪 🇱 🇨 🇴 🇲 🇪          💖\n✧═════════•❁❀❁•═════════✧\n💝🥀𝐎𝐖𝐍𝐄𝐑 :-  ☞💖👸 ℝ𝕀𝕐𝔸 ℝ𝕆𝕐  👸💖☜\n✧═════════•❁❀❁•═════════✧\n💝🥀𝐎𝐖𝐍𝐄𝐑 :-☞💖👑 𝗞𝗔𝗕𝗨𝗧𝗥𝗜 👑💖☜\n✧═════════•❁❀❁•═════════✧\n☞︎𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁 𝙺𝙾 𝙳𝙸𝙻 𝚂𝙴 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚁𝙸𝚈𝙰 𝚁𝙾𝚈 𝙹𝙸 𝙾𝚁 𝚂𝙴 𝙼𝙰𝚂𝚃𝙸 𝙺𝙰𝚁𝙾 𝙰𝙱 𝙼𝙴𝚁𝙴 𝚂𝙰𝚃𝙷 𝙰𝙰𝙿𝙺𝙸 𝙿𝚈𝙰𝚁𝙸 𝙺𝙰𝙱𝚄𝚃𝚁𝙸😍🙈 ☜︎\n✧═════════•❁❀❁•═════════✧\n💖 𝗡𝗔𝗠𝗘÷ ☞︎💖[   {name} ]💖☜︎\n✧═════════•❁❀❁•═════════✧\n💖𝗚𝗥𝗢𝗨𝗣 𝗡𝗔𝗠𝗘÷ ☞︎[ {threadName} ]☜︎ \n✧═════════•❁❀❁•═════════✧\n𝐀𝐀𝐏 𝐄𝐒 𝐆𝐑𝐎𝐔𝐏 𝐊𝐄  ☞︎ [ {soThanhVien}𝐓𝐇 ]☜︎ 𝐇𝐎 𝐓𝐎 𝐊𝐇𝐀𝐎 𝐏𝐈𝐘𝐎 𝐎𝐑 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐌𝐀𝐒𝐓𝐈 𝐊𝐀𝐑𝐎 🙂🖐️ 𝐀𝐀𝐏𝐊𝐈 🥀☞︎ 𝐑𝐈𝐘𝐀 𝐑𝐎𝐘 ☜︎\n✧═════════•❁❀❁•═════════✧\n𝗢𝗪𝗡𝗘𝗥 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗 :- 👇 https://www.facebook.com/yi.riya.roya.apane.lav?mibextid=ZbWKwL\n✧═════════•❁❀❁•═════════✧\nकिसी भी तरह की हेल्प के लिए कांटेक्ट करे 👉 [+91 🍓🍓🍓🍓🍓]" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
