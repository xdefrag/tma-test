require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Обработка команды /start
bot.command('start', (ctx) => {
    return ctx.reply('Привет! Я новый бот.');
});

// Обработка текстовых сообщений
bot.on('text', (ctx) => {
    return ctx.reply(`Я получил ваше сообщение: ${ctx.message.text}`);
});

// Запуск бота
bot.launch()
    .then(() => console.log('Бот запущен'))
    .catch((err) => console.error('Ошибка при запуске бота:', err));

// Включаем плавное завершение
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 