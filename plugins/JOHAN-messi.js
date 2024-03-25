const axios = require('axios');

let handler = async (m, { conn, args, command }) => {
    try {
        const response = await axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Lionel_Messi');
        const player = response.data.player[0];
        
        // قم بتعديل النص والرابط ليتناسب مع المعلومات التي تريد إرسالها
        let message = `لاعب كرة القدم الشهير: ${player.strPlayer}\n\n`;
        message += `تاريخ الميلاد: ${player.dateBorn}\n`;
        message += `مكان الميلاد: ${player.strBirthLocation}\n`;
        message += `صورة اللاعب: ${player.strThumb}`;

        await conn.sendFile(m.chat, player.strThumb, 'player.jpg', message);
    } catch (error) {
        console.error('Error fetching player information:', error);
        await m.reply('حدث خطأ أثناء جلب معلومات اللاعب.');
    }
}

handler.command = /^(football|كرة القدم|تاريخ كرة القدم)$/i
handler.group = false
module.exports = handler
