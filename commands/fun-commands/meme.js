const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'meme',
    cooldown: 10,
    execute: async (message, args, Discord) => {
        const got = require('got')
        got('https://www.reddit.com/r/meme/random/.json').then(response => {
            let content = JSON.parse(response.body),
                image = content[0].data.children[0].data.url,
                embed = new MessageEmbed()
                    .setImage(image)
                    .setTimestamp()
                    .setColor('RANDOM')
                    .setDescription('Meme')
                    .setFooter('from: reddit')
            message.channel.send(embed).catch(console.error)
        })
    }
}