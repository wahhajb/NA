const dir = [
'https://telegra.ph/file/f9152892cb3b9286c24fa.mp4',
'https://telegra.ph/file/4046f1684a5c1cd73d714.mp4',
'https://telegra.ph/file/8ed6d3ca5693e3b1f01b4.mp4',
'https://telegra.ph/file/c3946e8a6df065d071340.mp4',
'https://telegra.ph/file/509eeb61125c07d09750d.mp4',
'https://telegra.ph/file/b2b7b4ee76e23ee468ec0.mp4',
'https://telegra.ph/file/0a213ddbe14f24013bdd7.mp4',
'https://telegra.ph/file/b34b63bb76a3f156198fa.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['استا'] 
handler.limite = true 
export default handler
