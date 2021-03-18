module.exports = {
    name: 'unlock',
    aliases: ['channelunlock'],
    execute(message, args , Discord){
        if (!message.guild) return;
        if (!message.member.hasPermission('ADMINISTRATOR')) return;
        if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Administrator```')).catch(console.error);

    if (message.channel.permissionsFor(message.channel.guild.roles.everyone).has('SEND_MESSAGES' , false)){
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription('```diff\n- Error : channel is not locked```')).catch(console.error)
    } else {
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).catch(console.error)
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`\`\`\`diff\n+ Unlocked ${message.channel.name}\`\`\``)).catch(console.error)
    }
    }
}