module.exports = {
    name: 'purge',
    aliases: ['clear'],
    execute: async (message, args, Discord, bot) => {
        if (!message.guild) return;
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('```diff\n- Error : Missing bot permission\n+ Permission Required : Manage Messages```')).catch(console.error);
        if (!args[1]) return message.channel.send('Please provide a valid number of messages for me to purge <:yeas:807926091540725791>')
        if (isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('```diff\n- Error : Arguments provided is not a valid number```')).catch(console.error);
        if (parseInt(args[1]) >= 100) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('```diff\n- Discord API error : Cannot delete more than 100 messages in a single use\n+ Provide a value from 1 to 99```')).catch(console.error);
        if (parseInt(args[1]) <= 0) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('```diff\n- Error : you cannot provide negative values or 0\n+ Provide a value from 1 to 99```')).catch(console.error);
        const num1 = +args[1]
        const num2 = 1
       await message.channel.bulkDelete(`${num1 + num2}`).then(x => {
           message.channel.send(new Discord.MessageEmbed()
           .setDescription(`\`\`\`diff\n+ Cleared ${args[1]} messages\`\`\``))
        }).catch(err => message.channel.send(new Discord.MessageEmbed()
        .setDescription(`\`\`\`diff\n- ${err}\`\`\``)))


    }
}