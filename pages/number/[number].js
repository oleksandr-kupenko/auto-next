import ResultCheckNumberContainer from "../../components/ResultCheckNumber/ResultCheckNumberContainer"
import { useRouter } from 'next/router';
import { PageLayout } from "../../components/Header/PageLayout";
import ErrorNumberBlock from "../../components/Errors/ErrorNumberBlock";
import { getCarAPI } from "../../pages/api/api";
import ResultCheckNumber from "../../components/ResultCheckNumber/ResultCheckNumber";

export default function Number({ props }) {
    const router = useRouter();
    const numberCar = router.query.number.split(' ').join('');

    return (
        <PageLayout title={'История пр номеру ' + numberCar}
            description={`История записей по автомобильному номеру ${numberCar} в базе сервисного центра МВД.`}>
            <div className="containerMain">
                <div className="resultBlock">
                    {(props.history == 'error') ?
                        <ErrorNumberBlock numberCar={numberCar} errorText={props.error} />
                        : (props.history == null) ?
                            <ResultCheckNumberContainer history={props.history} numberCar={numberCar} />
                            : <ResultCheckNumber operations={props.history.operations} stolen={props.history.stolen}
                                photoUrl={props.history.photoUrl} numberCar={numberCar} />}
                </div>
            </div>
        </PageLayout>
    )
}

Number.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return {
            props: {
                history: null
            }
        }
    }
    try {
        const response = await getCarAPI.byNumber(query.number);
        return {
            props: {
                history: response.data
            }
        }
    } catch (e) {
        let codeError = 'otherError';
        e && e.response && (codeError = '404Error')
        return {
            props: {
                error: codeError,
                history: 'error'
            }
        }
    }
}