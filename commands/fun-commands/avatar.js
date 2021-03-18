const errorText = require('../../embeds/text')
module.exports = {
    name: 'av',
    execute: async (message, args, Discord, bot) => {
        if (args.length > 2) return;
        if (!args[1]) {
            try {
                await message.channel.send(new Discord.MessageEmbed()
                    .setAuthor(`${message.author.tag}`)
                    .setTitle('Avatar')
                    .setImage(message.author.displayAvatarURL({
                        dynamic: true,
                        size: 2048
                    })));
                    return;
            } catch (err) {
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n ${errorText}`)).catch(console.error);
                    return;
            }
        }
        const avUser = message.client.users.fetch(args[1].replace(/\D/g, ''));
        try {
            await avUser
        } catch (e) {
            message.channel.send(new Discord.MessageEmbed()
                .setDescription('```diff\n- Error : unknown user / ID```')).catch(console.error);
            return;
        }
        avUser.then(user => {
            message.channel.send(new Discord.MessageEmbed()
                .setAuthor(`${user.tag}`)
                .setTitle('Avatar')
                .setImage(user.displayAvatarURL({
                    dynamic: true,
                    size: 2048
                }))).catch(console.error);
        }).catch(err => message.channel.send(new Discord.MessageEmbed()
            .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n ${errorText}`))).catch(console.error);

    }
}