let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '*[ ⚠️ تحذير ⚠️ ] خطأ اللينك منتهي  او غير متوفر*\n*👉🏻 رابط غير متوفر *\n\n*مثال:*\n*.ادخل هنا لنك الجروب*\n\n*[❗تحذير❗] لا تسوي ريبلاي علي رسالة, هاذا قد يسبب مشكلة, اكتب الامر وجنبه رابط القروب فقط.*'
if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*تم دخول الجروب المطلوب ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗ تحذير ❗] تم ارسال طلب للمطور [❗تحذير❗]*\n\n*—◉ رقم مرسل الطلب:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ رابط المجموعه المطلوبه: ' + link, jid)
await m.reply('*[❗تحذير❗] تم ارسال طلبك للمطور*\n\n*👉🏻 يرجى الذهاب للمطور خاص والتوكيد عليه*')
}
} catch {
throw '*[❗ملاحظه❗] ان الامر معطل ولا زلنا نعمل عليه*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^خش|ادخل$/i
handler.private = true 
export default handler
