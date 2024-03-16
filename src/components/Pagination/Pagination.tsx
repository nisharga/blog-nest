'use client';

import React, { FC } from 'react';
import styles from './Pagination.module.css';
import { useRouter } from 'next/navigation';

interface IProps {
    page?: number | undefined;
    hasPrev?: boolean;
    hasNext?: boolean;
}

const Pagination: FC<IProps> = ({ page = 1, hasPrev, hasNext }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!hasPrev}
                onClick={() => router.push(`?page=${page - 1}`)}
            >
                Previous
            </button>
            <button
                disabled={!hasNext}
                className={styles.button}
                onClick={() => router.push(`?page=${page + 1}`)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
