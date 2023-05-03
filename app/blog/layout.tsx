import Link from "next/link";
import "./blog.css"
import {getPost, getPosts} from "./getpost";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>
        <div className={"blogMenu"}>
            {getPosts().map(({name}) => {
                const post = getPost(name)

                return <Link key={name} href={'./blog/' + name}>{post.title}</Link>
            })}
        </div>
        <div className={"blogContent"}>
            { children }
        </div>
    </>
}