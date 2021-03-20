const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "Buat kasi liat yang sekarang lagi di dengerin",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Gaada yang di puter jing.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Now Playing", "https://cdn.discordapp.com/attachments/821310209623851008/822894990274723870/giphy.gif")
      .setThumbnail("https://cdn.discordapp.com/attachments/821310209623851008/822892961762377728/PicsArt_03-21-01.02.39.png")
      .setColor("BLACK")
      .addField("Name", song.title, true)
      .addField("Duration", song.duration, true)
      .addField("Requested by", song.req.tag, true)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
