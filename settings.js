//════════════════════════════//
//Recode By ArullOfc 
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //autoketik otomatis di gc (true buat on, false buat off)
global.autoreadpmngc = false //pembacaan otomatis di pc (true to buat on, false buat off)
global.autoReadGc = false //pembacaan otomatis di gc (true to on, false to off)
global.autoRecord = false //perekaman otomatis (true to on, false to off)
global.available = true //tanda online (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['916909137213'] //ur owner number
global.ownername = "🦄Dream Guy Xeon" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.owner = ['916909137213']
global.ownertag = '916909137213' //ur tag number
global.botname = 'Cheems Bot MD V4' //ur bot name
global.linkz = "https://youtu.be/WiIqCdiDjFo" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WiIqCdiDjFo" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Cheems Bot Stickers\n\n\n\n\n\n\n\n\n\n\n🦄🦄🦄 " //ur sticker watermark packname
global.author = "🦄Dream Guy Xeon" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['916909137213'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Selesai ✓',
    admin: 'Fitur Ini Hanya Untuk Admin!',
    botAdmin: 'Bot Harus Admin Dulu!',
    owner: 'Fitur Ini Hanya Untuk Pemilik!',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur Hanya Digunakan Untuk Obrolan Pribadi!',
    bot: 'Fitur Ini Hanya Untuk Bot',
    wait: 'Dalam proses...',
    linkm: 'Mana linknya?',
    error: 'Kesalahan!!',
    endLimit: 'Batas Harian Anda Telah Kedaluwarsa, Batas Akan Direset Setiap 12 Jam',
    ban: 'Anda telah diblokir oleh pemiliknya, jika Anda ingin diblokir, chat pemilik.',
    nsfw: 'Fitur nsfw belum diaktifkan, silahkan hubungi admin untuk aktivasi',
    banChat: 'Bot diblokir di grup ini, harap hubungi pemiliknya untuk membatalkan pemblokiran'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
