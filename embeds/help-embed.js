var helpEmbed = {};
module.exports = helpEmbed;
const Discord = require('discord.js')

const version = '1.1.0'
const radialpfp = 'https://media.discordapp.net/attachments/813807565837303808/813810050732785695/sw.png'
const botcolo2 = '#001aff'

const mainpage = helpEmbed.mainpage = new Discord.MessageEmbed({
    color: '#001aff',
    author: {
        name: 'Radial Bot Help',
    },
    description: `[Support Server](https://discord.gg/dBggm8KpsU) | [Invite URL](https://discord.com/oauth2/authorize?client_id=770365212704243784&scope=bot&permissions=101440)`,
    fields: [{

            name: ':large_blue_diamond: Radial Bot',
            value: "Radial is a multifunctional bot with tons of fun and moderation commands! With a customizable prefix",
        },
        {
            name: ':large_blue_diamond: Prefix of Radial : `!`',
            value: `version : \`${version}\``
        },
        {
            name: '\u200b',
            value: '\u200b'
        },
        {
            name: 'Fun commands',
            value: '`!help fun`',
            inline: true
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: true
        },
        {
            name : 'Utility commands',
            value: '`!help utility` or `!help util`',
            inline: true
        },
        {
            name: 'Image commands',
            value: '`!help image` or `!help img`',
            inline: true
        },
        {
            name: '\u200b',
            value : '\u200b',
            inline: true
        },
        {
            name: 'Moderation commands',
            value: '`!help moderation` or `!help mod`',
            inline: true
        }
        
    ],
    time: new Date(),
    footer: {
        text: 'Developed by : EwasTaken#3961',
        iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
    }


})

const funcommands = helpEmbed.funcommands = new Discord.MessageEmbed({
    title: 'Fun',
    color: botcolo2,
    fields: [{
        name: 'Avatar',
        value: 'Displays the avatar of a specified user \n:small_orange_diamond: Usage : `!av [mention / ID]`'
    },{
        name: 'Meme',
        value: 'Gets quality memes straight from r/dankmemes \n:small_orange_diamond: Usage : `!meme`'
    },{
        name: 'Waifu rate',
        value: 'Shows how much of a waifu a user is \n:small_orange_diamond: Usage : `!waifurate [mention / ID]`'
    },{
        name: 'Shipping',
        value: 'Displays the chance of success in user pairing \n:small_orange_diamond: Usage : `!ship [mention / ID]`'
    },{
        name: '\u200b',
        value: 'Syntax guide \n`[]` required parameters \n`()` optional parameters'
    }],
    footer: {
        text: '| Developed by EwasTaken |',
        iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
    }
})

const moderationcommands = helpEmbed.moderationcommands = new Discord.MessageEmbed({
    title: 'Moderation',
    color: botcolo2,
    fields: [{
        name: 'Add Role',
        value: 'Add roles to a specific user with ease \n:small_orange_diamond: Usage : `!addrole [mention / ID] [role name / mention / ID]`'
    },{
        name: 'Remove Role',
        value: 'Remove roles from a specific user \n:small_orange_diamond: Usage :`!removerole [mention / ID] [role name / mention / ID]`'
    },{
        name: 'Purge',
        value: 'Delete specific amount of messages from a channel \n:small_orange_diamond: Usage : `!purge [number of messages to be deleted]`'
    },{
        name: 'Lock Channel',
        value: 'Locks the channel in which the command is used \n:small_orange_diamond: Usage : `!lock`'
    },{
        name: 'Unlock Channel',
        value: 'Unlocks a previously locked channel \n:small_orange_diamond: Usage : `!unlock`'
    },{
        name: 'Kick',
        value: 'Kicks a user from the guild \n:small_orange_diamond: Usage : `!kick [mention / ID] (reason)`'
    },{
        name: 'Ban',
        value: 'Bans a user from the guild \n:small_orange_diamond: Usage : `!ban [mention / ID] (reason)`'
    },{
        name: 'Unban',
        value: 'Unbans a previously banned user \n:small_orange_diamond: Usage : `!unban [mention / ID]`'
    },{
        name: 'Set Nickname',
        value: 'Changes the nickname of a user \n:small_orange_diamond: Usage : `!setnick [mention / ID] [new nickname]`'
    },{
        name: '\u200b',
        value: 'Syntax guide \n`[]` required parameters \n`()` optional parameters'
    }],
    footer: {
        text: '| Developed by EwasTaken |',
        iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
    }
})

const utilitycommands = helpEmbed.utilitycommands = new Discord.MessageEmbed({
    title: ':tools: Utility',
    color: botcolo2,
    fields: [{
            name: 'Ping Calculator',
            value: 'Displays the ping of the user and the bot \n:small_orange_diamond: Usage : `!ping`'
        },
        {
            name: 'User Info',
            value: 'Displays information regarding a specific user in a guild \n:small_orange_diamond: Usage : `!userinfo [tag a user]`'
        },
        {
            name: 'Server Info',
            value: 'Displays information regarding the guild in which the command was used \n:small_orange_diamond: Usage : `!serverinfo`'
        },
        {
            name: 'Bot status',
            value: 'Displays the general information regarding radial bot \n:small_orange_diamond: Usage : `!status`'
        },
        {
            name: '\u200b',
            value: 'Syntax guide \n`[]` required parameters \n`()` optional parameters'
        }

    ],
    footer: {
        text: '| Developed by EwasTaken |',
        iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
    }
})

const imagecommands = helpEmbed.imagecommands = new Discord.MessageEmbed({
    title: 'Image Commands',
    color: botcolo2,
    fields: [
        //{name: 'Random Anime Images' , value: 'Displays random anime images \n:small_orange_diamond: Usage : `!anime` or `!waifu`'},
        {
            name: 'Random Dog Images',
            value: 'Sends random images of cute dogs \n:small_orange_diamond: Usage : `!dog`'
        },
        {
            name: 'Random Cat Images',
            value: 'Shows images of random fluffy cats \n:small_orange_diamond: Usage : `!cat`'
        },
    ],
    footer: {
        text: '| Developed by EwasTaken |',
        iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
    }

})

const reactionmenu = helpEmbed.reactionmenu = new Discord.MessageEmbed({
    color: '#001aff',
    author: {
        name: 'Radial Bot Help',
    },
    description: `[Support Server](https://discord.gg/dBggm8KpsU) | [Invite URL](https://discord.com/oauth2/authorize?client_id=770365212704243784&scope=bot&permissions=101440)`,
    fields: [{

            name: ':large_blue_diamond: Radial Bot',
            value: "Radial is a multifunctional bot with tons of fun and moderation commands! With a customizable prefix",
        },
        {
            name: ':large_blue_diamond: Prefix of Radial : `!`',
            value: `version : \`${version}\``
        },
        {
            name: '\u200b',
            value: '\u200b'
        },
        {
            name: 'Interactive reaction system',
            value: '\u200b\nReact with `▶️` to proceed to the next page \nReact with `◀️` to proceed to the previous page \nWhen you are done , react with 🗑️ to delete the command module viewer'
        },
        {
            name : 'Index',
            value: 'Page 1 : General information \nPage 2 : Fun commands \nPage 3 Utility commands \nPage 4 : Image commands \nPage 5 Moderation commands'
        }
    ],
    time: new Date(),
    footer: {
        text: 'Developed by : EwasTaken#3961',
        iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
    }


})