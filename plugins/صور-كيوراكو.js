const dir = [
'https://telegra.ph/file/22c8afaf13879f7272c00.jpg',
'https://telegra.ph/file/8122b10cd31de07a5db30.jpg',
'https://telegra.ph/file/baa72c84da79ffcbf6ae9.jpg',
'https://telegra.ph/file/570dc6c78612ca163876b.jpg',
'https://telegra.ph/file/99f629b577e9bf8713bbb.jpg',
'https://telegra.ph/file/a0026543b10137ed3d385.jpg',
'https://telegra.ph/file/4dca94e568dfd223ef4ab.jpg',
'https://telegra.ph/file/5998cb2d95b7dc8153968.jpg',
'https://telegra.ph/file/400507644a94ce90bbdbe.jpg',
'https://telegra.ph/file/c857de221b50088c7e3e0.jpg',
'https://telegra.ph/file/c627c14efae2a1157674d.jpg',
'https://telegra.ph/file/5378653be83c1d8bcfa66.jpg',
'https://telegra.ph/file/348da61ef3b99247af174.jpg',
'https://telegra.ph/file/d38d2ecde4c1336ac627f.jpg',
'https://telegra.ph/file/6c7e3b96976532fd81dc3.jpg',
'https://telegra.ph/file/7a336301e246dccee5716.jpg',
'https://telegra.ph/file/d7b03eda6a5e3d163b7c0.jpg',
'https://telegra.ph/file/e9007741f9cc7c999c1c5.jpg',
];

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '⚔️', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['صور-كيوراكو'] 
handler.limite = true 
export default handler
