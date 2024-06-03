function handler(m, { text }) {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  m.reply(teks.replace(/[a-z]/gi, v => {
      return { 
          'a': '𝐀', '𝑨'
          'b': '𝐁', '𝑩'
          'c': '𝐂', '𝑪'
          'd': '𝐃', '𝑫'
          'e': '𝐄', '𝑬'
          'f': '𝐅', '𝑭'
          'g': '𝐆', '𝑮'
          'h': '𝐇', '𝑯'
          'i': '𝐈', '𝑰'
          'j': '𝐉', '𝑱'
          'k': '𝐊', '𝑲'
          'l': '𝐋', '𝑳'
          'm': '𝐌', '𝑴'
          'n': '𝐍', '𝑵'
          'o': '𝐎', '𝑶'
          'p': '𝐏', '𝑷'
          'q': '𝐐', '𝑸'
          'r': '𝐑', '𝑹'
          's': '𝐒', '𝑺'
          't': '𝐓', '𝑻'
          'u': '𝐔', '𝑼'
          'v': '𝐕', '𝑽'
          'w': '𝐖', '𝑾'
          'x': '𝐗', '𝑿'
          'y': '𝐘', '𝒀'
          'z': '𝐙', '𝒁'
      }[v.toLowerCase()] || v
  }))
}
handler.help = ['H A R L E Y']
handler.tags = ['H A R L E Y']
handler.command =  /^(زخرفه|زخرفة)$/i

export default handler
