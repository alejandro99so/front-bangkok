import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./navbar";
import ContentMain from "./contentMain";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const account = useAccount();
  const [showUser, setShowUser] = useState(false);
  useEffect(() => {
    if (account.address) {
      if (
        account.address.toLowerCase() ==
        "0x9b1b2994a03877f5c52b10cb2276b82a19ceb2f2"
      ) {
        setShowUser(true);
      }
    }
  }, [account.address]);
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <ContentMain />
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;