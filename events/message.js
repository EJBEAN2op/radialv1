module.exports = {
    name: 'message',
    execute: async (message) => {
        if (message.channel.id === '804757450720542771') {
            try {
                await message.react('👍')
                await message.react('👎')
            } catch (e) {
                console.log(e)
            }
        } else {
            return;
        }
    }
}
