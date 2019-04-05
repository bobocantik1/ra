const Discord = require("discord.js") 
const settings = require("./your_settings.json");
const bot = new Discord.Client()
const prefix = settings.prefix;
const client = new Discord.Client()
const antispam = require("./antispam.js");

///const clear = require("./clear.js");
const embed = require("./embed.js");
const spam = require("./spam.js");


bot.on('ready', async => {
console.log("Bot Melucur!" + "\n" + bot.user.tag + "\n" + "Server Count: "  + bot.guilds.size + "\n" + "Cached users: " + bot.users.size + "\n" + "Bot Berhasil Tapi tetap Periksa Aplikasi Termux jika bot mati dan hidupkan ulang!")

bot.user.setActivity("Capsul_FLY Sever", {type: "LISTENING"});

let activNum = 0;
setInterval(function() {
	if (activNum === 0) {
		bot.user.setActivity("_help l Bantuan", {type: "LISTENING"});
		activNum = 1;
	 }else if(activNum === 1) {
		bot.user.setActivity("AUTO BANNED",{type: "STREAMING"});
		activNum = 0;
		
		}
}, 5000 );


	
});




 

///ini untuk pesan auto respon,bisa juga di ubah di bagian 'ping' sama "pong" atau bisa juga di tambah dengan cara di copas 
bot.on('message', message => {
	if (message.content === 'ping') {
	message.reply("pong");
	}
});


bot.on('message', message => {
	if (message.content === 'ping') {
	message.reply("pong");
	}
});


bot.on('message', message => {
	if (message.content === '👀') {
	message.reply("Ada pelangi dibola matamu 👀😍");
	}
});





bot.on('message', message => {
	if (message.content === 'Pagi') {
	message.reply("pagi juga jangan lupa sarapan yahh..... ");
	}
});



bot.on('message', message => {
	if (message.content === 'Bacot') {
	message.reply("Fuck you mameennnn.....🖕");
	}
});


bot.on('message', message => {
	if (message.content === 'Siang') {
	message.reply("Siang juga mblo 😂..... ");
	}
});


bot.on('message', message => {
	if (message.content === 'Sore') {
	message.reply("Sore juga jangan lupa mandi sayang 😘..... ");
	}
});



bot.on('message', message => {
	if (message.content === 'Malam') {
	message.reply("Malam juga kak jangan begadang muluyah..... ");
	}
});


bot.on('message', message => {
	if (message.content === 'Mabar') {
	message.reply("Ayo, tapi Nob kakk.... 😭");
	}
});


bot.on('message', message => {
	if (message.content === 'Jomblo') {
	message.reply("Ciee jombloo,,, Mau ngga jadi pacar akuu...?");
	}
});


bot.on('message', message => {
	if (message.content === 'Kambing') {
	message.reply("Kamu sapi 😤");
	}
});


bot.on('message', message => {
	if (message.content === 'Hai') {
	message.reply("Haiii Tayooo Haaii tayooo");
	}
});

bot.on('message', message => {
	if (message.content === 'Hay') {
	message.reply("Hayy tayooo.. hayy tayooo");
	}
});

bot.on('message', message => {
	if (message.content === 'Dimana?') {
	message.reply("Dimana mana hatiku senang 😆");
	}
});

bot.on('message', message => {
	if (message.content === 'Sakit') {
	message.reply("Sepertinya kamu butuh Capsul_FLY 💊💊💊");
	}
});

bot.on('message', message => {
	if (message.content === 'Tidur') {
	message.reply("Selamat Tidur semoga mimpi indah 😪");
	}
});

bot.on('message', message => {
	if (message.content === 'Ngantuk') {
	message.reply("Kamu tidur ntar kamu sakit 😭");
	}
});


bot.on('message', message => {
	if (message.content === 'Halo') {
	message.reply("Halo juga jomblo 😄");
	}
});


bot.on('message', message => {
	if (message.content === 'Hy') {
	message.reply("Hayyy taayoooo.. hayy tayoo...");
	}
});



bot.on('message', message => {
	if (message.content === '😂') {
	message.reply("Tertawalah sebelum tertawa itu dilarang");
	}
});

bot.on('message', message => {
	if (message.content === '😭') {
	message.reply("Jangan bersedih ada aku disini");
	}
});


bot.on('message', message => {
	if (message.content === 'Lapar') {
	message.reply("Yahh makanlah jomblo... 😪");
	}
});



bot.on('message', message => {
	if (message.content === '👍') {
	message.reply("Kamu lagi nyabun yah?? ");
	}
});


bot.on('message', message => {
	if (message.content === '🍌') {
	message.reply("Monyet lagi laper?");
	}
});


bot.on('message', message => {
	if (message.content === '🙈') {
	message.reply("Eeehh ada Monyetttt.....");
	}
});


bot.on('message', message => {
	if (message.content === '🙊') {
	message.reply("Aduh nafasmu bau Nyet");
	}
});


bot.on('message', message => {
	if (message.content === 'Pantek') {
	message.reply("Bodo Amat");
	}
});


bot.on('message', message => {
	if (message.content === 'Anjing') {
	message.reply("Kamu Babiii");
	}
});




bot.on('message', message => {
	if (message.content === 'Suapin') {
	message.reply("Sini aku suapin pake Panci level 4");
	}
});


bot.on('message', message => {
	if (message.content === 'Kampret') {
	message.reply("Palamu yang kampret 😤");
	}
});








///ini bot login dan akan di arahkan ke script your_setting.json jangan di ubah kalo belum mengerti!

bot.login(settings.token).catch(err=> console.log("Incorrect Token was provided"))
