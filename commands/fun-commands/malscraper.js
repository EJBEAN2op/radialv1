const malScraper = require('mal-scraper')
const errorText = require('../../embeds/text')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'mal',
    aliases: ['anime' , 'myanimelist'],
    execute: async (message , args) => {
        const  name = args.splice(1).join(" ");
        malScraper.getInfoFromName(name).then((data) => {
            let title = data.title
            let image = data.image
            if(!image) image = 'https://media.discordapp.net/attachments/802857839488008206/825698742933520404/400.png?width=605&height=390'
            let score = data.score
            if (!score) score = 'unknown'
            let url = data.url
            if (!score) url = 'unknown'
            let status = data.status
            if (!status) status = 'unknown'
            let trailer = data.trailer
            if (!trailer) trailer = ''
            let ranked = data.ranked
            if(!ranked) ranked = 'unknown'
        const newembed = new MessageEmbed()
                .setTitle(`${title} | ${data.type}`)
                .setURL(url)
                .setColor('RANDOM')
                .setThumbnail(image)
                .setDescription(`[Watch Here](${url}) | [Trailer](${data.trailer}) | ID: \`${data.id}\``)
                .addFields(
                    { name: 'Rating' , value: score , inline:true },
                    { name: 'Ranking' , value: ranked , inline:true },
                    { name: 'Rating' , value: `${data.rating}` , inline:true }
                )
                .setFooter(`${status} | Data provided my myAnimeList`)
                message.channel.send(newembed)
            }).catch(err => message.channel.send(new MessageEmbed()
            .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n${errorText}`))).catch(console.error);


    }
}