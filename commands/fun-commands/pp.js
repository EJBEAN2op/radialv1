const errorText = require('../../embeds/text')
module.exports = {
    name: 'pp',
    execute: async (message, args, Discord) => {
        if(args.length > 2) return;
        if(!message.guild) return;
        if(!message.guild.me.hasPermission('SEND_MESSAGES')) return;
            const ppsize = ['' , '=' , '==' , '==============' , '=====' , '======' , '===' , '=======']
        
            const ppnumber = Math.floor(Math.random() * 8)
               
            if (!args[1]){
                 return message.channel.send(new Discord.MessageEmbed()
                .setColor(9384170)
                .setTitle(`${message.author.username}'s PP size`)
                .setDescription(`8${ppsize[ppnumber]}D`)
                .setTimestamp()).catch(e => console.log(e));
            }

         

                const waifuUser = message.client.users.fetch(args[1].replace(/\D/g, ''))

                try {
                    await waifuUser
                } catch (e) {
                    message.channel.send(new Discord.MessageEmbed()
                        .setDescription('```diff\n- Error : Unknown user / ID```')).catch(console.error);
                    return;
                }

            waifuUser.then(user => {
                message.channel.send(new Discord.MessageEmbed()
                .setColor(9384170)
                .setTitle(`${user.username}'s PP size`)
                .setDescription(`8${ppsize[ppnumber]}D`)
                .setTimestamp())
            }).catch(err => message.channel.send(new Discord.MessageEmbed()
            .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n${errorText}`))).catch(console.error);
    }
}