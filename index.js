// Required Libraries
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new Client Instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Check for Client
client.once(Events.ClientReady, (readyClient) => {
	console.log(`Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord
client.login(token);