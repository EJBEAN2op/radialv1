const Discord = require('discord.js');
const logger = require('./scripts/logger');
const PREFIX = '!';
const bot = new Discord.Client({
    disableMentions: 'everyone'
});
const fs = require('fs')
const mongoose = require('mongoose')
require('dotenv').config()
const emotes = require('./JSON/emotes.json')
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
    module.exports.bot = bot;
    logger.debug('index.js', 'Logging in');
    logger.info('Read!');
    bot.user.setPresence({
        activity: {
            name: 'Shutting down | server error',
            type: 'WATCHING'
        },
        status: 'dnd'
    })
    bot.user.setActivity(`${bot.users.cache.size} users | ${bot.guilds.cache.size} servers`, {
        type: 'WATCHING'
    })
    await logger.init(bot);
    process.on('unhandledRejection', logger.unhandledError);
    console.log('bot is on ggs')
    mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => {
        logger.debug('connecting...', 'mongoDB')
        logger.info('connected to mongo!')
    })
    bot.channels.resolve('827305048048140318').send(new Discord.MessageEmbed()
        .setDescription(`\`\`\`diff\n+ Logged in as ${bot.user.username}\n- Version : ${core.version}\`\`\`\nDatabase: MongoDB\nstatus: connected <a:check:827647433445474314>`)
        .setTimestamp()).catch(console.error)
    process.on('SIGTERM', () => {
        bot.user.setPresence({
            activity: {
                name: 'SHUTTING DOWN',
                type: 'WATCHING',
            },
            status: 'dnd',
        }).then(() => {
            logger.info('SHUT DOWN!');
            process.exit(0);
        }).catch(() => {
            logger.info('SHUTTING DOWN WITHOUT PRESENCE!');
            process.exit(0);
        });
    });
})

let maintanence = false;
bot.on('message', async message => {
    const args = message.content.substring(PREFIX.length).split(" ");
    const cmd = args[0].toLowerCase()
    switch (cmd) {
        case 'maintenance':
            if (message.author.id !== '429493473259814923') return;
            if (!args[1]) return;
            if (args[1] === 'on') {
                maintanence = true
            } else {
                maintanence = false
            }
            message.channel.send(`maintenance mode ${maintanence ? 'enabled' : 'disabled'}`)
            break;
    }
})


let prefix;
const welcomeSchema = require('./schemas/prefix-schema')


bot.on('message', async (message) => {
    if (message.author.bot) return;

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
        if (!message.content.startsWith(prefix)) return;

    }

    const sademotes = emotes.emotes.sademotes
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
    if (maintanence === false) {
        try {
            command.execute(message, args, Discord, bot, prefix)
        } catch (error) {
            console.log(error);
        }
    } else {
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`\`\`\`diff\n- The bot commands are disabled for maintenance , please try again later\`\`\` \n${emotes.emotes.tools} Track bot status here => [Click Here](https://discord.gg/Md3bseUhde)`)).catch(e => console.log(e))
        return;
    }
})

bot.modmailCommands = new Discord.Collection();
const modmailFiles = fs.readdirSync('./modmail').filter(file => file.endsWith('.js'));
for (const file of modmailFiles) {
    const command = require(`./modmail/${file}`)
    bot.modmailCommands.set(command.name, command)
}
bot.on('message', async message => {
    if (message.author.bot) return;
    const args = message.content.toLowerCase();
    const commandName = args
    const command = bot.modmailCommands.get(commandName)
    if (!command) return;
    try {
        command.execute(message, bot)
    } catch (error) {
        console.log(error)
    }
})

bot.on('message', async message => {
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