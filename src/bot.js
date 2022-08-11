require (`dotenv`).config();

const (token) = process.env;
const (Client, Collection, GatewayIntentBits ) = require(`discord.js`);
const fs = Client({ intents: 
    GatewayIntentBits.Guilds
});

client.commands = new Collection();

const functionFolder = fs.readdirSync (`./src/Functions`);
for (const folder of functionFolder){
    const functionFiles = fs
    .readdirSync(`./src/function/${folder}`)
    .filter(file => endWith(`.js`));
    for (const file of functionFiles) require {}
}