//require the installed packaged
const Discord = require('discord.js')
require('dotenv').config()

//start using Discord.js module
const client = new Discord.Client();

client.on('ready', () => 
{
    console.log('ChoreBOTler is ready');
});


client.on('message', (msg) =>
{
    if(msg.content === 'Hello') msg.reply('Hi');
});

var today = new Date();
client.channels.cache.fetch();
var channels = client.channels.cache.get("544710934329950226");

switch(new Date().getDay())
{
    case 0:
        client.channels.cache.get('general').createMessage("Do Dishes");
    case 1:
        client.channels.get('general').createMessage("Do Dishes");
    case 2:
        Discord.Channel.get_channel('544710934329950226').createMessage("Do Dishes");

}

client.login(process.env.BOT_TOKEN);

