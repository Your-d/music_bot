module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Aldi Boytons  ラ𝙍𝙄𝙎𝙀  ₮𝙏𝘼𝙓", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
