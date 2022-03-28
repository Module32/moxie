import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react"
import styles from './layout.module.css'

const name = 'Module64'
export const siteTitle = 'Open Terminal'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <footer>
        <div style={{display: 'flex'}}>
          <div style={{flexDirection: 'row'}}><p>Made with 🍫 by MOXIE! team</p></div>
          <div style={{flexDirection: 'row', marginLeft: 'auto'}}><p>Website coded at <a href="https://openterminal.vercel.app">Open Terminal</a></p></div>
        </div>
      </footer>
    </div>

  )
}