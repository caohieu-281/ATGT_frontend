const { Telegraf } = require('telegraf');
const TOKEN = "5745060469:AAHN6-OZtjC4Y9Dh6VdgvxkrUnExfFVfPJs";
const bot = new Telegraf(TOKEN);
bot.telegram.sendPhoto(799375677, "https://drive.google.com/file/d/1DzkmA3_kSWSRzPBhDEKWQkf_k1vpoD11/view?usp=sharing");
// const web_link = "https://celebrated-torte-184681.netlify.app/";
// var img = new Image();
// img.src = '/home/tomorrow/Job/atgt/ATGT_frontend/public/img/demo_result.jpg';
// bot.telegram.sendPhoto(799375677, Input.fromLocalFile("/home/tomorrow/Job/atgt/ATGT_frontend/public/img/demo_result.jpg"));

// bot.start((ctx) =>
//   ctx.reply("Welcome :)))))", {
//     reply_markup: {
//       keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
//     },
//   })
// );
// bot.sendPhoto([
//     'chat_id': '5638388061', 
//     'photo': 'http://example.com/photos/image.jpg',
//     'caption':'Some caption'
// ]);

// bot.launch();