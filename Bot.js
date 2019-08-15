const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

}

client.login(process.env.NjExNTUyNjU5MDM1NTIxMDY2.XVVoJw.AXpkMuSaOq_S9HvqhPNGpIaz7uI);//NjExNTUyNjU5MDM1NTIxMDY2.XVVoJw.AXpkMuSaOq_S9HvqhPNGpIaz7uI is the Client Secre
