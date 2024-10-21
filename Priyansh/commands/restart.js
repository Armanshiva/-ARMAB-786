module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "manhIT",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐁𝐎𝐓 𝐈𝐒 𝐑𝐄𝐒𝐓𝐒𝐓  🤖 👈 ●============================================================●𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐎 𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈 𝐁𝐎𝐓 😇👈
=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 ꧁⃝FAIZ ANS⃔⃔⃔⃔⃔⃔⃔ARI⃝🪽 🌹
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 👈👈👈👈👈 ____________𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈 :- ☞ https://www.facebook.com/profile.php?id=100082052205053
●============================================================● 𝐁𝐎𝐓 𝐑𝐄𝐒𝐓𝐒𝐓 𝐇𝐎 𝐑𝐄𝐇𝐀 𝐇𝐀𝐈 𝐏𝐋𝐙 𝐖𝐀𝐈𝐓`, threadID, () => process.exit(1));
}