let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*📜 قائمه الاستمارات 📜*'
            },
            body: {
              text: 'مرحبا بك/ي\nرجاء قم بالبحث عن اسم النقابه التي فيها ثم اختارها'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا للأختيار 📜',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'اختر نقابتك ✨',
                        rows: [
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'سكايبيا',
                            description: 'خاص لنقابه SKIBYA',
                            id: '.سكايبيا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'دراغون',
                            description: 'خاص لنقابه 🐉 DRAGON 🐉',
                            id: '.دراغون'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'شيبويا',
                            description: 'خاص لنقابه SHIBUYA',
                            id: '.شيبويا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'بلاك',
                            description: 'خاص لنقابه 𝐁𝐋𝐀𝐂𝐊',
                            id: '.بلاك'
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
handler.command = ['قسم-الاستمارات']

export default handler
