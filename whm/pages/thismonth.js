import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from '../components/layout.module.css'

export default function Thismonth() {
  return (
    <div className={styles.container}>
      <Layout>
        <>
          <div className="butterflies" style={{paddingBottom: '50px', paddingTop: '150px'}}>
            <h1 className="shadow" style={{margin: '0'}}>This month in MOXIE!: Women's History Month</h1>

            <div className="infocard">
            <div style={{margin: '5px'}}>
              <h2>Marie Curie</h2>
            <p style={{padding: '10px', backgroundColor: 'white', color: 'black', fontWeight: '600', borderRadius: '6px'}}>Born in 1867 and best known for the discovery of radiation, Marie Curie has won not one but two nobel prizes. As a child, she was best known for her excellent memory and won a gold medal for completion of her secondary education all at the age of 16! Not only did she discover radium but also the chemical element polonium. With the help of her friend, Andre Louis Debierne, they obtained pure radium in the metallic state. Not only was she a physicist, but she was a mother. She never let that stop her from her scientific work. She even introduced a method of teaching using experimental demonstrations at École Normale Supérieure for girls. A true pioneer in physics, Marie Curie left a lasting glow on today’s world.</p>
            </div>
              <Image src="/imgs/whm/mariecurie.jpeg" width={900} height={1200}/>
          </div>
          </div>
        </>
      </Layout>
      <Footer></Footer>
    </div>
  )
}