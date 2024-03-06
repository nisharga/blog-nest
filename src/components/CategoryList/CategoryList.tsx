import Image from 'next/image';
import React from 'react';
import styles from './CategoryList.module.css';

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {/* {data?.map((item) => (
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles[item.slug]}`}
          key={item._id}
        >
          {item.img && (
            <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
          )}
          {item.title}
        </Link>
      ))} */}
            </div>
        </div>
    );
};

export default CategoryList;
