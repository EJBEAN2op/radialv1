module.exports = {
    name: 'hack',
    execute: async (message , args , Discord) => {


       

        if (!args[1]) return message.channel.send('yeah who are we hacking?')

        const hackuser = message.client.users.fetch(args[1].replace(/\D/g, ''));

        try {
            await hackuser
        } catch (e) {
            message.channel.send(new Discord.MessageEmbed()
                .setDescription('```diff\n- Error : unknown user / ID```'))
            return;
        }
        hackuser.then(user => {
            const emails = ['smolpp@lmao.com' , 'monkegang123@monke.com' , 'needpussipls@gmail.lol' , `${user.username}lolihunter@anime.gg`]
            const emailnum = Math.floor(Math.random() * 3)
            const password = ['1234', 'milfhunter69', 'pussislayerxx', 'XxbigppmanxX', 'Mlgdorrito_xX', 'moNke123', 'password']
            const passwordnum = Math.floor(Math.random() * 7)
            const dm = ['yeah she lives there', 'man i have a small pp', 'send bobs', 'pls give kr pls', 'hey kitten join vc', 'jake is kinda cute']
            const dmnum = Math.floor(Math.random() * 6)

        message.channel.send('Initiating totally dangerous hack').then(async a => {
            await a.delete({timeout: 500})
            message.channel.send('<a:loading:810404455609925653> Finding Discord Login... ').then(async b => {
            await b.delete({timeout: 500})
            message.channel.send('Bypassing 2FA').then(async c => {
            await c.delete({timeout: 500})
            message.channel.send('Fetching account token').then(async d => {
            await d.delete({timeout: 500})
            message.channel.send(`**Email :** \`${emails[emailnum]}\`\n**password :** \`${password[passwordnum]}\``).then(async e => {
                await e.delete({timeout: 700})
                message.channel.send('<a:loading:810404455609925653> Installing Fortnite').then(async f => {
                    await f.delete({timeout: 500})
                    message.channel.send('<a:loading:810404455609925653> Hacking krunker account.. ').then(async g => {
                        await g.delete({timeout: 500})
                        message.channel.send('Quick selling all skins <a:lolidance:819137344258572318>').then(async h => {
                            await h.delete({timeout: 500})
                            message.channel.send('Searching google history').then(async i => {
                                await i.delete({timeout: 500})
                                message.channel.send('**Last search : how to lose virginity**').then(async j => {
                                    await j.delete({timeout: 500})
                                    message.channel.send(`Searching for ${user.username}'s girlfriends`).then(async k => {
                                        await k.delete({timeout: 500})
                                        message.channel.send('Girlfriends count : 0 <:pepehands:817086292449034300>').then(async l => {
                                            await l.delete({timeout: 500})
                                            message.channel.send('Finding last DM ...').then(async m => {
                                                await m.delete({timeout: 500})
                                                message.channel.send(`last DM : ${dm[dmnum]}`).then(async n => {
                                                    await n.delete({timeout: 500})
                                                    message.channel.send('Fetching friends list ...').then(async o => {
                                                        await o.delete({timeout: 500})
                                                        message.channel.send('Friends found : 0 <:pain:815180427257970689>').then(async p => {
                                                            await p.delete({timeout: 500})
                                                            message.channel.send(`Injecting trojan virus to the discriminator #${user.discriminator}`).then(async q => {
                                                                await q.delete({timeout: 500})
                                                                message.channel.send(`Reporting account for breaking discord TOS`).then(async r => {
                                                                    await r.delete({timeout: 500})
                                                                    message.channel.send(`Deleting cornhub account`).then(async s => {
                                                                        await s.delete({timeout: 500})
                                                                        message.channel.send(`Successfully completed the totally real and dangerous hack`)
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            })
            })
        })
    }).catch(e => message.channel.send('oh no something went wrong , contact EwasTaken#3961 to get me fixed')).catch(console.error)
    }
}