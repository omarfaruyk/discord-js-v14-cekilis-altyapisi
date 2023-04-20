const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    slash: true,
    cooldown: 10,
    yetki: "Administrator",

    data: new SlashCommandBuilder()
    .setName('yeniden-çek')
    .setDescription('Sunucunuzdaki Çekilişi Yeniden Çekin')
    .addStringOption(option =>
        option
            .setName('çekiliş-id')
            .setDescription('Yeniden Çekilecek Çekilişin ID sini Gir')
            .setRequired(true)
    ),
    async execute(client, interaction) {

        let id = interaction.options.getString("çekiliş-id")

        const geçerligir = new Discord.EmbedBuilder()
        .setDescription(`Lütfen **Geçerli Bir ID** Giriniz`)
        .setColor('Red')
        if(isNaN(id)) return interaction.reply({ embeds: [geçerligir] })
        
        client.giveawaysManager.reroll(id, {
            messages: {
                congrat: ':tada: Yeni Kazanan(lar): {winners}\n****{this.prize}**** Ödülünü **Kazandınız**\n\n{this.messageURL}',
                error: 'Yeni Kazananlar Seçilemedi!'
            }
        }).then(() => {

            const başarılı3 = new Discord.EmbedBuilder()
            .setDescription(`Çekiliş Yeniden **Çekildi**`)
            .setColor('Green')
            return interaction.reply({ embeds: [başarılı3] })

        }).catch((e) => {
                
            const errorbulunmadı2 = new Discord.EmbedBuilder()
            .setDescription(`Lütfen **Bitmiş ve Silinmemiş** Bir Çekiliş IDsi Girin`)
            .setColor('Red')
            return interaction.reply({ embeds: [errorbulunmadı2] })
        })
        
    }
}