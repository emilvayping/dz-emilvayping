const addressLat = 20;
const addressLong = 15;
const positionLat = 10;
const positionLong = 15;

const position = positionLat + positionLong;
const address = addressLat + addressLong;
const result = address - position;
console.log(position);
console.log(address);
console.log(result);

// Тоесть addresLat и addressLong это куда нам нужно в км, я нахожусь positionLat и positionLong
// Значит что я нахожусь 25 КМ МКАД(допустим), мне нужно на 35 КМ МКАД, вычесть, получается 10 КМ