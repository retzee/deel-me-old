"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

import Navbar from "./Navbar";
import styles from './Header.module.scss';

import logoImg from '@/public/images/Logo-Deel.png';

const Header = () => {
    // State to handle mobile menu visibility
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    // Function to toggle menu visibility
    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    }

    return (
        <div className="mb-32">
            <main className={styles.main_container}>
                <div className={styles.navbox_regular_screen}>
                    <div className="pr-2">
                        <Link href='/'>
                            <Image src={logoImg} alt="Deel Me" /> 
                        </Link>
                    </div>
                    <div className={styles.navbox_links}>
                        <Navbar /> 
                    </div>

                    <button 
                        className={styles.navbox_mobile_toggle}
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuVisible ? <GrClose />: <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu Container */}
                {mobileMenuVisible && (
                    <div className={styles.navbox_mobile_screen}>
                        <Navbar />
                    </div>
                )}
            </main>
        </div>
    );
}

export default Header;