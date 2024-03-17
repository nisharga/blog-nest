import prisma from '@/utlis/connect';
import { NextResponse } from 'next/server';

// GET SINGLE POST
export const GET = async (req: any, { params }: any) => {
    const { slug } = params;
    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true }
        });

        return new NextResponse(JSON.stringify(post));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!' })
        );
    }
};
