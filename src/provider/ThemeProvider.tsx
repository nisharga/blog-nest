'use client';
import { ThemeContext } from '@/context/ThemeContextProvider';
import React, { useContext, FC } from 'react';

interface IProps {
    children: React.ReactNode;
}

const ThemeProvider: FC<IProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
