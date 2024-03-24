import { getAuthSession } from '@/utlis/auth';
import prisma from '@/utlis/connect';
import { NextResponse } from 'next/server';

export const GET = async (req: any) => {
    const { searchParams } = new URL(req.url);

    const postSlug = searchParams.get('postSlug');

    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug })
            },
            include: { user: true }
        });

        return new NextResponse(JSON.stringify(comments));
    } catch (err) {
        // console.log(err);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!' })
        );
    }
};

// CREATE A COMMENT
export const POST = async (req: any) => {
    const session = await getAuthSession();

    if (!session || !session.user) {
        return new NextResponse(
            JSON.stringify({ message: 'Not Authenticated!' })
        );
    }

    try {
        const body = await req.json();

        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session?.user.email }
        });

        return new NextResponse(JSON.stringify(session));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!' })
        );
    }
};
