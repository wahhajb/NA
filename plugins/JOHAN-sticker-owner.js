const handler = async (m, {conn}) => {
  conn.sendFile(m.chat,'error.webp', '', m, {asSticker: true});
};
handler.command = ['نرد', 'dados', 'dadu'];
export default handler;
