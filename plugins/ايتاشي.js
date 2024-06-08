const dir = [
'https://telegra.ph/file/f4875578828249e9239a0.mp4',
'https://telegra.ph/file/1be9947a328ea34596b51.mp4',
'https://telegra.ph/file/38df66064b3a35b99151d.mp4',
'https://telegra.ph/file/073ed6e78a233b3b2b175.mp4',
'https://telegra.ph/file/073ed6e78a233b3b2b175.mp4',
'https://telegra.ph/file/25cf3d4b269808ae93046.mp4',
'https://telegra.ph/file/db715493a26676aa32c22.mp4',
'https://telegra.ph/file/3c674b94409c581b835af.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ايتاشي'] 
handler.limite = true 
export default handler
