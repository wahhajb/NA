let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `😹`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "😂",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/45ad26e5ed6c990bdef42.mp4','https://telegra.ph/file/e2497d30fa1c3e1d98af4.mp4','https://telegra.ph/file/ae590fdba748b0fb6028b.mp4','https://telegra.ph/file/e98d3a0e9fc2bf40ec980.mp4','https://telegra.ph/file/7054a52f23781664d6628.mp4','https://telegra.ph/file/c6fedf5420587815e93c9.mp4','https://telegra.ph/file/469da2978593a956ab0c7.mp4','https://telegra.ph/file/e17691d33b83db16e45c6.mp4','https://telegra.ph/file/c4fd9ba9be08b03038199.mp4','https://telegra.ph/file/a9ea0449a6f7113757dc2.mp4','https://telegra.ph/file/19d37357a47419ebaa10c.mp4' 'video.mp4' , message, m);
};

handler.customPrefix = /^(منوعه)$/i;
handler.command = new RegExp;

export default handler;
