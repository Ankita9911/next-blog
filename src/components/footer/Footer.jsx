import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>MindEase</h1>
        </div>
        <p className={styles.desc}>
          Our platform is dedicated to supporting mental well-being. We provide guidance, resources, and motivation to help individuals overcome anxiety, stress, and depression.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Community</Link>
          <Link href="/">Inspiring stories</Link>
          <Link href="https://anjum102.github.io/Katalyst_mini_website/">Home</Link>
          <Link href="http://localhost:8501/">Chatbot</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Depression Recovery</Link>
          <Link href="/">Anxiety Triumphs</Link>
          <Link href="/">Panic Attack Recovery</Link>
          <Link href="/">Trauma Healing </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;