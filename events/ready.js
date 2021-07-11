module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(" U.help | Yours ", {
    type: "PLAYING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
