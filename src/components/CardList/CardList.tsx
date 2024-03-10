import React from 'react';
import { Pagination } from '..';
import styles from './CardList.module.css';
import Card from '../Card/Card';

const CardList = ({ page, cat }: any) => {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Recent Posts</h1>
                <div className={styles.posts}>
                    {/* {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))} */}

                    {/* <Card   /> */}
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default CardList;
