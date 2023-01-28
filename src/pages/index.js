import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@src/styles/Home.module.css'
import classNames from 'classnames'

import InputForm from '@src/components/InputForm'
import LocationList from '@src/components/LocationList'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [help, setHelp] = useState(false)
  const [pinballLocationData, setPinballLocationData] = useState([])

  const pinballListRef = React.useRef(null);
  
  const handleScrollToList = () => {
    if (pinballLocationData.length > 0) {
      const list = pinballListRef.current
      if (list) {
        list.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    } else {
      alert('No locations to scroll to!')
    }
  }

  return (
    <>
      <Head>
        <title>Peerless Pinball Picker</title>
        <meta name="description" content="Find pinball machines near you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classNames([styles.main, inter.className])}>
        <section className={styles.section}>
          <button className={styles.helpButton} onClick={() => setHelp(!help)}>Help</button>
          {help && <div className={styles.helpContainer}>Find a pinball machine near you! IF you know your latitude and longitude, go ahead and enter both into the labeled inputs. We know that most people don't remember their lat/long, so we made it easy with a 'Near Me' button!</div>}
          <InputForm 
          setPinballLocationData={setPinballLocationData}
          handleScrollToList={handleScrollToList}
          />
          <LocationList 
            pinballLocationData={pinballLocationData}
            pinballListRef={pinballListRef}
          />
        </section>
      </main>
    </>
  )
}
