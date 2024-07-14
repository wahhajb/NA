async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {};
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
    let name = await this.getName(who);
    let id = m.chat;
    if (id in this.autosholat) {
        return false;
    }
    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    let jadwalSholat = {
        Subh: "05:23",
        dawn: "04:21",
        Dhuhr: "12:09",
        Asr: "03:30",
        Maghrib: "06:39",
        Isha: "07:52",
    };
    const date = new Date(new Date().toLocaleSYementring("en-US", {
        timeZone: "Asia/Yemen"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            let caption = `اووو @${m.sender.split("@")[0]},\nجاء *${sholat}* الوقت يلا قوم صلي باقي شويه من الاقامه الحق عليها.\n\n*${waktu}*\n_هذا بتوقيت اليمن 🌟_`;
            this.autosholat[id] = [
                this.reply(m.chat, caption, m),
                setTimeout(() => {
                    delete this.autosholat[id];
                }, 57000)
            ];
        }
    }
}

module.exports = {
    before,
};
