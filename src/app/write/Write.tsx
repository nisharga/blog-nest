'use client';
import Image from 'next/image';
import styles from './writePage.module.css';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const Write = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState('');
    const [title, setTitle] = useState('');
    const [catSlug, setCatSlug] = useState('');

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

                <ReactQuill
                    theme='bubble'
                    className={styles.textArea}
                    value={value}
                    onChange={setValue}
                    placeholder='Tell your story'
                />
            </div>

            <button className={styles.publish}>Publish</button>
        </div>
    );
};

export default Write;
