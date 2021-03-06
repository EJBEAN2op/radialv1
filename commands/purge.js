module.exports = {
    name: 'purge',
    aliases: ['clear'],
    execute: async (message, args, Discord, bot) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return;
        if (!message.guild) return;
        if (parseInt(args[1]) > 100) return message.channel.send(`You cannot delete more than 100 messages in one go <:pepehands:817086292449034300>`)
        const num1 = +args[1]
        const num2 = 1
       await message.channel.bulkDelete(`${num1 + num2}`).catch(err => message.channel.send(`${err}`)).catch(e => console.log(e))
        message.channel.send(new Discord.MessageEmbed()
            .setAuthor(`Purge`, `${bot.user.displayAvatarURL()}`)
            .setDescription(`Cleared ${args[1]} messages`)).then(msg => {
            msg.delete({
                timeout: 5000
            })

        }).catch(err => console.log(err));

    }
}