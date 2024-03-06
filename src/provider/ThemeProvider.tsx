'use client';
import { ThemeContext } from '@/context/ThemeContextProvider';
import React, { useContext, FC, useEffect, useState } from 'react';

interface IProps {
    children: React.ReactNode;
}

const ThemeProvider: FC<IProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <div className={theme}>{children}</div>;
    }
};

export default ThemeProvider;
