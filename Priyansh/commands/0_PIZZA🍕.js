const fs = require("fs");
module.exports.config = {
	name: "pizza",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "pizza",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pizza")==0 || event.body.indexOf("Pizza")==0 || event.body.indexOf("PIZZA")==0 || event.body.indexOf("PIZZAA")==0) {
		var msg = {
				body: "😁𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐏𝐈𝐙𝐙𝐀🤟😁",
				attachment: fs.createReadStream(__dirname + `/cache/pizza.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }