export const validateNumber = value =>  {
    let error;
    if (!value) {
      error = "Нужно ввести номер";
    } else if (value.length < 3) {
      error = "Автомобильный номер не может быть короче 3 символов";
    } else if (value.length > 3) {
      error = "Автомобильный номер не может быть длиннее 11 символов (вместе с пробелами)";
    }

    return error;
  }