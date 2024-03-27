import axios from 'axios';

 async function handler(m, { conn, text }) {
   if (!text) throw ' يُرجى إدخال رقمين مفصولين بعلامة (+)\n مثال: 1+1'
   if (!text.includes('+')) throw 'مثال:\n.قران 1+2\n\n𝙱𝚢 : hanry - 𝚋𝚘𝚝'  
   let [a, b] = text.split('+')   
   let lr = (`https://api.lolhuman.xyz/api/quran/audio/${a}/${b}?apikey=GataDios`)
   let res = await axios.get(lr, { responseType: 'arraybuffer' })
   if (res.status !== 200) throw `حدث خطأ أثناء جلب الرسالة الصوتية.`
   conn.sendMessage(m.chat, { audio: Buffer.from(res.data, 'binary'), mimetype: 'audio/mpeg' }, { quoted: m });
 }

 handler.help = ['قران']
 handler.tags = ['quran']
 handler.command = ['قران' , 'قرأن' , 'قرآن']

 export default handler