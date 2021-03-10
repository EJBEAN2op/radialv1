module.exports = {
    name: 'unlock',
    execute(message, args, Discord) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Manage channels```')).catch(console.error);
        message.guild.channels.cache.forEach(async (channel) => {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: null
            }).catch(console.error)
        })
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`\`\`\`diff\n+ Unlocked all channels\`\`\``)
            .setFooter('Use lock for a complete server lockdown')).catch(console.error)
    }
}