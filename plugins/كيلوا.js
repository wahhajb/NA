const dir = [
'https://telegra.ph/file/e57f61492a884d26d0ac4.mp4',
'https://telegra.ph/file/8ea6ba7fc0306abba3cba.mp4',
'https://telegra.ph/file/f369f6a11c43b9e1fb8ce.mp4',
'https://telegra.ph/file/d1a4ca2020522a0f27c89.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['كيلوا'] 
handler.limite = true 
export default handler
