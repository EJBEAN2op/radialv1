module.exports = {
    name: 'say',
    execute: async (message, args) => {
        const allowedIDs = ['382449851792752641' , '429493473259814923' , '744958814926667856']
        if (!allowedIDs.includes(message.author.id)) return;
        await message.delete().catch(e => console.log(e))
        message.channel.send(`${args.splice(1).join(" ")}`).catch(e => console.log(e))
    }
}
