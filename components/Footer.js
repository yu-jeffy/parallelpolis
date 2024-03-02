import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <span className={styles.techUsed}>Our research is powered by:</span>
            <div className={styles.imagesContainer}>
                <Image
                    src="/openai.png"
                    width={50}
                    height={50}
                    alt="openai logo"
                />
                <Image
                    src="/metaai2.png"
                    width={120}
                    height={40}
                    alt="meta ai logo"
                />
                <Image
                    src="/llamaIndex.png"
                    width={50}
                    height={50}
                    alt="llamaindex logo"
                />
                <Image
                    src="/langchain.png"
                    width={50}
                    height={50}
                    alt="langchain logo"
                />
                <Image
                    src="/btc.png"
                    width={50}
                    height={50}
                    alt="btc logo"
                />
                <Image
                    src="/ethereum.png"
                    width={50}
                    height={50}
                    alt="eth logo"
                />
            </div>
            <span className={styles.disclaimer}>All trademarks and logos are the property of their respective owners and their use here does not imply endorsement or affiliation.</span>
        </div>
    );
};

export default Footer;