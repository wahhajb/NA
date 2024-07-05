import fs from 'fs';

let data = JSON.parse(fs.readFileSync('./src/game/cah.json'));

let handler = async (m, { conn }) => {
    let randomIndex = Math.floor(Math.random() * data.length);
    let question = data[randomIndex].question;
    let message = `خمن من هذي شخصية: ${question}`;
    conn.sendFile(m.chat, 'https://telegra.ph/file/caafdb2292db8180b99fe.mp4', 'video.mp4', message, m);
};

handler.help = ['cah']
handler.tag = ['game']
handler.command = /^(تخمين|خمن)$/i;

export default handler;
