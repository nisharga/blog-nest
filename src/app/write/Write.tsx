'use client';
import Image from 'next/image';
import styles from './writePage.module.css';
import { useState } from 'react';

const Write = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <input type='text' placeholder='Title' className={styles.input} />

            <div className={styles.editor}>
                <button
                    className={styles.button}
                    onClick={() => setOpen(!open)}
                >
                    <Image src='/plus.png' alt='' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <input
                            type='file'
                            id='image'
                            name='image'
                            onChange={(e: any) =>
                                console.log(e.target.files[0])
                            }
                            style={{ display: 'none' }}
                        />
                        <button className={styles.addButton}>
                            <label htmlFor='image'>
                                <Image
                                    src='/image.png'
                                    alt=''
                                    width={16}
                                    height={16}
                                />
                            </label>
                        </button>
                        <button className={styles.addButton}>
                            <Image
                                src='/external.png'
                                alt=''
                                width={16}
                                height={16}
                            />
                        </button>
                        <button className={styles.addButton}>
                            <Image
                                src='/video.png'
                                alt=''
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Write;
