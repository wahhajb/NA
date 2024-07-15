
import { sticker } from "../lib/sticker.js";
import fetch from "node-fetch";

const handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    const gojo = 'SUKUNA BOT';
    const gojo2 = conn.getName(m.sender);
    const yunapp = "https://telegra.ph/file/84e6126972bd66816b309.png";
    
    let stiker = await sticker(null, yunapp, `${gojo}`,);
    conn.sendFile(m.chat, stiker, null, { asSticker: true }, m, true, { contextInfo: { forwardingScore: 200, isForwarded: true } }, { quoted: m });

    const audioFiles = ['./media/قامبري.m4a']
  
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomAudio = audioFiles[randomIndex];
  
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: randomAudio}, ptt: true, mimetype: 'audio/mpeg', fileName: randomAudio.split('/').pop()}, {quoted: m});
  } catch {
    throw `حدث خطأ ما.`;
  }
};

handler.customPrefix = /سوكونا/
handler.command = new RegExp

export default handler;
