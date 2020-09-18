import Link from "next/link";
import Head from "next/head";
import CheckBlockContainer from '../CheckNumberBlock/CheckBlockContainer';
import { YMInitializer } from 'react-yandex-metrika';

export function MainLayout({ children, title = 'Next app' }) {

    return (
        <>
            <Head>
                <meta name="google-site-verification" content="Z2Ny2pUExLTVGTunLQZ9lb5tGoDP1IkeOMle3NPO9Ec" />
                <meta charset="utf-8" />
                <title>{title}</title>
                <meta name="keywords" content="next, bla-bla, sandron22" />
                <meta name="description" content="this is my next site about cheknumber" />
            </Head>
            <div className={"logo"}>
                <Link href="/"><a><img src="/logo.png" alt="Пробивалка" /></a></Link>
            </div>

            <main>
                <CheckBlockContainer />

                {children}
                <footer className={'footer'}>
                    <p>Proudly powered by Next.js</p>
                </footer>
                <YMInitializer accounts={[67473613]} />
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