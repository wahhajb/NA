let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*هذه نهايتك*`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "💀",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/af5da33940f19be1f8b38.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(سكونا|بوت|سوكونا)$/i;
handler.command = new RegExp;

export default handler;
