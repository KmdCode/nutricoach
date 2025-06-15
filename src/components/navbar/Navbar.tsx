import Image from "next/image";
import styles from "./Navbar.module.css"
import React from "react";

const NavBar: React.FC = () => {

    return (
        <div className={styles.navbar}>
            <Image
            className={styles.logo}
            src="/logo.png"
            alt="NutriCoach"
            width={100}
            height={100}
            priority
            />
        </div>
    )
}

export default NavBar;