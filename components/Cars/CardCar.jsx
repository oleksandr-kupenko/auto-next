import React from "react";
import s from "./Cars.module.css";

const CardCar = (props) => {
  const { photoUrl, plate_count, slug, title, years } = props.model;
  const titleMake = props.title;
  const slugMake = props.slug;

  return (
    <div className={s.catalogModel}>
      <div className={s.catalogModelCard}>
        <a className={s.catalogModelCardLink} href={`/make/${slugMake}/${slug}`}>
          <img
            className={s.cardImgTop}
            src={photoUrl}
            alt={titleMake + title}
          />
        </a>
        <div className={s.cardBody}>
          <h3 className={s.cardTitle}>
            <a href={`/make/${slugMake}/${slug}`}>{title}</a>
          </h3>
          <p className={s.cardText}>{years}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCar;
