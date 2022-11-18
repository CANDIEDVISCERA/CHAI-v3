//updating to newest ver
// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const fs = require('node:fs');
const path = require('node:path');
const { Collection } = require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
// Create a new client instance

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, interaction => {
	console.log(interaction);
})
// Log in to Discord with your client's token
client.login(token);