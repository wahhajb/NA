conn.war2[m.chat].time = +1
        }
      }
    }
    await sleep(2000)
    conn.reply(m.chat,`〄│ دور : @${conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0]} لـلـهـجـوم\n⌯ الــوقــت : 90 ثــانـيــه\n\n.حرب لاعب = لــمــعــرفــه احــصــائــيــات الــلــاعــب\n.هــجـــوم @مــنــشــن = لــمــهــاجــمــه الــعــدو`,m, {contextInfo : {mentionedJid: [conn.war[m.chat][conn.war2[m.chat].turn].user]}})
    cekAFK(conn.war2[m.chat].turn)
  }else {
    let userAktif = 0
    let userMati = 0
    for (let i=0;i<5;i++){
      if (conn.war[m.chat][i].user != ""){
        userAktif += 1
        if (conn.war[m.chat][i].hp <= 0){
          userMati += 1
        }
      }
    }
    if(userAktif == userMati){
      var teamA = []
      var teamB = []
      var teamAB = []
      for (let j=0;j<5;j++){
        if (conn.war[m.chat][j].user != ""){
          global.db.data.users[conn.war[m.chat][j].user].money -= Number(conn.war2[m.chat].money)
          teamA.push(conn.war[m.chat][j].user)
          teamAB.push(conn.war[m.chat][j].user)
        }
      }
      for (let j=5;j<10;j++){
        if (conn.war[m.chat][j].user != ""){
          global.db.data.users[conn.war[m.chat][j].user].money += Number(conn.war2[m.chat].money)
          teamB.push(conn.war[m.chat][j].user)
          teamAB.push(conn.war[m.chat][j].user)
        }
      }
      conn.reply(m.chat, `〄│ الــفــريــق B فـــاز بــســبــب غــبــاء الــفــريــق A\n\n〄│ الــفــريــق A :\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (- . ${Number(conn.war2[m.chat].money).toLocaleString()} مــن الــمــال )`).join`\n` + "\n\n〄│ الــفــريــق B :\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (+ ${Number(conn.war2[m.chat].money).toLocaleString()} مــن الــمــال )`).join`\n`,m, {contextInfo: {
        mentionedJid: teamAB
      }})
      delete conn.war[m.chat]
      delete conn.war2[m.chat]
    }
    let turn1 = conn.war2[m.chat].turn
    let turn2 = conn.war2[m.chat].turn
    for (let k=0;k<5;k++){
      if (conn.war[m.chat][k].hp > 0 && conn.war[m.chat][k].user != "" && conn.war[m.chat][k].turn == false) {
        conn.war2[m.chat].turn = k
        conn.war2[m.chat].time = +1
        turn2 = conn.war2[m.chat].turn
      }
    }
    if (turn1 == turn2){
      for (let i=0;i<10;i++){
        conn.war[m.chat][i].turn = false
      }
      for(let i=0;i<5;i++){
        if (conn.war[m.chat][i].hp > 0 && conn.war[m.chat][i].user != "" && conn.war[m.chat][i].turn == false) {
          conn.war2[m.chat].turn = i
          conn.war2[m.chat].time = +1
        }
      }
    }
    await sleep(2000)
    conn.reply(m.chat,`〄│ دور : @${conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0]} لـلـهـجـوم\n⌯ الــوقــت : 90 ثــانـيــه\n\n.حرب لاعب = لــمــعــرفــه احــصــائــيــات الــلــاعــب\n.هــجــوم @مــنــشــن = لــمــهــاجــمــه الــعــدو`,m, {contextInfo : {mentionedJid: [conn.war[m.chat][conn.war2[m.chat].turn].user]}})
    cekAFK(conn.war2[m.chat].turn)
  }

  let totalUser = 0
  let totalTurn = 0
  for (let i=0;i<10;i++){
    if (conn.war[m.chat][i].user != "") totalUser += 1
    if (conn.war[m.chat][i].turn == true) totalTurn += 1
  }
  if (totalTurn == totalUser) {
    for (i=0;i<10;i++){
      conn.war[m.chat][i].turn = false
    }
  }

}
handler.help = ['attack','atk']
handler.tags = ['game']
handler.command = /^(يهجم|اهجم)$/i
handler.group = true
export default handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
