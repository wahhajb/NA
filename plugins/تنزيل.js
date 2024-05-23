let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*الاستخدام الصحيح*\n\n*┯┷*\n*┠≽ ${usedPrefix}تنزيل @tag*\n*┠≽ ${usedPrefix}تنزيل -> رد على الرساله*\n*┷┯*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] الرقم الذي تم ادخاله غير صحيح*`, m)
  
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.reply(m.chat, `*[ ✅ ] تم تخفيضه عضو*`, m)
}}
handler.help = ['*593xxx*','*@usuario*','* تم*'].map(v => 'demote ' + v)
handler.tags = ['group']
handler.command = /^(تخفيض|تنزيل|نزل)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
