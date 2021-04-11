const welcomeSchema = require('../../schemas/prefix-schema')
const emotes = require('../../JSON/emotes.json')
module.exports = {
    name: 'setprefix',
    execute: async (message, args , Discord) => {


        if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`**${emotes.emotes.alert} Please provide a valid character as prefix!**`));

        if (args.length > 2) return message.channel.send(new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`**${emotes.emotes.alert} Arguments cannot be more than 1**`));

        if (!message.member.hasPermission(['MANAGE_GUILD'])) return
        const data = await welcomeSchema.findOne({
            GuildID: message.guild.id
        });



        const guildprefix = args[1]

        if (args[1].length > 1) return message.channel.send(new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`**${emotes.emotes.alert} Prefix cannot be longer than 1 character**`));

        if (data) {
            await welcomeSchema.findOneAndRemove({
                GuildID: message.guild.id
            })



            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`**${emotes.emotes.check} Successfully set server prefix to \`${guildprefix}\`**`)
                .setFooter(`If you ever forget the prefix , simply type prefix in the chat!`));

            let newData = new welcomeSchema({
                Prefix: guildprefix,
                GuildID: message.guild.id
            })
            newData.save();
        } else if (!data) {
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`**${emotes.emotes.check} Successfully set server prefix to \`${guildprefix}\`**`)
                .setFooter(`If you ever forget the prefix , simply type prefix in the chat`));

            let newData = new welcomeSchema({
                Prefix: guildprefix,
                GuildID: message.guild.id
            })
            newData.save();
        }
    }
}
