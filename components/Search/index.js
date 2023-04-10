import { useState } from "react";
import { useRouter } from "next/router";
import { routeMappings } from "./keyword"; //importar as palavras chaves de redirecionamento.

import styles from "./search.module.css";

export default function Search() {
  const router = useRouter();

  const [value, setValue] = useState("");

  const handleSearch = () => {
    const mappedRoute = routeMappings[value.toLowerCase()]; //routeMappings => vindo do arquivo keyword.js
    if (mappedRoute) {
      router.push(mappedRoute);
    } else {
      console.error("Palavra-chave inválida");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.busca}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.botao} onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
}
