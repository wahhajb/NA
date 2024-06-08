const dir = [
'https://telegra.ph/file/987344d9c6841418bc170.mp4',
'https://telegra.ph/file/e6b33aa0ceb8ec7bb576c.mp4',
'https://telegra.ph/file/d57e756e836871b5a65b9.mp4',
'https://telegra.ph/file/c8018a1b758f7310e4a81.mp4',
'https://telegra.ph/file/4a7cde118df379c38fbeb.mp4',
'https://telegra.ph/file/3db04906097fcd8f2c0a5.mp4',
'https://telegra.ph/file/a7bcb72d63b7cbbf26a2e.mp4',
'https://telegra.ph/file/7b92b25179ab827a6ab07.mp4',
'https://telegra.ph/file/b860839b84a10c85f6d91.mp4',
'https://telegra.ph/file/adf61affee439820a4bdf.mp4',
'https://telegra.ph/file/86112c3bb88d41794edde.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['بانكاي' ,'البانكاي'] 
handler.limite = true 
export default handler
