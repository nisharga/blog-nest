'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './AuthLinks.module.css';
import { signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
    const [open, setOpen] = useState(false);

    const { data, status } = useSession();
    return (
        <>
            {status === 'authenticated' ? (
                <>
                    <Link href='/write' className={styles.link}>
                        Write
                    </Link>
                    <span className={styles.link} onClick={() => signOut()}>
                        Logout
                    </span>
                </>
            ) : (
                <Link href='/login' className={styles.link}>
                    Login
                </Link>
            )}

            {/* mobile device */}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href='/' onClick={() => setOpen(!open)}>
                        Homepage
                    </Link>
                    <Link href='/' onClick={() => setOpen(!open)}>
                        About
                    </Link>
                    <Link href='/' onClick={() => setOpen(!open)}>
                        Contact
                    </Link>
                    {status === 'authenticated' ? (
                        <>
                            <Link href='/write'>Write</Link>
                            <button onClick={() => signOut()}>Logout</button>
                        </>
                    ) : (
                        <Link href='/login' onClick={() => setOpen(!open)}>
                            Login
                        </Link>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthLinks;
