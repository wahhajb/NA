let handler = async (m, { command, text }) => m.reply(`*⎔ ━─ ─ ╎⊱ ‹💔› ⊰ ╎─ ─━ ⎔*
*املئ الاسـ📜ـتماره ⤸*

*_𓆩Dark𓂃⃟seid 𓆪_* 

*_⌬┇━─╌ •『💔』• ╌─━┇⌬_*

> 「🕵🏻┋الـلـقـب ⇇〘〙

> 「🎥┋مـن اي انـمـي  ⇇〘〙

> 「​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​👬┋مـن طـرف ⇇〘〙

> 「👫┋الـجـنـس  ⇇〘〙

*_⌬┇━─╌ •『💔』• ╌─━┇⌬_*
> 「⇓⇓┊ *_`المـلاحـظــات`_*⇓⇓┊」 

*¹-ارسل صوره للشخصيـة مع الاستمارة*

*²-ممنوع اخذ لقب غير `انمي/منجا/مانهو`*

*³-ممنوع ولد ياخد لقب بنت والعكس صحيح*

*⁴-ممنوع تاخذ لقب مأخذ يرجة قرائة الوصف قبل ملأ الاستماره*

*_⌬┇━─╌ •『💔』• ╌─━┇⌬_*

> *_[تـــوقـــ✍يـــع]_*

*_𓆩Dark𓂃⃟seid 𓆪_* 

*_⎔ ━─ ─ ╎⊱ ‹💔› ⊰ ╎─ ─━ ⎔_*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(shibuya|شيبويا)$/i

export default handler
