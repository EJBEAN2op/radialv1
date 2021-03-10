module.exports = {
    name: 'lock',
    aliases: ['channellock', 'lockchannel', 'lockdown'],
    execute(message, args, Discord) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Manage Channels```')).catch(console.error);


        if (args[2]) {
            const reason = args.splice(2).join(" ")
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
                SEND_MESSAGES: false
            }).catch(console.error)
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`\`\`\`diff\n+ Locked ${message.channel.name}\n- Reason : ${reason}\`\`\``)).catch(console.error)
        } else {
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
                SEND_MESSAGES: null
            }).catch(console.error)
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`\`\`\`diff\n+ Locked ${message.channel.name}\n- Reason : ${reason} \`\`\``)).catch(console.error)

        }
    }
}