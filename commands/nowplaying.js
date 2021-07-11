const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "To show what music playing right now",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Gaada yang di puter jing.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Now Playing", "https://media0.giphy.com/media/ScBN2m4ZR9NJ3mPdA2/source.gif")
      .setThumbnail("https://media.discordapp.net/attachments/811237555357351968/863586432086048798/0d7393dada889aef43d1674f38cc3884.jpg")
      .setColor("BLACK")
      .addField("Name", song.title, true)
      .addField("Duration", song.duration, true)
      .addField("Requested by", song.req.tag, true)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
