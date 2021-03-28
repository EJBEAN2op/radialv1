const Danbooru = require('danbooru')
const { MessageEmbed } = require('discord.js')
const errorText = require('../../embeds/text')
module.exports = {
    name: 'danbooru',
    aliases: ['anime'],
    cooldown: 10,
    execute: async (message, args, Discord) => {
        if(!message.channel.nsfw) return;
        const booru = new Danbooru();
        booru.posts({ tags: 'rating:safe' }).then(async posts => {
            
            const index = Math.floor(Math.random() * posts.length)
            const post = posts[index]
            let character = post.tag_string_character
            let image = post.large_file_url

            if (!image) return message.channel.send(new MessageEmbed()
            .setDescription('```diff\n- Error : Image could not be found```')).catch(console.error)
            if (!character) character = 'Unknown'
            
            const embed = new MessageEmbed()
                .setTitle('Random Anime Images')
                .setColor('RANDOM')
                .setDescription(`Character : ${character}\nFlags : \`SFW\``)
                .setImage(image)
                .setFooter(`Data provided by Danbooru`)
            
            try {
                await message.channel.send(embed)
            } catch (e) {
                message.channel.send(new MessageEmbed()
                .setDescription(`\`\`\`diff\n- Error : ${e}\n${errorText}\`\`\``)).catch(console.error);
                return;
            }
        }).catch(e => {
            message.channel.send(new MessageEmbed()
            .setDescription(`\`\`\`diff\n- Error : ${e}\`\`\``)).catch(console.error);
        })
    }
}