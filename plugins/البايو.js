let handler = async (m, { conn, text, command }) => {
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await conn.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `*مقدرت اجيبه*`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await conn.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `*مقدرت اجيبه*`
    }
  }
}
handler.help = ['getbio <@tag/reply>']
handler.tags = ['group']
handler.command = /^(البايو|بايو)$/i
handler.group = true
export default handler
