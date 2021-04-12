const passwordSchema = require('../../schemas/account-schema')
const { MessageEmbed } = require('discord.js')
const emotes = require('../../JSON/emotes.json')
module.exports = {
    name: 'delacc',
    execute: async (message, args, Discord, bot, prefix, password) => {
        if (message.guild) return message.channel.send(new MessageEmbed()
        .setColor('YELLOW')
        .setDescription(`${emotes.emotes.alert} **For safety reasons , this command is only available in Bot DM\'s**`))
        const data = await passwordSchema.findOne({ userID: message.author.id })

        if (data) {
            message.channel.send(new MessageEmbed()
                .setTitle('Whoa Whoa slow down...')
                .setColor('RED')
                .setDescription(`${emotes.emotes.alert} **This will permanently terminate your account**\nReply with \`yes\` to proceed.\nReply with \`no\` if you changed your mind.`)).then(msg => {
                    msg.channel.awaitMessages(m => m.author.id === message.author.id, {
                        max: 1,
                        time: 17000,
                        errors: ['time']
                    })
                        .then(async collected => {
                            if (collected.first().content.toLowerCase() === 'yes') {
                                msg.delete()
                                await passwordSchema.findOneAndRemove({ userID: message.author.id })
                                message.channel.send(new MessageEmbed()
                                .setColor('GREEN')
                                .setTitle(`${emotes.emotes.check} Successfully teminated account!`))
                            } else if (collected.first().content.toLowerCase() === 'no'){
                                msg.delete()
                                message.channel.send(new MessageEmbed()
                                .setDescription('```diff\n- Aborted request```'))
                            } else {
                                msg.delete()
                                message.channel.send(new MessageEmbed()
                                .setDescription('```diff\n- Error : Unknown respose```'))
                            }

                        }).catch(() => {
                            msg.delete()
                            message.channel.send(new MessageEmbed()
                                .setDescription('```diff\n- Error : request timed out```'))
                            return;
                        })
                })

        } else {
            message.channel.send(new MessageEmbed()
            .setTitle(`${emotes.emotes.alert} You are not signed in yet!`)
            .setColor('RED'))
        }

    }
}