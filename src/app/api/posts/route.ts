import prisma from '@/utlis/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') || 1;
    const cat = searchParams.get('cat');

    const POST_PER_PAGE = 2;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
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
