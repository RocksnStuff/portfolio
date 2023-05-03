import {getPost, getPosts} from "@/app/blog/getpost";

export function generateStaticParams() {
    return getPosts()
}

export default function BlogPage({ params }: { params: { name: string } }) {
    const post = getPost(params.name)

    return <>
        <h1>{post.title}</h1>
        <h3>{post.date.format("LL")}</h3>
        {post.content}
    </>
}