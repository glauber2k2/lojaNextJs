import styles from "./index.module.css";
import Head from "next/head";
import Search from "../../components/Search";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

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

      <div className={styles.Search}>
        <Search />
      </div>
      <div className={styles.container}>
        <ul className={styles.products}>
          {allproducts.slice(0, 40).map((allproducts) => (
            <li key={allproducts.id}>
              <Link href={`/products/${allproducts.id}`} legacyBehavior>
                <a>
                  <Image
                    src="/images/produto.png"
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
    </>
  );
}
