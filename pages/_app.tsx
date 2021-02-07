import 'antd/dist/antd.css'
import App from 'next/app'
import { Store } from '../components/Store/Store'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Store>
        <Component {...pageProps} />
      </Store>
    )
  }
}

export default MyApp
