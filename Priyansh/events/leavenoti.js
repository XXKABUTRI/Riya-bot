module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "PREM BABU",
	description: "left notification",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝗞𝗵𝗨𝗱 𝗛𝗶 𝗕𝗵𝗔𝗴 𝗚𝗮𝗬𝗮 😐👈" : " 𝗔𝗱𝗠𝗶𝗡 𝗡𝗲 𝗚𝘂𝗦𝘀𝗘 𝗠𝗲 𝗡𝗶𝗞𝗮𝗟 𝗗𝗶𝗬𝗮😐👈";
  (typeof data.customLeave == "undefined") ? msg = "💖💖😍☞𝐑𝐢𝐘𝐚 𝐑𝐨𝐘☜😍💖💖✧═════════•❁❀❁•═════════✧           💖   💖 ✧═════════•❁❀❁•═════════✧   💝🥀𝐎𝐖𝐍𝐄𝐑 :-  ☞💖👑 ℝ𝕀𝕐𝔸 ℝ𝕆𝕐 👑💖☜ ✧═════════•❁❀❁•═════════✧   💝🥀𝐎𝐖𝐍𝐄𝐑 :-☞💖👑 𝗞𝗔𝗕𝗨𝗧𝗥𝗜 👑💖☜ ✧═════════•❁❀❁•═════════✧    ☞︎𝚂𝚄𝙺𝙰𝚁 𝙷𝙰𝙸 𝙴𝙺 𝚃𝙷𝙰𝚁𝙺𝙸 𝙴𝚂 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴 𝙺𝙼 𝙷𝙾 𝙶𝙰𝚈𝙰🤪🤪🤪☜︎✧═════════•❁❀❁•═════════✧   💖 𝗡𝗔𝗠𝗘÷  ☞︎[  {name} ]☜︎🤭✧═════════•❁❀❁•═════════✧   💖𝗥𝗜𝗝𝗔𝗡÷ ☞︎[  {type} ]☜︎😁😁 ✧═════════•❁❀❁•═════════✧ फेसबुक 🆔 :- 👇 https://www.facebook.com/yi.riya.roya.apane.lav?mibextid=ZbWKwL ✧═════════•❁❀❁•═════════✧ किसी भी तरह की हेल्प के लिए कांटेक्ट करे 👉 [+91 🤭🤭🤭🤭🤭]" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);
  
  var link = [  
"https://i.imgur.com/2hr28Gw.jpg",
"https://i.imgur.com/2hr28Gw.jpg",
"https://i.imgur.com/2hr28Gw.jpg",
"https://i.imgur.com/2hr28Gw.jpg",
  ];
  var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashO.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashO.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashO.jpg")).on("close", () => callback());
}
