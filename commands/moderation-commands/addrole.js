const errorText = require('../../embeds/text')
module.exports = {
    name: 'addrole',
    aliases: ['role'],
    execute: async (message, args, Discord, bot, prefix) => {
        if (!message.guild) return;
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Manage Roles```')).catch(console.error);
        if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`\`\`\`diff\n- Error : Missing arguments , please provide a valid user\n+ Usage : ${prefix}role [user ID / mention] [role ID / mention]\`\`\``))
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
            if (target.position >= message.member.roles.highest.position) return message.channel.send(new Discord.MessageEmbed()
                .setDescription(`\`\`\`diff\n- Error : The role ${target.name} is higher than your role\`\`\``)).catch(console.error);
            if (member.roles.cache.has(target.id)) {
                member.roles.remove(target).catch(e => console.log(e))
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n- Removed role ${target.name} from ${member.user.username}\`\`\`\nRole removed : <@&${target.id}> (${target.id})`)).catch(console.error)
                return;
            } else {
                member.roles.add(target).catch(e => console.log(e))
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n+ Added role ${target.name}> to ${member.user.username}\`\`\`\nRole added : <@&${target.id}> (${target.id})`)).catch(console.error)
            }
        }).catch(err => message.channel.send(new Discord.MessageEmbed()
            .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n${errorText}`))).catch(console.error);

    }
}