import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/contentMain.module.css";
import Image from "next/image";
import Carousel from "./Carousel";
import CircularLayout from "./CircularLayout";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tittle_2}>Continue your activities</div>
      <br />
      <br />
      <Carousel
        slides={[
          { image: "/images/play.png", text: "Reflexion 20 min" },
          { image: "/images/play.png", text: "Paint Mandala (2/5)" },
        ]}
      />
      <br />
      <br />
      <div className={styles.tittle_2}>Sofi, Let's work on your healty!</div>
      <br />
      <br />
      <CircularLayout
        centralImage={"/images/emoji.png"}
        surroundingImages={[
          { src: "/images/yoga.png", label: "Yoga" },
          { src: "/images/Paint.png", label: "Paint" },
          { src: "/images/wellness.png", label: "Wellness" },
          { src: "/images/events.png", label: "Events" },
          { src: "/images/Finance.png", label: "Finance" },
        ]}
      />
    </div>
  );
};

export default Navbar;
