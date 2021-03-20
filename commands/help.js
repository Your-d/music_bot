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
            allcmds+="➠  "+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+" : "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Commands of "+client.user.username, "https://i.pinimg.com/originals/6a/93/8e/6a938ede8eaae646f60e611c198fc12f.gif")
        .setColor("GREY")
        .setDescription(allcmds)
        .setFooter(`TTAX Generation® Corp 2021.`)
        .setThumbnail('https://cdn.discordapp.com/attachments/821310209623851008/822735076001185822/PicsArt_03-20-02.35.21.png')

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
