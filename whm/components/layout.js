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
      <header className={styles.header}>
          <>
          <ul>
          <li><Link href="/">
              <a className="/"><span className="code">MOXIE!</span></a>
          </Link></li>

          <li><span className="grey">|</span></li>

            <li><Link href="/">
              <a className="navbar">MOXIE! info</a>
            </Link></li>
            
            <li><Link href="/thismonth">
              <a className="navbar">This month</a>
            </Link></li>

            <li><Link href="/">
              <a className="navbar">Resources</a>
            </Link></li>

            <li><Link href="/">
              <a className="navbar">Meeting plans</a>
            </Link></li>
            
          </ul>
          </>
      </header>
      <div className={styles.card} style={{marginTop: '-20px'}}><main>{children}</main></div>
    </div>

  )
}