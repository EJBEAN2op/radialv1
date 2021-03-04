const { link } = require("ffmpeg-static")

module.exports = {
    name: 'help',
    execute: async (message, args, Discord) => {
        const errembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription('Hey there, looks like i was not able to DM you , please make sure that your DMs are open :thumbsup:')
        const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()
        const load = new Discord.MessageEmbed()
            .setDescription('**Loading modules** <a:boing:815180305190223903>')
        
        const version = '1.1.0'
        const radialpfp = 'https://media.discordapp.net/attachments/813807565837303808/813810050732785695/sw.png'
        const botcolo2 = '#001aff'
        const embed = new Discord.MessageEmbed()

            .setColor(botcolo2)
            .setDescription(`[Support Server](https://discord.gg/dBggm8KpsU)`)
            .setAuthor('Radial Bot help')//, 'https://discord.com/oauth2/authorize?client_id=770365212704243784&scope=bot&permissions=117760')

            .addFields(
                // { name: '' , value: '', },
                { name: ':large_blue_diamond: What is Radial Bot', value: "Radial Bot is a all in one moderation / fun bot.", },
                { name: ':large_blue_diamond: Prefix of Radial Bot : `!`', value: `version : \`${version}\``, },
                { name: '\n\u200b \n__Rdial Bot Commands List__ ', value: '\u200b' },
                { name: `<:dex:810247280987996312> MangaDex Commands`, value: '`!help mangadex` or `!help md`', inline: true },

                { name: '\u200b', value: '\u200b' },
            )

            .setTimestamp()
            .setFooter('Developed by : EwasTaken#3961', 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png');


        //timeout
        /*if (message.channel.type !== "dm") {
            message.reply('Please check your DMs').then(message => {
                message.delete({
                    timeout: 3000
                })
            });
        }*/



        const fairyembed = new Discord.MessageEmbed()
            .setTitle('<:fairytail:810239727516123176> Fairy Tail Commands')
            .setDescription('A set of commands specifically designed for Fairy Tail anime.')
            .setColor(botcolo2)
            .addFields(
                { name: `Read command`, value: 'An custom built function to display any pages of Fairy Tail 100 years quest \n:small_orange_diamond: Usage !read `An existing chapter number` `An existing page number` \nExample : `!read 50 10` (displays page 10 of chapter 50) \nUse `!read` for more information' },
                { name: 'Chapters Index', value: 'Get a list of all existing chapters of Fairy Tail 100 Years Quest and links to respective chapters to start reading! \n:small_orange_diamond: Usage : `!chapters`' },
                { name: 'Mage Info **(WIP)**', value: 'Search and get information regarding any fairy tail character using this command on the go! \n:small_orange_diamond: Usage : `!mage <an existing character name>`' },
                //{ name: `Chapter Info **(WIP)**`, value: 'Shows information regarding a specific chaper of Fairy Tail 100 years quest \n:small_orange_diamond: Usage : `!info <An existing chapter number>`' },

            )
            .setFooter('| All these commands works in DMs itself! |')

        const funembed = new Discord.MessageEmbed()
            .setTitle(':game_die: Fun Commands')
            .setColor(botcolo2)
            .addFields(

                { name: 'Gay Rate', value: 'Displays how gay an user is \n:small_orange_diamond: Usage : `!howgay <tag a user (optional)>`' },
                { name: 'Waifu Rate', value: 'Shows the waifu percent of an user \n:small_orange_diamond: Usage : `!waifurate <tag a user (optional)>`' },
                { name: 'Thot Rate', value: 'Shows the thotiness of an user \n:small_orange_diamond: Usage : `!thotrate <tag a user (optional)`' },
                { name: 'Shipping', value: 'Displays the percent of success between user pairings *totally accurate* \n:small_orange_diamond: Usage: `!ship <tag a user>`' },
                { name: 'Av / Avatar', value: 'Displays the avatar of an user \n:small_orange_diamond: Usage : `!av <tag a user (optional)>`' },
            )

        const mdembed = new Discord.MessageEmbed()
            .setTitle('<:dex:810247280987996312> MangaDex Commands')
            .setColor(botcolo2)
            .addFields(
                { name: 'Manga Search', value: 'Search and get information regarding your favorite manga , provided with useful links to start reading on the go! \n:small_orange_diamond: Usage : `!md <An existing manga title>`' },
                { name: 'MangaDex User Search', value: 'Search for any registered MangaDex user accounts. \n:small_orange_diamond: Usage : `!md.user <username>`' },
                { name: `Top Rated Mangas`, value: 'Displays the list of top 10 most rated mangas of all time \n:small_orange_diamond: Usage : `!md.top`' }
            )

        const utilembed = new Discord.MessageEmbed()
            .setTitle(':tools: Utility')
            .setColor(botcolo2)
            .addFields(
                { name: 'Ping Calculator', value: 'Displays the ping of the user and the bot \n:small_orange_diamond: Usage : `!ping`' },
                { name: 'User Info', value: 'Displays information regarding a specific user in a guild \n:small_orange_diamond: Usage : `!userinfo <tag a user (optional)>`' },
                { name: 'Server Info', value: 'Displays information regarding the guild in which the command was used \n:small_orange_diamond: Usage : `!serverinfo`' },
                { name: 'Support', value: 'DM\'s the user an invite to the official Radial bot support server \n:small_orange_diamond: Usage : `!support`' },
                { name: `ID`, value: 'Sends the Discord ID of an specified user \n:small_orange_diamond: Usage : `!id <tag a user (optional)>`' }
            )

        /*if (!args[1]) {
            return message.author.send(load).then( msg => {
                msg.delete({ timeout: 500 }).then(() => {
            return message.author.send(embed).catch(err => message.reply(errembed)).catch(err => console.log('Missing permission'));
            })
        }).catch(e => message.channel.send(`${e}`))
        
    }*/
    
        

        /* if (args[1].toLowerCase() === 'fun') {
             return message.author.send(funembed).catch(err => message.reply(errembed)).catch(err => console.log('Missing permission'));
         }*/

        

        /* if (args[1].toLowerCase() === 'utility') {
             return message.author.send(utilembed).catch(err => message.reply(errembed)).catch(err => console.log('Missing permission'));
         }*/

        /* if (args[1].toLowerCase() === 'others'){
             return message.author.send(mdembed).catch(err => message.reply(errembed)).catch(err => console.log('Missing permission'));
         }*/



       /* const WordArray = ['fairy' || 'fairy tail' || 'md' || 'mangadex']

        WordArray.some(parameter => {
            if (!message.content.toLowerCase().includes(parameter)) {

                return message.author.send('could not find the module').catch(err => message.reply(errembed)).catch(err => console.log('Missing permission'));
            }
        })*/

if(message.guild){
    const answer = ['yes' , 'y' , 'ye'];

    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`<a:boing:815180305190223903> awaiting user response`)
    .addFields(
        {name: 'Please sepcify the type of message for me to send' , value: '\u200b\nReply with `dm` for me to dm you the command modules\nReply with `channel` or `ch` to send the command modules in the current channel'}
    )).then(msg => {
        msg.channel.awaitMessages(m => m.author.id === message.author.id , { max: 1 , time: 17000, errors: ['time'] })
        .then(collected => {
            
            if(collected.first().content.toLowerCase() === 'dm'){// || collected.first().content.toLowerCase() === 'y'){
                msg.delete()

               
                   if(!args[1]){
                       return message.author.send(embed).catch(err => message.channel.send(`<@${message.author.id}>`,  errembed )).catch(err => console.log('Missing permission'));
                   }
            

                if ((args[1].toLowerCase() === 'mangadex') || (args[1].toLowerCase() === 'md')) {
                    return message.author.send(mdembed).catch(err => message.channel.send(`<@${message.author.id}>` , errembed)).catch(err => console.log('Missing permission'));
                }

            } else if(collected.first().content.toLowerCase() === 'channel' || collected.first().content.toLowerCase() === 'ch') {
                msg.delete()
                let helpMenu = new Menu(message.channel , message.author.id , [
                    {
                        name: 'main',
                        content: new MessageEmbed({
                            color: '#001aff',
                           // title: 'Sorcerer Weekly Bot Help',
                            author: {
                                name: 'Radial Bot Help',
                            }, 
                            description: `[Support Server](https://discord.gg/dBggm8KpsU)`,
                            fields: [
                            {
                
                                name: ':large_blue_diamond: Radial Bot',
                                value: "Radial is a all in one moderation / fun Bot",
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
                            }
                            ],
                            time: new Date(),
                            footer: {
                                text: 'Developed by : EwasTaken#3961', 
                                iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
                            }
                            
            
                        }),
                        reactions : {
                            '▶️': 'page1',
                            '🗑️': 'delete',
                        }
            
                    },
                    
                    {
                        name: 'page1',
                        content: new MessageEmbed({
                            title: '<:dex:810247280987996312> MangaDex Commands',
                            color: botcolo2,
                            fields: [
                                { name: 'Manga Search', value: 'Search and get information regarding your favorite manga , provided with useful links to start reading on the go! \n:small_orange_diamond: Usage : `!md <An existing manga title>`' },
                            { name: 'MangaDex User Search', value: 'Search for any registered MangaDex user accounts. \n:small_orange_diamond: Usage : `!md.user <username>`' },
                            { name: `Top Rated Mangas`, value: 'Displays the list of top 10 most rated mangas of all time \n:small_orange_diamond: Usage : `!md.top`' }
                        
                            ],
                            footer: {
                                text: '| All these commands works in DMs itself! |',
                                iconURL: 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png'
                            }
                        }),
                        reactions: {
                            '◀️': 'main',
                            '🗑️': 'delete',
                        }
                    }
                ])
                message.channel.send(new Discord.MessageEmbed()
                .setDescription('<a:boing:815180305190223903> loading modules...')).then(msg => {
                    msg.delete({timeout: 400}).then(() => {
                
                helpMenu.start()
            })
            })

            } else {
                
                msg.delete()
                message.channel.send('unknown module').then(m => {
                    m.delete({ timeout: 9000})
                })
            }
    }).catch(() => {

        msg.delete()
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Error : Request timed out`))
    })
        
        
        
    })
}

if(!message.guild){
    if (!args[1]) {
        return message.channel.send(embed)
    }
    if ((args[1].toLowerCase() === 'fairy') || (args[1].toLowerCase() === 'ft') || (args[1].toLowerCase() === 'fairy' && args[2].toLowerCase() === 'tail')) {
        return message.channel.send(fairyembed).catch(err => message.reply(errembed)).catch(err => console.log('Missing permission'));
    }

    if ((args[1].toLowerCase() === 'mangadex') || (args[1].toLowerCase() === 'md')) {
        return message.channel.send(mdembed).catch(err => message.reply(errembed)).catch(err => console.log('Missing permission'));
    }

}

    

    }
}