const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    slash: true,
    cooldown: 30,

    data: new SlashCommandBuilder()
    .setName('yardım')
    .setDescription('Botun Yardım Menüsü Görün'),
	async execute(client, interaction) {

        const yardım = new Discord.EmbedBuilder()
        .setAuthor({ name: `${client.user.tag} Yardım Menüsü`, iconURL: client.user.avatarURL() })
        .setDescription(`
        **/başlat** » Sunucuda Çekiliş Başlatın
        **/bitir** » Sunucunuzdaki Devam Eden Çekilişi Bitirin
        **/devam** » Sunucunuzdaki Duraklatılan Çekilişi Devam Ettirin
        **/duraklat** » Sunucunuzdaki Devam Eden Çekilişi Duraklatın
        **/düzenle** » Sunucunuzdaki Devam Eden Çekilişi Düzenleyin
        **/kaldır** » Sunucunuzdaki Çekilişi Kaldırın
        **/yeniden-çek** » Sunucunuzdaki Çekilişi Yeniden Çekin

        **/istatistik** » Botun İstatistiklerini Görün
        **/ping** » Botun Gecikme Sürelerini Görün
        `)
        .setColor('DarkBlue')

        await interaction.reply({ embeds: [yardım] })

    }
}