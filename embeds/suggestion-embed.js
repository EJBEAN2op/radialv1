var suggestionEmbed = {};
module.exports = suggestionEmbed;
const Discord = require('discord.js')

const embed = suggestionEmbed.embed = new Discord.MessageEmbed()
    .setTitle(`<a:boing:815180305190223903> awaiting user response`)
    .setDescription('This command helps you to send suggestions to the offical Radial bot server')
    .addFields({
        name: 'Note :',
        value: '\u200b\nPlease provide genuine suggestions , using this system for "memeing" / pranks will result in a blacklist , make sure to use appropriate words \u200b\nDo you want to proceed?'
    }, )
    .setFooter('Reply with `yes` to proceed \nReply with `no` or `exit` to exit the suggestion system')

const embed1 = suggestionEmbed.embed1 = new Discord.MessageEmbed()
    .setDescription('<a:boing:815180305190223903> Please type in your suggestion')

const embed2 = suggestionEmbed.embed2 = new Discord.MessageEmbed()
    .setDescription(`A super secret ninja has been sent to deliver your suggestion! \n\u200b \n find your suggestion here => [Click Here](https://discord.gg/tTygfnuF3N)`)