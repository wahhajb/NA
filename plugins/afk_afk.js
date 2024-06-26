//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *مختفي* 
أنت الآن غائب حتى ترسل رسالة 
▢ *المستخدم:* ${conn.getName(m.sender)} 
▢ *السبب:* ${text ? text : ''}
  *بنشتاق لك 🥺♥️*`)
}
handler.help = ['afk <reason>']
handler.tags = ['fun']
handler.command = ['اختفاء', 'غياب']
handler.group = true

export default handler
