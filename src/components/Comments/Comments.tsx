import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';

const Comments = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>

            <div className={styles.write}>
                <textarea
                    placeholder='write a comment...'
                    className={styles.input}
                    //   onChange={(e) => setDesc(e.target.value)}
                />
                <button className={styles.button}>Send</button>
            </div>

            <Link href='/login'>Login to write a comment</Link>

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src='https://i.ibb.co/D4yRGpC/nisharga-kabir.jpg'
                            alt=''
                            width={50}
                            height={50}
                            className={styles.image}
                        />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>Kabir</span>
                            <span className={styles.date}>1.2.23</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur, aliquam vero obcaecati quasi magni, temporibus
                        quibusdam saepe quam ut assumenda cum iure commodi
                        corrupti deserunt. Impedit deserunt sit quaerat.
                        Accusantium.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
