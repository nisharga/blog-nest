import Image from 'next/image';
import styles from './singlePage.module.css';
import { Comments, Menu } from '@/components';

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>title</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src='https://i.ibb.co/D4yRGpC/nisharga-kabir.jpg'
                                alt=''
                                fill
                                className={styles.avatar}
                            />
                        </div>

                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Nisharga</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        src='https://i.ibb.co/D4yRGpC/nisharga-kabir.jpg'
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
                        //   dangerouslySetInnerHTML={{ __html: data?.desc }}
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

export default page;
