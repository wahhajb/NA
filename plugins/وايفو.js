cmd({
        pattern: "وايفو",
        desc: "To get Waifu Random Pics",
        category: "Anime Pics",
        filename: __filename
    },

  async(Void, citel, text) => {
        
         let name1 = text.split("|")[0] || ''
        let name2 = text.split("|")[1] || `1`
        let cap = text.split("|")[1] ? '': '*֎╎تـم اخـتـيـار صـوره وايـفـو لـك┇*'
         
for (let i = 0; i < name2; i++)
{
        let response;
        if(name1 == 'nsfw'){ response = await fetch("https://api.waifu.pics/nsfw/waifu");    }
        else  { response = await fetch("https://api.waifu.pics/sfw/waifu");  }
    
    const nekodds = await response.json();
    let buttonMessages = {
        image: { url: nekodds.url, },
        caption: cap,
        headerType: 1,
    };
     await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}

})
