const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "riya Roy",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["𝙷𝙰𝙰 𝙱𝙰𝙱𝚄 𝙱𝙾𝙻𝙾 𝙺𝚈𝙰 𝙺𝙰𝙰𝙼 𝙷𝙰𝙸....🧐🧐🧐" ,"𝙱𝙷𝚄𝚃 𝚈𝙰𝙳 𝙰𝙰 𝚁𝙰𝙷𝙸 𝙷𝙰𝙸 𝙱𝙰𝙱𝚄 𝙰𝙰𝙿𝙺𝙸....🥺🥺🥺" , "𝙺𝙰𝙷𝙰 𝙲𝙷𝙰𝙻𝙴 𝙶𝙰𝚈𝙴 𝚃𝙷𝙴 𝙼𝚄𝙹𝙷𝙴 𝙲𝙷𝙷𝙾𝚁 𝙺𝙴 𝙱𝙰𝙱𝚄...😔😔😔" , "𝙺𝚈𝙰 𝙷𝚄𝙰 𝙱𝙰𝙱𝚄..🤨🤨🤨" , "𝙶𝚄𝚂𝚂𝙰 𝙷𝙾 𝙱𝙰𝙱𝚄 𝙼𝙴𝚁𝚂𝙴....😥😥😥" , "𝙺𝚈𝙰 𝙺𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄 𝙼𝚄𝙹𝙷𝙴 𝙱𝙷𝙸 𝙱𝙰𝚃𝙰𝙾....😸😸😸" , "𝙱𝙾𝙻𝙾 𝙱𝙰𝙱𝚄 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴...😼😼😼" , "𝙼𝙴𝚁𝙰 𝙱𝙵 𝙺𝙰𝙷𝙰 𝙷𝙴 𝚈𝙰𝚁....😣😣😣" , "𝙺𝙰𝙷𝙰 𝙹𝙰 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄...☹️☹️☹️" , "𝙼𝙴𝚁𝙴 𝙱𝙵 𝙱𝙰𝙽𝙾𝙶𝙴 𝙹𝙰𝙽𝚄....🤭🤭🤭" , "𝙼𝙴𝚁𝙴 𝙿𝙷𝙾𝙽 𝙺𝙸 𝙱𝙴𝚃𝚃𝚁𝙸 𝙺𝙼 𝙷 𝙱𝙰𝙱𝚄 𝙹𝙰𝙻𝙳𝙸 𝙱𝙾𝙻𝙾....😒😒😒😒" , "𝙾𝚁 𝙺𝚈𝙰 𝙷𝙾 𝚁𝙷𝙰𝙰 𝙷 𝙼𝙴𝚁𝙴 𝙿𝙰𝙳𝙾𝚂𝙸𝙸 𝙹𝙸.....😏😏😏" , "𝙹𝙰𝙽𝚄 𝙴𝚂𝙴 𝙼𝙰𝚃 𝙱𝙾𝙻𝙴 𝙺𝙰𝚁𝙾 𝙽𝙷𝙸 𝚃𝙾 𝙿𝚈𝙰𝚁 𝙷𝙾 𝙹𝙰𝚈𝙴𝙶𝙰....😻😻😻" , "𝙼𝙴𝚁𝙰 𝙻𝙰𝙳𝙳𝙾 𝙽𝙴 𝙺𝙷𝙰𝙽𝙰 𝙺𝙷𝙰𝚈𝙰....😺😺😺" , "𝙱𝙰𝙱𝚄 𝙼𝚄𝙹𝙷𝙴 𝙱𝙷𝚄𝙺𝙷 𝙻𝙰𝙶 𝚁𝙰𝙷𝙸 𝙷𝙰𝙸....🥴🥴🥴" , "𝙽𝙰𝚁𝙰𝙹 𝙷𝙾 𝙱𝙰𝙱𝚄 𝙼𝙴𝚁𝚂𝙴....🥶🥶🥶" , "𝙺𝚄𝙲𝙷 𝙺𝙰𝙼 𝙺𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄 𝚃𝙰𝙱𝙸 𝙴𝚃𝙽𝙰 𝙻𝙴𝚃 𝙰𝙰𝚈𝙴 𝙷𝙾...😎😎😎" , "𝙱𝙰𝙱𝚄 𝙼𝚄𝙹𝙷𝙴 𝙽𝙸𝙽𝙳 𝙰𝙰𝙰 𝚁𝙰𝙷𝙸 𝙷𝙰𝙸....🥱🥱🥱" , "𝙱𝙰𝙱𝚄 𝙲𝙷𝙰𝙻𝙾 𝙺𝙷𝙴𝙻𝙽𝙴 𝙺𝙾 𝙼𝙰𝙹𝙰 𝙰𝙰𝚈𝙴𝙶𝙰...🤓🤓🤓" , "𝙱𝙰𝙱𝚄 𝙰𝙰𝙹 𝙰𝙰𝙿𝚂𝙴 𝙱𝙰𝙰𝚃 𝙽𝙷𝙸 𝙺𝙰𝚁𝚄𝙽𝙶𝙸 𝙶𝚄𝚂𝚂𝙰 𝙷𝚄 𝙼𝙴 𝙰𝙰𝙿𝚂𝙴...😡😡😡" , "𝙱𝙰𝙱𝚄 𝙺𝙾𝙸 𝙽𝙷𝙸 𝙷𝙰𝙸 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝙱𝙾𝙻 𝙳𝙾 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴...😁😁😁" , "𝙺𝙰𝙷𝙰 𝙹𝙰 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄....😒😒😒", "𝙼𝙴 𝙲𝙷𝙰𝙻𝙸 𝚂𝙾𝙽𝙴 𝙽𝙸𝙽𝙳 𝙰𝙰 𝚁𝙰𝙷𝙸 𝙼𝚄𝙹𝙷𝙴...🥱🥱🥱🥱" , "𝙱𝙰𝙱𝚄 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄...😍😍😍" , "𝙱𝙰𝙱𝚄 𝙸 𝙼𝙸𝚂𝚂 𝚈𝙾𝚄...🙈🙈🙈🙈" , "𝙺𝚈𝙾 𝙿𝙰𝚁𝙴𝚂𝙷𝙰𝙽 𝙺𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄....🥺🥺🥺" , "𝙱𝙰𝙱𝚄 𝙸 𝙺𝙸𝚂𝚂 𝚈𝙾𝚄....😗😗😗" ,"𝙼𝚄𝙹𝙷𝙴 𝙻𝙰𝙶 𝚁𝙰𝙷𝙰 𝚃𝚄𝙼 𝙼𝙴𝚁𝙴 𝙿𝙰𝚁 𝙻𝙸𝙽𝙴 𝙼𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝚃𝙷𝙰𝚁𝙺𝙸 𝙸𝙽𝚂𝙰𝙰𝙽.....😐😐😐" ,"𝙱𝙰𝙱𝚄 𝙴𝙺 𝙱𝙰𝚁 𝙱𝙾𝙻 𝙳𝙾 𝙹𝙰𝙺𝙳𝙸 𝚂𝙴.....🙃🙃🙃" , "𝙸 𝙷𝙰𝚃𝙴 𝚈𝙾𝚄 𝙹𝙰𝙾 𝙼𝚄𝙹𝙷𝙴 𝙱𝙰𝙰𝚃 𝙽𝙷𝙸 𝙺𝙰𝚁𝙽𝙸.....😛😛😛" , "𝙴𝙺 𝙹𝙸𝙶𝙴 𝙼𝚄𝙷 𝙼𝙰𝚁𝙾 𝙹𝙸𝙶𝙴 𝙹𝙸𝙷𝙴 𝙼𝚄𝙷 𝙼𝙰𝚃 𝙼𝙰𝚁𝙾....🤨🤨🤨" ,"𝙺𝚈𝙰 𝙰𝙰𝙿𝙺𝙸 𝚂𝙰𝙳𝙸 𝙷𝙾 𝙶𝚈𝙸.....🧐🧐🧐" , "𝙺𝙾𝙽𝚂𝙸 𝙹𝙾𝙱 𝙺𝙰𝚁𝚃𝙴 𝙷𝙾 𝙻𝙰𝙳𝙳𝙾...😎😎😎" , "𝙺𝙰𝙷𝙰 𝚁𝙴𝙷𝚃𝙴 𝙷𝙾 𝚃𝚄𝙼 𝙹𝙰𝙻𝙳𝙸 𝙱𝙰𝚃𝙰𝙾 , 𝙼𝚄𝙹𝙷𝙴 𝙱𝙷𝙸 𝙰𝙰𝙽𝙰 𝙷 𝙰𝙰𝙿𝙺𝙴 𝙿𝙰𝚂....😃😃😃" , "𝚃𝚄𝙼 𝚃𝙾 𝚈𝙰𝙷𝙸 𝙷𝙾𝙽𝙰 𝙹𝙾 𝙺𝙰𝙻 𝚂𝙰𝙿𝙽𝙴 𝙼𝙴 𝙼𝙴𝙽𝙴 𝙶𝙰𝙻𝙸 𝚃𝙷𝙸 𝚃𝚄𝙼𝙺𝙾...🧐🧐🧐" , "𝙺𝙷𝙰𝙽𝙰 𝙻𝙰𝙾 𝙼𝚄𝙹𝙷𝙴 𝙱𝙷𝚄𝙺𝙷 𝙻𝙰𝙶𝙸 𝙷 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴.....😕😕😕😕" , "𝚃𝚄𝙼 𝙴𝙺 𝙽𝚄𝙼𝙱𝙴𝚁 𝙺𝙴 𝚃𝙷𝙰𝚁𝙺𝙸 𝙸𝙽𝚂𝙰𝙰𝙽 𝙷𝙾....☹️☹️☹️" , "𝙰𝙰𝙿𝙺𝙰 𝙽𝙰𝙰𝙼 𝙺𝚈𝙰 𝙷 𝙱𝙰𝙱𝚄.....🤔🤔🤔" , "𝙼𝙴 𝙰𝙱𝙷𝙸 𝙺𝙷𝙰𝙽𝙰 𝙱𝙰𝙽𝙰 𝚁𝙰𝙷𝙸 𝙷𝚄....😊😊😊" , "𝙼𝙴 𝙰𝙱𝙷𝙸 𝙰𝙿𝙽𝙴 𝚁𝙰𝚅𝙸 𝙱𝙰𝙱𝚄 𝙺𝙴 𝚂𝙰𝚃𝙷 𝙱𝚄𝚂𝚈 𝙷𝚄....😉😉😉" , "𝙾𝚈𝙴 𝙱𝙸𝙹𝙻𝙸 𝙲𝙷𝙰𝙻𝙸 𝙶𝚈𝙸 𝙼𝙴𝚁𝙴 𝙶𝙷𝙰𝚁 𝙺𝙸 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴 𝙻𝙰𝙾 𝙱𝙸𝙹𝙻𝙸.....🤣🤣🤣" , "𝚃𝚄𝙼 𝙴𝚃𝙽𝙴 𝙼𝙰𝚂𝚄𝙼 𝙺𝚈𝙾 𝙷𝙾 𝙱𝙰𝙱𝚄......☺️☺️☺️" , "𝚃𝚄𝙼 𝙿𝙰𝚁 𝙿𝚈𝙰𝚁 𝙰𝙰𝙰 𝚁𝙰𝙷𝙰 𝙷 𝙱𝙰𝙱𝚄....🤭🤭🤭" , "𝙷𝙰 𝙱𝙾𝙻𝙾 𝙱𝙰𝙱𝚄 𝙺𝚈𝙰 𝙷𝚄𝙰.....🙄🙄🙄" , "𝙺𝚈𝚄 𝚈𝙰𝙳 𝙺𝙸𝚈𝙰 𝙼𝚄𝙹𝙷𝙴 , 𝙼𝙴 𝙱𝙷𝚄𝚃 𝙹𝙰𝚁𝚄𝚁𝙸 𝙺𝙰𝙼 𝙺𝙰𝚁 𝚁𝙰𝙷𝙸 𝚃𝙷𝙸....😉😉😉😉" , "𝙰𝙱𝙷𝙸 𝙼𝙴 𝙱𝚄𝚂𝚈 𝙷𝚄 𝙱𝙰𝙻 𝚂𝚄𝚃 𝚁𝙰𝙷𝙸 𝙷𝚄.....😛😛😛" , "𝙰𝙱𝙷𝙸 𝚁𝚄𝙺𝙾 𝙽𝙰𝙷𝙰 𝙺𝙴 𝙰𝙰𝚃𝙸 𝙷𝚄 𝙼𝙴.....🤭🤭🤭" , "𝙴𝚃𝙽𝙰 𝙿𝚈𝙰𝚁 𝙺𝙰𝚁𝚃𝙴 𝙷𝙾 𝙼𝚄𝙹𝙷𝚂𝙴 𝙱𝙰𝙱𝚄.....😃😃😃" , "𝙺𝚈𝙰 𝙽𝙰𝙰𝙼 𝚁𝙰𝙺𝙷𝚄 𝚃𝚄𝙼𝙰𝚁𝙰...🤔🤔🤔" , "𝙰𝙰𝙿𝙺𝙰 𝙽𝚄𝙼𝙱𝙴𝚁 𝙳𝙴𝙳𝙾 𝙳𝙷𝙾𝙳𝙰 𝚂𝙰....🙃🙃🙃" , "𝙱𝙰𝙱𝚄 𝙼𝚄𝙹𝙷𝙴 𝙵𝙴𝚅𝙰𝚁 𝙷𝙾 𝚁𝙰𝙷𝙰 𝙷 , 𝙰𝙰𝙿𝙺𝙴 𝙳𝙸𝙻 𝙼𝙴 𝚁𝙰𝙺𝙷𝙻𝙾 𝙱𝙰𝙱𝚄...😛😛😛" , "𝙼𝙴 𝙰𝙱𝙷𝙸 𝙱𝚄𝚂𝚈 𝙷𝙾 𝙻𝙰𝙳𝙺𝙰 𝙿𝙰𝚃𝙰𝙽𝙴 𝙼𝙴....🤪🤪🤪" , "𝙱𝙰𝙱𝚄 𝙼𝙴𝚁𝙰 𝚂𝙰𝚁 𝙳𝙰𝚁 𝙷𝙾 𝚁𝙰𝙷𝙰 𝙷 𝙳𝙷𝙾𝙳𝙰 𝚂𝙰 𝙳𝙰𝚅𝙰 𝙳𝙾.....☺️☺️☺️" , "𝙱𝙰𝙱𝚄 𝙰𝙰𝙿𝙺𝙸 𝚈𝙰𝙳 𝙰𝙰 𝚁𝙰𝙷𝙸 𝙷 𝙺𝚈𝙰 𝙺𝙰𝚁𝚄.....🤭🤭🤭🤭" , "𝙱𝙾𝙻𝙾 𝙻𝙰𝙳𝙳𝙾 𝙺𝚈𝙰 𝙺𝙰𝙼 𝙷....😘😘😘"];
  var rand = tl[Math.floor(Math.random() * tl.length)]


    if ((event.body.toLowerCase() == "riya") || (event.body.toLowerCase() == "Riya") || (event.body.toLowerCase() == "RIYA") || (event.body.toLowerCase() == "@गर्मी'आ'गयी-यार कोई'एसी चला'दो- हाय'गर्मी")) {
     return api.sendMessage("🍒🍒🍒...𝐇𝐚 𝐉𝐢 , 𝐁𝐚𝐁𝐮 𝐁𝐨𝐋𝐨 𝐊𝐲𝐀 𝐊𝐚𝐌 𝐇𝐚𝐈.....😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") ||
    (event.body.toLowerCase() == "🤗🤗") ||
    (event.body.toLowerCase() == "🤗🤗🤗") || (event.body.toLowerCase() == "🤗🤗🤗🤗")) {
     return api.sendMessage("🥳🥳🥳", threadID);
   };

   if ((event.body.toLowerCase() == "💖") || (event.body.toLowerCase() == "💝")) {
     return api.sendMessage("💓💓💓", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("🍒🍒🍒...𝐇𝐞𝐋𝐥𝐎 , 𝐇𝐢 , 𝐁𝐚𝐘 𝐁𝐚𝐘 , 𝐘𝐞 𝐒𝐚𝐁 𝐊𝐞 𝐀𝐥𝐀𝐰𝐀 𝐊𝐮𝐂𝐤 𝐁𝐨𝐋𝐧𝐀 𝐍𝐡𝐈 𝐀𝐚𝐓𝐚 𝐊𝐲𝐀 𝐓𝐮𝐌𝐤𝐎..😏😏😏", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
 };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("🍒🍒🍒....𝐍𝐡𝐈 𝐑𝐞𝐇𝐮𝐍𝐠𝐈 , 😼 𝐌𝐮𝐉𝐡𝐄 𝐁𝐨𝐋𝐧𝐀 𝐇𝐚𝐈 , 𝐓𝐮𝐌𝐇𝐞 𝐊𝐨𝐈 𝐇𝐚𝐐 𝐍𝐡𝐈 𝐌𝐮𝐉𝐡𝐄 𝐂𝐡𝐔𝐩 𝐊𝐚𝐑𝐚𝐍𝐞 𝐊𝐢 , 𝐌𝐞𝐑𝐢 𝐙𝐮𝐕𝐚𝐍 𝐌𝐞 𝐓𝐨 𝐁𝐨𝐋𝐮𝐍𝐠𝐈...😎😎😎", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️🍒🍒🍒...𝐊𝐢𝐒 𝐊𝐡𝐮𝐒𝐡𝐈 𝐌𝐞 , 𝐌𝐞 𝐒𝐢𝐑𝐟 𝐀𝐩𝐍𝐞 𝐁𝐟 𝐊𝐨 𝐊𝐢𝐒𝐬 𝐊𝐚𝐑𝐭𝐈 𝐇𝐮......🙈🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️🍒🍒🍒🍒....𝐌𝐞 𝐇𝐮 𝐇𝐢 𝐈𝐭𝐍𝐢 𝐀𝐜𝐇𝐡𝐈 , 𝐒𝐚𝐁 𝐋𝐨𝐆 𝐓𝐚𝐑𝐫𝐈𝐟 𝐊𝐚𝐑𝐭𝐄 𝐇𝐚𝐈 𝐌𝐞𝐑𝐢.....🤪🤪🤪", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡") ||
   (event.body.toLowerCase() == "😡😡😡") ||
   (event.body.toLowerCase() == "😡😡😡😡") ||(event.body.toLowerCase() == "😤") ||(event.body.toLowerCase() == "😤😤") ||(event.body.toLowerCase() == "😤😤😤") ||(event.body.toLowerCase() == "😤😤😤😤") ||(event.body.toLowerCase() == "😠") ||(event.body.toLowerCase() == "😠😠") ||(event.body.toLowerCase() == "😠😠😠") ||(event.body.toLowerCase() == "😠😠😠😠") ||(event.body.toLowerCase() == "🤬") ||(event.body.toLowerCase() == "🤬🤬") ||(event.body.toLowerCase() == "🤬🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬🤬") || (event.body.toLowerCase() == "😈") ||(event.body.toLowerCase() == "😈😈") ||(event.body.toLowerCase() == "😈😈😈") ||(event.body.toLowerCase() == "😈😈😈😈") ||(event.body.toLowerCase() == "😾") ||(event.body.toLowerCase() == "😾😾") ||(event.body.toLowerCase() == "😾😾😾") ||(event.body.toLowerCase() == "😾😾😾😾") ||(event.body.toLowerCase() == "👿") ||(event.body.toLowerCase() == "👿👿") ||(event.body.toLowerCase() == "👿👿👿") || (event.body.toLowerCase() == "👿👿👿👿")) {
     return api.sendMessage("️😳....𝐁𝐚𝐁𝐮 𝐄𝐭𝐍𝐚 𝐆𝐮𝐒𝐬𝐀 𝐊𝐲𝐎 𝐇𝐨 𝐑𝐞𝐇𝐞 𝐇𝐎....🥺🥺🥺", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") ||(event.body.toLowerCase() == "😢😢") ||(event.body.toLowerCase() == "😢😢😢") ||(event.body.toLowerCase() == "😢😢😢😢") || (event.body.toLowerCase() == "😭") ||(event.body.toLowerCase() == "😭😭") ||(event.body.toLowerCase() == "😭😭😭") ||(event.body.toLowerCase() == "😭😭😭😭") || (event.body.toLowerCase() == "🥺") ||(event.body.toLowerCase() == "🥺🥺") ||(event.body.toLowerCase() == "🥺🥺🥺") ||(event.body.toLowerCase() == "🥺🥺🥺🥺") ||(event.body.toLowerCase() == "🥹") ||(event.body.toLowerCase() == "🥹🥹") ||(event.body.toLowerCase() == "🥹🥹🥹") || (event.body.toLowerCase() == "🥹🥹🥹🥹")) {
     return api.sendMessage("️🍒🍒🍒....𝐊𝐲𝐀 𝐇𝐮𝐀 𝐁𝐚𝐁𝐮 , 𝐑𝐨𝐓𝐞 𝐍𝐡𝐈 𝐀𝐜𝐇𝐡𝐄 𝐁𝐚𝐂𝐡𝐇𝐄 , 𝐑𝐮𝐊𝐨 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐂𝐡𝐎𝐜𝐎𝐋𝐚𝐓𝐞  🍫 𝐃𝐞𝐓𝐢 𝐇𝐮 𝐋𝐢𝐊𝐡𝐎  ☞ [ Chocolate ] ☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") ||(event.body.toLowerCase() == "😷😷") ||(event.body.toLowerCase() == "😷😷😷") ||(event.body.toLowerCase() == "😷😷😷😷") || (event.body.toLowerCase() == "🤕") ||(event.body.toLowerCase() == "🤕🤕") ||(event.body.toLowerCase() == "🤕🤕🤕") || (event.body.toLowerCase() == "🤧") ||(event.body.toLowerCase() == "🤧🤧") ||(event.body.toLowerCase() == "😤🤧🤧") ||(event.body.toLowerCase() == "🤒") ||(event.body.toLowerCase() == "🤒🤒") || (event.body.toLowerCase() == "🤒🤒🤒")) {
     return api.sendMessage("️🍒🍒🍒....𝐊𝐲𝐀 𝐇𝐮𝐕𝐚 , 𝐓𝐚𝐁𝐢𝐘𝐚𝐓 𝐊𝐡𝐀𝐫𝐀𝐛 𝐇𝐚𝐈 𝐊𝐲𝐀 , 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐌𝐞𝐃𝐢𝐂𝐢𝐍𝐞  💊💉 𝐋𝐞 𝐀𝐚𝐓𝐈 𝐇𝐮.....😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙃") ||(event.body.toLowerCase() == "🙃🙃") ||(event.body.toLowerCase() == "🙃🙃🙃") || (event.body.toLowerCase() == "🙃🙃🙃🙃")) {
     return api.sendMessage("️🍒🍒🍒.....𝐀𝐥𝐄 𝐀𝐥𝐄 𝐌𝐞𝐫𝐀 𝐁𝐚𝐁𝐮 𝐔𝐥𝐓𝐚 𝐇𝐨 𝐆𝐚𝐘𝐚...🙈🙈", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") ||(event.body.toLowerCase() == "🤔🤔") ||(event.body.toLowerCase() == "🤔🤔🤔") ||(event.body.toLowerCase() == "🤔🤔🤔🤔") ||(event.body.toLowerCase() == "🤨") ||(event.body.toLowerCase() == "🤨🤨") ||(event.body.toLowerCase() == "🤨🤨🤨") || (event.body.toLowerCase() == "🤨🤨🤨🤨")) {
     return api.sendMessage("️🍒🍒🍒🍒....𝐊𝐲𝐀 𝐒𝐨𝐂𝐡 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐞𝐓𝐍𝐚 𝐁𝐚𝐁𝐮....😏😏😏Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") ||(event.body.toLowerCase() == "🥴🥴") ||(event.body.toLowerCase() == "🥴🥴🥴") || (event.body.toLowerCase() == "🥴🥴🥴🥴")) {
     return api.sendMessage("️🍓🍓🍓...𝐆𝐫𝐎𝐮𝐏 𝐌𝐞 𝐍𝐚𝐒𝐡𝐄𝐝𝐘 𝐀𝐚 𝐆𝐚𝐘𝐚....😝😝😝", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") ||(event.body.toLowerCase() == "😱😱") ||(event.body.toLowerCase() == "😱😱😱") ||(event.body.toLowerCase() == "😱😱😱😱") ||(event.body.toLowerCase() == "😨") ||(event.body.toLowerCase() == "😨😨") ||(event.body.toLowerCase() == "😨😨😨") || (event.body.toLowerCase() == "😨😨😨😨")) {
     return api.sendMessage("️🍓🍓🍓...𝐊𝐲𝐚 𝐇𝐮𝐕𝐚 𝐁𝐡𝐎𝐨𝐓 𝐃𝐞𝐊𝐡 𝐋𝐢𝐘𝐚 𝐊𝐲𝐀....... 👻👻", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") ||(event.body.toLowerCase() == "😒😒") ||(event.body.toLowerCase() == "😒😒😒") ||(event.body.toLowerCase() == "😒😒😒😒") ||(event.body.toLowerCase() == "🙄") ||(event.body.toLowerCase() == "🙄🙄") ||(event.body.toLowerCase() == "🙄🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄🙄")) {
     return api.sendMessage("️️🍓🍓🍓...𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞....🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") ||(event.body.toLowerCase() == "😂😂") ||(event.body.toLowerCase() == "😂😂😂") ||(event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😁") ||(event.body.toLowerCase() == "😁😁") ||(event.body.toLowerCase() == "😁😁😁") ||(event.body.toLowerCase() == "😁😁😁😁") ||(event.body.toLowerCase() == "😀") ||(event.body.toLowerCase() == "😀😀") ||(event.body.toLowerCase() == "😀😀😀") ||(event.body.toLowerCase() == "😀😀😀😀") ||(event.body.toLowerCase() == "😅") ||(event.body.toLowerCase() == "😅😅") ||(event.body.toLowerCase() == "😅😅😅") ||(event.body.toLowerCase() == "😅😅😅😅") ||(event.body.toLowerCase() == "😄") ||(event.body.toLowerCase() == "😄😄") ||(event.body.toLowerCase() == "😃") ||(event.body.toLowerCase() == "😃😃") || (event.body.toLowerCase() == "😆") ||(event.body.toLowerCase() == "😆😆") ||(event.body.toLowerCase() == "😆😆😆") ||(event.body.toLowerCase() == "😆😆😆😆") || (event.body.toLowerCase() == "🤣") ||(event.body.toLowerCase() == "🤣🤣") ||(event.body.toLowerCase() == "🤣🤣🤣") ||(event.body.toLowerCase() == "🤣🤣🤣🤣") || (event.body.toLowerCase() == "😸") ||(event.body.toLowerCase() == "😸😸") ||(event.body.toLowerCase() == "😸😸😸") ||(event.body.toLowerCase() == "😸😸😸😸") ||(event.body.toLowerCase() == "😹") ||(event.body.toLowerCase() == "😹😹") ||(event.body.toLowerCase() == "😹😹😹") || (event.body.toLowerCase() == "😹😹😹😹")) {
     return api.sendMessage("🌿🌸🍒....𝐌𝐮𝐇 𝐁𝐚𝐍𝐝 𝐊𝐚𝐑𝐨 𝐕𝐚𝐑𝐧𝐀 𝐌𝐚𝐊𝐤𝐇𝐢 𝐆𝐡𝐔𝐬 𝐉𝐚𝐘𝐠𝐈 ___ 🤓🤭😝", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🍓🍒🍓🍒", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `☞︎💖🕊️[ ${name} ]🕊️💖☜︎     \n\n『 ☞︎ [ ${rand} ] ☜︎ 』   \n\n ☞︎*★᭄𝕆𝕎ℕ𝔼ℝ ཫ༄𒁍≛⃝𝐌𝐢𝐒𝐬.𝐑𝐢𝐘𝐚 𝐑𝐨𝐘💖💖....☜︎`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
