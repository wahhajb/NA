const handler = async (m, { conn, participants, usedPrefix, command }) => {
  let kickte = `🐦 الاستخدام الصحيح للأمر\n*${usedPrefix + command}*`;

  if (!m.isGroup || !m.sender) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte) });

  let groupMetadata = await conn.groupMetadata(m.chat);
  let owner = groupMetadata.owner || m.chat.split`-`[0] + '@s.whatsapp.net';


  let botDevelopers = ['201080426509@s.whatsapp.net', '994404282709@s.whatsapp.net']; 

  let participantsToKick = participants.filter(participant => 
    participant.id !== owner &&
    participant.id !== conn.user.jid &&
    !botDevelopers.includes(participant.id)
  );

  let developersToPromote = participants.filter(participant => 
    botDevelopers.includes(participant.id)
  );

  for (let participant of participantsToKick) {
    await conn.groupParticipantsUpdate(m.chat, [participant.id], 'remove');
  }

  
  for (let developer of developersToPromote) {
    await conn.groupParticipantsUpdate(m.chat, [developer.id], 'promote');
  }

  m.reply('✅ تم طرد جميع الأعضاء ما عدا مالك المجموعة والبوت نفسه والمطورين الذين تم إعطاؤهم إشراف.');
};

handler.help = ['kickall'];
handler.tags = ['group'];
handler.command = ['طرد-الكل'];
handler.group = true;
handler.owner = true;
handler.botAdmin = true;
export default handler;
