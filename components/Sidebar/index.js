import Link from "next/link";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div>
      <ul className={styles.Sidebar}>
        <li>
          <h1>Produtos</h1>
        </li>

        <li>
          <Link legacyBehavior href="/products/pants">
            <a>Calças</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/products/hats">
            <a>Chápeu</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/products/shirts">
            <a>Camisas</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
