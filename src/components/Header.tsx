import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <h2>PayrollPal</h2>
      </div>
      <div className={styles.spacer}></div>
    </>
  );
}

export default Header;
