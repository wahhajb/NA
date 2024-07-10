import fetch from 'node-fetch';


const handler = async (m, {conn, usedPrefix, command}) => {
  let johan = (هلا انا يوهان)
  let Images = (
  conn.sendFile(m.chat,johan , '', , m);
  
};
handler.help = ['waifu'];
handler.tags = ['anime'];
handler.command = /^(معرف)$/i;
export default handler;
