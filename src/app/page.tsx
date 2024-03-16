import { CardList, CategoryList, Featured, Menu } from '@/components';
import styles from './homepage.module.css';

export default function Home({ searchParams }: any) {
    const page = parseInt(searchParams.page) || 1;
    return (
        <div className={styles.container}>
            <Featured />
            <CategoryList />
            <div className={styles.content}>
                <CardList page={page} />
                <Menu />
            </div>
        </div>
    );
}
