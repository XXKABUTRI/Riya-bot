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
    api.sendMessage(`🍒🕊️🍓...𝗦𝗼𝗥𝗿𝗬 𝗥𝗶𝗬𝗮 𝗝𝗶 🙏 ☞︎ [ ${name} ] ☜︎ 𝗞𝗼 𝗗𝘂𝗩𝗮𝗥𝗲 𝗔𝗱𝗗 𝗡𝗵𝗜 𝗞𝗮𝗥 𝗣𝗮𝗬𝗶 𝗚𝗿𝗢𝘂𝗣 𝗠𝗮𝗜 🥺 𝗟𝗮𝗚𝗧𝗮 𝗛𝗮𝗜 𝗘𝘀𝗡𝗲 𝗠𝘂𝗝𝗵𝗘 𝗕𝗹𝗢𝗰𝗞 𝗞𝗮𝗥 😕 𝗞𝗲 𝗕𝗵𝗔𝗴 𝗚𝗮𝗬𝗲...😎😒😳`, event.threadID)
   } else api.sendMessage(`🍒🕊️🍓...𝗕𝗵𝗔𝗴 𝗞𝗲 𝗝𝗮𝗡𝗲 𝗞𝗮 𝗡𝗵𝗜 ☞︎ [ ${name} ] ☜︎ 𝗕𝗲𝗕𝘆 ,🕊️🍓🍒 𝗥𝗶𝗬𝗮 𝗝𝗶 🌴 𝗞𝗲 𝗣𝗲𝗿𝗠𝗶𝗦𝘀𝗜𝗼𝗡 𝗞𝗲 𝗕𝗶𝗡𝗮 𝗞𝗮𝗛𝗶 𝗡𝗵𝗜 𝗝𝗮 𝗦𝗮𝗞𝘁𝗘 🤭 𝗗𝗲𝗞𝗵𝗼 𝗔𝗮𝗣𝗸𝗢 𝗙𝗶𝗥 𝗦𝗲 𝗔𝗱𝗗 𝗞𝗮𝗥 𝗗𝗶𝗬𝗮...😌😁😆`, event.threadID);
  })
 }
}
