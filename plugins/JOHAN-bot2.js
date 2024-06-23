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

    conn.sendFile(m.chat, 'https://file.io/JIP0OUzglvfn', 'video.mp4' , message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
