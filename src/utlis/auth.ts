// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from './connect';
import { getServerSession } from 'next-auth';

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        /*  GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }), */
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
        // ...add more providers here
    ]
};

export const getAuthSession = () => getServerSession(authOptions);
