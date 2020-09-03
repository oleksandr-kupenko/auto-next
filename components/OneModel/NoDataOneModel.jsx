import React from "react";

const NoDataOneModel = ({vendorCarParam, modelParam}) => {
    return (
        <>
        <h1>Описания не найдено</h1>
        <p>К сожалению, в базе пока нет описания этого автомобиля. 
            Но Вы можете почитать его 
            <a target="_blank" href={`http://www.google.com/search?q=${vendorCarParam} ${modelParam} опиание`}> здесь</a>.</p>
        </>
    )
}

export default NoDataOneModel;