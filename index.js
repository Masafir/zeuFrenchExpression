const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = require('./token');
const createExpression = require('./createExpression');

bot.on('ready', function () {
  console.log("Ze server est connecté !");
})

bot.login(Token);
bot.on('message', msg => {
  if(msg.content == "!frxp")
  {
    msg.reply(createExpression());
  }
})
