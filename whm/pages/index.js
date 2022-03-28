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
          <div className="mainpic" style={{paddingBottom: '200px', paddingTop: '250px'}}>
            <h1 className="shadow" style={{fontSize: '5.5vw', margin: '0', paddingBottom: '40px'}}>Raising awareness<br></br>Raising revolution</h1>
            <a href="/moxieinfo" className="padding">Read about MOXIE!&apos;s goal</a>
          </div>
        </>
      </Layout>
      <Footer></Footer>
    </div>
  )
}