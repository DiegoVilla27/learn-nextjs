import React from 'react'
import '../styles/globals.scss';

export const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default App;