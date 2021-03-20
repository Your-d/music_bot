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
      .setAuthor("LANJUTTT!", "https://media0.giphy.com/media/ScBN2m4ZR9NJ3mPdA2/source.gif")
      .setImage('https://cdn.discordapp.com/attachments/821310209623851008/822973565175332864/PicsArt_03-21-06.22.59.png')
      return message.channel.send(xd);
    }
    return sendError("Gaada yg di puter nih.", message.channel);
  },
};
