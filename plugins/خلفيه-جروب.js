
let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/image/.test(mime)) {
    let img = await q.download()
    if (!img) throw '*رد على الصوره لجعلها بروفايل للحروب.*'
    await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('*تم تغيير بروفايل الجروب ✅*'))
    } else throw '*رد على الصوره لجعلها بروفايل للجروب.*'}
    handler.command = /^خلفيه$/i
    handler.group = true
    handler.admin = true
    handler.botAdmin = true
    export default handler
