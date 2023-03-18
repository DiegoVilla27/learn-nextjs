import React from 'react'
import '../styles/globals.scss';

export const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

App.propTypes = {
  Component: PropTypes.Component,
  pageProps: PropTypes.object
}

export default App;