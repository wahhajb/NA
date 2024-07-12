const dir = [
'https://telegra.ph/file/08cfaecd7766396d80bbe.mp4',
'https://telegra.ph/file/bf754f46492b29c3efbcc.mp4',
'https://telegra.ph/file/343280c507ff554f2fa3e.mp4',
'https://telegra.ph/file/be581839d63c87e25cb26.mp4',
'https://telegra.ph/file/eb9b271f09b098f7ba6cf.mp4',
'https://telegra.ph/file/f56f9c74d0cf5d1052767.mp4',
'https://telegra.ph/file/3b57eeb2005eeba80917b.mp4',
'https://telegra.ph/file/f7cc909f6b95ee50537f2.mp4',
'https://telegra.ph/file/cb2b0275d4fc3939e521d.mp4',
'https://telegra.ph/file/1958655464d4bb3416f25.mp4',
'https://telegra.ph/file/11eedfc62f20c277d5c81.mp4',
'https://telegra.ph/file/aa60e5d3d0178d0f01fd5.mp4',
'https://telegra.ph/file/57d5a9e827365702d4359.mp4',
'https://telegra.ph/file/6fea6f100e1f77a837e6a.mp4',
'https://telegra.ph/file/3ac4781834a0b4e93b2b8.mp4',
'https://telegra.ph/file/86721173189f25a029c9d.mp4',
'https://telegra.ph/file/cb2cc95c64e3808e196fb.mp4',
'https://telegra.ph/file/20b02bb13fd56b15fc7e1.mp4',
'https://telegra.ph/file/20a87bd489c90fef4f974.mp4',
'https://telegra.ph/file/3d438768796ef792ca5ee.mp4',
'https://telegra.ph/file/e0058f9d7068c8dfd3590.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '⚔️', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['كيوراكو'] 
handler.limite = true 
export default handler
