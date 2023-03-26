
const { fetchJson, cmd, citel } = require('../lib')

cmd({

            pattern: "ss",

            desc: "web ss",

            

            react: "📸",

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return

const webss = await fetchJson(`https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}`)

            citel.reply (`*Screenshot is taking, please wait...*`)

       Void.sendMessage(citel.chat, {

                image: {

                    url: `https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}` ,

                },

                caption: `● ᴘᴏᴡᴇʀᴅ ʙʏ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ`,

            }, {

                quoted: citel,

            });

 }

)
