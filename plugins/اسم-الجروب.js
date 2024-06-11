
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*اكتب الامر مع اسم الجروب الجديد*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*تعذر تغيير الاسم لانه اكثر من 25 حرف*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(تغييرالاسم)$/i
handler.group = true
handler.admin = true
export default handler
