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
            <h1 className="shadow" style={{margin: '0', paddingBottom: '30px'}}>This month in MOXIE!: Women&apos;s History Month</h1>

            <div className="infocard">
              <div style={{margin: '5px'}}>
                <h2>Marie Curie</h2>
                <p style={{padding: '10px', backgroundColor: 'white', color: 'black', fontWeight: '600', borderRadius: '6px'}}>Born in 1867 and best known for the discovery of radiation, Marie Curie has won not one but two nobel prizes. As a child, she was best known for her excellent memory and won a gold medal for completion of her secondary education all at the age of 16! Not only did she discover radium but also the chemical element polonium. With the help of her friend, Andre Louis Debierne, they obtained pure radium in the metallic state. Not only was she a physicist, but she was a mother. She never let that stop her from her scientific work. She even introduced a method of teaching using experimental demonstrations at École Normale Supérieure for girls. A true pioneer in physics, Marie Curie left a lasting glow on today’s world.</p>
              </div>
              <Image src="/imgs/whm/mariecurie.jpeg" width={900} height={1200}/>
            </div>

            <div className="infocard">
              <div style={{margin: '5px'}}>
                <h2>Ada Lovelace</h2>
                <p style={{padding: '10px', backgroundColor: 'white', color: 'black', fontWeight: '600', borderRadius: '6px'}}>The first computer programmer was a British woman from the 1800s by the name of Ada King&apos; countess of Lovelace. Ada King grew up being taught by private tutors and self-taught and was helped in her advanced studies by Augustus de Morgan&apos; the first professor of mathematics at the University of London. Ada Lovelace met Charles Babbage from a mutual friend by the name of Mary Somerville and took interest in his analytical machine. Lovelace wrote annotations for an article on the machine and described how the engine could be programmed to compute Bernoulli numbers. The early coding language “Ada” was named after Ada Lovelace&apos; a woman who left a lasting language on the world.</p>
              </div>
              <Image src="/imgs/whm/adalovelace.jpeg" width={1000} height={1100}/>
            </div>

          <div className="infocard">
              <div style={{margin: '5px'}}>
                <h2>Matilde Montoya</h2>
                <p style={{padding: '10px', backgroundColor: 'white', color: 'black', fontWeight: '600', borderRadius: '6px'}}>By the age of 12&apos; Matilde Montoya had received her formal education and by the age of 16 had earned a degree to become a midwife. However&apos; doctors organized a hate campaign against her in the local newspapers&apos; but she still applied to the National School of Medicine&apos; and on her second try&apos; she was accepted. While studying&apos; surgeons and students tried to kick her out from the grounds that were for males only&apos; this caused her to be removed from the university. Montoya then did something revolutionary&apos; she wrote a letter to the president of Mexico&apos; asking to be reinstated at the university and allowed to take the exam. The president happily told authorities at the university to let Montoya continue her studies. She became the first female physician in Mexico and left a lasting letter on the world.</p>
              </div>
              <Image src="/imgs/whm/matilde.jpeg" width={1000} height={1200}/>
            </div>

          <div className="infocard">
              <div style={{margin: '5px'}}>
                <h2>Nellie Bly</h2>
                <p style={{padding: '10px', backgroundColor: 'white', color: 'black', fontWeight: '600', borderRadius: '6px'}}>Nellie Bly&apos; she pretended to be mentally ill just to expose one of New York’s most notorious mental hospitals for how they treated their patients. Her story quickly made her one of the most famous journalists in the United States. She decided to fly around the world after reading the books&apos; “Around the world in 80 days”. Her trip took 72 days and was a world record for a few months. She stormed into the office of New York World and asked to do a piece on the immigrant experience. A woman who was truly ahead of her time&apos; Nellie bly’s investigative journalism skills left a lasting drop of ink&apos; forever.
</p>
              </div>
              <Image src="/imgs/whm/nelliebly.jpeg" width={850} height={1100}/>
            </div>

          <div className="infocard">
              <div style={{margin: '5px'}}>
                <h2>Alexandria Osacio-Cortez</h2>
                <p style={{padding: '10px', backgroundColor: 'white', color: 'black', fontWeight: '600', borderRadius: '6px'}}>Growing up to working class parents&apos; Alexandria Osacio-Cortez&apos; has experienced injustices and issues in America. She worked hard to afford bills and through this realized the flaws within our society. Over time&apos; she became the youngest woman in Congress. With this position&apos; she went on to raise relief for the NY-14 district with hurricane Ida and the COVID-19 pandemic&apos; as well as helping to change the climate. She has helped immigrant families&apos; and overall helping the community around her. AOC has and will continue to leave an everlasting ideology that will empower girls forever.
</p>
              </div>
              <Image src="/imgs/whm/alexandria.jpeg" width={900} height={1100}/>
            </div>
        </div>
        </>
      </Layout>
      <Footer></Footer>
    </div>
  )
}