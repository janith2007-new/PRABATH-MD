const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94727785006")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'realshaggy2007@gmail.com'
global.github = 'https://github.com/janith2007-new/janith2007-new'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94727785006'
global.devs = '94762280384';
global.website = 'https://github.com/janith2007-new/janith2007-new' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.ibb.co/vmX8H62/Snapchat-311401332.jpg'
module.exports = {
  botname: process.env.BOT_NAME || 'ᴍͥ ʀ  ᴊ ᴀᷧɴⷨ ɪ ⁰⁰⁶ 🕵🏻‍♂️🔨',
  botapikey: process.env.BOTCAHX_API || '',
  alivepic: process.env.ALIVE_IMG || 'https://i.ibb.co/vmX8H62/Snapchat-311401332.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*The bot developer is ᴍͥ ʀ  ᴊ ᴀᷧɴⷨ ɪ ⁰⁰⁶ 🕵🏻‍♂️🔨* 🎊',
  ownername:process.env.OWNER_NAME || 'ᴍͥ ʀ  ᴊ ᴀᷧɴⷨ ɪ ⁰⁰⁶ 🕵🏻‍♂️🔨',
  sessionName: process.env.SESSION_ID || 'PRABATH-MD::UFJBQkFUSC1NRDo6c2Vzc2lvbl9yYV8xNmY5YjZiZGI3ZWQwMV92aTo6SW5ub2NlbnRNYXJnaW5zCjo6MTA2NmUyMzQ4MWRhZDk1YjBmNjRiNWNmMWJlOA==',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '+94',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'warn',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
