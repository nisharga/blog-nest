'use client';

import Image from 'next/image';
import styles from './singlePage.module.css';
import { Comments, Menu } from '@/components';
import { useEffect, useState } from 'react';

const BlogSinglePost = (slug: any) => {
    const [post, setPost] = useState<any>();

    useEffect(() => {
        fetch(`http://localhost:3000/api/posts/${slug.slug}`)
            .then((res) => res.json())
            .then((data: any) => setPost(data));
    }, [slug]);

    console.log('🚀 ~ BlogSinglePost ~ post:', post);
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post?.title}</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src={post?.user.image}
                                alt=''
                                fill
                                className={styles.avatar}
                            />
                        </div>

                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                {post?.user?.name || 'reload again'}
                            </span>
                            <span className={styles.date}>
                                {post?.createdAt}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        src={post?.img}
                        alt=''
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: post?.desc }}
                    />
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default BlogSinglePost;
