import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('*اكتب ما تريد البحث عنه في بنترست*.\n\n`مثال:`\n' + `> *${usedPrefix + command}* سوكونا`)
await m.react('🕓')
try {
let { dl_url } = await Starlights.pinterest(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» النتيجه* : ${text}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['pinterest *<búsqueda>*']
handler.tags = ['img']
handler.command = ['بين']
handler.register = true 
//handler.limit = 1
export default handler
