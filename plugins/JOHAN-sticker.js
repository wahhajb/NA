let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'https://telegra.ph/file/ea03bbc1d2dbd77af8a57.jpg', 'sticker.jpg', 'رد على يوهان', m)
}

handler.command = /^(يوهان)$/i
handler.group = true
module.exports = handler
