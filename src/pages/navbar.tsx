import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/navbar.module.css";
import Image from "next/image";

const contentMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_tittle}>
        <div className={styles.container_left}>
          <ConnectButton />
          <div className={styles.tokens}>300 Tokens</div>
        </div>
        <div className={styles.container_right}>
          <Image
            className={styles.container_right_img}
            src="/images/campana.png"
            width={70}
            height={50}
            alt="campana"
          />
          <Image
            className={styles.container_right_img}
            src="/images/burguer.png"
            width={50}
            height={50}
            alt="burguer_menu"
          />
        </div>
      </div>
      <div className={styles.tittle}>Hi Sofi, how's your day?</div>
      <div className={styles.emojis}>
        <div className={styles.emojis_element}>😁</div>
        <div className={styles.emojis_element}>😊</div>
        <div className={styles.emojis_element}>😜</div>
        <div className={styles.emojis_element}>🫠</div>
        <div className={styles.emojis_element}>😢</div>
      </div>
    </div>
  );
};

export default contentMain;
