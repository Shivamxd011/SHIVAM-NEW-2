 const fs = require("fs");
module.exports.config = {
	name: "owner",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("boss") ||
     react.includes("virat") || 
react.includes("owner")) {
		var msg = {
				body: " ~░⃟❘꯭꯭❈꯭🔱꯭ 𝗛꯭𝝰፝֯֟‌𝐫꯭ 𖤓꯭ 𝗛꯭𝝰፝֯֟‌꯭𝗿꯭ 𖤓꯭ 𝝡꯭𝝰꯭𝗵‌֟֯፝𝝰꯭𝝳꯭𝞊‌꯭֟֯፝𝝼꯭ 🕉𝄄꯭❈꯭❘⃟꯭░꯭~*_2️⃣0️⃣2️⃣5️⃣ 󱢏__Ξ⤹³🍷𝗗๏𝐠𝗟𝗲 𝗟๏𝐠 𝗗𝐮ɼ 𝐑𝐚ⴙ𝗲 RƏmƏmbƏr 𝐌Ə ||❣️— ༢།धे कृष्णा | 👀__★𝐎𝐖𝐍𝐄𝐑 ✯ 𝐒𝐇𝐈𝐕𝐀𝐌  𝐒𝐀𝐈𝐍𝐈...❤️__●__𝐅𝐁 𝐋𝐈𝐍𝐊-https://www.facebook.com/profile.php?id=61582547945474",attachment: fs.createReadStream(__dirname + `/noprefix/owner.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
