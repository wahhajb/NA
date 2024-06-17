let handler = async (m, { command, text }) => m.reply(`*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*
*املئ الاسـ📜ـتماره*

*⎔⋅ ━ ✍︎نࢪحب بك في مملكة ريكال⊰⚡→◜*
*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*

*✍︎│ اللقب ⇇「」*
*✍︎│ اسم الانمي ⇇「」*
*✍︎│ بنت ولا ولد ⇇「」*
*✍︎│ من طرف ⇇「」*
*✍︎│ صورة للشخصية⇇「」*

*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*
*تنبيه مهم 🚫*
*⇐ ممنوع للولد ان يختار لقب البنت والعكس*
*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*
*⤾رابط الألقاب المأخوذة*

* https://docs.google.com/spreadsheets/d/15KXsiTmZ5-jriPosDPjDojzYvGv2kmJT_mQQ6z8KUyw/edit?usp=drivesdk
* 
*_مع تحيات ادارة  ⚡「𝑹•𝑲•𝑳」_*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(وانو|wano)$/i

export default handler
