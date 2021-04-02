const config = require('../../config.json')
const errorText = require('../../embeds/text')
module.exports = {
    name: 'info',
    aliases: ['botinfo', 'bot', 'status'],
    execute: async (message, args, Discord, bot) => {
        if (!message.guild) return;
        if (args.length > 1) return;

        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        //let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        let uptime = `${days} days, ${hours}  hours, ${minutes} minutes`;

        const infoembed = new Discord.MessageEmbed()
            .setAuthor(`Radial Bot Info`, `${bot.user.displayAvatarURL()}`)
            .setDescription(`[Support Server](https://discord.gg/dBggm8KpsU) | [Invite URL](https://discord.com/oauth2/authorize?client_id=770365212704243784&scope=bot&permissions=330816)`)
            .setThumbnail(`${bot.user.displayAvatarURL()}`)
            .addFields(
                { name: `Developer`, value: `\`${config.developer}\``, inline: true },
                { name: `Global prefix`, value: '`!`', inline: true },
                { name: 'Server Count', value: `${bot.guilds.cache.size}`, inline: true },
                { name: `User Count`, value: `${bot.users.cache.size}`, inline: true },
                { name: `Bot Latency`, value: `${bot.ws.ping}`, inline: true },
                { name: `Servers`, value: `Heroku`, inline: true },
                // {name: `\u200b` , value: `\u200b` , inline: true},
                { name: `Database`, value: `MongoDB`, inline: true },
                { name: `Created On`, value: `10/27/2020`, inline: true },
                { name: `Language`, value: `Javascript`, inline: true },
                { name: `Uptime`, value: `${uptime}` }
            )
            .setFooter(`| Developed by ${config.developer} |`)

        try {
            message.channel.send(infoembed)
        } catch (e) {
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n${errorText}`)).catch(console.error);
            return;
        }


    }
}