'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './../TrainerNavbar/TrainerNavbar.module.css';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const ClientNavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

    const handleLogout = () => {
    sessionStorage.clear()
    router.push('/login')
  }


  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logoSection}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="NutriCoach"
            width={40}
            height={40}
          />
          <span className={styles.logoText}>NutriCoach</span>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <CloseOutlined className={styles.close} /> : <MenuOutlined className={styles.menu} />}
        </div>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <a onClick={() => { router.push('/client'); closeMenu(); }}>Home</a>
          <Button onClick={() => { handleLogout(); closeMenu(); }}>Logout</Button>
        </nav>
      </div>
    </header>
  );
};

export default ClientNavBar;