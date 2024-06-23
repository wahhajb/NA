let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*البــنــك*`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "⛪",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://66394f4ae0ff6.site123.me/', 'بنك.txt' , message, m);
};

handler.customPrefix = /^(بنك)$/i;
handler.command = new RegExp;

export default handler;
