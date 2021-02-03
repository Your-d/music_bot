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
      .setDescription("▶ Sekuy lanjut !")
      .setColor("BLACK")
      .setAuthor("LANJUTTT!", "https://raw.githubusercontent.com/aldiboytons/boytons/master/assets/Music.gif")
      return message.channel.send(xd);
    }
    return sendError("Gaada yg di puter nih.", message.channel);
  },
};
