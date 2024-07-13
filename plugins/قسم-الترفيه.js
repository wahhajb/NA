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
let videoUrl = 'https://telegra.ph/file/b3475500b8374b806bf2d.mp4';
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

*》 حط رمز قبل قسم حاجه من 👈  ( / . )《*

*》 اذا عندك طلب او اي شي تريد تقوله للمطور اكتب (.تقرير وحط طلبك)《*

*❆❯══⊹⊱≼ 🥇 ≽⊰⊹══❮❆*
*『 ️🥇 』⇦ قسم الترفيه ╿↶*
*❆❯══⊹⊱≼ 🥇 ≽⊰⊹══❮❆*

*🎮┣.اكس*
❍↜يشغل لعبه XO

*🎮┣.لعبه*
❍↜يشغل لعبه حجر ورقه مقص 

*🎮┣.فعاليات*
❍↜بيجبلك فعاليات تلقائي 

*🎮┣.لو*
❍↜لو خيروك 

*🎮┣.سؤال*
❍↜اسئله انمي صعبه 

*🎮┣.سؤ*
❍↜اسئله دينية 

*🎮┣.اسئلني*
❍↜البوت يسألك أسأله عشوائيه 

*🎮┣.الحب*
❍↜يقيس نسبه الحب اليك 

*🎮┣.بيحبني*
❍↜يمنشن اللي بيحبك 

*🎮┣.علم*
❍↜يجيب لك علم دوله وانت اكتب اسمها

*🎮┣.رياضيات*
❍↜ييجيب لك مسئله رياضيات

*🎮┣.احزر*
❍↜احزر اسم الشخصيه

*🎮┣.عكس*
❍↜ييجيب لك كلمه وانت اعكسها

*🎮┣.نصيحه*
❍↜ييجيب لك نصيحه

*🎮┣.نرد*
❍↜يجيب لك ملصق نرد متحرك

*🎮┣.رابطي*
❍↜ييجيب لك رابطك

🎮┣.كوبي*
❍↜بينسخ لك نص من الصور (بس ضروري النص يكون en)

*🎮┣.الكره*
❍↜يقيس نسبه الكره لك 

*🎮┣.بيكرهني*
❍↜يمنشن اللي بيكرهك

*🎮┣.زوجني*
❍↜يجيب لك صوره و بيقولك دي زوجتك/زوجك

*🎮┣.هل*
❍↜اكتب سؤال و بيجاوب عليه عشوائي

*🎮┣.صراحه*
❍↜بيجيب لك اسئله عشوائيه

*🎮┣.مقارنه*
❍↜يعمل مقارنه بين شخصيات الانمي

*🎮┣.خمن*
❍↜بيخليك تخمن اسم شخصية انمي

*🎮┣.تفكيك*
❍↜بيجيب لك كلمه و انت فككها

*🎮┣.رتب*
❍↜بيجيب لك كلمه و انت رتبها

*🎮┣.متفجرات*
❍↜بيجيب لك لعبه الصندوق و القنبله

*🎮┣.غباء*
❍↜يقيس نسبه الغباء

*🎮┣.ذكاء*
❍↜يقيس نسبه الذكاء 

*🎮┣.زواج*
❍↜يجوز اتنين من الجروب

*🎮┣.طلاق*
❍↜يطلق اتنين من الجروب

*🎮┣.قتل*
❍↜يمنشن على اتنين من الجروب

*🎮┣.صفع*
❍↜بيجيب ملصق صفع

*🎮┣.ركل*
❍↜بيجيب ملصق بيركل

*🎮┣.يبكي*
❍↜بيجيب ملصق يبكي

*🎮┣.طبطبه*
❍↜بيجيب ملصق بيطبطب

*🎮┣كت*
❍↜اسماء شخصيات انمي عشوائية 

*🎮┣.كت2*
❍↜مسابقه اسماء شخصيات انمي عشوائيه 

*🎮┣delttt* 
❍↜حذف غرفه اكس او 

*🎮┣شبهي* 
❍↜بيختار شخص عشوائي شبهك

*🎮┣جمال*
❍↜بيختار شخص عشوائي جميل

*🎮┣تاج* 
❍↜لعبه الصراحه
`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['الاوامر', 'fun']
handler.command = ['قسم-الترفيه'] 

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
