module.exports = {
    name: 'userinfo',
    aliases: ['whois', 'user'],
    execute(message , args , Discord ){
        if(args.length > 2) return;
        if(!message.guild) return;
        const infoembed = new Discord.MessageEmbed()
                .setTitle('User info')
                .setDescription(`<@${message.author.id}>`)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .addField('Username:', `${message.author.username}`, true)
                .addField('Discriminator:', `${message.author.discriminator}`, true)
                .addField('ID:', `\`${message.author.id}\``, true)
                .addField('Status', `${message.author.presence.status}`, true)
                .addField('Joined on', `${message.member.joinedAt.toLocaleString()}`, true)
                .addField('Created on', `${message.author.createdAt.toLocaleString()}`, true)
                .addField('Roles:', message.member.roles.cache.map(r => `${r}`).join(' | '), true)
                .setFooter('| © Radial bot |')
                .setTimestamp();


                if (!args[1]) return message.channel.send(infoembed).catch(err => console.log(err));



                const infoUser = message.guild.members.fetch(args[1].replace(/\D/g, ''));
                infoUser.then(user => {
            const infoembed2 = new Discord.MessageEmbed()
                .setTitle('User Info')
                .setDescription(`<@${user.user.id}>`)
                .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
                .setAuthor(`${user.user.tag}`, user.user.displayAvatarURL({ dynamic: true }))
                .addField('Username:', `${user.user.username}`, true)
                .addField('Discriminator:', `${user.user.discriminator}`, true)
                .addField('ID:', `\`${user.user.id}\``, true)
                .addField('Status:', `${user.user.presence.status}`, true)
                .addField('Joined On:', `${user.joinedAt.toLocaleString()}`, true)
                .addField('Created On:', `${user.user.createdAt.toLocaleString()}`, true)
                .addField('Roles:', user.roles.cache.map(r => `${r}`).join(' | '), true)
                .setFooter('| © Radial bot |')
                .setTimestamp();


             message.channel.send(infoembed2)}).catch(err => message.channel.send(new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`<:exclala:812387008365985804> User not found!`))).catch(err => console.log(err));
    }
}