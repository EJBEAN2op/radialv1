module.exports = {
    name: 'serverinfo',
    aliases: ['server'],
    execute: async (message, args , Discord , bot , prefix) => {
        if(!message.guild) return;
        if(args.length > 1) return;
        const serverembed = new Discord.MessageEmbed()
                .setAuthor(`${message.guild}`, `${message.guild.iconURL()}`)
                .setTitle("Server Info")
                .setThumbnail(message.guild.iconURL())
                //.setDescription(`${message.guild}'s information`)
                .addField("Owner", `${message.guild.owner}` , true)
                .addField("Server Prefix" , `\`${prefix}\`` , true)
                .addField("Member Count", `${message.guild.memberCount}` , true)
                .addField("Emojis Count", `${message.guild.emojis.cache.size}` , true)
                .addField("Roles Count", `${message.guild.roles.cache.size}`, true)
                .addField("Channel Count", `${message.guild.channels.cache.size}`, true)
                .addField("Server Region", `${message.guild.region}`, true)
                .addField("Created On", `${message.guild.createdAt.toLocaleString()}` , true)
                .addField("\u200b" , "\u200b" , true)
                .setFooter('| © Radial bot |')

                .setTimestamp()

                message.channel.send(serverembed).catch(e => console.log(e));
    }
}