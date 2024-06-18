import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ ادخل ما تريد البحث عنه \n\n📌*مثال:*\n${usedPrefix + command} زورو`
    
    //Result https://getstickerpack.com/
    try {
   /*let res = await fetch(global.API('fgmods', '/api/getsticker', { q:text }, 'apikey'))
   let json = await res.json()*/
   let json = await fg.StickerSearch(text) 
    m.reply(`
✅ تم العثور

▢ *العنوان:* ${json.title}
▢ *مجموع الملصقات:* ${json.sticker_url.length}
▢ *وقت ارسالهم:* _*${json.sticker_url.length * 2} s*_`)
    for (let i of json.sticker_url) {
        const stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        //await delay(1500)
    }
    } catch (e) {
	m.reply(`❇️ خطاء حاول مره اخرى`)
	} 
}
handler.help = ['getsticker']
handler.tags = ['sticker']
handler.command = ['ملصقات', 'getstick', 'stickersearch', 'sticksearch'] 
handler.diamond = false

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
