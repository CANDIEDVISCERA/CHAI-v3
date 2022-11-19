const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('grounding')
		.setDescription('Sends the 5-4-3-2-1 grounding method!'),
	async execute(interaction) {
		await interaction.reply('https://www.mondaycampaigns.org/wp-content/uploads/2021/06/destress-monday-infographic-54321-grounding-technique.png');
	},
};
