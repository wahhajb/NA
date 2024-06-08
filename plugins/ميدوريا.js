const dir = [
'https://telegra.ph/file/8e3c32f2252cae7bb6ae1.mp4',
'https://telegra.ph/file/c620da1103a928cfce8af.mp4',
'https://telegra.ph/file/b04f2e5c221927933e154.mp4',
'https://telegra.ph/file/aaf52ee46c6542688a6a4.mp4',
'https://telegra.ph/file/4d744a4f3ea55a76c8b84.mp4',
'https://telegra.ph/file/40d70ea3e1e85c6d5dcab.mp4',
'https://telegra.ph/file/7b58a5511b95ccd985b56.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ميدوريا'] 
handler.limite = true 
export default handler
