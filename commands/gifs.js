const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()
module.exports = {
	data: new SlashCommandBuilder()
	.setName('gif')
	.setDescription('Sends a random gif!')
	.addStringOption(option =>
		option.setName('category')
			.setDescription('The gif category')
			.setRequired(true)
			.addChoices(
				{ name: 'one', value: 'gif_dog.gif' },
				{ name: 'two', value: 'gif_dog.gif' },
				{ name: 'three', value: 'gif_dog.gif' },
))


		
	
};
