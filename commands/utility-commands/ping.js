module.exports = {
    name: 'ping',
    execute(message, args, Discord, bot) {
        if (!message.guild) return;
        if (args.length > 1) return;
        var yourping = new Date().getTime() - message.createdTimestamp
        var botping = Math.round(bot.ws.ping)
        const embed = new Discord.MessageEmbed()
            .setAuthor('ping calculator', 'https://cdn.discordapp.com/attachments/794680190553817108/795625238863544330/0EiFF0fjGhm13BvDS.gif')
            .setColor('BLUE')
            .setDescription(`**Your ping :** ${yourping} \n**Bot's ping :** ${botping}`)
        message.channel.send(embed).catch(err => console.log(err));
    }
}