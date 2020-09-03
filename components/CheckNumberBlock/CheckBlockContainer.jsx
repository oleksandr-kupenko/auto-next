import s from "./CheckNumberBlock.module.css";
import CheckNumberForm from "./CheckNumberForm";

const CheckBlockContainer = () => {
    return (
        <div className={s.containerWide + ' ' + s.pageClass + ' ' + s.p1}>
            <div className={s.checkBlock}>
                <div className={s.containerAutodna}>
                    <div className={s.carCartoon}>
                        <img src='/front-car.png' alt=""  />
                        <div className={s.vinForm}>
                        <CheckNumberForm />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default CheckBlockContainer;

