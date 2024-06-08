const dir = [
'https://telegra.ph/file/d962470bc6fff7379816a.mp4',
'https://telegra.ph/file/f959d8fbccf79ceaefe54.mp4',
'https://telegra.ph/file/9935ba0a28415bb6827ad.mp4',
'https://telegra.ph/file/371c082d106b892395ec3.mp4',
'https://telegra.ph/file/3cf6eb2dc293a0e7ed720.mp4',
'https://telegra.ph/file/70e409350bf1a40ec28e2.mp4',
'https://telegra.ph/file/1d445610d45e5eb836f59.mp4',
'https://telegra.ph/file/b2f84c095dad42ce67fe9.mp4',
'https://telegra.ph/file/909d7979c2c62a85110f1.mp4',
'https://telegra.ph/file/7415a566667b5a279df7e.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['تانجيرو'] 
handler.limite = true 
export default handler
