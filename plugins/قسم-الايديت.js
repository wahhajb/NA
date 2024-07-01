let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎥 قـائـمـه الـايـديـت 🎥*'
            },
            body: {
              text: '*مرحبا بك/ي في قائمة الايديت*\n*رجاء قم باختيار الشخصيه من القائمه*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا للأختيار 🎥',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'لاتلعب بالازرار 🌚',
                        rows: [
                          {
                            header: 'ايـديـت كـيـلـوا',
                            title: 'كيلوا',
                            description: '',
                            id: '.كيلوا'
                          },
                          {
                            header: 'ايـديـت',
                            title: 'عشوائي',
                            description: '',
                            id: '.ايديت'
                          },
                          {
                            header: 'ايـديـت غـوجـو',
                            title: 'غوجو ساتورا',
                            description: '',
                            id: '.غوجو'
                          },
                          {
                            header: 'ايـديـت ميليوداس',
                            title: 'ميليوداس',
                            description: '',
                            id: '.ميليوداس'
                          },
                          {
                            header: 'ايـديـت نــاروتــو',
                            title: 'نــاروتــو',
                            description: '',
                            id: '.naroto'
                          },
                          {
                            header: 'ايـديـت دومـا',
                            title: 'دوما',
                            description: '',
                            id: '.دوما'
                          },
                          {
                            header: 'ايـديـت اسبادا',
                            title: 'اسبادا',
                            description: '',
                            id: '.اسبادا'
                          },
                          {
                            header: 'ايـديـت ايتاشي',
                            title: 'ايتاشي',
                            description: '',
                            id: '.ايتاشي'
                          },
                          {
                            header: 'ايـديـت غوكو',
                            title: 'سون غوكو',
                            description: '',
                            id: '.غوكو'
                          },
                          {
                            header: 'ايـديـت غون',
                            title: 'غون',
                            description: '',
                            id: '.غون'
                          },
                          {
                            header: 'ايـديـت سوكونا',
                            title: 'سوكونا',
                            description: '',
                            id: '.سوكونا'
                          },
                          {
                            header: 'ايـديـت استا',
                            title: 'استا',
                            description: '',
                            id: '.استا'
                          },
                          {
                            header: 'ايـديـت ميدوريا',
                            title: 'ميدوريا',
                            description: '',
                            id: '.ميدوريا'
                          },
                          {
                            header: 'ايـديـت لوفي',
                            title: 'لوفي',
                            description: '',
                            id: '.للوفي'
                          },
                          {
                            header: 'ايـديـت سونغ',
                            title: 'سونغ جين',
                            description: '',
                            id: '.سونغ'
                          },
                          {
                            header: 'ايـديـت ايتشغو',
                            title: 'كوروساكي ايتشغيو',
                            description: '',
                            id: '.ايتشغيو'
                          },
                          {
                            header: 'ايـديـت تانجيرو',
                            title: 'كامادو تانجيرو',
                            description: '',
                            id: '.تانجيرو'
                          },
                          {
                            header: 'ايـديـت شادو',
                            title: 'شادو',
                            description: '',
                            id: '.شادو'
                          },
                          {
                            header: 'ايـديـت بانكاي',
                            title: 'BANKAI',
                            description: '',
                            id: '.بانكاي'
                          },
                          {
                            header: 'ايـديـت ايرين',
                            title: 'ايرين ييغر',
                            description: '',
                            id: '.ايرين'
                          },
                          {
                            header: 'ايـديـت ليفاي',
                            title: 'ليفاي اكارما',
                            description: '',
                            id: '.ليفاي'
                          },
                          {
                            header: 'ايـديـت زورو',
                            title: 'زورو',
                            description: '',
                            id: '.زورو'
                          },
                          {
                            header: 'ايـديـت ماهيتو',
                            title: 'ماهيتو',
                            description: '',
                            id: '.ماهيتو'
                          },
                          {
                            header: 'ايـديـت توجي',
                            title: 'توجي',
                            description: '',
                            id: '.توجي'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['قسم-الايديت']

export default handler
