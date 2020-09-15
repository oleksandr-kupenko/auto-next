import React, { useState } from "react";
import { useEffect } from "react";
import CarsList from "./CarsList";
import { getCarAPI } from "../../pages/api/api";
import Preloader from "../common/Preloader/Preloader";

const CarsListContainer = ({ modelsList: serverModelsList, vendorCarParam }) => {

  const [modelsList, setModelsList] = useState(serverModelsList);

  useEffect(() => {
    async function load() {
        try {
            const response = await getCarAPI.byMake(vendorCarParam);
            setModelsList(response.data);
        } catch (e) {
            setModelsList('error');
        }
    }
    if (!serverModelsList) {
        load();
    }
}, [vendorCarParam])

if (!modelsList) {
    return (
        <><Preloader /></>
    )
}

  return (
    <>
      {!modelsList.catalogModels ? <h1>Не найдено</h1>
        : <CarsList
        catalogModels={modelsList.catalogModels}
        otherModels={modelsList.otherModels}
        title={modelsList.title}
        slug={modelsList.slug}
      />}
    </>
  );
};

export default CarsListContainer;

