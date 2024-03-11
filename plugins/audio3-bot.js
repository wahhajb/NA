import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/sonkara.mp3';
  const chat = global.db.data.chats[m.chat];
  if (/^سونكارا$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    await m.reply(`*هلا*`);
    m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  return !0;
};
export default handler;
