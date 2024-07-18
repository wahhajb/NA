const dir = [
'https://telegra.ph/file/289ac426ccdc3a2a36e90.jpg',
'https://telegra.ph/file/fe52a0fc09b167247c0f2.jpg',
'https://telegra.ph/file/09d0020fd5e3b686419cc.jpg',
'https://telegra.ph/file/23e534b2790e2a80819c3.jpg',
'https://telegra.ph/file/85af3eb5971af62fe366e.jpg',
'https://telegra.ph/file/8d401c90b8ce1c87eb5b3.jpg',
'https://telegra.ph/file/b63657b0c51c17d9f1f82.jpg',
'https://telegra.ph/file/663d7440ae9e3fd041864.jpg',
'https://telegra.ph/file/4e0ec8c7d78fffb3483c5.jpg',
'https://telegra.ph/file/e73dda958a6b32dbe5711.jpg',
'https://telegra.ph/file/0ca53fb76621ac7cafc56.jpg',
'https://telegra.ph/file/3532de33c2dd0d64eb529.jpg',
'https://telegra.ph/file/2c830989feb4b151f7384.jpg',
'https://telegra.ph/file/089ca114ab3c641b2b1b0.jpg',
'https://telegra.ph/file/3787f5888fefbb19e3750.jpg',
'https://telegra.ph/file/c76b47450479a39eeb3dd.jpg',
'https://telegra.ph/file/170e3834f0ae5761d15c8.jpg',
'https://telegra.ph/file/39301087cff95d120b460.jpg',
'https://telegra.ph/file/3c5ae8ee7973cb93ca6b9.jpg',
'https://telegra.ph/file/ee2b1f6579d91a8d23c02.jpg',
'https://telegra.ph/file/85dca81c45ad2cdff94d1.jpg',
'https://telegra.ph/file/5e53368fe5e7d1dd6df7b.jpg',
'https://telegra.ph/file/004a3d590f9373524b801.jpg',
'https://telegra.ph/file/738075d96e16a059cd085.jpg',
'https://telegra.ph/file/bd4f6903552987760b8ba.jpg',
'https://telegra.ph/file/09bc902885cbbf91c7036.jpg',
'https://telegra.ph/file/18fc5667f3a1278f7f967.jpg',
'https://telegra.ph/file/eddb56788b7b61b3c6ef0.jpg',
'https://telegra.ph/file/cb659c677b8a30ab8e06c.jpg',
'https://telegra.ph/file/3b64fcd27745ef5b2abbe.jpg',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '🥱', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['صور-غوجو'] 
handler.limite = true 
export default handler
