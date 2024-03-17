//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owner v card
global.ytname = "YT: WHITE444 YT" //ur yt chanel name
global.socialm = "GitHub: Wota777FF" //ur github or insta name
global.location = "Mena, Morocco, Casablanca" //ur location

//new
global.botname = '亗『ＧＥＥ』亗' //ur bot name
global.ownernumber = '254757422843' //ur owner number
global.ownername ='𝕲⃟𝕰⃟𝕰⃟' //ur owner name
global.websitex = "https://youtu.com/@WHITE444_YT"
global.wagc = "https://chat.whatsapp.com/DSQwxQR6Nww8cM5SDZbLNl"
global.themeemoji = '😂'
global.wm = "G͜͡E͜͡E͜͡"
global.botscript = 'https://github.com/Geemkuu/Vortex99' //script link
global.packname = "Powered by"
global.author = "𝑔𝑒𝑒"
global.creator = "254794286079@s.whatsapp.net"
global.xprefix = '¶'
global.premium = ["254757422843"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v7' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '234' //set autoblock country code
global.antiforeignnumber = '234' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: '*Limit Exceeded*',
	nsfw: '*Nsfw Disabled, Ask admin to enable.*',
    done: '*Succeed*',
    error: 'Error',
    success: 'ㅤ'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
