const axios = require('axios');

async function handler(m, { conn, text }) {
  try {
    const response = await axios.get('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/sitecontent/ar/ar/json');
    if (response.status === 200) {
      const data = response.data;
      console.log(data);
      conn.sendMessage(m.chat, JSON.stringify(data), { quoted: m });
    } else {
      throw 'حدث خطأ أثناء جلب البيانات';
    }
  } catch (error) {
    console.error('حدث خطأ:', error);
    conn.sendMessage(m.chat, 'حدث خطأ أثناء جلب البيانات', { quoted: m });
  }
}

handler.command = ['احاديث', 'hadiths'];
handler.tags = ['islam'];

module.exports = handler;
