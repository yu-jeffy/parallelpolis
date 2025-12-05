import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import Image from 'next/image'

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <Image
                    src="/parallelpolis-logo-transparent.png"
                    width={20}
                    height={20}
                    alt="logo"
                />
            </div>
        </nav>
    );
};

export default NavBar;