module.exports = {
    name: 'delchannel',
    execute(message, args, Discord) {
        if(!message.guild) return;

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS' , 'SEND_MESSAGES')) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Manage Channels```')).catch(console.error);
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(`<a:boing:815180305190223903> awaiting user response`)
            .addFields({
                name: `This command will delete the channel \`${message.channel.name}\` permanently , this process is irreversible`,
                value: '\u200b\nReply with `yes` to proceed.\nReply with `no` to exit the process.'
            })).then(msg => {
            msg.channel.awaitMessages(m => m.author.id === message.author.id, {
                max: 1,
                time: 17000,
                errors: ['time']
            }).then(collected => {
                if(collected.first().content.toLowerCase() === 'yes') {
                    msg.delete()
                    message.channel.delete().catch(console.error)
                    return;

                } else if(collected.first().content.toLowerCase() === 'no'){
                    msg.delete()
                    message.channel.send(new Discord.MessageEmbed()
                    .setDescription('```diff\n- User aborted the request```'))
                    return;
                } else {
                    msg.delete()
                    message.channel.send(new Discord.MessageEmbed()
                    .setDescription('```diff\n- Unknown response```'))
                    return;

                }
            }).catch(() => {

                msg.delete()
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription('```diff\n- Error : Request timed out```'))
            })
        }).catch(console.error)

    }
}