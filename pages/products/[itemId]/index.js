import Image from "next/image";

import styles from "./item.module.css";

import Sidebar from "../../../components/Sidebar";
import Search from "../../../components/Search";

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params.itemId}`
  );

  const item = await data.json();

  return {
    props: { item },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos/");

  const data = await response.json();

  const paths = data.map((item) => {
    return {
      params: {
        itemId: `${item.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Item({ item }) {
  return (
    <>
      <Search />

      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.container}>
        <Image
          src={item.url}
          width={420}
          height={420}
          className={styles.photoitem}
        />
        <h1>{item.title}</h1>
      </div>
    </>
  );
}
