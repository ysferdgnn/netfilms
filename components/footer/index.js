import React from "react";
import Link from "next/link";
import styles from './styles.module.css'
function Footer() {
    return <footer className={
        styles.footer
    }>
        Made with <Link href="https://github.com/ysferdgnn" target="_blank">Yusuf Erdoğan</Link>
    </footer>
}
export default Footer;
