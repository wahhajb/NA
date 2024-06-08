const dir = [
'https://telegra.ph/file/568433999821c0e92bcf3.mp4',
'https://telegra.ph/file/e49e8bc378ce6ce9a3067.mp4',
'https://telegra.ph/file/624513110875709908731.mp4',
'https://telegra.ph/file/624513110875709908731.mp4',
'https://telegra.ph/file/bf65fe4bf7dbab4938e1e.mp4',
'https://telegra.ph/file/3bc466664753962303560.mp4',
'https://telegra.ph/file/cecb89fc6e633e0ae864c.mp4',
'https://telegra.ph/file/546c28628c31c82669069.mp4',
'https://telegra.ph/file/5fde3cea3f7db531beb9b.mp4',
'https://telegra.ph/file/c27e5e96a0871b4c66ecc.mp4',
'https://telegra.ph/file/d1ef6912e83ace160325f.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ميليوداس'] 
handler.limite = true 
export default handler
