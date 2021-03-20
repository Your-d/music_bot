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
      .setAuthor("LANJUTTT!", "https://i.pinimg.com/originals/6a/93/8e/6a938ede8eaae646f60e611c198fc12f.gif")
      .setImage('https://cdn.discordapp.com/attachments/821310209623851008/822735076001185822/PicsArt_03-20-02.35.21.png')
      return message.channel.send(xd);
    }
    return sendError("Gaada yg di puter nih.", message.channel);
  },
};
