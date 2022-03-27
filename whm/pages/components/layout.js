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
              <a className="navbar">Home</a>
            </Link></li>

            <li><Link href="/whyot">
              <a className="navbar">Why OT</a>
            </Link></li>
            
            <li><Link href="/">
              <a className="navbar">Solutions</a>
            </Link></li>
            
          </ul>
          </>
      </header>
      <div className={styles.card} style={{marginTop: '-20px'}}><main>{children}</main></div>
    </div>

  )
}