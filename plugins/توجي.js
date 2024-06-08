const dir = [
'https://telegra.ph/file/bbc5b6ba68e2f08e4bdf9.mp4',
'https://telegra.ph/file/1197a2b4357f9f8624096.mp4',
'https://telegra.ph/file/650e88654b42cb1dc0834.mp4',
'https://telegra.ph/file/0c54c1a77c9e4dfee0246.mp4',
'https://telegra.ph/file/a3c4e183260076d5e4473.mp4',
'https://telegra.ph/file/3c04564e194ad209b1ef7.mp4',
'https://telegra.ph/file/872bac0172b76e5f5a956.mp4',
'https://telegra.ph/file/222a1d43101a656074e3e.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['توجي'] 
handler.limite = true 
export default handler
