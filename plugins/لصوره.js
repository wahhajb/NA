cmd({
        pattern: "لصوره",
        alias : ['لصورة', 'photo'],
        desc: "Makes photo of replied sticker.",
        category: "converter",
        use: '<reply to any gif>',
        filename: __filename
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!citel.quoted) return citel.reply(`*رد على ملصق لتحويله الى صوره*`)
        let mime = citel.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
            let buffer = fs.readFileSync(media)
            Void.sendMessage(citel.chat, { image: buffer }, { quoted: citel })
          
         fs.unlink(media, (err) => {
         if (err) { return console.error('File Not Deleted from From TOPHOTO AT : ' , media,'\n while Error : ' , err);  }
         else return console.log('File deleted successfully in TOPHOTO  at : ' , media);
         });
         
        })
        
} else return citel.reply ("*رد على ملصق لتحويله الى صوره*")
    }
)
