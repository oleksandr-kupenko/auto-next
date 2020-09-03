import s from "./Error.module.css";

const ErrorNumberBlock = ({ errorText, numberCar }) => {
  return (
    (errorText === '404Error') ? <NotFound numberCar={numberCar} />
    : <Underfined numberCar={numberCar} />
  );
};

const NotFound = ({ numberCar }) => {
    return (
      <div className={s.resultText}>
        <h2>Не удалось найти автомобиль с номером <span className={s.number}>{numberCar}</span></h2>
        <p>Возможные причины:</p>
        <ol>
            <li>Номер введен неправильно. Учтите, что пробелы роли не играют, поэтому проблема не в них.</li>
            <li>Номер выдан совсем недавно и не успел войти в обновление базы.</li>
            <li>Технические ошибки в открытой базе МВД Украины.</li>
            <li>Номер выдан ранее 2013 года, поэтому не вошел в базу.</li>
        </ol>
      </div>
    );
  };

  const Underfined = ({ numberCar }) => {
    return (
      <div className={s.resultText}>
        <h2>Не удалось найти автомобиль с номером <span className={s.number}>{numberCar}</span></h2>
            <p>Номер введен неправильно. В украинском номере должно быть от 3 до 8 знаков.
                При этом букв должно быть не менее 3, а цифр - не более 6-ти.Ограничений по алфавиту нет, т.е. 
                возможно применение как латинской, так и кириллицей.
                Учтите, что пробелы роли не играют, поэтому проблема не в них.</p>


      </div>
    );
  }; 

export default ErrorNumberBlock;
