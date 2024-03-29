import { getAuthSession } from '@/utlis/auth';
import prisma from '@/utlis/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');
    const cat = searchParams.get('cat');

    const POST_PER_PAGE = 2;
    const pageNumber = page ? parseInt(page, 10) : 1;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (pageNumber - 1),
        where: {
            ...(cat && { catSlug: cat })
        }
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where })
        ]);
        return new NextResponse(JSON.stringify({ posts, count }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!' })
        );
    }
};

// CREATE A POST
export const POST = async (req: any) => {
    const session = await getAuthSession();

    if (!session || !session.user) {
        return new NextResponse(
            JSON.stringify({ message: 'Not Authenticated!' })
        );
    }

    try {
        const body = await req.json();

        const post = await prisma.post.create({
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
