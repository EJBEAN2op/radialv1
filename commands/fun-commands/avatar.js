module.exports = {
    name: 'av',
    execute(message, args, Discord, bot) {

        if (args.length > 2) return;

        //message.mentions.members.first()
        if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`)
            .setTitle('Avatar')
            .setImage(message.author.displayAvatarURL({
                dynamic: true,
                size: 2048
            })));

        const avUser = message.client.users.fetch(args[1].replace(/\D/g, ''));
        avUser.then(user => {
            message.channel.send(new Discord.MessageEmbed()
                .setAuthor(`${user.tag}`)
                .setTitle('Avatar')
                .setImage(user.displayAvatarURL({
                    dynamic: true,
                    size: 2048
                })));
        }).catch(err => message.channel.send(new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`<:exclala:812387008365985804> User not found!`))).catch(err => console.log(err));

    }
}