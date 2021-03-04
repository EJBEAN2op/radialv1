const Discord = require('discord.js');
const bot = new Discord.Client({disableMentions: 'everyone'});
const fs = require('fs')
const mongoose = require('mongoose')
require('dotenv').config()


bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}



bot.on('ready' , async () => {
    bot.user.setActivity(`${bot.users.cache.size} users | ${bot.guilds.cache.size} servers`, {type: 'WATCHING'})
    console.log('bot is on ggs')
    mongoose.connect('mongodb+srv://radialbot:EpsP9psAC0ybratm@radial.rganw.mongodb.net/Radial?retryWrites=true&w=majority' , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => {
        console.log('Connected to mongo')
    })
})


let prefix;
const welcomeSchema = require('./prefix-schema')


bot.on('message', async (message) => {
    if(message.guild){
    const data = await welcomeSchema.findOne({
        GuildID: message.guild.id
      })
    
    if(!data) prefix = "!"
    if(data) prefix = data.Prefix
    // communicate with mongoose && find prefix
   
    //const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(prefix + cmdName)
    // prefix code (most important)
    const args = message.content.substring(prefix.length).split(" ");
    const commandName = args[0].toLowerCase()
    const cm = message.content.toLowerCase();
    if(cm === 'prefix'){
        return message.channel.send(`${prefix}`)
    }
    /*if(message.mentions.has(bot.user.id)) message.channel.send(new Discord.MessageEmbed()
    .setColor(botcolo2)
    .setDescription(`**<a:gears:811685880250368040> The prefix for this server is \`${prefix}\`**`));
    */if(message.content.startsWith(prefix)) {
    if(commandName === 'setprefix') {

        if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription('**<:exclala:812387008365985804> Please provide a valid character as prefix!**'));

    if(args.length > 2) return message.channel.send(new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('**<:exclala:812387008365985804> Arguments cannot be more than 1**'));

        if(!message.member.hasPermission(['MANAGE_GUILD'])) return //message.channel.send("You do not have permission to run that command!")
        //const args = message.content.slice(prefix.length + 7)
        const data = await welcomeSchema.findOne({
          GuildID: message.guild.id
      });
    

      
      const guildprefix = args[1]

      if(args[1].length > 1) return message.channel.send(new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('**<:exclala:812387008365985804> Prefix cannot be longer than 1 character**'));

      if (data) {
          await welcomeSchema.findOneAndRemove({
              GuildID: message.guild.id
          })
          
          

          message.channel.send(new Discord.MessageEmbed()
          .setDescription(`**<a:gears:811685880250368040> Successfully set server prefix to \`${guildprefix}\`**`)
          .setFooter(`If you ever forget the prefix , simply type preifx in the chat!`));
    
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


if(!message.guild) prefix = '!';
const args = message.content.substring(prefix.length).split(" ");
const commandname = args[0].toLowerCase(); 
   // if(message.mentions.has(bot.user.id)) message.channel.send(prefix)
    if(commandname === 'test') {
        message.channel.send("Ready")
    } 
      
    const command = bot.commands.get(commandname) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandname));
    if (!command) return;
    try {
        command.execute(message, args, Discord , bot)//, bot, botcolor, botcolo2);
        //                                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ variables    
    } catch (error) {
        console.log(error);
    }

    })


/*    bot.on('message', message => {
        const args = message.content.substring(prefix.length).split(" ");
        const funcommandname = args[0].toLowerCase();
        //          PERMISSIONS         //
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(PREFIX)) return;
        if (!message.guild.me.hasPermission('SEND_MESSAGES', 'ATTACH_FILES')) return;
        if (args.length > 2) return;
    
    
        const funcommand = bot.funcommands.get(funcommandname) || bot.funcommands.find(cmd => cmd.aliases && cmd.aliases.includes(funcommandname));
        if (!funcommand) return;
        try {
            funcommand.execute(message, args, Discord)//, bot, botcolor, botcolo2);
            //                                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ variables    
        } catch (error) {
            console.log(error);
        }
    })*/
    

    bot.login(process.env.TOKEN)