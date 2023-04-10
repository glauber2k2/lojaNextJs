import '@/styles/globals.css'

import MainContainer from '../components/MainContainer/index.js'

export default function App({ Component, pageProps }) {
  return ( 
    <MainContainer>  
     <Component {...pageProps} /> 
    </MainContainer>
  )
}

   