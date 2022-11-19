module.exports = {
	data: new SlashCommandBuilder()
		.setName('breathe')
		.setDescription('Sends a breathing exercise'),
	async execute(interaction) {
		await interaction.reply('https://media2.giphy.com/media/PqleouQXdpCfu/giphy.gif?cid=790b76112ef4cfe27bddce7b2a19e2df14dc929f89322b5e&rid=giphy.gif');
	},
};
