import Navbar from "../Navbar/";
import Footer from "../Footer";

import styles from "./mainContainer.module.css";

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
