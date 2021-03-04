module.exports = {
    name: 'waifurate',
    execute(message, args, Discord){
        if(args.length > 2) return;
        if(!message.guild) return;
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return;
       
            const randomNum1 = Math.floor(Math.random() * 100) + 1 + '%'
            if (!args[1]){
                 return message.channel.send(new Discord.MessageEmbed()
                .setColor(9384170)
                .setTitle(`Waifu rate meter`)
                .setDescription(`You are ${randomNum1} waifu 😳 `)
                .setTimestamp()).catch(e => console.log(e));
            }

         

                let waifuUser = message.client.users.fetch(args[1].replace(/\D/g, ''))
            waifuUser.then(user => {
                message.channel.send(new Discord.MessageEmbed()
                .setColor(9384170)
                .setTitle(`Waifu rate meter `)
                .setDescription(`${user.username} is ${randomNum1} waifu 😳 `)
                .setTimestamp())
            }).catch(err => message.channel.send(new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`<:exclala:812387008365985804> User not found!`))).catch(err => console.log(err));
    }
}