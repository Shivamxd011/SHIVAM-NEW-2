//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "mata",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("mata") ||
     react.includes("Mata") || react.includes("COLdrink") || react.includes("ColdRINk") ||
react.includes("MATA") ||
react.includes("mAtA")) {
		var msg = {
				body: `💜|| 💖⎯⎯❥ Jai mata di ❥⎯⎯💖 ||💜`,attachment: fs.createReadStream(__dirname + `/noprefix/mata.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
,sher.mp4
