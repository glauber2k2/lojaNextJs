import styles from "./index.module.css";
import Head from "next/head";
import Search from "../../components/Search";
import Image from "next/image";
import Link from "next/link";

import Sidebar from "../../components/Sidebar/index";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/photos");

  const allproducts = await data.json();

  return {
    props: { allproducts },
  };
}

export default function Products({ allproducts }) {
  return (
    <>
      <Head>
        <title>Produtos - Monteiro</title>
      </Head>

      <Search />
      <Sidebar />

      <div className={styles.container}>
        <div className={styles.result}>
          <ul className={styles.products}>
            {allproducts.slice(0, 40).map((allproducts) => (
              <li key={allproducts.id}>
                <Link href={`/products/${allproducts.id}`} legacyBehavior>
                  <a>
                    <Image
                      src={allproducts.url}
                      width={1280}
                      height={1280}
                      className={styles.unicproducts}
                    />
                  </a>
                </Link>

                <div className={styles.titlebox}>
                  <p>{allproducts.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
