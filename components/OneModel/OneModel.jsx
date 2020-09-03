import React from "react";
import s from "./OneModel.module.css";

const OneModel = ({ catalogModel, fullTitle, ...props }) => {
  return (
    <div className={s.catalogModelInfo}>
      <div className={s.flexColumn}>
        <div className={s.col}>
          <h3>{fullTitle}</h3>
          <ul>
            <li>Регистраций в Украине: <b>{catalogModel.plate_count}</b></li>
            <li>Года выпуска: <b>{catalogModel.years}</b></li>
          </ul>
         
        </div>
        <div className={s.colImg}>
          <div className={s.imgContainer}>
            <img src={catalogModel.photoUrl} alt={fullTitle}/>
          </div>
        </div>
      </div>
      <div className={s.description}>{catalogModel.description}</div>
    </div>
  );
};

export default OneModel;
