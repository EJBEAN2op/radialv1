module.exports = {
    name: 'unban',
    execute: async (message, args, Discord) => {
        if (!message.guild) return;
        if (!message.member.hasPermission('BAN_MEMBERS')) return;
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Ban Members```')).catch(console.error);
        if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : missing arguments \n+ Please provide a valid user ID')).catch(console.error)
        if (args.length > 2) return;
        if (isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : please provide an existing user ID for me to unban```')).catch(console.error)

        let userID = args[1]
        message.guild.fetchBans().then(bans => {
            if (bans.size == 0) return
            let bUser = bans.find(b => b.user.id == userID)
            if (!bUser) {
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n- Error : could not find user ID in server ban logs\nProvided ID - ${userID}\`\`\``)).catch(console.error)
                return
            } else {
                message.guild.members.unban(bUser.user)
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n+ Unbanned user : ${bUser.user.tag}\`\`\``)).catch(console.error)
            }
        })

    }
}