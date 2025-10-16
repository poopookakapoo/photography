import Image from "next/image";
import styles from "./Hero.module.css";
import Container from "../Container/Container";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h1>Alexander Parunin Studio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </div>

          <div className={styles.media}>
            <div className={styles.frame}>
              <Image
                src="/images/portrait.jpg"
                alt="Signature portrait"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 600px"
                className={styles.img}              // 👈 key
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
