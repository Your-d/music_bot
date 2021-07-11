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
    .setDescription(`Invite the bot! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BLACK")
    .setImage('https://media.discordapp.net/attachments/811237555357351968/863586432086048798/0d7393dada889aef43d1674f38cc3884.jpg')
    .setTimestamp()
    .setFooter('Your Favorite Boy.','https://media.discordapp.net/attachments/811237555357351968/863586432086048798/0d7393dada889aef43d1674f38cc3884.jpg');
    return message.channel.send(invite);
  },
};
