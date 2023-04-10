import Head from "next/head"
import styles from './index.module.css'

export default function About() {
  return(
    <>
    <Head>
        <title>Sobre - Monteiro</title>
    </Head>
    
    <div className={styles.container}>
      <h1>Sobre</h1>
      
      <h2>
      essa pagina foi criada com o intuito de ser uma interface pratica e simples para o usuario.<br/> 
      pagina inteiramente feita utilizando o framework para react: NextJs
      </h2>
      
      <div className={styles.redes}>
      <a href="https://github.com/glauber2k2" target="_blank">github</a>
      <a href="https://www.instagram.com/glauber.sm" target="_blank">instagram</a>
      <a href="mailto:devglaubermonteiro@gmail.com" target="_blank">email</a>

      </div>

    </div>
    </>
  )
}