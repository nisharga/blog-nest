import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components';
import { ThemeContextProvider } from '@/context/ThemeContextProvider';
import ThemeProvider from '@/provider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Blog Nest',
    description: 'Created by Nishsrga Kabir'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeContextProvider>
                    <ThemeProvider>
                        <div className='container'>
                            <div className='wrapper'>
                                <Navbar />
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </ThemeProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
