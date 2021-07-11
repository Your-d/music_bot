const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "volume",
    description: "To setting Volume",
    usage: "[volume]",
    aliases: ["v", "vol"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("You must be inside VC", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("No music in queue", message.channel);
    if (!args[0])return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Numbers only!').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('Lu bisa atur Volume nya dari 0 sampe 150',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`Changed to : **${args[0]/1}/100**`)
    .setAuthor("Server Volume Manager", "https://media0.giphy.com/media/ScBN2m4ZR9NJ3mPdA2/source.gif")
    .setColor("BLACK")
    return message.channel.send(xd);
  },
};
