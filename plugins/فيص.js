import fg from 'api-dylux';

// تعريف الرسائل النصية للانتظار والانتهاء
const waitingMessage = '⏳ جار التحميل...';
const doneMessage = '✅ تم التحميل بنجاح!';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `✳️ قم بإرسال رابط الفيديو من الفيسبوك \n\n📌 مثلاً :\n*${usedPrefix + command}* https://www.facebook.com/Ankursajiyaan/videos/981948876160874/?mibextid=rS40aB7S9Ucbxw6v`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '⚠️ ارسل رابط الفيديو بشكل صحيح.';
  }

  // إرسال رسالة الانتظار
  await conn.reply(m.chat, waitingMessage, m);

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
⊱ ─── {*النتائج*} ─── ⊰
↳ *الفيديو:* ${result.title}
⊱ ────── {⋆♬⋆} ────── ⊰`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    await conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);

    // إرسال رسالة الانتهاء
    await conn.reply(m.chat, doneMessage, m);
  } catch (error) {
    console.log(error);
    m.reply('⚠️ حصل خطاء في التحميل يرجى المحاوله لاحقا.');
  }
};

handler.help = ['facebook <url>','fb'];
handler.tags = ['downloader'];
handler.command = /^((فيسبوك|فيس)(downloder3|dl3)?)$/i;
handler.diamond = true;

export default handler;
