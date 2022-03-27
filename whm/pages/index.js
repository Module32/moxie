import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from '../components/layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <>
          <div className="butterflies" style={{paddingBottom: '150px', paddingTop: '150px', marginTop: '-150px'}}>
            <h1 className="shadow" style={{fontSize: '8.5vw'}}>A lasting mark on the world and Womanhood forever</h1>
          </div>
        </>
      </Layout>
      <Footer></Footer>
    </div>
  )
}