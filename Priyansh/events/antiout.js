module.exports.config = {
 name: "antiuot",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Riya Roy",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "😝🤣🤪...𝗞𝗼𝗶 𝗔𝘀𝗘 𝗣𝗶𝗖𝗵𝗪𝗮𝗥𝗲 𝗠𝗲 𝗟𝗮𝗧𝗵 𝗠𝗮𝗥𝘁𝗔 𝗛𝗮𝗜 ?...😹🥺🤧";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`💖🕊️𝗢𝗪𝗡𝗘𝗥÷  💝 ☞︎ 𝐑𝐈𝐘𝐀 𝐑𝐎𝐘 ☜︎ 💝 \n✧═════════•❁❀❁•═════════✧\n🍒💖🕊️...𝐘𝐀𝐑 𝐘𝐄 𝐌𝐔𝐉𝐇𝐄 𝐁𝐋𝐎𝐂𝐊 😭 𝐊𝐀𝐑 𝐊𝐄 𝐁𝐇𝐀𝐆 𝐆𝐀𝐘𝐀 𝐀𝐁 𝐌𝐄 𝐄𝐒𝐄 𝐀𝐃𝐃 𝐍𝐇𝐈 𝐊𝐀𝐑 𝐒𝐀𝐊𝐓𝐈 , 𝐈 𝐀𝐌 𝐕𝐄𝐑𝐘 𝐒𝐎𝐑𝐑𝐘 𝐑𝐈𝐘𝐀 𝐉𝐈....🙏🥺😥\n✧═════════•❁❀❁•═════════✧\n🤭𝗕𝗛𝗔𝗚𝗡𝗘 𝗪𝗔𝗟𝗘 𝗞𝗔 𝗡𝗔𝗠𝗘 ÷ 👇👇👇\n✧═════════•❁❀❁•═════════✧\n🙈🤭 ☞︎ [ ${name} ] ☜︎ 🤭🙈\n✧═════════•❁❀❁•═════════✧\n🌸🌹🤦🏻‍♀️....𝚄𝚂𝙴 𝙹𝙰𝙽𝙴 𝙳𝙾 𝙰𝙰𝙿 𝙻𝙾𝙶 𝙺𝙷𝚄𝚂𝙷 𝚁𝙴𝙷𝙾 𝙼𝙴𝚁𝙴 𝚂𝙰𝚃𝙷 , 𝙴𝙺 𝙼𝙴𝙼𝙱𝙴𝚁 𝙷𝙸 𝙺𝙼 𝙷𝚄𝙰 𝙷𝙰𝙸 𝙱𝙰𝚂 𝙺𝙾𝙸 𝙱𝙰𝙰𝚃 𝙽𝙷𝙸 , 𝙼𝙴 𝙷𝚄 𝙽𝙰 , 𝙼𝙴𝚁𝙴 𝚂𝙰𝚃𝙷 𝙼𝙰𝚂𝚃𝙸 𝙺𝙰𝚁𝙾 𝚃𝙴𝙽𝚂𝙾𝙸𝙽 𝙽𝙰𝙺𝙺𝙾 𝙻𝙾 𝙳𝙾𝚂𝚃𝙾....😛🤗☺️`, event.threadID)
   } else api.sendMessage(`💖🕊️𝗢𝗪𝗡𝗘𝗥÷  💝 ☞︎ 𝐑𝐈𝐘𝐀 𝐑𝐎𝐘 ☜︎ 💝 \n✧═════════•❁❀❁•═════════✧\n🍒💖🕊️...𝐁𝐀𝐁𝐔 𝐁𝐇𝐀𝐆 𝐊𝐄 𝐊𝐀𝐇𝐀 𝐉𝐀𝐎𝐆𝐄 𝐉𝐀𝐁 𝐓𝐀𝐊 𝐌𝐄 𝐇𝐔 , 𝐃𝐄𝐊𝐇𝐎 𝐀𝐀𝐏𝐊𝐎 𝐃𝐔𝐕𝐀𝐑𝐄 𝐀𝐃𝐃 𝐊𝐀𝐑 𝐃𝐈𝐘𝐀 𝐌𝐄𝐍𝐄 𝐁𝐄𝐁𝐘....😁🤭☺️\n✧═════════•❁❀❁•═════════✧\n🤭𝗕𝗛𝗔𝗚𝗡𝗘 𝗪𝗔𝗟𝗘 𝗞𝗔 𝗡𝗔𝗠𝗘 ÷ 👇👇👇\n✧═════════•❁❀❁•═════════✧\n🙈🤭 ☞︎ [ ${name} ] ☜︎ 🙈🤭\n✧═════════•❁❀❁•═════════✧\n 🕊️🍓🍒 𝙶𝚁𝙾𝚄𝙿 𝙺𝙴 𝙰𝙳𝙼𝙸𝙽 𝙹𝙸 𝙰𝙿𝙿𝚁𝙾𝚅𝙴𝙳 𝙳𝙴𝙳𝙾 , 𝙴𝙺 𝙼𝙴𝙼𝙱𝙴𝚁 𝚁𝚄𝚂 𝙺𝙴 𝙶𝚁𝙾𝚄𝙿 𝚂𝙴 𝙱𝙷𝙰𝙶 𝚁𝙰𝙷𝙰 𝚃𝙷𝙰 𝙼𝙴𝙽𝙴 𝙽𝙷𝙸 𝙱𝙷𝙰𝙶𝙽𝙴 𝙳𝙸𝚈𝙰...😁🤭🙈`, event.threadID);
  })
 }
}
