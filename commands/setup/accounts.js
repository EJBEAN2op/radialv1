let array = [];
let ps;
const passwordSchema = require('../../schemas/account-schema')
const { MessageEmbed } = require('discord.js')
const emotes = require('../../JSON/emotes.json')
module.exports = {
    name: 'signup',
    execute: async (message, args, Discord, bot, prefix, password) => {
        if (message.guild) return message.channel.send(new MessageEmbed()
        .setColor('YELLOW')
        .setDescription(`${emotes.emotes.alert} **For safety reasons , this command is only available in Bot DM\'s**`))
        //if (!password) {
        const data = await passwordSchema.findOne({ userID: message.author.id })
        if (data) {
            message.channel.send(new MessageEmbed()
                .setTitle(`${emotes.emotes.check} You are already signed in!`))
            console.log(password)
            return;
        } else {
            message.channel.send(new MessageEmbed()
                .setTitle(`${emotes.emotes.blobloading} Please type in your password.`)
                .setFooter('Use a mixture of numbers , letters and special characters for stronger password')).then(async msg => {
                    await msg.channel.awaitMessages(m => m.author.id === message.author.id, {
                        max: 1,
                        time: 17000,
                        errors: ['time']
                    })
                        .then(async collected => {
                            await msg.delete()
                            const p = await collected.first().content
                            //await array.push(collected.first().content)
                            let newData = new passwordSchema({
                                Password: p,
                                userID: message.author.id
                            })
                            newData.save();
                            message.channel.send(new MessageEmbed()
                                .setColor('GREEN')
                                .setTitle(`${emotes.emotes.check} Successfully signed in!`))


                        }).catch(() => {
                            msg.delete()
                            message.channel.send(new MessageEmbed()
                                .setDescription('```diff\n- Error : request timed out```'))
                            return;
                        })


                    

                })
        }
    }
}

