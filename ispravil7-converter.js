function convertCurrency(summa, fromSumma, toSumma) {
    const exchangeRates = {
        'рубли': 1,
        'евро': 95,    // допустим курс евро к рублю 95
        'доллары': 85   // допустим курс доллара к рублю 85
    };

    if (!exchangeRates[fromSumma] || !exchangeRates[toSumma]) {
        return 'Недоступная валюта';
    }

    const summaInRUB = summa * exchangeRates[fromSumma];

    const convertedsumma = summaInRUB / exchangeRates[toSumma];

    return convertedsumma;
}

// Примеры использования функции
console.log(convertCurrency(1000, 'рубли', 'евро')); // 1000 рублей в евро
console.log(convertCurrency(1000, 'рубли', 'доллары')); // 1000 рублей в доллары
console.log(convertCurrency(1000, 'доллары', 'евро')); // 1000 долларов в евро
console.log(convertCurrency(1000, 'доллары', 'рубли')); // 1000 долларов в рубли
console.log(convertCurrency(1000, 'евро', 'доллары'));  // 1000 евро в доллары
console.log(convertCurrency(1000, 'евро', 'рубли'));    // 1000 евро в рубли
