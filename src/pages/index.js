import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@src/styles/Home.module.css'
import Button from '@src/components/button'
import classNames from 'classnames'

import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

// const url = 'https://pinballmap.com/api/v1/locations.json?region_id=1&per_page=1000'
const url = 'https://pinballmap.com/api/v1/locations.json'


export default function Home() {
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [help, setHelp] = useState(false)


  // axios.get(url).then(function (response) {
  //   console.log(response);
  // })

  const handleNearMe = () => {
    alert('working')
  }

useEffect(() => {
  console.log('lat', lat, 'long', long)
}, [lat, long])


  return (
    <>
      <Head>
        <title>Peerless Pinball Pinpoint Picker</title>
        <meta name="description" content="Find pinball machines near you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classNames([styles.main, inter.className])}>
        <button className={styles.helpButton} onClick={() => setHelp(!help)}>Help</button>
        {help && <div className={styles.helpContainer}>Find a pinball machine near you! IF you know your latitude and longitude, go ahead and enter it into the labeled inputs. We know not everyone goes around remembering their lat/long, so we made it easy with a 'Near Me' button!</div>}
        <section>
          <div className={styles.latLongInputContainer}>
            <div className={styles.label}>
              <div className={styles.latLabelContainer}>
                <label className={styles.labelEl} htmlFor="lat">Latitude</label>
              </div>
              <input className={styles.latInput} type="text" placeholder="Latitude" name={lat} onChange={(e) => setLat(e.target.value)} />
            </div>
            <div className={styles.label}>
            <div className={styles.longLabelContainer}>
              <label className={styles.labelEl} htmlFor="lat">Longitude</label>
            </div>
              <input className={styles.longInput} type="text" placeholder="Longitude" name={long} onChange={(e) => setLat(e.target.value)} />
            </div>
            <div style={{marginTop: '40px'}}>
             <Button onclick={handleNearMe}/>
            </div>
          </div>
          <div className={styles.pinballImage}>
              <Image
                src="/webp_pinball.webp"
                alt="pinball machine"
                width={650}
                height={400}
                priority
              />
          </div>
        </section>
      </main>
    </>
  )
}
