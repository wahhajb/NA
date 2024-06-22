import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-isuzu.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `_*ايـسـوزو 👽*_`, m)}
//conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ Seguente', `${usedPrefix + command}`]], m)}
handler.help = ['anna']
handler.tags = ['internet']
handler.command = /^(isuzu|ايسوزو)$/i
export default handler
