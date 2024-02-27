/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*[❗😁❗] أجب على فيديو ترغب في تحويله إلى GIF مع الصوت*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*[❗] نوع الملف ${mime} ليس صحيحًا، أجب على فيديو ترغب في تحويله إلى GIF مع الصوت*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*ها هو GIF الخاص بك مع الصوت ، عند فتحه يتم تشغيله مع الصوت*'}, {quoted: m});
};
handler.command = ['الى_جيف'];
export default handler;
