'use client'
import NavBar from "@/components/navbar/Navbar";
import styles from "./page.module.css";
import {useRouter} from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  const handleTrainer = () => {
    router.push('/trainer/register')
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <NavBar />
      </header>
      
      <main className={styles.main}>
        <h1>NutriCoach</h1>
        <h2>Feed Your progress, one smart meal at a time.</h2>

        <div className={styles.buttons}>
          <button onClick={handleTrainer} className={styles.getStarted}>Trainer</button>
          <button className={styles.getStarted}>Client</button>
        </div>
        
      </main>
    </div>
  );
}
export default LandingPage;