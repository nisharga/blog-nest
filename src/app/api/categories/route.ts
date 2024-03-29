import prisma from '@/utlis/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: 'categoris route Something went wrong!' })
        );
    }
};
