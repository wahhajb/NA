import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/زوجني.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*اخليها:-
تم يا ${taguser} شوف صوره زوجتك/زوجك 🌚♥️🎀*`, m)}
//conn.sendButton(m.chat, "*زوجني*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['مسي', 'ميسي']
handler.tags = ['internet']
handler.command = /^(زوجني)$/i
export default handler
