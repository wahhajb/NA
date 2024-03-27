let handler = async (m, { conn }) => {
let done = '🩶'; 
       m.react(done);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `تقصد نفسك`;

    conn.sendFile(m.chat, 'تحط الصوره هنا تليجرام', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;