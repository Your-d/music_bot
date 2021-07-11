const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "resume",
    description: "To resume the paused music",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶️ resume!")
      .setColor("BLACK")
      .setAuthor("Continue", "https://media0.giphy.com/media/ScBN2m4ZR9NJ3mPdA2/source.gif")
      .setImage('https://media.discordapp.net/attachments/811237555357351968/863586432086048798/0d7393dada889aef43d1674f38cc3884.jpg')
      return message.channel.send(xd);
    }
    return sendError("No music in queue.", message.channel);
  },
};
