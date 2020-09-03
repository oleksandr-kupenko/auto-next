import React from 'react';
import s from './ResultCheckNumber.module.css'
import ResultList from './TableResult';
import classNames from 'classnames/bind';
import Link from "next/link";


const ResultCheckNumber = (props) => {

  const vendorLastCar = props.operations[0].vendor;
  const modelLastCar = props.operations[0].model;
  const createParametr = (name) => {
    return name.toLowerCase().split(' ').join('-');
  }

  return (
    <>
      <div className={s.textCenter}>
        <span className={classNames(s.stolenNot, { [s.stolenYes]: props.stolen })}> {props.stolen ?
          'Числится в угоне на' : 'Не числится в угоне на'} <abbr title="По данным МВД">05.08.2020</abbr></span>
        <div className={s.imgCar}>
          <figure>
            <p><img src={props.photoUrl} /> </p>
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
      <div className={s.totalAuto}>Всего записей найдено: <strong>{props.operations.length}</strong></div>
      {<ResultList operations={props.operations} />}
    </>

  )
}

export default ResultCheckNumber;