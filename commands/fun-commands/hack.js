module.exports = {
    name: 'hack',
    execute: async (message, args, Discord) => {
        if (!message.guild) return;

        if (!args[1]) return message.channel.send('yeah who are we hacking?')

        const hackuser = message.client.users.fetch(args[1].replace(/\D/g, ''));

        try {
            await hackuser
        } catch (e) {
            message.channel.send(new Discord.MessageEmbed()
                .setDescription('```diff\n- Error : unknown user / ID```'))
            return;
        }
        hackuser.then(async user => {
            const emails = ['smolpp@lmao.com', 'monkegang123@monke.com', 'needpussipls@gmail.lol', `${user.username}lolihunter@anime.gg`]
            const emailnum = Math.floor(Math.random() * 3)
            const password = ['1234', 'milfhunter69', 'pussislayerxx', 'XxbigppmanxX', 'Mlgdorrito_xX', 'moNke123', 'password']
            const passwordnum = Math.floor(Math.random() * 7)
            const dm = ['yeah she lives there', 'man i have a small pp', 'send bobs', 'pls give kr pls', 'hey kitten join vc', 'jake is kinda cute']
            const dmnum = Math.floor(Math.random() * 6)
            message.channel.send('Initiating totally dangerous hack')
                .then(async (msg) => {
                    setTimeout(async function () {
                        await msg.edit('<a:loading:810404455609925653> Finding Discord Login... ');
                    }, 3000)
                    setTimeout(async function (){
                        await msg.edit('Bypassing 2FA')
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('Fetching account token');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit(`**Email :** \`${emails[emailnum]}\`\n**password :** \`${password[passwordnum]}\``);
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('<a:loading:810404455609925653> Installing Fortnite');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('<a:loading:810404455609925653> Hacking krunker account.. ');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('Quick selling all skins <a:lolidance:819137344258572318>');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('Searching google history');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('**Last search : how to lose virginity**');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit(`Searching for ${user.username}'s girlfriends`);
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('Girlfriends count : 0 <:pepehands:817086292449034300>');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('Finding last DM ...');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit(`last DM : ${dm[dmnum]}`);
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('Fetching friends list ...');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit('Friends found : 0 <:pain:815180427257970689>');
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit(`Injecting trojan virus to the discriminator #${user.discriminator}`)
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit(`Reporting account for breaking discord TOS`)
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit(`Deleting cornhub account`)
                    }, 3000)
                    setTimeout(async function () {
                        await msg.edit(`Successfully completed the totally real and dangerous hack`)
                    }, 3000)
                });
        }).catch(e => message.channel.send('oh no something went wrong , contact EwasTaken#3961 to get me fixed'))
    }
}