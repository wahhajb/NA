let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*💻 قـائـمـه الــدعــم 💻*'
            },
            body: {
              text: '*مرحبا بك/ي في قائمة الدعم*\n*رجاء قم باختيار الذي تريده من القائمه*\n\n*يوجد امر لم اضفه و هو امر .تقرير وهو اذا حصل مشكله او تريد شي من المطور اكتب الامر و جنبه اللي تريده*\n\n> *شـكـرا لـك عـلـى اسـتـخـدام الـبـوت*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط للأختيار 💻',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'المطور بيحبك',
                        rows: [
                          {
                            header: 'الــمــطــور',
                            title: 'رقـم الـمـطـور',
                            description: '',
                            id: '.المطور'
                          },
                          {
                            header: 'الــدعــم',
                            title: 'جروبات الدعم',
                            description: '',
                            id: '.الدعم'
                          },
                          {
                            header: 'مـعـلـومـات',
                            title: 'معلومات البوت',
                            description: '',
                            id: '.معلومات'
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
handler.command = ['قسم-الدعم']

export default handler
