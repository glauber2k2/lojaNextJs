import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Monteiro</title>
      </Head>

      <div className={styles.container}>
        <h1>Bem vindo a MonteiroStore</h1>
        <Image
          src="/images/home.jpg"
          width={1280}
          height={720}
          className={styles.image}
        />
      </div>
    </>
  );
}
