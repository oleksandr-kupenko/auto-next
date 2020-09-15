import React from 'react';
import s from './ResultCheckNumber.module.css'
import ResultList from './TableResult';
import classNames from 'classnames/bind';
import Link from "next/link";
import Number from './Number';
import { withDefice } from '../../utils/functions';

const ResultCheckNumber = ({numberCar, operations, stolen, photoUrl}) => {

  const vendorLastCar = operations[0].vendor;
  const modelLastCar = operations[0].model;
  const createParametr = (name) => {
    return withDefice(name.toLowerCase());
  }

  return (
    <>
    <Number numberCar={numberCar} />
      <div className={s.textCenter}>
        <span className={classNames(s.stolenNot, { [s.stolenYes]: stolen })}> {stolen ?
          'Числится в угоне на' : 'Не числится в угоне на'} <abbr title="По данным МВД">05.08.2020</abbr></span>
        <div className={s.imgCar}>
          <figure>
            <p><img src={photoUrl} /> </p>
            <figcaption>
              <Link href="/make/[vendor]" as={"/make/" + createParametr(vendorLastCar)}>
                <a>{vendorLastCar}  </a></Link>
              <strong><Link href="/make/[vendor]/[model]"
                as={"/make/" + createParametr(vendorLastCar) + "/" + createParametr(modelLastCar)}>
                <a>{modelLastCar}</a></Link></strong>
            </figcaption>
          </figure>
        </div>

      </div>
      <div className={s.totalAuto}>Всего записей найдено: <strong>{operations.length}</strong></div>
      {<ResultList operations={operations} />}
    </>

  )
}

export default ResultCheckNumber;