function crypto(password) {
    const parol = password.split('');
    const length = parol.length;
    return parol;
}

function checkPassword(zamenaPassword, originalPassword) {
    const passwordDes = zamenaPassword(zamenaPassword); 
    return passwordDes === originalPassword; 
}

const originalPassword = 1234;
const zamenaPassword = 7777;

console.log('Исходный пароль:', originalPassword);
console.log('Зашифрованный пароль:', zamenaPassword);
console.log('Проверка пароля:', checkPassword(zamenaPassword, originalPassword));