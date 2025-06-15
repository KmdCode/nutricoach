'use client'
import NavBar from "@/components/Navbar";
import styles from "./page.module.css";

const LandingPage = () => {

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <NavBar />
      </header>
      
      <main className={styles.main}>
        <h1>NutriCoach</h1>
        <h2>Feed Your progress, one smart meal at a time.</h2>

        <button className={styles.getStarted}>Trainer</button>
        <button className={styles.getStarted}>Client</button>
        
      </main>
    </div>
  );
}
export default LandingPage;