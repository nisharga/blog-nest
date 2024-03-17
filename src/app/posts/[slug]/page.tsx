import BlogSinglePost from './BlogSinglePost';

const page = async ({ params }: any) => {
    const { slug } = params;

    return <BlogSinglePost slug={slug} />;
};

export default page;
