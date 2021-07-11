const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "lyrics",
    description: "Get lyrics for the currently playing song",
    usage: "[lyrics]",
    aliases: ["ly"],
  },

  run: async function (client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("No music in queue.",message.channel).catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `No lyrics found ${queue.songs[0].title}.`;
    } catch (error) {
      lyrics = `No lyrics found ${queue.songs[0].title}.`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setAuthor(`${queue.songs[0].title} — Lyrics`, "https://media0.giphy.com/media/ScBN2m4ZR9NJ3mPdA2/source.gif")
      .setThumbnail(queue.songs[0].img)
      .setColor("BLACK")
      .setDescription(lyrics)
      .setThumbnail('https://media.discordapp.net/attachments/811237555357351968/863586432086048798/0d7393dada889aef43d1674f38cc3884.jpg')
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
  },
};
