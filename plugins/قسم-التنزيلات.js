import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/3c04564e194ad209b1ef7.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `*≼مرحبا بك يا ${taguser} ≽*

*》حط رمز قبل قسم حاجه من 👈  ( / . )《*

*》 اذا عندك طلب او اي شي تريد تقوله للمطور اكتب (.تقرير وحط طلبك)《*

*❆❯══⊹⊱≼ ♻️ ≽⊰⊹══❮❆*
*『 ️♻️ 』⇦ قسم التنزيلات ╿↶*
*❆❯══⊹⊱≼ ♻️ ≽⊰⊹══❮❆*

*⚡┣.انستا2*
❍↜بينزل فيديو من الانستجرام

*⚡┣.اغنيه*
❍↜بينزل اغاني

*⚡┣.اغاني*
❍↜بينزل اغاني من اليوتيوب

*⚡┣.ملصقات*
❍↜بيجيب لك ملصقات لاي شي بس اكتب انجليزي

*⚡┣.فيسبوك*
❍↜بينزل فيديوهات من الفيس

*⚡┣.فيس2*
❍↜بينزل فيديوهات من الفيس

*⚡┣.تطبيق*
❍↜بينزل العاب و تطبيقات

*⚡┣.تيك*
❍↜بينزل فيديو من التيك توك

*⚡┣.صور-تيك*
❍↜بيجيب لك صور من التيك

*⚡┣.حساب-تيك*
❍↜بيبحث عن الحساب 

*⚡┣.فيديو*
❍↜بينزل فيديو من االيوتيوب

*⚡┣.ميغا*
❍↜بيحمل من موقع mega

*⚡┣.فيديوو*
❍↜بينزل فيديو من يوتيوب

*⚡┣.فريبيك*
❍↜بينزل صوره من موقع فريبيك

*⚡┣.اكشف*
❍↜بيجيب لك اسم الاغنيه

*⚡┣.صوره*
❍↜بينزل صور من جوجل

*⚡┣.تليجرام*
❍↜بينزل لك حزمه ملصقات من التليجرام

*⚡┣.جوجل*
❍↜بينزل من جوجل 

*⚡┣.شغل*
❍↜بينزل اغاني

*⚡┣.بحث*
❍↜بيبحث عن فيديوهات عل اليوتيوب

*⚡┣.Yts*
❍↜بينزل فيديوهات بجوده عاليه

*⚡┣.ميديافاير*
❍↜بيحمل من ميديافاير 

*⚡┣.جيت*
❍↜بيحمل من اي رابط
`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['fun', 'الاوامر']
handler.command = ['قسم-التنزيلات'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
