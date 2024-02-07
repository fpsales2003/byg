import '@/styles/globals.css'
import { Helmet } from 'react-helmet'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <div className='w-full h-full'>
      <Helmet>
        <title>BOOST YOUR GUYS</title>
        <meta name="description" content="The very official BOOST YOUR GUYS webiste. For all of your boosting needs."/>
        <link rel="icon" href="/favicon.jpeg"/>
      </Helmet>
      <AnimatePresence initial={false} mode={"wait"}>
        <Component key={router.pathName} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}
