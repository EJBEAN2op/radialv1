module.exports = {
    name: 'removerole',
    aliases: ['remove'],
    execute: async (message, args, Discord) => {
        if (!message.guild) return;
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Manage Roles```')).catch(console.error);
        if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing arguments , please provide a valid user\n+ Usage : !removerole [user ID / mention] [role ID / mention]```')
            .setFooter(`Make sure to use server prefix instead of <!>`))
        const rolename = args[2];
        const role = args.splice(2).join(" ")
        const target = message.guild.roles.cache.find(x => x.id === rolename) ||
            message.mentions.roles.first() ||
            message.guild.roles.cache.find(x => x.name === `${role}`)

        if (!target) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Unknown role / ID```')).catch(console.error)

        const roleUser = message.guild.members.fetch(args[1].replace(/\D/g, ''));

        try {
            await roleUser
        } catch (e) {
            message.channel.send(new Discord.MessageEmbed()
                .setDescription('```diff\n- Error : Unknown user / ID```')).catch(console.error);
            return;
        }
        roleUser.then(member => {
            if (target.position >= message.guild.me.roles.highest.position) return message.channel.send(new Discord.MessageEmbed()
                .setDescription(`\`\`\`diff\n- Error : The role ${target.name} is higher than bot's role\`\`\``)).catch(console.error);
            if (member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new Discord.MessageEmbed()
                .setDescription(`\`\`\`diff\n- Error : ${member.user.username}'s role is higher than your role\`\`\``)).catch(console.error);
            if (!member.roles.cache.has(target.id)) {
                return message.channel.send(new Discord.MessageEmbed()
                    .setDescription('```diff\n- Error : user does not have the role```')).catch(console.error)
            } else {
                member.roles.remove(target).catch(e => console.log(e))
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`Removed role <@&${target.id}> from <@${member.user.id}>`))
            }
        }).catch(err => message.channel.send(new Discord.MessageEmbed()
            .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n${errorText}`))).catch(console.error);

    }
}