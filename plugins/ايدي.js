var handler = async (m, {conn, groupMetadata }) => {

conn.reply(m.chat, `${await groupMetadata.id}`, fkontak, fake, )

}
handler.help = ['idgc']
handler.tags = ['grupo']
handler.command = /^(ايدي|id|الايدي)$/i

handler.group = true

export default handler  
