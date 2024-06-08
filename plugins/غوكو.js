const dir = [
'https://telegra.ph/file/e2bfd9f5468daf2a1169d.mp4',
'https://telegra.ph/file/a22ae94207f703152714a.mp4',
'https://telegra.ph/file/48644e5a846995ae77174.mp4',
'https://telegra.ph/file/d24c8ee292f1849464d6b.mp4',
'https://telegra.ph/file/f755658b942f00aa1b6c6.mp4',
'https://telegra.ph/file/d061a5da97531ef845b12.mp4',
'https://telegra.ph/file/45b6786a71c0d7687176f.mp4',
'https://telegra.ph/file/aba91c4157965889eb673.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['غوكو' ,'كاكاروت'] 
handler.limite = true 
export default handler
