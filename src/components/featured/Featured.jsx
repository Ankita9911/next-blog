import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>A Journey from Darkness to Light</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Meet Ananya, my friend</h1>
          <p className={styles.postDesc}>
          Ananya was a hardworking girl, always chasing her dreams. But inside, she struggled with anxiety and self-doubt. The pressure of studies and expectations made her feel lost and alone.  

One day, she broke down and decided to seek help. She spoke to a counselor, started journaling, and practiced meditation. Slowly, she felt better. She learned that asking for help is a strength, not a weakness.  

Today, Ananya is happier and stronger.
          </p>
          <button className={styles.button} >Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
