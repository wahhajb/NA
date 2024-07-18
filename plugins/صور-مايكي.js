const dir = [
'https://telegra.ph/file/ef1fed5e12ec2941115ce.jpg',
'https://telegra.ph/file/81bc405955eff602a6195.jpg',
'https://telegra.ph/file/19195604a00934d60c7dc.jpg',
'https://telegra.ph/file/2ab0955b60d4326a31323.jpg',
'https://telegra.ph/file/d416b2583deeb2c9a0144.jpg',
'https://telegra.ph/file/c29d4a3e1620ca0f1b3cf.jpg',
'https://telegra.ph/file/e55c246a074628ba5990e.jpg'
'https://telegra.ph/file/f35a97ecbb016295257c4.jpg',
'https://telegra.ph/file/912cd4c82248e82028596.jpg',
'https://telegra.ph/file/867cee7fe504314960efa.jpg',
'https://telegra.ph/file/867cee7fe504314960efa.jpg',
'https://telegra.ph/file/6d3a4de027bafcf2e6102.jpg',
'https://telegra.ph/file/e802696d1727127d3fcb7.jpg',
'https://telegra.ph/file/c008c256c59d583f5d773.jpg',
'https://telegra.ph/file/c3b96366872a0bee0b0d4.jpg',
'https://telegra.ph/file/08bbf7d7b256e19876a51.jpg',
'https://telegra.ph/file/b619de1f3c1f97015f055.jpg',
'https://telegra.ph/file/481061f406250fa154775.jpg',
'https://telegra.ph/file/1f0126856f50473fad60b.jpg',
'https://telegra.ph/file/9d871025bf0e9e3960834.jpg',
'https://telegra.ph/file/f9bc1ea655733162e4920.jpg',
'https://telegra.ph/file/343ca503ded82c74eb556.jpg',
'https://telegra.ph/file/2cb7aecebc38113bcd03d.jpg',
'https://telegra.ph/file/41d57d1d726bd3560231f.jpg',
'https://telegra.ph/file/ffdf4d746c93aabb3eb3d.jpg',
'https://telegra.ph/file/68e538c0c7809f7a704ed.jpg',
'https://telegra.ph/file/1915d2b45447a65fcee92.jpg',
'https://telegra.ph/file/b31f3deecb23b154aeb0d.jpg',
];

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '✨', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['صور-مايكي'] 
handler.limite = true 
export default handler
