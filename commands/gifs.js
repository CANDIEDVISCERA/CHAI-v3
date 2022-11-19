const { Client, Collection, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	}
});
