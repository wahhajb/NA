const dir = [
'https://telegra.ph/file/e57f61492a884d26d0ac4.mp4',
'https://telegra.ph/file/8ea6ba7fc0306abba3cba.mp4',
'https://telegra.ph/file/f369f6a11c43b9e1fb8ce.mp4',
'https://telegra.ph/file/d1a4ca2020522a0f27c89.mp4',
'https://telegra.ph/file/c601b4bf77e9aa08f05d8.mp4',
'https://telegra.ph/file/daeb4d36000407b0d8961.mp4',
'https://telegra.ph/file/092c5f6f97eab1de4670c.mp4',
'https://telegra.ph/file/58d689801b25e330eb1e2.mp4',
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
