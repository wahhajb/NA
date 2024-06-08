const dir = [
'https://telegra.ph/file/3ff9857d9e91230166f12.mp4',
'https://telegra.ph/file/507650cc8acaa3e1eee13.mp4',
'https://telegra.ph/file/d6e818875d1f9df537156.mp4',
'https://telegra.ph/file/c722a020bbd35673c8505.mp4',
'https://telegra.ph/file/14981486ecbc18fbe01fa.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ايرين'] 
handler.limite = true 
export default handler
