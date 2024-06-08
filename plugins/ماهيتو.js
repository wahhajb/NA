const dir = [
'https://telegra.ph/file/a8098eaf9f75986fb98a7.mp4',
'https://telegra.ph/file/d3555d37cb23a491fc317.mp4',
'https://telegra.ph/file/b0aaef405a05a12b64596.mp4',
'https://telegra.ph/file/c7462f9b81c61a2d4ef2b.mp4',
'https://telegra.ph/file/d584285aa655758fc0375.mp4',
'https://telegra.ph/file/3a5c3891d098c7ca1896c.mp4',
'https://telegra.ph/file/b4831c371145d56920c90.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ماهيتو'] 
handler.limite = true 
export default handler