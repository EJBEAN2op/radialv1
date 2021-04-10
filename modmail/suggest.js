const id = require('../JSON/id.json')
const Discord = require('discord.js')
const suggestionEmbed = require('../embeds/suggestion-embed')
module.exports = {
    name: 'suggest',
    execute: async (message , bot) => {
        const main = bot.channels.resolve(id.channels.suggestions)
        if (!message.guild) {
            message.author.send(suggestionEmbed.embed).then(msg => {
                msg.channel.awaitMessages(m => m.author.id === message.author.id, {
                        max: 1,
                        time: 50000,
                        errors: ['time']
                    })
                    .then(collected => {

                        if (collected.first().content.toLowerCase() === 'yes') { // || collected.first().content.toLowerCase() === 'y'){
                            msg.delete()

                            msg.channel.send(suggestionEmbed.embed1).then(x => {
                                x.channel.awaitMessages(m => m.author.id === message.author.id, {
                                        max: 1
                                    })
                                    .then(collected => {
                                        main.send(new Discord.MessageEmbed()
                                            .setAuthor(`${collected.first().author.username} (${collected.first().author.id})`, collected.first().author.displayAvatarURL())
                                            .setDescription(`\`\`\`diff\n+ ${collected.first().content}\`\`\``))


                                        x.channel.send(suggestionEmbed.embed2).catch(e => console.log(e))
                                    })
                            }).catch(e => console.log(e))
                        } else if (collected.first().content.toLowerCase() === 'no' || collected.first().content.toLowerCase() === 'exit') {
                            message.channel.send('exiting ...').then(x => {
                                x.delete()
                                x.channel.send(new Discord.MessageEmbed()
                                .setDescription('```diff\n- User aborted the request```')).catch(e => console.log(e))
                            }).catch(e => console.log(e))

                        } else {
                            message.channel.send(new Discord.MessageEmbed()
                            .setDescription('```diff\n- Unknown Response - process exited```')).catch(e => console.log(e))
                        }
                    }).catch(e => console.log(e))


            }).catch(e => console.log(e))



        } else {
            message.channel.send(new Discord.MessageEmbed()
            .setDescription('```diff\n- This command is only available in DMs , please DM the bot [suggest] !```')
            .setFooter('Pro tip `[]` are not required!')).catch(e => console.log(e))
        }

    }
}