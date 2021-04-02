const Discord = require('discord.js');
const PREFIX = '!';
const bot = new Discord.Client({
    disableMentions: 'everyone'
});
const fs = require('fs')
const mongoose = require('mongoose')
require('dotenv').config()
const suggestionEmbed = require('./embeds/suggestion-embed')
const core = require('./JSON/core.json')
const {
    serverID,
    mongoPath
} = require('./config.json')

const cooldowns = new Discord.Collection();
bot.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands')
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		bot.commands.set(command.name, command);
	}
}


bot.on('ready', async () => {
    bot.user.setActivity(`${bot.users.cache.size} users | ${bot.guilds.cache.size} servers`, {
        type: 'WATCHING'
    })
    console.log('bot is on ggs')
    mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => {
        console.log('Connected to mongo')
    })
    bot.channels.resolve('827305048048140318').send(new Discord.MessageEmbed()
    .setDescription(`\`\`\`diff\n+ Logged in as ${bot.user.username}\n- Version : ${core.version}\`\`\`\nDatabase: MongoDB\nstatus: connected <a:check:827647433445474314>`)
    .setTimestamp()).catch(console.error)
})

let maintanence = false;
bot.on('message' , async message => {
    const args = message.content.substring(PREFIX.length).split(" ");
    const cmd = args[0].toLowerCase()
    switch(cmd){
        case 'maintenance':
            if(message.author.id !== '429493473259814923') return;
            if(!args[1]) return;
            /*if(args[1] === 'off'){
                maintanence = false
            }*/
            if(args[1] === 'on') {
                maintanence = true
            } else {
                maintanence = false
            }
            message.channel.send(`maintenance mode ${maintanence ? 'enabled':'disabled'}`)
            break;
    }
})


let prefix;
const welcomeSchema = require('./prefix-schema')


bot.on('message', async (message) => {
    if(message.author.bot) return;

    if (message.guild) {
        const data = await welcomeSchema.findOne({
            GuildID: message.guild.id
        })

        if (!data) prefix = "!"
        if (data) prefix = data.Prefix
        const args = message.content.substring(prefix.length).split(" ");
        const commandName = args[0].toLowerCase()
        const cm = message.content.toLowerCase();
        if (cm === 'prefix') {
            return message.channel.send(`${prefix}`)
        }
        if (message.content.startsWith(prefix)) {
            if (commandName === 'setprefix') {

                if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('**<:exclala:812387008365985804> Please provide a valid character as prefix!**'));

                if (args.length > 2) return message.channel.send(new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('**<:exclala:812387008365985804> Arguments cannot be more than 1**'));

                if (!message.member.hasPermission(['MANAGE_GUILD'])) return
                const data = await welcomeSchema.findOne({
                    GuildID: message.guild.id
                });



                const guildprefix = args[1]

                if (args[1].length > 1) return message.channel.send(new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('**<:exclala:812387008365985804> Prefix cannot be longer than 1 character**'));

                if (data) {
                    await welcomeSchema.findOneAndRemove({
                        GuildID: message.guild.id
                    })



                    message.channel.send(new Discord.MessageEmbed()
                        .setDescription(`**<a:gears:811685880250368040> Successfully set server prefix to \`${guildprefix}\`**`)
                        .setFooter(`If you ever forget the prefix , simply type prefix in the chat!`));

                    let newData = new welcomeSchema({
                        Prefix: guildprefix,
                        GuildID: message.guild.id
                    })
                    newData.save();
                } else if (!data) {
                    message.channel.send(new Discord.MessageEmbed()
                        .setDescription(`**<a:gears:811685880250368040> Successfully set server prefix to \`${guildprefix}\`**`)
                        .setFooter(`If you ever forget the prefix , simply type prefix in the chat`));

                    let newData = new welcomeSchema({
                        Prefix: guildprefix,
                        GuildID: message.guild.id
                    })
                    newData.save();
                }
            }
        } else {
            return;
        }
    }

    const sademotes = [
        '<:pepehands:817086292449034300>',
        '<:notlikemiyu:805359713591230524>',
        '<:pain:815180427257970689>'
    ]
    const sademoteresult = Math.floor(Math.random() * 3)

    if (!message.guild) prefix = '!';
    const args = message.content.substring(prefix.length).split(" ");
    const commandname = args[0].toLowerCase();
    if (commandname === 'test') {
        message.channel.send("Ready")
    }

    const command = bot.commands.get(commandname) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandname));
    if (!command) return;

    if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command. ${sademotes[sademoteresult]}`);
		}
	}

	timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    if(maintanence === false){
    try {
        command.execute(message, args, Discord, bot, prefix)
    } catch (error) {
        console.log(error);
    }
    } else {
     message.channel.send(new Discord.MessageEmbed()
     .setDescription('```diff\n- The bot commands are disabled for maintenance , please try again later``` \nTrack bot status here => [Click Here](https://discord.gg/Md3bseUhde)')).catch(e => console.log(e))
        return;
    }
})


bot.on('message', async message => {
    const args = message.content.substring(PREFIX.length).split(" ");
    const funcommandname = args[0].toLowerCase();
    //          PERMISSIONS         //
    if (message.author.bot) return;

    

    switch (message.content.toLowerCase()) {
        case 'suggest':
            if (!message.guild) {
                const guild = await bot.guilds.cache.get(serverID) || await bot.guilds.fetch(serverID).catch(m => {})
                if (!guild) return;
                const main = guild.channels.cache.find((x) => x.name == 'suggestions')


                message.author.send(suggestionEmbed.embed).then(msg => {
                    msg.channel.awaitMessages(m => m.author.id === message.author.id, {
                            max: 1,
                            time: 50000,
                            errors: ['time']
                        })
                        .then(collected => {

                            if (collected.first().content.toLowerCase() === 'yes') { // || collected.first().content.toLowerCase() === 'y'){
                                msg.delete()

                                msg.channel.send(suggestionEmbed.embed1).then(x => {
                                    x.channel.awaitMessages(m => m.author.id === message.author.id, {
                                            max: 1
                                        })
                                        .then(collected => {
                                            main.send(new Discord.MessageEmbed()
                                                .setAuthor(`${collected.first().author.username} (${collected.first().author.id})`, collected.first().author.displayAvatarURL())
                                                .setDescription(`\`\`\`diff\n+ ${collected.first().content}\`\`\``))


                                            x.channel.send(suggestionEmbed.embed2).catch(e => console.log(e))
                                        })
                                }).catch(e => console.log(e))
                            } else if (collected.first().content.toLowerCase() === 'no' || collected.first().content.toLowerCase() === 'exit') {
                                message.channel.send('exiting ...').then(x => {
                                    x.delete()
                                    x.channel.send(new Discord.MessageEmbed()
                                    .setDescription('```diff\n- User aborted the request```')).catch(e => console.log(e))
                                }).catch(e => console.log(e))

                            } else {
                                message.channel.send(new Discord.MessageEmbed()
                                .setDescription('```diff\n- Unknown Response - process exited```')).catch(e => console.log(e))
                            }
                        }).catch(e => console.log(e))


                }).catch(e => console.log(e))



            } else {
                message.channel.send(new Discord.MessageEmbed()
                .setDescription('```diff\n- This command is only available in DMs , please DM the bot [suggest] !```')
                .setFooter('Pro tip `[]` are not required!')).catch(e => console.log(e))
            }
            break;
    }

    






})

bot.on('message' , async message => {
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


})



bot.login(process.env.TOKEN)