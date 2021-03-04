module.exports = {
    name: 'ping',
    execute: async(message , args) => {
        const Discord = require('discord.js');
const bot = new Discord.Client({disableMentions: 'everyone'});
        if(message.author.bot) return;
        var yourping = new Date().getTime() - message.createdTimestamp
            var botping = Math.round(bot.ws.ping)
            const embed = new Discord.MessageEmbed()
                .setAuthor('ping calculator', 'https://cdn.discordapp.com/attachments/794680190553817108/795625238863544330/0EiFF0fjGhm13BvDS.gif')
                .setColor('BLUE')
                .setDescription(`**Your ping :** \n${yourping} \n**Bot's ping :** \n${botping}`)
            message.reply(embed);
    }
}