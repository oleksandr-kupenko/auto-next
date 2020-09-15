import '../styles/globals.css'
import '../styles/global.sass'
import { MainLayout } from '../components/Header/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>


  )
}

export default MyApp
