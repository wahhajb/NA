import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  m.react(rwait);

  let type = (command).toLowerCase();
  let baseUrl = 'https://weeb-api.vercel.app/';

  const fetchImage = async (endpoint) => {
    try {
      const response = await fetch(baseUrl + endpoint);
      if (!response.ok) throw `❎ حدث خطاء اثناء حلب ${type} صوره`;
      const imageBuffer = await response.buffer(); // Get the image data as a buffer
      conn.sendFile(m.chat, imageBuffer, 'img.jpg', `✅ تم ${type}`, m);
      m.react(dmoji);
    } catch (error) {
      console.error(error);
      m.reply(`❎ حدث خطاء اثناء جلب الملف  ${type} صوره.`);
    }
  };

  switch (type) {
    case 'لولي:
      fetchImage('loli');
      break;

    case 'وايفو':
      fetchImage('waifu');
      break;

    case 'نيكو':
      fetchImage('neko');
      break;

    case 'زوروتو':
      fetchImage('zerotwo');
      break;

    default:
      
      break;
  }
};

handler.help = ['waifu', 'neko', 'zerotwo', 'loli']
handler.tags = ['anime']
handler.command = ['وايفو', 'نيكو', 'زوروتو', 'لولي'] 


export default handler
