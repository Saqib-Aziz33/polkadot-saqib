import Layout from '../components/layout/Layout'
import NextNProgress from "nextjs-progressbar";
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
       <>
          <NextNProgress
        color="#e6007aFF"
        startPosition={0.1}
        stopDelayMs={100}
        height={2}
        showOnShallow={true}
      />
    <Layout>
      <Component {...pageProps} />
    </Layout>
       </>
  )
}

export default MyApp
