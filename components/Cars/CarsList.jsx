import React from "react";
import s from "./Cars.module.css";
import CardCar from "./CardCar";
import OtherModels from "./OtherModels";
import { PageLayout } from "../Header/PageLayout";

const CarsList = ({ catalogModels, otherModels, title, slug }) => {

  return (
    <PageLayout title={title}
      description={`Перечень моделей автомобилей марки ${title}`}>
      <div className={s.containerFluid}>
        <div className={s.catalogModels}>
          {catalogModels.map((model, index) => (
            <React.Fragment key={index}>
              <CardCar model={model} title={title} slug={slug} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={s.containerFluid}>
        <h2>Другие модели марки по типам</h2>
        <OtherModels otherModels={otherModels} title={title} slug={slug} />
      </div>
    </PageLayout>
  );
};

export default CarsList;




