
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `✳️ Enter a Google Drive link`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
🐦 *جاري التنزيل*`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('Error: Check the link or try another link') 
  }
}
handler.help = ['gdrive']
handler.tags = ['downloader']
handler.command = ['درايف']
handler.credit = true
handler.premium = true

export default handler
