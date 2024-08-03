function conversion(rub, wellUSD) {
    return rub / wellUSD;
}
console.log(conversion(1000, 85));

// У нас 1000 рублей и нам нужно эти 1000 рублей перевести в доллары
// Курс доллара допустим 85 рублей за 1$
// соответственно нам нужно rub поделить на wellUSD
