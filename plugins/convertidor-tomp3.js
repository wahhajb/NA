import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[❗🎶❗] قم بالرد على الفيديو أو المذكرة الصوتية التي تريد تحويلها إلى ملف صوتي/𝙼𝙿𝟹*`;
  const media = await q.download();
  if (!media) throw '*[❗🤷‍♀️❗]آسف، حدث خطأ أثناء تنزيل فيديو الخاص بك، يرجى المحاولة مرة أخرى*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗👍❗] أنا آسف، حدث خطأ أثناء تحويل الملاحظة الصوتية إلى ملف صوتي/MP3، يرجى المحاولة مرة أخرى*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^الى(mp3|audio)$/i;
export default handler;
