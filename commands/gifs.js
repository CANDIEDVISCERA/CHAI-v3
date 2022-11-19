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
				{ name: 'one', value: 'https://media4.giphy.com/media/MEdRTaYvZBlVMEjwZ3/200w.gif?cid=6c09b952fmip8ir5ashvge5bqft7naf0kpw6lmmfo7i5ewty&rid=200w.gif&ct=v' },
				{ name: 'two', value: 'https://media4.giphy.com/media/MEdRTaYvZBlVMEjwZ3/200w.gif?cid=6c09b952fmip8ir5ashvge5bqft7naf0kpw6lmmfo7i5ewty&rid=200w.gif&ct=v' },
				{ name: 'three', value: 'https://media4.giphy.com/media/MEdRTaYvZBlVMEjwZ3/200w.gif?cid=6c09b952fmip8ir5ashvge5bqft7naf0kpw6lmmfo7i5ewty&rid=200w.gif&ct=v' },
))


		
	
};
