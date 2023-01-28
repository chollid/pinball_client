import React, { useState } from "react";
import styles from "@src/styles/Home.module.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Button = ({ onclick, style, children }) => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  return (
    <div className={inter.className}>
      <button onClick={onclick} className={style}>
        {children}
      </button>
    </div>
  );
};

export default Button;
