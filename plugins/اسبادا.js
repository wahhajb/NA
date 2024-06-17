const dir = [
'https://telegra.ph/file/5b8a5a66876c2fd7cfc76.mp4',
'https://telegra.ph/file/1815223e7fe442ccb8e79.mp4',
'https://telegra.ph/file/e1fc57b6b41cedd007b1b.mp4',
'https://telegra.ph/file/7a271c7d541a3bf609e0e.mp4',
'https://telegra.ph/file/2a29ad495d555f4597f65.mp4',
'https://telegra.ph/file/c8ef1980aaaadf2b2fa2b.mp4',
'https://telegra.ph/file/6409f5b957cc179833be4.mp4',
'https://telegra.ph/file/2b378eeffd7a0106f2983.mp4',
'https://telegra.ph/file/aea91079b319bbe3a480a.mp4',
'https://telegra.ph/file/7c17deeaec382f4fedebf.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['اسبادا' ,'ايسبادا' ,'إسبادا'] 
handler.limite = true 
export default handler
