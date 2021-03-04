module.exports = {
    name: 'cat',
    execute: async (message , args , Discord) => {
        if(!message.guild) return;
        if(args.length > 1) return;
        const pets = require('pets.js')
        const animal = 'cat'
        let picture = await pets(animal)
        message.channel.send(new Discord.MessageEmbed()
        .setImage(picture)).catch(err => console.log(err));
    }
}