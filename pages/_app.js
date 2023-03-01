import {useEffect} from 'react'
import '../styles/globals.css'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import '../public/DataPicker.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component key={router.asPath} {...pageProps} />
      </Layout>
    </StateContext>
  )
}
