import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `
✧ ▬▭▬ ✦✧✦ ▬▭▬ ✧
 
 *『 ️الوتس 』⇦*
 
 https://wa.me/+905360504045?text=جاي_من_البوت_🫴🫀
 
 

*『 ️جروب الوتس 』⇦*

https://chat.whatsapp.com/IqinkrUsBHzCWX8DdvUHLv


*『 ️الانستا 』⇦*
 
https://www.instagram.com/_ahmad__khattab_?igsh=MXFmaGFkOWg5MTc1Yw==

*♡  ㅤ    ❍ㅤ     ⎙ㅤ     ⌲*
*Like  comment   seva   send*

✧ ▬▭▬ ✦✧✦ ▬▭▬ ✧ `, m)
}
handler.command = handler.help = ['معلومات','الدعم']
handler.tags = ['kaneki']
export default handler