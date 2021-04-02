const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'embed',
    execute: async (message, args,Discord , bot ,prefix) => {
        if (!message.guild) return;
        if (!message.member.hasPermission(8)) return;
        if (!args[1]) return message.channel.send(new MessageEmbed()
        .setDescription(`\`\`\`diff\n- Error : Missing arguments\n+ Usage : ${prefix}embed [color] [embed content]\`\`\`\ncolor can be both hex code and standard US characters , while using characters make sure they are in upper case\nexample : \`${prefix}embed RED this is an embed\``)).catch(console.error)
        let color = args[1]
        if (!args[2]) return message.channel.send(new MessageEmbed()
        .setDescription(`\`\`\`diff\n- Error : Missing embed content\n+ Usage : ${prefix}embed [color] [embed content]\`\`\``)).catch(console.error)
        const embed = new MessageEmbed()
            .setColor(color)
            .setDescription(`${args.splice(2).join(" ")}`)
        await message.delete().catch(e => console.log(e))
        try {
            await message.channel.send(embed)
        } catch (error) {
            message.channel.send(new MessageEmbed()
                .setDescription(`\`\`\`diff\n- Error : ${error}\`\`\`\nMake sure you provided the correct color code`)).catch(console.error);
        }
    }
}