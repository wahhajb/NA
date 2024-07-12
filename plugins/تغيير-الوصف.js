let handler = async (m, { conn, args }) => {
    await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
    m.reply('*😌 تم تغيير وصف الجروب بنجاح*')
    }
    handler.help = ['Setdesc <text>']
    handler.tags = ['group']
    handler.command = /^تغيرالوصف|تغييرالوصف$/i
    handler.group = true
    handler.admin = true
    handler.botAdmin = true
    export default handler
