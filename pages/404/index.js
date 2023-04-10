import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Search from "../../components/Search";
import styles from "./404.module.css";

export default function erro404() {
  const router = useRouter();
  const { asPath } = router;
  const [segmento, setSegmento] = useState("");

  useEffect(() => {
    // atualiza o estado do segmento quando o componente é montado no lado do cliente
    setSegmento(asPath.split("/products/")[1]);
  }, [asPath]);

  return (
    <>
      <Search />
      <div className={styles.container}>
        <h1 className={styles.erro}>404</h1>
        <h1>"{segmento.toUpperCase()}" NÃO FOI ENCONTRADO.</h1>
      </div>
    </>
  );
}
