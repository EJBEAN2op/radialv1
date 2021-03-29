module.exports = {
    name: 'help',
    execute: async (message, args, Discord , bot , prefix) => {

        var helpembed = require('../../embeds/help-embed')
        const errembed = new Discord.MessageEmbed()
            .setDescription('```diff\n- Unable to DM user```\nMake sure your DM\'s are opened , then try again')
        const {
            Client,
            MessageEmbed
        } = require('discord.js')
        const {
            Menu
        } = require('discord.js-menu')
        const client = new Client()
        const load = new Discord.MessageEmbed()
            .setDescription('**Loading modules** <a:boing:815180305190223903>')

        const version = '1.1.0'
        const radialpfp = 'https://media.discordapp.net/attachments/813807565837303808/813810050732785695/sw.png'
        const botcolo2 = '#001aff'
        
        const mdembed = new Discord.MessageEmbed()
            .setTitle('<:dex:810247280987996312> MangaDex Commands')
            .setColor(botcolo2)
            .addFields({
                name: 'Manga Search',
                value: 'Search and get information regarding your favorite manga , provided with useful links to start reading on the go! \n:small_orange_diamond: Usage : `!md <An existing manga title>`'
            }, {
                name: 'MangaDex User Search',
                value: 'Search for any registered MangaDex user accounts. \n:small_orange_diamond: Usage : `!md.user <username>`'
            }, {
                name: `Top Rated Mangas`,
                value: 'Displays the list of top 10 most rated mangas of all time \n:small_orange_diamond: Usage : `!md.top`'
            })


        if (message.guild) {


            message.channel.send(new Discord.MessageEmbed()
                .setTitle(`<a:boing:815180305190223903> awaiting user response`)
                .addFields({
                    name: 'Please sepcify the type of message for me to send',
                    value: '\u200b\nReply with `dm` for me to dm you the command modules\nReply with `channel` or `ch` to send the command modules in the current channel'
                })).then(msg => {
                msg.channel.awaitMessages(m => m.author.id === message.author.id, {
                        max: 1,
                        time: 17000,
                        errors: ['time']
                    })
                    .then(collected => {

                        if (collected.first().content.toLowerCase() === 'dm') { // || collected.first().content.toLowerCase() === 'y'){
                            msg.delete()
                            if (!args[1]) {
                                return message.author.send(helpembed.mainpage).catch(err => message.channel.send(`<@${message.author.id}>`, errembed)).catch(err => console.log('Missing permission'));
                            }
                            if ((args[1].toLowerCase() === 'image') || (args[1].toLowerCase() === 'img')) {
                                return message.author.send(helpembed.imagecommands).catch(err => message.channel.send(`<@${message.author.id}>`, errembed)).catch(err => console.log('Missing permission'));
                            }
                            if (args[1].toLowerCase() === 'utility') {
                                return message.author.send(helpembed.utilitycommands).catch(err => message.channel.send(`<@${message.author.id}>`, errembed)).catch(err => console.log('Missing permission'));
                            }
                            if (args[1].toLowerCase() === 'moderation' || (args[1].toLowerCase() === 'mod')){
                                return message.author.send(helpembed.moderationcommands).catch(err => message.channel.send(`<@${message.author.id}>`, errembed)).catch(err => console.log('Missing permission'));
                            }
                            if (args[1].toLowerCase() === 'fun') {
                                return message.author.send(helpembed.funcommands).catch(err => message.channel.send(`<@${message.author.id}>`, errembed)).catch(err => console.log('Missing permission'));
                            }

                        } else if (collected.first().content.toLowerCase() === 'channel' || collected.first().content.toLowerCase() === 'ch') {
                            msg.delete()
                            let helpMenu = new Menu(message.channel, message.author.id, [{
                                    name: 'main',
                                    content: new MessageEmbed({
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
                                                name: `:large_blue_diamond: Prefix for this server : \`${prefix}\`\n:large_blue_diamond: Global prefix : \`!\``,
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
                                            text: 'Developed by : EJ BEAN#3961',
                                            iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
                                        }
                                    
                                    
                                    }),
                                    reactions: {
                                        '▶️': 'page1',
                                        '🗑️': 'delete',
                                    }
 
                                },
                                {
                                    name: 'page1',
                                    content: new MessageEmbed({
                                        title: 'Fun',
                                        color: botcolo2,
                                        fields: [{
                                            name: 'Avatar',
                                            value: `Displays the avatar of a specified user \n:small_orange_diamond: Usage : \`${prefix}av [mention / ID]\``
                                        },{
                                            name: 'Meme',
                                            value: `Gets quality memes straight from r/dankmemes \n:small_orange_diamond: Usage : \`${[prefix]}meme\``
                                        },{
                                            name: 'Waifu rate',
                                            value: `Shows how much of a waifu a user is \n:small_orange_diamond: Usage : \`${prefix}waifurate [mention / ID]\``
                                        },{
                                            name: 'Shipping',
                                            value: `Displays the chance of success in user pairing \n:small_orange_diamond: Usage : \`${prefix}ship [mention / ID]\``
                                        },{
                                            name: '\u200b',
                                            value: 'Syntax guide \n`[]` required parameters \n`()` optional parameters'
                                        }],
                                        footer: {
                                            text: '| Developed by EJ BEAN |',
                                            iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
                                        }
                                    }),
                                    reactions: {
                                        '◀️': 'main',
                                        '▶️': 'page2',
                                        '🗑️': 'delete',
                                    }
                                },

                                {
                                    name: 'page2',
                                    content: new MessageEmbed({
                                        title: ':tools: Utility',
                                        color: botcolo2,
                                        fields: [{
                                                name: 'Ping Calculator',
                                                value: `Displays the ping of the user and the bot \n:small_orange_diamond: Usage : \`${prefix}ping\``
                                            },
                                            {
                                                name: 'User Info',
                                                value: `Displays information regarding a specific user in a guild \n:small_orange_diamond: Usage : \`${prefix}userinfo [tag a user]\``
                                            },
                                            {
                                                name: 'Server Info',
                                                value: `Displays information regarding the guild in which the command was used \n:small_orange_diamond: Usage : \`${prefix}serverinfo\``
                                            },
                                            {
                                                name: 'Bot status',
                                                value: `Displays the general information regarding radial bot \n:small_orange_diamond: Usage : \`${prefix}status\``
                                            },
                                            {
                                                name: '\u200b',
                                                value: 'Syntax guide \n`[]` required parameters \n`()` optional parameters'
                                            }
                                    
                                        ],
                                        footer: {
                                            text: '| Developed by EJ BEAN |',
                                            iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
                                        }
                                    }),
                                    reactions: {
                                        '◀️': 'page1',
                                        '▶️': 'page3',
                                        '🗑️': 'delete',
                                    }
                                },
                                {
                                    name: 'page3',
                                    content: new MessageEmbed({
                                        title: 'Image Commands',
                                        color: botcolo2,
                                        fields: [
                                            //{name: 'Random Anime Images' , value: 'Displays random anime images \n:small_orange_diamond: Usage : `!anime` or `!waifu`'},
                                            {
                                                name: 'Random Dog Images',
                                                value: `Sends random images of cute dogs \n:small_orange_diamond: Usage : \`${prefix}dog\``
                                            },
                                            {
                                                name: 'Random Cat Images',
                                                value: `Shows images of random fluffy cats \n:small_orange_diamond: Usage : \`${prefix}cat\``
                                            },
                                            {
                                                name: 'Random Anime Images',
                                                value: `Shows images of anime characters \n:small_orange_diamond: Usage : \`${prefix}anime\``
                                            }
                                        ],
                                        footer: {
                                            text: '| Developed by EJ BEAN |',
                                            iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
                                        }

                                    }),
                                    reactions: {
                                        '◀️': 'page2',
                                        '▶️': 'page4',
                                        '🗑️': 'delete',
                                        
                                    }
                                },
                                {
                                    name: 'page4',
                                    content: new MessageEmbed({
                                        title: 'Moderation',
                                        color: botcolo2,
                                        fields: [{
                                            name: 'Add Role',
                                            value: `Add roles to a specific user with ease \n:small_orange_diamond: Usage : \`${prefix}addrole [mention / ID] [role name / mention / ID]\``
                                        },{
                                            name: 'Remove Role',
                                            value: `Remove roles from a specific user \n:small_orange_diamond: Usage :\`${prefix}removerole [mention / ID] [role name / mention / ID]\``
                                        },{
                                            name: 'Purge',
                                            value: `Delete specific amount of messages from a channel \n:small_orange_diamond: Usage : \`${prefix}purge [number of messages to be deleted]\``
                                        },{
                                            name: 'Lock Channel',
                                            value: `Locks the channel in which the command is used \n:small_orange_diamond: Usage : \`${prefix}lock\``
                                        },{
                                            name: 'Unlock Channel',
                                            value: `Unlocks a previously locked channel \n:small_orange_diamond: Usage : \`${prefix}unlock\``
                                        },{
                                            name: 'Kick',
                                            valie: `Kicks a user from the guild \n:small_orange_diamond: Usage : \`${prefix}kick [mention / ID] (reason)\``
                                        },{
                                            name: 'Ban',
                                            value: `Bans a user from the guild \n:small_orange_diamond: Usage : \`${prefix}ban [mention / ID] (reason)\``
                                        },{
                                            name: 'Unban',
                                            value: `Unbans a previously banned user \n:small_orange_diamond: Usage : \`${prefix}unban [mention / ID]\``
                                        },{
                                            name: 'Set Nickname',
                                            value: `Changes the nickname of a user \n:small_orange_diamond: Usage : \`${prefix}setnick [mention / ID] [new nickname]\``
                                        },{
                                            name: '\u200b',
                                            value: 'Syntax guide \n`[]` required parameters \n`()` optional parameters'
                                        }],
                                        footer: {
                                            text: '| Developed by EJ BEAN |',
                                            iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
                                        }
                                    }),
                                    reactions: {
                                        '◀️': 'page3',
                                        '🗑️': 'delete',

                                    }
                                }
                            ])
                            message.channel.send(new Discord.MessageEmbed()
                                .setDescription('<a:boing:815180305190223903> loading modules...')).then(msg => {
                                msg.delete({
                                    timeout: 400
                                }).then(() => {

                                    helpMenu.start()
                                })
                            })

                        } else {

                            msg.delete()
                            message.channel.send('unknown module').then(m => {
                                m.delete({
                                    timeout: 9000
                                })
                            })
                        }
                    }).catch(() => {

                        msg.delete()
                        message.channel.send(new Discord.MessageEmbed()
                            .setDescription(`Error : Request timed out`))
                    })



            }).catch(e => console.log(e))
        }

        if (!message.guild) {
            if (!args[1]) {
                return message.channel.send(helpembed.mainpage).catch(e => console.log(e))
            }
       /* if ((args[1].toLowerCase() === 'fairy') || (args[1].toLowerCase() === 'ft') || (args[1].toLowerCase() === 'fairy' && args[2].toLowerCase() === 'tail')) {
                return message.channel.send(fairyembed).catch(err => message.reply(errembed)).catch(err => console.log('Missing permission'));
            }*/

            if ((args[1].toLowerCase() === 'image') || (args[1].toLowerCase() === 'img')) {
                return message.channel.send(helpembed.imagecommands).catch(e => console.log(e));
            }
            if ((args[1].toLowerCase() === 'moderation') || (args[1].toLowerCase() === 'mod')){
                return message.channel.send(helpembed.moderationcommands).catch(e => console.log(e));
            }
            if ((args[1].toLowerCase() === 'utility') || (args[1].toLowerCase() === 'util')){
                return message.channel.send(helpembed.utilitycommands).catch(e => console.log(e));
            }
            if (args[1].toLowerCase() === 'fun'){
                return message.channel.send(helpembed.funcommands).catch(e => console.log(e));
            }

        }



    }
}
