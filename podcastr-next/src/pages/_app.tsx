import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'
import { PLayerContext } from '../contexts/PlayerContext'

function MyApp({ Component, pageProps }) {
  return (
    <PLayerContext.Provider value={'Evenilson'}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PLayerContext.Provider>
  )
}

export default MyApp
