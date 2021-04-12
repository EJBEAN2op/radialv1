const emotes = require('../../JSON/emotes.json')
const accountSchema = require('../../schemas/account-schema')
module.exports = {
    name: 'userinfo',
    aliases: ['whois', 'user'],
    execute(message , args , Discord , bot , prefix , password , signedInUser){
        if(args.length > 2) return;
        if(!message.guild) return;
        let signedin;
        let singedinmember;
        if (message.author.id === signedInUser) signedin = 'Premium User'
        else signedin = 'Standard User'
        const infoembed = new Discord.MessageEmbed()
                .setTitle('User info')
                .setDescription(`<@${message.author.id}>`)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setAuthor(`${message.author.tag} [${signedin}]`, message.author.displayAvatarURL({ dynamic: true }))
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
                infoUser.then(async user => {
                    const data = await accountSchema.findOne({userID: user.user.id})
                    if (data) singedinmember = 'Premium User'
                    else singedinmember = 'Standard User'
            const infoembed2 = new Discord.MessageEmbed()
                .setTitle('User Info')
                .setDescription(`<@${user.user.id}>`)
                .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
                .setAuthor(`${user.user.tag} [${singedinmember}]`, user.user.displayAvatarURL({ dynamic: true }))
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
.setDescription(`${emotes.emotes.alert} User not found!`))).catch(err => console.log(err));
    }
}