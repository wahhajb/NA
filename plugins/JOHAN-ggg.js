import fetch from 'node-fetch';


const handler = async (m, {conn, usedPrefix, command}) => {
  let johan = (هلا انا يوهان)
  let Images = (
  conn.sendFile(m.chat,johan , '', , m);
// conn.sendButton(m.chat, `𝙰-𝙰𝚁𝙰 𝙰𝚁𝙰 𝚂𝙴𝙼𝙿𝙰𝙸~~`, author, json.url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
};
handler.help = ['waifu'];
handler.tags = ['anime'];
handler.command = /^(معرف)$/i;
export default handler;