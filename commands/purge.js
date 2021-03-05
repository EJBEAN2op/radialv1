module.exports = {
    name: 'purge',
    aliases: ['clear'],
    execute: async (message, args , Discord, bot) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
        if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return;
        if(!message.guild) return;
        const num1 = +args[1]
        const num2 = 1
        message.channel.bulkDelete(`${num1 + num2}`)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`Purge` , `${bot.user.displayAvatarURL()}`)
        .setDescription(`Cleared ${args[1]} messages`)).then(msg => {
            msg.delete({timeout: 5000 })

        }).catch(err => console.log(err));

    }
}