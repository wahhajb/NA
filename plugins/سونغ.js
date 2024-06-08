const dir = [
'https://telegra.ph/file/a0a69c5c291966de3619c.mp4',
'https://telegra.ph/file/2a177a684dc9f407248d0.mp4',
'https://telegra.ph/file/8fa2be27c281dad9e5061.mp4',
'https://telegra.ph/file/6cf365db122f016d906be.mp4',
'https://telegra.ph/file/2e01a94b9da9852253254.mp4',
'https://telegra.ph/file/4844d7d45d150baeb9e2b.mp4',
'https://telegra.ph/file/a5faa6d60e2fddd698e67.mp4',
'https://telegra.ph/file/ac31f96d2e0d04542398a.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['سونغ'] 
handler.limite = true 
export default handler
