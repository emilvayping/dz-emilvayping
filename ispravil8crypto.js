function encryptPassword(password) {
    let characters = password.split('');
    let length = characters.length;
    
    let encrypted = new Array(length);
    
    for (let i = 0; i < Math.floor(length / 2); i++) {
        encrypted[i] = characters[length - 1 - i];
        encrypted[length - 1 - i] = characters[i];
    }

    if (length % 2 === 1) {
        encrypted[Math.floor(length / 2)] = characters[Math.floor(length / 2)];
    }

    return encrypted.join('');
}

function checkPassword(encryptedPassword, originalPassword) {
    let decryptedPassword = encryptPassword(encryptedPassword);
    
    return decryptedPassword === originalPassword;
}

const originalPassword = 'mySecretPassword';
const encryptedPassword = encryptPassword(originalPassword);

console.log('зашифрованный пароль:', encryptedPassword); // Это пароль зашифрованный
console.log('проверка пароля:', checkPassword(encryptedPassword, originalPassword)); // он выводит true или false
