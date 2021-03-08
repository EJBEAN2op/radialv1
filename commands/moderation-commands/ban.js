module.exports = {
    name: 'ban',
    execute: async (message, args, Discord) => {
        if (!message.guild) return;
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Ban Members```')).catch(console.error);
        if (!message.member.hasPermission('BAN_MEMBERS')) return;
        if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```css\nplease specify a user for me to ban\nUsage : !ban [user id / mention]```')).catch(console.error)
        if (args.length > 3) return;
        const target = message.guild.members.fetch(args[1].replace(/\D/g, ''));
        if (args[1].includes(message.author.id)) return message.channel.send('```diff\n- Error : you can\'t ban yourself').catch(console.error)
        if ((await target).roles.highest.position >= message.guild.me.roles.highest.position) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`\`\`\`diff\n- Error : ${(await target).user.username}'s role is higher than bot's role\`\`\``)).catch(console.error);
        target.then(user => {
            if (args[2]) {
                user.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n+ You were banned in ${message.guild.name} \n+ Reason : ${args[2]}\`\`\``))
                user.ban({
                    reason: `${args[2]}`
                }).catch(e => console.log(e));
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n+ Banned user : ${user.user.tag} \n+ Reason : ${args[2]}\`\`\``)).catch(e => console.log(e));
            } else {
                user.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n+ You were banned in ${message.guild.name} \n- Reason : Not provided`))
                user.ban().catch(e => console.log(e));
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n+ Banned user : ${user.user.tag} \n- Reason : Not provided`)).catch(e => console.log(e));
            }
        }).catch(e => message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Unknown user(ID)```')))
    }
}