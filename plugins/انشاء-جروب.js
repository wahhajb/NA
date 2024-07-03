//import { bold } from "chalk"
let handler = async (m, { conn, text }) => {
   
   if (!text) return m.reply('_ضع امام الامر اسم المجموعة التي تريد إنشاءها مثلا!_\n*.انشاء-جروب SUKUNA*')
   try{
    m.reply(`جاري الانشاء`)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
 /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
    m.reply('_تم إنشاء المجموعة بنجاح*' + text + '*_\n\n*الاسم:* ' + text + '\n*ID:* ' + group.gid + '\n*رابطها:* ' + url)
       } catch (e) {
    m.reply(`لم استطع انشائها 😕💔`)
  }
}
handler.help = ['creategroup']
handler.tags = ['owner']
handler.command = /^انشاء-جروب$/
handler.owner = true
export default handler
