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
    if (!queue) return sendError("Gaada yang di puter kntl.",message.channel).catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `Gaada liriknya nih lagu nye ${queue.songs[0].title}.`;
    } catch (error) {
      lyrics = `Gaada liriknya nih lagu nye ${queue.songs[0].title}.`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setAuthor(`${queue.songs[0].title} — Lyrics`, "https://media0.giphy.com/media/ScBN2m4ZR9NJ3mPdA2/source.gif")
      .setThumbnail(queue.songs[0].img)
      .setColor("BLACK")
      .setDescription(lyrics)
      .setThumbnail('https://cdn.discordapp.com/attachments/821310209623851008/822973565175332864/PicsArt_03-21-06.22.59.png')
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
  },
};
