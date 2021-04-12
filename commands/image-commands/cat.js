module.exports = {
    name: 'cat',
    cooldown: 20,
    execute: async (message, args, Discord , bot , prefix , password , SIU) => {
        if (!message.guild) return;
        if (args.length > 1) return;
        let footer;
        if (SIU) footer = 'Premium user perks : You do not have a cooldown'
        else footer = 'Sign in now to get rid of this slowmode!'
        const pets = require('pets.js')
        const animal = 'cat'
        let picture = await pets(animal)
        message.channel.send(new Discord.MessageEmbed()
            .setImage(picture)
            .setFooter(footer)).catch(err => console.log(err));
    }
}