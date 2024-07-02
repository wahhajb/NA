/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{sticker as e}from"../lib/sticker.js";import{stickerLine as n,stickerTelegram as t}from"@bochilteam/scraper";let handler=async(r,{conn:a,args:i,usedPrefix:l,command:s})=>{let c=/tele/i.test(s);if(!i[0])return r.reply(`*Este comando es para obtener stickers de ${c?"Telegram":"Line"}*

مــثــال عـلـى الـاسـتـخـدامـ:
${l+s} sukuna`);let o=await (c?t:n)(i[0]);for(let d of(r.reply(`
*النتائج التي تم العثور عليها لـ ~${i[0]}~, مجموع الملصقات:* ${(o[0]?.stickers||o).length}
_جاري ارسال الملصقات..._
`.trim()),o[0]?.stickers||o)){let m=await e(!1,d.sticker||d,"",`
< ${NombreDelBot} >



















[ NeKosmic ]`);await a.sendFile(r.chat,m,"sticker.webp","",r).catch(console.error),await delay(1500)}};handler.help=["telesticker <buscar>","linesticker <buscar>"],handler.tags=["conversor"],handler.command=/^(تليجرام)$/i,handler.limit=1;export default handler;let delay=e=>new Promise(n=>setTimeout(n,e));
