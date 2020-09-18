import Link from "next/link";
import CheckBlockContainer from '../CheckNumberBlock/CheckBlockContainer';
import { YMInitializer } from 'react-yandex-metrika';

export function MainLayout({ children, title = 'Пробить автомобиль по номеру' }) {

    return (
        <>
            <div className={"logo"}>
                <Link href="/"><a><img src="/logo.png" alt="Пробивалка" /></a></Link>
            </div>

            <main>
                <CheckBlockContainer />

                {children}
                <footer className={'footer'}>
                    <p>Proudly powered by Next.js</p>
                    <YMInitializer accounts={[67473613]} />
                    <div dangerouslySetInnerHTML={{
                        __html: `<!-- Yandex.Metrika counter -->
                                <script type="text/javascript" >
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                ym(67473613, "init", {
                                        clickmap:true,
                                        trackLinks:true,
                                        accurateTrackBounce:true
                                });
                                </script>
                                <noscript><div><img src="https://mc.yandex.ru/watch/67473613" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                                <!-- /Yandex.Metrika counter -->`}} 
                    />
                </footer>
            </main>
            <style jsx global>{`
        .logo {
            height: 65px;
            background: #337ab7;
            margin: 0 auto;
            text-align: center;
        }
        .logo img {
            margin: 0 auto;
            max-width: 100%;
            margin-top: 2px;
        }
        }
        `}</style>
        </>
    )
}