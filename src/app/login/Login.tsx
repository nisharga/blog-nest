'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {
    const { data, status } = useSession();
    const router = useRouter();
    console.log('🚀 ~ Login ~ status:', status);
    console.log('🚀 ~ page ~ data:', data);
    if (status === 'loading') {
        return <div className={styles.loading}>Loading......</div>;
    }
    if (status === 'authenticated') {
        router.push('/');
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div
                    onClick={() => signIn('google')}
                    className={styles.socialButton}
                >
                    Sign in with Google
                </div>
                <div className={styles.socialButton}>Sign in with Github</div>
                <div className={styles.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    );
};

export default Login;
