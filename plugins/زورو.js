const dir = [
'https://telegra.ph/file/3a80636dda43ddb22fc63.mp4',
'https://telegra.ph/file/63159a1f2c846d408d22b.mp4',
'https://telegra.ph/file/1ba56973d97508141539d.mp4',
'https://telegra.ph/file/56bb74673732871f3d068.mp4',
'https://telegra.ph/file/a8c317c7a2711fd93944d.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['زورو'] 
handler.limite = true 
export default handler
