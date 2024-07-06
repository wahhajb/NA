import fetch from 'node-fetch'

let handler = async (m, {conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
   if (!teks) throw `اكتب اسم الاغنيه للحصول على كلماتها`
   try {
  let res = await fetch(global.API('https://some-random-api.com', '/lyrics', { title: teks }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, null, `
▢ *${json.title}*
*${json.author}*\n
${json.lyrics}`, m)
await conn.sendMessage(m.chat, {
   react: {
 text: "💀",
 key: m.key,
   }
   })		
} catch (e) {
	m.react(error)
	} 
}
handler.help = ['lyrics']
handler.tags = ['tools']
handler.command = ['letra', 'كلمات', 'letras'] 

export default handler
