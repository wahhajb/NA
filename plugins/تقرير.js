let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] نسيت التقرير - البلاغ*\n\n*مثال:*\n*${usedPrefix + command} الامر ${usedPrefix}كيريتو عمكم*`
if (text.length < 10) throw `*[❗] يجب أن يتكون التقرير من 10 أحرف على الأقل!*`
if (text.length > 1000) throw `*[❗] التقرير يجب الا يزيد عن 1000حرف!*`
let teks = `*❒═════[ تحذير ]═════❒*\n*┬*\n*├❧ الرقم:* wa.me/+22247072475{m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ رسالة:* ${text}\n*┴*`
conn.reply('wa.me/201553631779', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] تم إرسال التقرير بنجاح إلى منشئ الروبوت ، وسيتم التعامل مع تقريرك في أقرب وقت ممكن إذا كان خطأ أو مزحة سيتم تجاهله فقط*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|ابلاغ|تقرير|report-owner|reportes)$/i
export default handler