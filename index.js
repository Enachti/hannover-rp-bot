const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');

const client = new Client({

  intents: [

    GatewayIntentBits.Guilds,

    GatewayIntentBits.GuildMembers

  ]

});

const commands = [

  new SlashCommandBuilder()

    .setName('ping')

    .setDescription('Prüft, ob der Hannover-RP-Bot online ist.'),

  new SlashCommandBuilder()

    .setName('regeln')

    .setDescription('Zeigt die Regeln von Hannover RP.')

];

client.once('ready', () => {

  console.log(`Hannover-RP-Bot ist online als ${client.user.tag}`);

});

client.on('interactionCreate', async interaction => {

  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {

    await interaction.reply('Pong! Hannover-RP-Bot ist online.');

  }

  if (interaction.commandName === 'regeln') {

    await interaction.reply('Willkommen bei Hannover RP! Bitte beachte unser Regelwerk auf dem Discord-Server.');

  }

});

client.login(process.env.DISCORD_TOKEN);
