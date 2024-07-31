const hasLicence = true;
const age = 18;
const isDrunk = false;

const sitisCar = (hasLicence === true && age > 17 && isDrunk === false);
console.log(`Могу сесть за руль автомобиля: ${sitisCar ? 'Да' : 'Нет'}`);