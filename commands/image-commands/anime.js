const request = require('request')
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const page = 'https://mashtoolz.xyz/api/catgirl';
const errorText = require('../../embeds/text')
module.exports = {
  name: 'anime',
  aliases: ['waifu'],
  execute: async (message, args, Discord) => {
    /*function getfromsite(resp) {
      fetch(page)
        .then(res => res.text()).catch(console.error)
        .then((html) => {
          resp(html)
        }).catch(console.error)
    }
    function getlatestpic(data) {
      const $ = cheerio.load(data);
      let images = []
      $('img').each(function (i, image) {
        images.push({ link: $(image).attr('src') })
      })
      return images[0]
    }
    getfromsite((data) => {
      const image = getlatestpic(data)
      const embed = new Discord.MessageEmbed()
        .setTitle('Random Anime Images')
        .setDescription('Flags : `SFW`')
        .setImage(image.link)
        .setColor('RANDOM')
      message.channel.send(embed).catch(err => message.channel.send(new Discord.MessageEmbed()
      .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n${errorText}`))).catch(console.error);
    })*/
    request.get("https://mashtoolz.xyz/api/catgirl", { encoding: "base64" }, (err, res, body) => {


    const imageStream = Buffer.from(body, "base64");
    const attachment = new Discord.MessageAttachment(imageStream, "catgirl.jpg");

    let embed = new Discord.MessageEmbed()
        .attachFiles(attachment)
        .setColor('RANDOM')
    .setTitle('Random Anime Images')
    .setDescription('Flags : `SFW`')
        .setImage("attachment://catgirl.jpg")
        .setTimestamp()

    message.channel.send(embed).catch(err => message.channel.send(new Discord.MessageEmbed()
      .setDescription(`\`\`\`diff\n- Error : ${err}\`\`\`\n${errorText}`))).catch(console.error);


})
  }
}
