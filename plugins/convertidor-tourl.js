import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*[❗👍❗] الرد على صورة أو فيديو سيتم تحويله إلى رابط*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`*ربط ملفك:* ${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['sticker'];
handler.command = /^(upload|الى_رابط)$/i;
export default handler;
