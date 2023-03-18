import React from 'react'
import '../styles/globals.scss';
import PropTypes from 'prop-types';

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