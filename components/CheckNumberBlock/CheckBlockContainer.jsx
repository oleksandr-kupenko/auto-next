import s from "./CheckNumberBlock.module.css";
import CheckNumberForm from "./CheckNumberForm";

const CheckBlockContainer = () => {
    return (
            <div className={s.checkBlock}>
                    <div className={s.carCartoon}>
                        <img src='/front-car.png' alt="Автомобиль"  />
                        <div className={s.checkForm}>
                        <CheckNumberForm />
                        </div>
                    </div>
            </div>
    )
}



export default CheckBlockContainer;

