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

    conn.sendFile(m.chat, 'https://docs.google.com/spreadsheets/d/11arubNQ1HzoATfSjbhOJ877V7yURZKoHZ1edh1SIHSA/edit?usp=drivesdk', 'STORE.jpg' , message, m);
};

handler.customPrefix = /^(بنك)$/i;
handler.command = new RegExp;

export default handler;
