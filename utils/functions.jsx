export const withoutSpace = (value) =>{
    return value.split(' ').join('').split('.').join('');
}

export const withDefice = (value) =>{
    return value.split(' ').join('-').split('.').join('');
}