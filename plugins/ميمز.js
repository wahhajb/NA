const dir = [
'https://telegra.ph/file/2d692d315587805dde1a9.jpg',
'https://telegra.ph/file/e51a3c070b031ccefb801.jpg',
'https://telegra.ph/file/a0a8e70592a5b2ccd2987.jpg',
'https://telegra.ph/file/5e1fc88c8803a0fc31523.jpg',
'https://telegra.ph/file/1f54bdd48b568aa05d593.jpg',
'https://telegra.ph/file/62ac12702441491e0c73b.jpg',
'https://telegra.ph/file/fa537428bb58b297e3ed3.jpg',
'https://telegra.ph/file/3155c1dc08fa26970d858.jpg',
'https://telegra.ph/file/e926a13e06728028d860d.jpg',
'https://telegra.ph/file/71e8a40317d9dd6dce50f.jpg',
'https://telegra.ph/file/1c9f11a44ac8ed88e073e.jpg',
'https://telegra.ph/file/271155de61db260ef09ba.jpg',
'https://telegra.ph/file/d898b26a10495e8c6792b.jpg',
'https://telegra.ph/file/f6b71e125dd4971253c39.jpg',
'https://telegra.ph/file/73e9f8a1692c470e63d04.jpg',
'https://telegra.ph/file/6c72d75cbb596fd757aba.jpg',
'https://telegra.ph/file/ede1c654d4c218c0b263b.jpg',
'https://telegra.ph/file/078671b7aee6dd8c4ae09.jpg',
'https://telegra.ph/file/04f6a1c2c271e3d0d9b08.jpg',
'https://telegra.ph/file/e1f3bc35cb2b201ec12e4.jpg',
'https://telegra.ph/file/0d6fb4189e171d90505f8.jpg',
'https://telegra.ph/file/efa364c3e60769ba75743.jpg',
'https://telegra.ph/file/65bf5dbc42b5c43fc5d2f.jpg',
'https://telegra.ph/file/03fd2e33eef17aa189e5a.jpg',
'https://telegra.ph/file/03fd2e33eef17aa189e5a.jpg',
'https://telegra.ph/file/855054f8f233540b8bdc7.jpg',
'https://telegra.ph/file/1104d1aaf24628d2abfaf.jpg',
'https://telegra.ph/file/f1545f789dd689fefe0d2.jpg',
'https://telegra.ph/file/1df313e1ddb72852daeb5.jpg',
'https://telegra.ph/file/094e9a30a78770ce00747.jpg',
'https://telegra.ph/file/11f5d2e4f16973e7aae22.jpg',
'https://telegra.ph/file/16e2201315a32045ba90e.jpg',
'https://telegra.ph/file/b7d7e41bdd6d4387978ef.jpg',
'https://telegra.ph/file/04d70f2acd386651372a1.jpg',
'https://telegra.ph/file/44d85616ab47be36a415a.jpg',
'https://telegra.ph/file/2fa5739785b1ea0868641.jpg',
'https://telegra.ph/file/2e14efa38af37835f4d5b.jpg',
'https://telegra.ph/file/add7d31f6022c61af23d7.jpg',
'https://telegra.ph/file/ff5a1c6ad7b527e4a1613.jpg',
'https://telegra.ph/file/b3e225650d05a96f44cfa.jpg',
'https://telegra.ph/file/3a8c6adcaf0f46c70e70f.jpg',
'https://telegra.ph/file/2335bc81f41c47f879c0c.jpg',
'https://telegra.ph/file/85ff992dfc8948423b6a9.jpg',
'https://telegra.ph/file/c5c0ffc26e37f126c9f1f.jpg',
'https://telegra.ph/file/0aaf65e892ba60b2c2cd7.jpg',
'https://telegra.ph/file/2c2abe7a01ec9efa56621.jpg',
'https://telegra.ph/file/8ed8150097441b0c8e04e.jpg', 
'https://telegra.ph/file/cd5c0d308cb88e0544978.jpg',
'https://telegra.ph/file/9b745ec59e15ab3835d8b.jpg',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ميمز', 'dados'] 

export default handler
