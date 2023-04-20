const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    slash: true,
    cooldown: 10,
    yetki: "Administrator",

    data: new SlashCommandBuilder()
    .setName('düzenle')
    .setDescription('Sunucunuzdaki Devam Eden Çekilişi Düzenleyin')
    .addStringOption(option =>
        option
            .setName('çekiliş-id')
            .setDescription('Düzenlenecek Çekilişin ID sini Gir')
            .setRequired(true)
    )
    .addIntegerOption(option1 =>
        option1
            .setName('yeni-kazanan-sayısı')
            .setDescription('Yeni Kazanan Sayısını Gir')
            .setMinValue(1)
            .setMaxValue(10)
            .setRequired(true)
    )
    .addStringOption(option2 =>
        option2
            .setName('yeni-ödül')
            .setDescription('Yeni Ödülü Gir')
            .setRequired(true)
    ),
    async execute(client, interaction) {

        let id = interaction.options.getString("çekiliş-id")
        let ksayı = interaction.options.getInteger("yeni-kazanan-sayısı")
        let ödül = interaction.options.getString("yeni-ödül")
      
        const geçerligir = new Discord.EmbedBuilder()
        .setDescription(`Lütfen **Geçerli Bir ID** Giriniz`)
        .setColor('Red')
        if(isNaN(id)) return interaction.reply({ embeds: [geçerligir] })
        
        client.giveawaysManager.edit(id, {
            addTime: 60000,
            newWinnerCount: ksayı,
            newPrize: ödül
    
        }).then(() => {
    
            const başarılı3 = new Discord.EmbedBuilder()
            .setDescription(`Çekiliş **Düzenlendi**`)
            .setColor('Green')
            return interaction.reply({ embeds: [başarılı3] })
    
        }).catch((e) => {
                
            const errorbulunmadı2 = new Discord.EmbedBuilder()
            .setDescription(`Bu Çekiliş Ya **Bitmiş** Ya da **Böyle Bir Çekiliş Yok**`)
            .setColor('Red')
            return interaction.reply({ embeds: [errorbulunmadı2] })
        
        })

    }
}