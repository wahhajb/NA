import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*خطاء يرجى وضع كلمه لليحث عنها مثال ${usedPrefix + command} Minecraft*`;
  const json = await pinterest(text);
  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰*
${text}
`.trim(), m);
};
handler.help = ['pinterest <keyword>'];
handler.tags = ['internet'];
handler.command = /^(pinterest)$/i;
export default handler;
