const Discord = require('discord.js')
const { Client, Partials } = require('discord.js')
const client = new Client({ intents: 131071, partials: Object.values(Partials).filter(x => typeof x === "string"), shards: 'auto' })
const { botid, token } = require("./ayarlar.json")
require("./slash")(client)

// * ETİKETE TEPKİ
client.on('messageCreate', async message => {

    const embedetiket = new Discord.EmbedBuilder()
    .setColor('Blue')
    .setDescription(`**/yardım** Komutu ile Komutlarımı Görebilirsiniz`)
    if (message.content === `<@${botid}>`) {
      message.channel.send({ embeds: [embedetiket] })
    }

})

// * ÇEKİLİŞ
const { GiveawaysManager } = require('discord-giveaways')
const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: 'Green',
        embedColorEnd: 'Grey',
        reaction: '🎉'
    }
})
client.giveawaysManager = manager

// ! TOKEN
client.login(token)