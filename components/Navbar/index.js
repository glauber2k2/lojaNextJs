import Link from "next/link";

import syles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={syles.Navbar}>
      <li>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link legacyBehavior href="/products">
          <a>Produtos</a>
        </Link>
      </li>

      <li>
        <Link legacyBehavior href="/about">
          <a>Sobre</a>
        </Link>
      </li>
    </ul>
  );
}
