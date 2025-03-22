import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
      Depression Recovery
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
      Anxiety Triumphs
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
      Panic Attack Recovery
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
      Trauma Healing
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
      Addiction Recovery
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
      Meditation & Mindfulness
      </Link>
    </div>
  );
};

export default MenuCategories;