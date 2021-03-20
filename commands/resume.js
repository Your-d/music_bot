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
      .setAuthor("LANJUTTT!", "https://cdn.discordapp.com/attachments/821310209623851008/822894990274723870/giphy.gif")
      .setImage('https://cdn.discordapp.com/attachments/821310209623851008/822892961762377728/PicsArt_03-21-01.02.39.png')
      return message.channel.send(xd);
    }
    return sendError("Gaada yg di puter nih.", message.channel);
  },
};
