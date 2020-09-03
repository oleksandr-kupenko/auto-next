import React from 'react';
import s from './ResultCheckNumber.module.css'
import Link from "next/link";

const ResultList = (props) => {

    const createParametr = (name) => {
        return name.toLowerCase().split(' ').join('-');
    }
 

    return (
        <div>
            {props.operations.map((o, index) =>
                <React.Fragment key={index}>
                    <div className={s.listOperations}>
                       
                        <div className={s.dateOperation}>
                            <p>{o.regAt}</p>
                            {o.isLast &&
                                <p className={s.lastOperation}>(последняя регистрация)</p>
                            }
                        </div>
                       
                        <dt>Марка - Модель:&nbsp;</dt>
                        <dd><Link href="/make/[vendor]" as={`/make/${createParametr(o.vendor)}`}>
                           <a>{o.vendor} </a></Link>
                           <strong><Link href="/make/[vendor]/[model]"
                                as={`/make/${createParametr(o.vendor)}/${createParametr(o.model)}`}>
                                <a>{o.model}</a></Link></strong></dd>
                        <dt>Год выпуска:&nbsp;</dt><dd>{o.modelYear}</dd>
                        <dt>Приметы:&nbsp;</dt><dd>{o.notes}</dd>
                        <dt>Операция:&nbsp;</dt><dd>{o.operation}</dd>
                        <dt>Адрес регистрации:&nbsp;</dt><dd>{o.address}</dd>
                    </div>
                </React.Fragment>

            )}
        </div>
    )
}

export default ResultList;