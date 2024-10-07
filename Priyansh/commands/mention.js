module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61563280496378") {
    var aid = ["61563280496378"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["🍒🍒🍒....𝐇𝐚𝐘𝐞 𝐁𝐚𝐁𝐮...😉😉😉" , "🍒🍒🍒....𝐊𝐲𝐀 𝐇𝐮𝐀 𝐁𝐚𝐁𝐮😏😏😏...." , "🍒🍒🍒.....𝐊𝐮𝐂𝐡 𝐊𝐚𝐌 𝐇𝐚𝐈 𝐁𝐚𝐁𝐮....🥺🥺🥺" , "🍓🍓🍓....𝐌𝐞 𝐀𝐛𝐇𝐢 𝐁𝐮𝐒𝐲 𝐇𝐮....🙈🙈🙈" , "🍓🍓🍓....𝐊𝐡𝐀𝐍𝐚 𝐁𝐚𝐍𝐚 𝐑𝐚𝐇𝐢 𝐇𝐮 𝐁𝐚𝐁𝐮....🥳🥳🥳" , "🍓🍓🍓....𝐌𝐞 𝐀𝐩𝐍𝐞 𝐁𝐟 𝐊𝐞 𝐒𝐚𝐓𝐡 𝐁𝐮𝐬𝐘 𝐇𝐮 𝐀𝐛𝐇𝐢....🙈🙈🙈" , "🍓🍓🍓......𝐁𝐨𝐋𝐨 𝐁𝐚𝐁𝐮.....🥺🥺🥺" , "🍓🍓🍓.....𝐈 𝐌𝐢𝐒𝐬 𝐘𝐨𝐔 𝐁𝐚𝐁𝐲😍😍😍....." , "🍓🍓🍓.....𝐊𝐲𝐮 𝐓𝐚𝐍𝐠 𝐊𝐚𝐑 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐌𝐮𝐉𝐡𝐄....☹️☹️☹️" , "🍓🍓🍓....𝐏𝐀𝐆𝐚𝐋 𝐇𝐨 𝐆𝐚𝐘𝐞 𝐇𝐨 𝐒𝐚𝐘𝐚𝐃....😝😝😝" ];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
