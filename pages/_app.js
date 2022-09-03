import { Provider} from 'react-redux'
import { ThemeLayout } from '../components/layout/ThemeLayout'
import { store } from '../redux/store'
import '../styles/theme.css'
import '../styles/globals.css'
import '../styles/prism-material-dark.css'
import '../styles/prism-highlight.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {




  return (
    <Provider store={store}>
      <ThemeLayout>
        <Component {...pageProps} />
      </ThemeLayout>
    </Provider>
  )
}

export default MyApp
