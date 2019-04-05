const Discord = require("discord.js");
const client = new Discord.Client()
const antispam = require("discord-anti-spam");
const settings = require("./your_settings.json");



client.on('ready', () => {


	antispam(client, {

		warnBuffer: 3,

		maxBuffer: 5,

		interval: 1000,

		warningMessage: "⚠️ PERINGATAN SPAM ⚠️ MOHON UNTUK TIDAK MELAKUKAN SPAM ! SANKSI BANNED PERMANENT⛔⛔ @here",

		maxDuplicatesWarning: 3,

		maxDuplicatesBan: 5,

		deleteMessageAfterBanForPastDay: 7,

		exemptRoles: ["✪✪✪✪✪🔱️ Co Leader 🔱✪✪✪✪✪", "✪✪👑 Big Family Capsul_FLY 👑✪✪"],

		exemptUser: [],

});


});



client.on('message', msg => {


  client.emit('checkMessage', msg);

}) ///GANTI TOKEN NYA SAMA BOT TOKEN KAMU 
client.login(settings.token);
