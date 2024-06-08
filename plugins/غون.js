const dir = [
'https://telegra.ph/file/642a4696c5382d71ea574.mp4',
'https://telegra.ph/file/a2db9a42cff6c48889a7b.mp4',
'https://telegra.ph/file/35452e3703032ec739c03.mp4',
'https://telegra.ph/file/58dc0847f5f32b08dc4e8.mp4',
'https://telegra.ph/file/ebfcdc0a1b38bb98cc536.mp4',
'https://telegra.ph/file/7c5f50b4b37342a5b8805.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['غون' ,'جون'] 
handler.limite = true 
export default handler
