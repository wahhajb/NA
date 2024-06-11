
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ منشن على شخص\n\n📌 مثل : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `😀 المستخدم ليس في قاعده البيانات`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *تحذير مستخدم* ⚠️

▢ *الادمن:* ${name}
▢ *المستخدم:* @${who.split`@`[0]}
▢ *الانذارات:* ${warn + 1}/${war}
▢ *السبب:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *انتبه* ⚠️
لقد تلقيت تحذير من احد المشرفين 

▢ *التحذير:* ${warn + 1}/${war} 
اذا تلقيت *${war}* تحذيرات فسيتم ازالتك تلقائيا من المجموعه`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ تجاوز المستخدم *${war}* وبالتالي ستتم ازاله التحذيرات`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(🗿 لقد تمت ازالتك من المجموعه *${groupMetadata.subject}* لانه تم تحذيرك اكثر من 3 مرات *${war}* times`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn' ,'انذار' ,'تحذير'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
