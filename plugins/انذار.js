
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `🐦 منشن على شخص\n\n📌 مثال : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `🗿 لم يتم العثور على المستخدم في قاعده بياناتي`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *تم تحذير مستخدم* ⚠️

▢ *الادمن:* ${name}
▢ *اليوزر:* @${who.split`@`[0]}
▢ *يحذر:* ${warn + 1}/${war}
▢ *السبب:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *انتبه* ⚠️
لقد تلقيت تحذيراً من احد المشرفين

▢ *يحذر:* ${warn + 1}/${war} 
اذ تلقيت *${war}* اخر سوف يتم ازالتك من المجموعه`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ تجاوز العضو *${war}* وبالتالي ستتم ازالته وفق القانون الجمهوري الماده رقم 521`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ You were removed from the group *${groupMetadata.subject}* because you have been warned *${war}* times`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['انذار'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
