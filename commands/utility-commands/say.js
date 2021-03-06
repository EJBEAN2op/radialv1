module.exports = {
    name: 'say',
    execute: async (message, args) => {
        if (message.author.id !== '429493473259814923') return;
        await message.delete().catch(e => console.log(e))
        message.channel.send(`${args.splice(1).join(" ")}`).catch(e => console.log(e))
    }
}