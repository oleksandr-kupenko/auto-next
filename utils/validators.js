export const validateNumber = value => {
  const letterNumber = /^[0-9a-zA-Zа-яА-Я ]+$/;
  let error;

  if (!value.match(letterNumber) && value.length > 0) {
    error = "Номер должен содержать только цифры и буквы.";
  } else if (value && value.length < 3) {
    error = "Автомобильный номер не может быть короче 3 символов";
  } else if (value.length > 11) {
    error = "Автомобильный номер не может быть длиннее 11 символов (вместе с пробелами)";
  } 
  
  return error;
}