import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react';
import styles from '../styles/Navbar.module.css'

const handleScroll = () => {
  console.log('handleScroll successfully called!');
  console.log(window.scrollY);
  if (window.scrollY == 0) {
    document.body.classList.remove('scrolled');
  } else {
    document.body.classList.add('scrolled');
  }
}

 const Navbar: NextPage = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div id="nav-main" className="fixed top-0 left-0 right-0 shadow-md bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="branding">
            <Link href="/">
              <a><img id="logo" src="/images/toastmasters-logo.png" alt="Toastmasters Creating Communicators" /></a>
            </Link>

          </div>
          <div className="nav-sec">
            <ul className="block h-full float-right">
              <li className={styles.menuItem}>
                <Link href="/">
                  <a className={styles.menuItemA}>Home</a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/about">
                  <a className={styles.menuItemA}>About Us</a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/contact">
                  <a className={styles.menuItemA}>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;