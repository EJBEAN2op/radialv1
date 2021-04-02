const config = require('../../config.json')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'invite',
    aliases: ['inv'],
    execute: async (message, args, Discord) => {
        const embed1 = new MessageEmbed()
        .setDescription(config.errembed)

        const inviteEmbed = new MessageEmbed()
            .setTitle('Radial Bot Invite')
            .addFields(
                { name: 'Moderation', value: `[Invite Here](${config.adminurl})\nAdministrator permissions required)` },
                { name: 'Fun & Utility (normal use)', value: `[Invite Here](${config.nonadminurl})\nSend & Read permissions required)` }
            )
        const embed = new MessageEmbed()
            .setAuthor(`${config.version}`)
            .setTitle('Radial Bot Invite')
            .setDescription('Radial is a multi-functional bot , built to fulfill your needs!')
            .addFields({
                name: 'Do you want me to DM you the Invite URL',
                value: '\u200b\nReply with `yes` to proceed\nReply with `no` to cancel the process'
            })
        if (message.guild) {
            message.channel.send(embed).catch(console.error)
                .then(msg => {
                    msg.channel.awaitMessages(m => m.author.id === message.author.id, {
                        max: 1,
                        time: 17000,
                        errors: ['time']
                    })
                        .then(collected => {
                            if (collected.first().content.toLowerCase() === 'yes') {
                                msg.delete().catch(console.error)
                                message.author.send(inviteEmbed).catch(e => message.channel.send(`<@${message.author.id}>`, embed1)).catch(console.error)
                            } else if (collected.first().content.toLowerCase() === 'no') {
                                msg.delete().catch(console.error)
                                message.channel.send(new Discord.MessageEmbed()
                                    .setDescription('```diff\n- User aborted the request```')).catch(console.error)
                            } else {
                                message.channel.send(new Discord.MessageEmbed()
                                    .setDescription('```diff\n- Unknown response```')).catch(console.error)
                            }
                        }).catch(() => {
                            msg.delete().catch(console.error)
                            message.channel.send(new Discord.MessageEmbed()
                                .setDescription(`\`\`\`diff\n- Error : Request timed out\`\`\``)).catch(console.error)
                        })
                })
        }
    }
}