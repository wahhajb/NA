const dir = [
'https://telegra.ph/file/2d487b3cb1cc34913fb09.mp4',
'https://telegra.ph/file/2126742a0fdb949a1241f.mp4',
'https://telegra.ph/file/81a29ecda621f73020c93.mp4',
'https://telegra.ph/file/3d4c5049e1704eb6f953b.mp4',
'https://telegra.ph/file/34a43a2dbc1f46547601a.mp4',
'https://telegra.ph/file/a5e11611b53029a8e9483.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ليفاي'] 
handler.limite = true 
export default handler
