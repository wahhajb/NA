import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

    let lister = [
        "بحث",
        "تحميل",
        "احدث"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("يستخدم هذا الامر لتحميل مشاريع بيكسلاب\n\n*طريقه الاستخدام*\n\n*.بيكسلاب بحث:* يبحث لك عن مشاريع بنفس الاسم اللي تحطه و يجيب لك روابطهم\n\n*.بيكسلاب تحميل:* بيحمل لك المشروع من خلال الرابط\n\n*.بيكسلاب احدث:* بيجيب لك احد المشاريع في بيكسلاب\n\n*الخيارات*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "بحث") {
            if (!inputs) return m.reply("مثال\n\n*.بيكسلاب بحث|cover*")
            await m.reply(wait)
            try {
                let res = await searchPLP(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ النتيجة ${index + 1} ]*\n\n` +
                        `📢 *اســم:* ${item.name || 'غــيــر مــتــاح'}\n` +
                        `🌐 *رابــط:* ${item.link || 'غــيــر مــتــاح'}\n`
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply('error')
            }
        }

        if (feature == "تحميل") {
            if (!inputs) return m.reply("مثال:\n\n.بيكسلاب تحميل|https://www.freeplp.com/2023/09/viral-facebook-profile-photo-editing.html")
            await m.reply(wait)
            try {
                let res = await downPLP(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ النتيجة ${index + 1} ]*\n\n` +
                        `📢 *اســم:* ${item.name || 'غــيــر مــتــاح'}\n` +
                        `🌐 *رابــط:* ${item.link || 'غــيــر مــتــاح'}\n`
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply('error')
            }
        }
        
        if (feature == "احدث") {
            await m.reply(wait)
            try {
                let res = await latestPLP(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ النتيجة ${index + 1} ]*\n\n` +
                        `📢 *اســم:* ${item.name || 'غــيــر مــتــاح'}\n` +
                        `🌐 *رابــط:* ${item.link || 'غــيــر مــتــاح'}\n`
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply('error')
            }
        }
        
    }
}
handler.help = ["pixellab"]
handler.tags = ["downloader"]
handler.command = /^(plp|pixellab|بيكسلاب)$/i
export default handler

/* New Line */
async function latestPLP() {
  try {
    const response = await fetch('https://www.freeplp.com/'); // Replace with the URL of the website containing the HTML data
    const html = await response.text();
    const $ = cheerio.load(html);

    const data = [];

    $('.pTtl a').each((index, element) => {
      const link = $(element).attr('href') || '';
      const name = $(element).text().trim() || '';
      data.push({ link, name });
    });

    return data;
  } catch (error) {
    console.error('Error fetching or parsing the data:', error);
    return [];
  }
}

async function downPLP(url) {
  try {
    const response = await fetch(url); // Replace with the URL of the website containing the HTML data
    const html = await response.text();
    const $ = cheerio.load(html);

    const data = [];

    $('.manualDownload-text a').each((index, element) => {
      const link = $(element).attr('href');
      const name = $(element).text().trim();
      data.push({ link, name });
    });
    return data;
  } catch (error) {
    console.error('*اسف حدث خطاء اثناء جلب البيانات*:', error);
    return [];
  }
}


async function searchPLP(q) {
  try {
  const result = [];
  const response = await fetch('https://www.freeplp.com/search?q=' + q);
    const html = await response.text();
  const $ = cheerio.load(html);
  const articles = $('article.ntry');

  articles.each((index, element) => {
    const name = $(element).find('h2.pTtl a').text().trim();
    const link = $(element).find('h2.pTtl a').attr('href');

    result.push({ name, link });
  });

  return result;
  } catch (error) {
    console.error('*اسف حدث خطاء اثناء جلب البيانات*:', error);
    return [];
  }
}
