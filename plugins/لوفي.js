const dir = [
'https://telegra.ph/file/42da44886f64103a2320c.mp4',
'https://telegra.ph/file/d20f9d05571d3a8ecd17a.mp4',
'https://telegra.ph/file/949815f88c1bf8b55e81d.mp4',
'https://telegra.ph/file/d51792f95dce30948086d.mp4',
'https://telegra.ph/file/827661a409633088291a7.mp4',
'https://telegra.ph/file/bc17be5055c71928e92ec.mp4',
'https://telegra.ph/file/312fd8639b527568dafa3.mp4',
'https://telegra.ph/file/4e46aba376d7bc7dae52a.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['لوفي'] 
handler.limite = true 
export default handler
