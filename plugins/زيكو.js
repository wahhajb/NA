cmd({
    pattern: "نيكو",
    category: "Anime Pics",
    desc: "Sends a Neko Image in chat",
    filename: __filename
},
async(Void, citel, text) => {
        let name1 = text.split("|")[0] || ''
        let name2 = text.split("|")[1] || `1`
        let cap = text.split("|")[1] ? '': "*֎╎تـم اخـتـيـار صـوره لـك┇*"
         
for (let i = 0; i < name2; i++)
{
        let response;
        if(name1 == 'nsfw'){ response = await fetch("https://waifu.pics/api/nsfw/neko");    }
        else  { response = await fetch("https://waifu.pics/api/sfw/neko");  }
    
    const nekodds = await response.json();
    let buttonMessages = {
        image: { url: nekodds.url, },
        caption: cap,
        headerType: 1,
    };
     await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}
        
})
