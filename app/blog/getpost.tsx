import {XMLBuilder, XMLParser} from "fast-xml-parser";
import moment, {Moment} from "moment/moment";
import path from "path";
import process from "process";
import * as fs from "fs";

interface PostType {
    title: string,
    date: Moment,
    content: JSX.Element
}

export function getPost(name: string): PostType {
    const url = path.join(process.cwd(), "blog", name + ".xml")
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

export function getPosts() {
    return fs.readdirSync(path.join(process.cwd(), "blog")).map(name => ({
        name: name.split(".")[0]
    }))
}