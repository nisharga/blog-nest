'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode, FC } from 'react';

interface IProps {
    children: React.ReactNode;
}

const AuthProvider: FC<IProps> = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
