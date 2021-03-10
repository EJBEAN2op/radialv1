module.exports = {
    name: 'unlock',
    aliases: ['channelunlock'],
    execute(message, args , Discord){
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Manage channels```')).catch(console.error);
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).catch(console.error)
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`\`\`\`diff\n+ Unlocked ${message.channel.name}\`\`\``)).catch(console.error)
    }
}