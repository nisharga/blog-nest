import React from 'react';
import { Pagination } from '..';
import styles from './CardList.module.css';
import Card from '../Card/Card';
import { SITE_DOMAIN } from '@/utlis/homeurl';

const getData = async (page: number, cat: string) => {
    const res = await fetch(
        `${SITE_DOMAIN}/api/posts?page=${page}&cat=${cat || ''}`,
        {
            cache: 'no-store'
        }
    );

    if (!res.ok) {
        throw new Error('Failed');
    }

    return res.json();
};

const CardList = async ({ page, cat }: any) => {
    const { posts, count } = await getData(page, cat);

    const POST_PER_PAGE = 2;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Recent Posts</h1>
                <div className={styles.posts}>
                    {posts?.map((item: any) => (
                        <Card item={item} key={item._id} />
                    ))}
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default CardList;
