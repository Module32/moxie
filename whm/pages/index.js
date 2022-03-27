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
          <div className="all">
            <h1 className="shadow" style={{fontSize: '11vw'}}>dambro give me smth to say here</h1>
          </div>
        </>
      </Layout>
    </div>
  )
}