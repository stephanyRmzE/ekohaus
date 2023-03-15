import '../styles/globals.css'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../public/DataPicker.css'


export default function App({ Component, pageProps }) {


  return (
    <StateContext>
      <Layout>
        <ToastContainer/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
