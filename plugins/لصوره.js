import { webp2png } from  '../lib/webp2mp4.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `رد على على ملصق لتحويله الى صوره *${usedPrefix + command}*`
if (!m.quoted) throw notStickerMessage
const q = m.quoted || m
let mime = q.mediaType ||'' 
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out,  'error.png' , null, m)
}
handler.help = [ 'toimg (reply)' ]
handler.tags = [ 'sticker' ]
handler.command = [ 'لصورة' ,  'img' ,  'لصوره' ]
export default handler
