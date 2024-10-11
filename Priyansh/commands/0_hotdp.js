module.exports.config = {
  name: "hotdp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Riya Roy",
  description: "Hot Dp photos",
  commandCategory: "Random-IMG",
  usages: "Hot dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/BsKrmEp.jpeg" , "https://i.imgur.com/ef9ABG1.jpeg" ,
"https://i.imgur.com/KIqZz9s.jpeg" , "https://i.imgur.com/S5CfuuO.jpeg" ,
"https://i.imgur.com/rHaoFch.jpeg" , "https://i.imgur.com/efTbSbg.jpeg" ,
"https://i.imgur.com/CfcaCsi.jpeg" , "https://i.imgur.com/j7UiJiK.jpeg" ,
"https://i.imgur.com/sfFWLVH.jpeg" , "https://i.imgur.com/YY4181J.jpeg" ,
"https://i.imgur.com/uG3WlL4.jpeg" , "https://i.imgur.com/jFg5ueV.jpeg" , "https://i.imgur.com/31nFKgI.jpeg" ,"https://i.imgur.com/mHfxb57.jpeg" ,
"https://i.imgur.com/M1RfVbL.jpeg" , "https://i.imgur.com/L8H8rcB.jpeg" ,
"https://i.imgur.com/hR1Dqte.jpeg" , "https://i.imgur.com/zSpZjzY.jpeg" ,
"https://i.imgur.com/mbXmYUZ.jpeg" , "https://i.imgur.com/ITNaGSK.jpeg" ,
"https://i.imgur.com/fehmU4K.jpeg" , "https://i.imgur.com/eVaJyEr.jpeg" ,
"https://i.imgur.com/2XEsHa6.jpeg" , "https://i.imgur.com/4BZbgaq.jpeg" , "https://i.imgur.com/nSvZDYb.jpeg" ,"https://i.imgur.com/XxFHgDU.jpeg" ,
"https://i.imgur.com/0slhqL8.jpeg" , "https://i.imgur.com/08pyUvV.jpeg" ,
"https://i.imgur.com/Dr1MARQ.jpeg" , "https://i.imgur.com/qpGddAx.jpeg" ,
"https://i.imgur.com/57cQZd6.jpeg" , "https://i.imgur.com/TPvOVqI.jpeg" ,
"https://i.imgur.com/f6pNGAd.jpeg" , "https://i.imgur.com/D0s1Vbu.jpeg" ,
"https://i.imgur.com/gEgJoxh.jpeg" , "https://i.imgur.com/OhO4Yec.jpeg" , "https://i.imgur.com/h6jGBOZ.jpeg" ,"https://i.imgur.com/7UWiV7E.jpeg" ,
"https://i.imgur.com/hxozVTz.jpeg" , "https://i.imgur.com/dAmhPIS.jpeg" ,
"https://i.imgur.com/4LaJETa.jpeg" , "https://i.imgur.com/km0lKVa.jpeg" ,
"https://i.imgur.com/zbqqX8y.jpeg" , "https://i.imgur.com/zNuOsf4.jpeg" ,
"https://i.imgur.com/THCKCsC.jpeg" , "https://i.imgur.com/ZcrQ6QL.jpeg" ,
"https://i.imgur.com/5Jnz04T.jpeg" , "https://i.imgur.com/XyKCwzm.jpeg" , "https://i.imgur.com/pGEgjqH.jpeg" ,"https://i.imgur.com/rm9u5E1.jpeg"
     ];
     var callback = () => api.sendMessage({body:`🕊️🍓𝗢𝘄𝗻𝗲𝗿÷ 𝗥𝗶𝗬𝗮 𝗥𝗼𝗬🍓🕊️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
   
