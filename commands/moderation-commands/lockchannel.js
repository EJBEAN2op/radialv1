module.exports = {
    name: 'lock',
    aliases: ['channellock', 'lockchannel', 'lockdown'],
    execute(message, args, Discord) {
        if (!message.guild) return;
        if (!message.member.hasPermission('ADMINISTRATOR')) return;
        if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Administrator```')).catch(console.error);
        let ch = message.channel.permissionsFor(message.guild.roles.everyone)
        


let reason;
if (args[2]){
    reason = args.splice(1).join(" ");
} else {
    reason = 'Not provided'
}

if(message.channel.permissionsFor(message.channel.guild.roles.everyone).has('SEND_MESSAGES' , false)){

            message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
                SEND_MESSAGES: false
            }).catch(console.error)
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`\`\`\`diff\n+ Locked ${message.channel.name}\n- Reason : ${reason}\`\`\``)).catch(console.error)
                return;
        } else {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : channel is already locked```')).catch(console.error)
        }
    }
}
