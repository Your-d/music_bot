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
      .setAuthor("Now Playing", "https://i.pinimg.com/originals/6a/93/8e/6a938ede8eaae646f60e611c198fc12f.gif")
      .setThumbnail("https://cdn.discordapp.com/attachments/821310209623851008/822735076001185822/PicsArt_03-20-02.35.21.png")
      .setColor("BLACK")
      .addField("Name", song.title, true)
      .addField("Duration", song.duration, true)
      .addField("Requested by", song.req.tag, true)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
