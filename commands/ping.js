module.exports = {
    name: 'ping',
    execute: async(message, bot , args) => {
        if(message.author.bot) return;
        await message.reply('pong!')
    }
}