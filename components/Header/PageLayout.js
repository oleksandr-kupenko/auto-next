
import Head from "next/head";

export function PageLayout({
    children,
    title = 'Пробить авто по номеру',
    description = "Приложение, позволяющее узнать историю и характеристики автомобиля по его номеру."
}) {

    return (
        <>
            <Head>
                <meta name="google-site-verification" content="Z2Ny2pUExLTVGTunLQZ9lb5tGoDP1IkeOMle3NPO9Ec" />  
                <meta charset="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            {children}
        </>
    )
}