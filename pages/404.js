import { PageLayout } from "../components/Header/PageLayout"


export default function Custom404() {
    return (
        <PageLayout title="Ничего не найдено">
            <h1 style={{ textAlign: "center" }}>Ничего не найдено</h1>
            <div className={'imageBlock'}>
                <img src="/404.jpg" alt="404 Error" />
            </div>

            <style>{`
            .imageBlock {
                margin: 0 auto;
                max-width: 300px;
            }
            .imageBlock img {
                width: 100%;
            } 
        `}

            </style>
        </PageLayout >
    )

}