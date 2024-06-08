let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, هذا الشخص😞*
*${toM(b)}, قتل ذا اليوم 😞*\n\*😓الكل يبلغ الشرطة على هذه الجريمه*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','قتل']
handler.group = true
export default handler
