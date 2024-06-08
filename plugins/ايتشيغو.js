const dir = [
'https://telegra.ph/file/545c855923a9ce58e2f7e.mp4',
'https://telegra.ph/file/90b18c5952d4515ef125f.mp4',
'https://telegra.ph/file/1b858c736ed713f3e847a.mp4',
'https://telegra.ph/file/6ce2c1f4caa34c6401b07.mp4',
'https://telegra.ph/file/c7b6b1adb61c4ab58f75e.mp4',
'https://telegra.ph/file/356a9f03eea9ab3c1d395.mp4',
'https://telegra.ph/file/75057b03bb1f6af9bdd8c.mp4',
'https://telegra.ph/file/fa8db06969ab5d7a60e02.mp4',
'https://telegra.ph/file/d48bf6479f4cd1602a34f.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ايتشيغو' ,'ايشتغو'] 
handler.limite = true 
export default handler
