import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `رد على الفيديو الذي تريد تحويله الى صوت :\n\n*${usedPrefix + command}*`*/
    let media = await q.download?.()
    if (!media) throw 'فشل تنزيل الوسائط'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'خطتء في التحويل'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^لصوت(صوت|a(udio)?)$/i

export default handler
