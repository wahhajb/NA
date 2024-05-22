smd({
  pattern: "video",
  desc: "Downloads video from yt.",
  category: "downloader",
  filename: __filename,
  use: "<faded-Alan Walker>"
}, async (_0xe5ea97, _0x36bc71) => {
  let _0x54713e = _0x36bc71 ? _0x36bc71 : _0xe5ea97.reply_text;
  var _0x5b10f0 = _0x36bc71.toLowerCase().includes("doc") ? "document" : "video";
  if (!_0x54713e) {
    return _0xe5ea97.reply("*Use : " + prefix + "video Al Quran!*");
  }
  let _0x421809 = ytIdRegex.exec(_0x36bc71) || [];
  let _0x35c755 = _0x421809[0] || false;
  try {
    if (!_0x35c755) {
      let _0x588f03 = await yts(_0x54713e);
      let _0x525771 = _0x588f03.videos[0];
      _0x35c755 = _0x525771.url;
      _0x421809 = ytIdRegex.exec(_0x35c755);
    }
  } catch {}
  try {
    let _0x1df0ed = await ytdl.getInfo(_0x35c755);
    let _0x5c8a7c = Math.floor(i.timestamp * 60);
    if (_0x5c8a7c >= videotime) {
      _0x5b10f0 = "document";
    }
    let _0x56042a = _0x1df0ed.videoDetails.title;
    let _0x5d70e6 = "./temp/" + _0x421809[1] + ".mp4";
    const _0x4195ce = ytdl(_0x35c755, {
      filter: _0x4f303f => _0x4f303f.itag == 22 || _0x4f303f.itag == 18
    }).pipe(fs.createWriteStream(_0x5d70e6));
    await new Promise((_0x3fc982, _0x3a9fa6) => {
      _0x4195ce.on("error", _0x3a9fa6);
      _0x4195ce.on("finish", _0x3fc982);
    });
    var _0x3048ab = {
      ...(await _0xe5ea97.bot.contextInfo(Config.botname, "ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
    };
    let _0x3d0cf7 = {
      [_0x5b10f0]: fs.readFileSync(_0x5d70e6),
      mimetype: "video/mp4",
      fileName: _0x56042a,
      caption: Config.caption,
      contextInfo: _0x3048ab
    };
    await _0xe5ea97.bot.sendMessage(_0xe5ea97.jid, _0x3d0cf7, {
      quoted: _0xe5ea97
    });
    try {
      fs.unlinkSync(_0x5d70e6);
    } catch {}
    ;
  } catch (_0x6c0641) {
    console.log("ytdl Download video error:", _0x6c0641);
    try {
      let _0x4e4465 = await yt.getInfo(_0x421809[1]);
      if (_0x4e4465.duration >= videotime) {
        _0x5b10f0 = "document";
      }
      let _0x3d6d42 = {
        type: "video",
        quality: _0x4e4465.pref_Quality || "best",
        format: "mp4"
      };
      let _0x3e3caf = await yt.download(_0x421809[1], _0x3d6d42);
      var _0x3048ab = {
        ...(await _0xe5ea97.bot.contextInfo(Config.botname, "ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ"))
      };
      let _0x3448d2 = _0x4e4465.title || _0x3e3caf || _0x421809[1] || "Suhail MD -- YT Video";
      if (_0x3e3caf) {
        await _0xe5ea97.bot.sendMessage(_0xe5ea97.chat, {
          [_0x5b10f0]: {
            url: _0x3e3caf
          },
          fileName: _0x3448d2,
          caption: Config.caption,
          mimetype: "video/mp4",
          contextInfo: _0x3048ab
        });
      } else {
        await _0xe5ea97.send("Video not Found");
      }
      try {
        fs.unlinkSync("" + _0x3e3caf);
      } catch {}
    } catch (_0x55db8f) {
      return _0xe5ea97.error(_0x55db8f + "\n\ncommand: video", _0x55db8f, "*_Video not Found_*");
    }
  }
});
