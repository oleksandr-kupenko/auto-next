import OneModel from "./OneModel";
import NoDataOneModel from "./NoDataOneModel";
import { useState, useEffect } from "react";
import { getCarAPI } from "../../pages/api/api";
import { PageLayout } from "../Header/PageLayout";

const OneModelContainer = ({ oneModelData: serverOneModelData, vendorCarParam, modelParam }) => {

  const [oneModelData, setOneModelData] = useState(serverOneModelData);
debugger
  useEffect(() => {
    async function load() {
      try {
        const response = await getCarAPI.byModel(vendorCarParam, modelParam);
        setOneModelData(response.data);
      } catch (e) {
        console.log('error: ' + e);
        setOneModelData('error');
      }
    }
    if (!serverOneModelData) {
      load();
    }
  }, [vendorCarParam])

  if (!oneModelData) {
    return (
      <p>...loadig</p>
    )
  }

  return (
    <>
      <PageLayout title={oneModelData.fullTitle}
        description={`Основные характеристики и история автомобиля ${oneModelData.fullTitle}`}>
        {!oneModelData.catalogModel ? <NoDataOneModel />

          : <OneModel catalogModel={oneModelData.catalogModel} fullTitle={oneModelData.fullTitle} />}
      </PageLayout>
    </>
  )

};

export default OneModelContainer;
