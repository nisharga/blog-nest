import Image from 'next/image';
import React from 'react';
import styles from './CategoryList.module.css';
import Link from 'next/link';
import { SITE_DOMAIN } from '@/utlis/homeurl';

const getData = async () => {
    const res = await fetch(`${SITE_DOMAIN}/api/categories`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed');
    }

    return res.json();
};

const CategoryList = async () => {
    const data = await getData();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories...</h1>
            <div className={styles.categories}>
                {data?.map((item: any, index: number) => (
                    <Link
                        href='/blog?cat=style'
                        className={`${styles.category} ${styles[item.slug]}`}
                        key={index}
                    >
                        {item.img && (
                            <Image
                                src={item.img}
                                alt=''
                                width={32}
                                height={32}
                                className={styles.image}
                            />
                        )}
                        {item.title}
                    </Link>
                ))}

                <Link
                    href='/blog?cat=style'
                    className={`${styles.category} ${styles['food']}`}
                >
                    <Image
                        src='/moon.png'
                        alt=''
                        width={14}
                        height={14}
                        className={styles.image}
                    />
                    Sun
                </Link>
            </div>
        </div>
    );
};

export default CategoryList;
