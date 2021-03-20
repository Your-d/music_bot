const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Udah buruan invite kentod! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BLACK")
    .setImage('https://cdn.discordapp.com/attachments/821310209623851008/822973565175332864/PicsArt_03-21-06.22.59.png')
    .setTimestamp()
    .setFooter('TTAX Generation® 2021.','https://cdn.discordapp.com/attachments/821704942603468821/821705087838584862/PicsArt_01-16-07.40.04.jpg');
    return message.channel.send(invite);
  },
};
