
import Head from "next/head";

export function PageLayout({
    children,
    title = 'Пробить авто по номеру',
    description = "Введите нормер автомобиля и узнайте его основные характеристики и историю в сервисном центре МВД."
}) {

    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            {children}
        </>
    )
}