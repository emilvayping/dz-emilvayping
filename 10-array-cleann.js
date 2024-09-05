function acceptsArray(array, deleteFN) {
    const result = [

    ];
    
    for (const element of array) {
        if (!deleteFN(element)) { 
            result.push(element);
        }
    }
    
    return result;
}

// Пример использования:
const numbers = [3, 6, 9, 2];

function deleteNumber(num) {
    return num > 5; // тут мы удаляем числа больше 5
}

const filtredArray = acceptsArray(numbers, deleteNumber);
console.log(filtredArray); 