const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    slash: true,
    cooldown: 5,

    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Botun Gecikme Sürelerini Görün'),
	async execute(client, interaction) {  
		
        let pingmesaj
        let pingdurum
        let mesaj

        if(Date.now() - interaction.createdAt < 100){ mesaj = `:red_circle:` }
        if(Date.now() - interaction.createdAt < 60){ mesaj = `:yellow_circle:` }
        if(Date.now() - interaction.createdAt < 30){ mesaj = `:green_circle:` }
        if(Date.now() - interaction.createdAt > 100){ mesaj = `:red_circle:` }
        if(Date.now() - interaction.createdAt > 60){ mesaj = `:yellow_circle:` }
        if(Date.now() - interaction.createdAt > 150){ mesaj = `:red_circle:` }
        if(Date.now() - interaction.createdAt > 250){ mesaj = `:red_circle:` }
        if(Date.now() - interaction.createdAt > 500){ mesaj = `:white_circle:` }
        if(Date.now() - interaction.createdAt > 1000){ mesaj = `:white_circle:` }

        if(client.ws.ping < 100){ pingmesaj = `:red_circle:`, pingdurum = "Red" }
        if(client.ws.ping < 60){ pingmesaj = `:yellow_circle:`, pingdurum = "Yellow" }
        if(client.ws.ping < 30){ pingmesaj = `:green_circle:`, pingdurum = "Green" }
        if(client.ws.ping > 100){ pingmesaj = `:red_circle:`, pingdurum = "Red" }
        if(client.ws.ping > 60){ pingmesaj = `:yellow_circle:`, pingdurum = "Yellow" }
        if(client.ws.ping > 150){ pingmesaj = `:red_circle:`, pingdurum = "Red" }
        if(client.ws.ping > 250){ pingmesaj = `:red_circle:`, pingdurum = "Red" }
        if(client.ws.ping > 500){ pingmesaj = `:white_circle:`, pingdurum = "Green" }
        if(client.ws.ping > 1000){ pingmesaj = `:white_circle:`, pingdurum = "Green" }
      
        const embed = new Discord.EmbedBuilder()
        .setAuthor({ name: `${client.user.tag} Ping Değerleri`, iconURL: client.user.avatarURL() })
        .setDescription(`
        ${pingmesaj} Gecikme »  ${client.ws.ping+ "ms"}
        ${mesaj} Mesaj Gecikmesi »  ${(Date.now() - interaction.createdAt)+ "ms"}
        `)
        .setColor(pingdurum)
        await interaction.reply({ embeds: [embed]})

	}
}