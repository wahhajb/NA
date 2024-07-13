let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*مــرحــبًــا〘 ${taguser} 〙 انـا سوكونا*\n *• هــل تـحـتـاج الـى مـسـاعـدة؟ ، اكـتـب﹙.اوامــر ╎ .قــائـمــة﹚*\n\n\n> *🚫╎مـمـنـوع اسـتـخـدام الـبـوت فـي الـدردشـات الـخـاصـة!*`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "🗿",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/d54800d1c431f3cc6e06b.jpg', 'video.mp4' , message, m);
};
handler.help = ['bot'];
handler.tag = ['dado'];
handler.command = ['bot', 'بوت'];

export default handler;
