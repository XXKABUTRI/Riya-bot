module.exports.config = {
  name: "pair",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "riya Roy",
  description: "0Pairing",
  commandCategory: "Love", 
  usages: "pair", 
  cooldowns: 0
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        // var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money < 1) api.sendMessage("You need 500 USD for 1 pairing, please use ${global.config.PREFIX}work to received money or ask for admin bot!\n🤑Theres something new to eat🤑",event.threadID,event.messageID)
        else {
         var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        // api.changeNickname(`😘👉🔐🔐 ${name} Property 🔐🔐👈😘`, event.threadID, event.senderID);
        // api.changeNickname(`😘👉🔐🔐 ${namee} Property🔐🔐👈😘`, event.threadID, id);
        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍🦰" : "Trần Đức Bo";
        // Currencies.setData(event.senderID, options = {money: money - 500})
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

          let gifLove = (await axios.get( `https://i.imgur.com/MBETCWy.gif`, { responseType: "arraybuffer" } )).data; 
              fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body:`🩵💙💜‎‎[•||•●•||•┼┼─💖𝐓ʋ𝗺𝘀𝗮 𝐊❍ıı 𝐏ɣ𝗮𝗮ɽ𝗮 𝐊❍ıı  𝐌𝗮𝘀❍𝗺 𝐍𝗮Ħıı 𝐇𝐚ıı•||•🐬•||•]]\n✧═════════•❁❀❁•═════════✧\n😍😍🤩┼┼──💖🌿𝐓ʋ𝗺 𝐉𝗮𝗮η  𝐇❍ 𝐌ƏɽƏ 𝐓ʋ𝗺ĦƏ 𝐌𝗮ɭʋ𝗺 𝐍𝗮Ħıı 𝐇𝐚ıı•||•🌸•||• ]]\n✧═════════•❁❀❁•═════════✧\n𝗟𝗼𝘃𝗲 𝗥𝗮𝘁𝗶𝗼 :❣️[ ${tle} ]❤️‍🩹💫\n✧═════════•❁❀❁•═════════✧\n`+namee+" "+"💖"+" "+name, mentions: arraytag, attachment: imglove}
        // var msg = {body: `🥰Successful pairing!\n💌Wish you two hundred years of happiness\n💕Double ratio: ${tle}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}  
         return api.sendMessage(msg, event.threadID, event.messageID)
      }
}
