import React from "react";
import s from "./Cars.module.css";

const OtherModels = (props) => {
  let types = "";
  let make = props.slug;

  for (let type in props.otherModels) {
    types += "<h3>" + type + "</h3>";

    {
      props.otherModels[type].map(
        (model, index) => (types += "<li>" + model.title + "</li>")
      );
    }
  }
  return (
    <div className={s.my2}>
      {Object.entries(props.otherModels).map(([key, value]) => (
        <div key={key}>
         <h3>{key}</h3>
        <div className={s.containerColumns3}>
        <ul>
          {value.map((model, index) => {
            return (
              <React.Fragment key={index}>
              {model.slug && <Model
                plate_count={model.plate_count}
                make = {make}
                slug={model.slug}
                title={model.title}
              />}
              </React.Fragment>
            );
          })}
          </ul> 
          </div>
        </div>
      ))}
    </div>
  );
};

const Model = ({ plate_count, make, slug, title}) => {

  return (
    <li>
      <a href={`/make/${make}/${slug}`}>{title}</a> <span className={s.count}>({plate_count})</span>
      </li>
  );
};

export default OtherModels;
