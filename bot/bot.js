const { Telegraf } = require("telegraf");
const TOKEN = "5684369853:AAE1TFTYUavxqoxPjNy7GPhyfDPCYA2kLyE";
const bot = new Telegraf(TOKEN);

// const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.sendPhoto([
    'chat_id': '5638388061', 
    'photo': 'http://example.com/photos/image.jpg',
    'caption':'Some caption'
]);

bot.launch();