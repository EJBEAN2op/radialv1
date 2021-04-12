const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'messageDelete',
    execute: async (message) => {
        let content;
        if (!message.guild) return;
        if (message.content) content = message.content
        else content = 'none'
        const logChannel = message.guild.channels.cache.find(ch => ch.name === 'radial-logs')
        if (!logChannel) return;
        const log = new MessageEmbed()
        .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic: true}))
        .setTitle('Message Deleted')
        .setColor('#ff0004')
        .setDescription(`**Channel**: <#${message.channel.id}>\n**Message ID**: ${message.id}\n\u200b\n**Content**\n\`\`\`${content}\`\`\``)
        .setTimestamp()
        logChannel.send(log)
    }
}