const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
        var allcmds = " ";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="> ●  "+client.config.prefix+cmdinfo.name+"\n> ●  "+cmdinfo.usage+" : "+cmdinfo.description+"\n\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Commands of "+client.user.username, "https://media0.giphy.com/media/ScBN2m4ZR9NJ3mPdA2/source.gif")
        .setColor("GREY")
        .setDescription(allcmds)
        .setFooter(`TTAX Generation® Corp 2021.`)
        .setThumbnail('https://cdn.discordapp.com/attachments/821310209623851008/822973565175332864/PicsArt_03-21-06.22.59.png')

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("GREY")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
