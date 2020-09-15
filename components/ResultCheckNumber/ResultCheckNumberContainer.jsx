
import ResultCheckNumber from './ResultCheckNumber';
import { useEffect, useState } from 'react';
import { getCarAPI } from '../../pages/api/api';
import ErrorNumberBlock from '../Errors/ErrorNumberBlock';
import Preloader from '../common/Preloader/Preloader';



export default function ResultCheckNumberContainer({ history: serverHistory, numberCar }) {
    
    const [history, setHistory] = useState(serverHistory)

    useEffect(() => {
        
        async function load() {
            try {
                const response = await getCarAPI.byNumber(numberCar);
                response.data ? setHistory(response.data) : console.log("response: " + response);
            } catch (e) {
                e.response ? setHistory('404Error')
                    : setHistory('otherError');
            }
        }
        if (!serverHistory) {
            load();
        }
    }, [numberCar])

    if (!history) {
        return (
            <><Preloader /></>
        )
    }

    return (
        <>
            
            {history.operations ?
                <ResultCheckNumber operations={history.operations} stolen={history.stolen}
                    photoUrl={history.photoUrl} numberCar={numberCar} />
                : <ErrorNumberBlock numberCar={numberCar} errorText={history} />
            }
        </>
    )
}

