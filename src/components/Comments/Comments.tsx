'use client';

import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Comments = ({ slug }: any) => {
    const status = useSession();

    const { data, mutate, isLoading } = useSWR(
        `http://localhost:3000/api/comment?postSlug=${slug}`,
        fetcher
    );

    const [desc, setDesc] = useState('');

    const handleSubmit = async () => {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ desc, slug })
        });
        mutate();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>

            <div className={styles.write}>
                <textarea
                    placeholder='write a comment...'
                    className={styles.input}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button className={styles.button}>Send</button>
            </div>

            <Link href='/login'>Login to write a comment</Link>

            <div className={styles.comments}>
                {isLoading
                    ? 'Loading'
                    : data?.map((comment: any) => (
                          <div className={styles.comment} key={comment?._id}>
                              <div className={styles.user}>
                                  <Image
                                      src={comment?.user.image}
                                      alt=''
                                      width={50}
                                      height={50}
                                      className={styles.image}
                                  />

                                  <div className={styles.userInfo}>
                                      <span className={styles.username}>
                                          {comment?.user.name}
                                      </span>
                                      <span className={styles.date}>
                                          {comment?.createdAt}
                                      </span>
                                  </div>
                              </div>
                              <p className={styles.desc}>{comment?.desc}</p>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Comments;
