const handler = async (m, {conn}) => {
  conn.sendFile(m.chat, `https://telegra.ph/file/ea03bbc1d2dbd77af8a57.jpg`, 'error.webp', '', m, {asSticker: true});
};
handler.command = ['dado', 'dados', 'dadu'];
export default handler;