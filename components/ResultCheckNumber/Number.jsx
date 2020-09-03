import React from 'react';
import s from './ResultCheckNumber.module.css'


const Number = ({ numberCar }) => {
    
    return (
        <div className={s.textCenter}>
            <div className={s.number}>
                <div className={s.numberFlag}>
                    <div className={s.numberFlagIcon}>
                        <div className={s.numberFlagBlue}></div>
                        <div className={s.numberFlagYellow}></div>
                    </div>
                    <div className={s.numberCountry}>UA</div>
                </div>
                <div className={s.numberText}>{numberCar}</div>
            </div>
        </div>
    )
}

export default Number;