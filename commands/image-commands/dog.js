module.exports = {
    name: 'dog',
    cooldown: 20,
    execute: async (message , args , Discord) => {
        if(!message.guild) return;
        if(args.length > 1) return;
        const pets = require('pets.js')
        const animal = 'dog'
        let picture = await pets(animal)
        message.channel.send(new Discord.MessageEmbed()
        .setImage(picture))
    }
}