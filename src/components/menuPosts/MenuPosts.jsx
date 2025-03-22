import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Depression Recovery </span>
          <h3 className={styles.postTitle}>
          &quot;The Day I Chose Myself&quot;
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>@HopefulSoul </span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
          Anxiety Triumphs 
          </span>
          <h3 className={styles.postTitle}>
          &quot;Stronger Than My Mind&quot;
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>@WarriorMindset</span>
            <span className={styles.date}> - 19.03.2025</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Panic Attack Recovery</span>
          <h3 className={styles.postTitle}>
          &quot;Healing, One Day at a Time&quot;
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>@SilentFighter  </span>
            <span className={styles.date}> - 23.06.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
          Trauma Healing
          </span>
          <h3 className={styles.postTitle}>
          &quot;You Are Not Alone&quot;
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>@LostAndFound  </span>
            <span className={styles.date}> - 27.01.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;