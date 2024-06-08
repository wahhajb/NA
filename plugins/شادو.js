const dir = [
'https://telegra.ph/file/481cbfd6d0e4e2997dbc2.mp4',
'https://telegra.ph/file/bb2cd4768f776945b6c81.mp4',
'https://telegra.ph/file/b3475500b8374b806bf2d.mp4',
'https://telegra.ph/file/c20fc19cd5b2b378205b1.mp4',
'https://telegra.ph/file/d80bd93e2ddd403d0d5d0.mp4',
'https://telegra.ph/file/635875eb762022871bf1b.mp4',
'https://telegra.ph/file/52e223b0fce42e43f857c.mp4',
'https://telegra.ph/file/90fa553d41e3a7f71b72f.mp4',
'https://telegra.ph/file/4d7ec1d529ddc4bbab39a.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['شادو'] 
handler.limite = true 
export default handler
