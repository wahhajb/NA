const dir = [
'https://telegra.ph/file/1906ce85d79451265a13e.mp4',
'https://telegra.ph/file/4888a4a38f0db02b506b3.mp4',
'https://telegra.ph/file/0ba8a593c7d625400cc9d.mp4',
'https://telegra.ph/file/59bf961b835dd9b7ff63a.mp4',
'https://telegra.ph/file/2b8f5c30a5c18fce6e84f.mp4',
'https://telegra.ph/file/b6b8f334d79f5a9563f01.mp4',
'https://telegra.ph/file/4f838a4ca82acc7f6ea60.mp4',
'https://telegra.ph/file/ddea325b458d1058d150f.mp4',
'https://telegra.ph/file/60a77be78a3f17ea49818.mp4',
'https://telegra.ph/file/79080661fa4247d7d3d69.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['سكونا' ,'سوكونا'] 
handler.limite = true 
export default handler
