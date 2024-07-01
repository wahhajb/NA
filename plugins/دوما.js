const dir = [
'https://telegra.ph/file/706ecdaf1ca889be7fede.mp4',
'https://telegra.ph/file/c3fc8a31173291148c3f6.mp4',
'https://telegra.ph/file/29923c1b3ba6339eec255.mp4',
'https://telegra.ph/file/a434f4000a9de543f1ddc.mp4',
'https://telegra.ph/file/3fbc65f2f4c7d00f4b5d8.mp4',
'https://telegra.ph/file/49af0c55e24497e83e3b9.mp4',
'https://telegra.ph/file/7b120ff263c47b49f73ad.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['دوما'] 
handler.limite = true 
export default handler
