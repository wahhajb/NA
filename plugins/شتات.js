

let handler = async(m, { conn }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://cdn.jsdelivr.net/gh/AHMED7009/hisoka-bot/Assets/mp3/Shit.mp3"
    let url = "https://github.com/Guru322/GURU-BOT"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://telegra.ph/file/36bd662b1881608de58e3.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "SUKUNA",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "اضغط لمراسله المطور",
          body: "SUKUNA BOT",
          thumbnailUrl: img,
          sourceUrl: 'https://wa.me//+994404282709',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['شت']
    handler.tags = ['main']
    handler.customPrefix = /^(شت|تبا|شتات)$/i 

    export default handler;
