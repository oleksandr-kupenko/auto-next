import Link from "next/link";
import Head from "next/head";
import CheckBlockContainer from '../CheckNumberBlock/CheckBlockContainer'

export function MainLayout({ children, title = 'Next app' }) {

    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>{title}</title>
                <meta name="keywords" content="next, bla-bla, sandron22" />
                <meta name="description" content="this is my next site about cheknumber" />
            </Head>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </nav>
            <main>
                <CheckBlockContainer />

                {children}
                <footer className={'footer'}>
                    <h2>FOOTER</h2>
                </footer>
            </main>
            <style jsx global>{`
        nav {
            height: 60px;
            left: 0;
            top: 0;
            right: 0;
            background: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        nav a {
            color: white;
            text-decoration: none;
        }
        }
        `}</style>
        </>
    )
}