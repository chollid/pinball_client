import React, { useState } from "react";
import styles from "@src/styles/Home.module.css";
import { Inter } from "@next/font/google";
import classNames from "classnames";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className={classNames([styles.headerContainer, inter.className])}>
      <h1 className={styles.headerText}>Peerless Pinball Picker</h1>
      <Image
        src="/webp_pinball.webp"
        height="55"
        width="80"
        alt="GFG logo served from external URL"
      />
    </header>
  );
};

export default Header;
