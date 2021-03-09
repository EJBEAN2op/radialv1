module.exports = {
    name: 'anime',
    aliases: ['waifu'],
    execute: async (message , args , Discord) => {
        if(!message.guild) return;
        if(message.guild.id !== '802857839488008203') return;
        const randomanime = require('random-anime');
        const anime = randomanime.anime();

        if(args.length > 1) return;
      if(!message.channel.nsfw) return message.channel.send('oh no , this command will only work in NSFW marked channels :(')
        const embed = new Discord.MessageEmbed()
        .setTitle('Random Anime Image')
        .setImage(anime)
        .setColor('RANDOM')

        message.channel.send(embed).catch(err => console.log(err));
    }
}