import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react"
import styles from './layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const name = 'Module64'
export const siteTitle = 'Open Terminal'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <>
          <ul>
          <li><Link href="/">
              <a className="https://discord.gg/Gv6zCtSJCu"><span className="code">MOXIE!</span></a>
          </Link></li>

          <li><span className="grey">|</span></li>

            <li><Link href="/whyot">
              <a className="navbar">MOXIE! info</a>
            </Link></li>
            
            <li><Link href="/">
              <a className="navbar">Bios</a>
            </Link></li>
            
          </ul>
          </>
      </header>
      <div className={styles.card} style={{marginTop: '-20px'}}><main>{children}</main></div>
    </div>

  )
}