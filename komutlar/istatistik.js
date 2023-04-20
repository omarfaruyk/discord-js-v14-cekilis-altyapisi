const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js')
const { ownerid } = require('../ayarlar.json')
const { version } = require('../package.json')
const moment = require("moment")
require("moment-duration-format")

module.exports = {
    slash: true,
    cooldown: 5,

    data: new SlashCommandBuilder()
    .setName('istatistik')
    .setDescription('Botun İstatistiklerini Görün'),
	async execute(client, interaction) {

        const duration = moment.duration(client.uptime).format(" D [Gün] H [Saat] m [Dakika]")

        const istatistikozel = new Discord.EmbedBuilder()
        .setAuthor({ name: `${client.user.tag} İstatistikleri`, iconURL: client.user.avatarURL() })
        .setDescription(`
        :rocket: | Geliştirici

        » Kurucu ve Geliştirici : **${client.users.cache.get(ownerid)}**

        :earth_americas: | Bilgiler
        
        » Sunucu Sayısı: **${client.guilds.cache.size}**
        » Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
        » Ping: **${client.ws.ping}ms** | » Ram Kullanımı: **${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)}/1024MB**
        » Uptime: **${duration}**
        » Kuruluş: **06/05/22 | 13:04:07**

        :cd: | Sürümler

        » Discord.js Sürümü: **${Discord.version}** | » Node.js Sürümü: **${process.version}**
        » Veri Kaydı: **quick.db**
        » Bot Versiyonu : **${version}**
        `)
        .setColor('DarkVividPink')
        await interaction.reply({ embeds: [istatistikozel]})

	}
}