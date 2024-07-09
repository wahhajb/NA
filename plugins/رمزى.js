import {createHash} from 'crypto';


const handler = async function(m, {conn, text, usedPrefix}) {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.rpg_myns

  const sn = createHash('md5').update(m.sender).digest('hex');
  m.reply(`┏┅ ━━━━━━━━━━━━ ┅ ━
┃${tradutor.texto1} 
┃ ${sn}
┗┅ ━━━━━━━━━━━━ ┅ ━`.trim());
};
handler.help = ['myns'];
handler.tags = ['xp'];
handler.command = /^(myns|رمزي|رمزى|رقم التسلسل)$/i;
handler.register = true;
export default handler;
