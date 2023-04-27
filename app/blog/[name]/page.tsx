import path from 'path'
import fs from 'fs'
import * as process from "process"
import {XMLParser, XMLBuilder} from "fast-xml-parser"
import moment, {Moment} from "moment";

export function generateStaticParams() {
    return fs.readdirSync(path.join(process.cwd(), "blog")).map(name => ({
        name: name.split(".")[0]
    }))
}

interface PostType {
    title: string,
    date: Moment,
    content: JSX.Element
}

function getPost(url: string): PostType {
    const file = fs.readFileSync(url)
    const parser = new XMLParser()
    const xml = parser.parse(file)

    const builder = new XMLBuilder({})
    const content: string = builder.build(xml.post.content)

    return {
        title: xml.post.title,
        date: moment(xml.post.date, "dd/mm/yyyy"),
        content: <div dangerouslySetInnerHTML={{__html: content}}></div>
    }
}

export default function BlogPage({ params }: { params: { name: string } }) {
    const post = getPost(path.join(process.cwd(), "blog", params.name + ".xml"))

    return <>
        <h1>{post.title}</h1>
        <h3>{post.date.format("LL")}</h3>
        {post.content}
    </>
}