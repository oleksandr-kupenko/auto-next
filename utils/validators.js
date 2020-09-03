export const required = value => {
    if (value) {
        return undefined;
    } 
    return 'Для поиска нужно ввести номер'; 
}

export const lengthCreator = (minLength, maxLength) => (value) => {
    if (value.length > maxLength || value.length < minLength ) {
        return `На номерном знаке должно быть от ${minLength} до ${maxLength}`;
    }
}
