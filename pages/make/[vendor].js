import { useRouter } from 'next/router';
import { getCarAPI } from "../api/api";
import { useEffect, useState } from 'react';
import CarsList from '../../components/Cars/CarsList';
import Custom404 from '../404';

export default function Vendor({ modelsList: serverModelsList }) {

    const [modelsList, setModelsList] = useState(serverModelsList);
    const router = useRouter();
    const vendorCarParam = router.query.vendor.split(' ').join('');

    useEffect(() => {
        async function load() {
            try {
                const response = await getCarAPI.byMake(vendorCarParam);
                setModelsList(response.data);
            } catch (e) {
                console.log('error: ' + e);
                setModelsList('error');
            }
        }
        if (!serverModelsList) {
            load();
        }
    }, [vendorCarParam])

    if (!modelsList) {
        return (
            <p>...loadig</p>
        )
    }

    return (
        <div className="containerMain">
            <div className="resultBlock">
                {modelsList == 'error' ? <Custom404 />
                    : <CarsList
                        catalogModels={modelsList.catalogModels}
                        otherModels={modelsList.otherModels}
                        title={modelsList.title}
                        slug={modelsList.slug}
                    />}
            </div>
        </div>
    )
}

Vendor.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return { modelsList: null }
    }
    try {
        const response = await getCarAPI.byMake(query.vendor);
        return {
            modelsList: response.data
        }
    } catch (e) {
        return {
            modelsList: 'error'
        }
    }
}