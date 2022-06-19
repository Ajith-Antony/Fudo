import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FormBlock from '../components/Form'
import LandinPage from '../components/Home'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Fudo</title>
        <link rel="logo icon" href="/logoicon.png" />
      </Head>
    <div>
      <LandinPage />
      <FormBlock />
      <Menu />
    </div>
    </div>
  )
}

export default Home
