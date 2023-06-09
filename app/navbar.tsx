import Link from "next/link";
import Image from "next/image"
import './navbar.css'

export default function NavBar() {
    return <div className={"nav"}>
        <div className={"navLeft"}>
        </div>
        <div className={"navCentre"}>
            <Link href={'./'}>HOME</Link>
            <Link href={'./blog'}>BLOG</Link>
            <Link href={'./apps'}>APPS</Link>
        </div>
        <div className={"navRight"}>
            <Link href={'https://linktr.ee/themartae'} target={"_blank"}><Image src={"/navbar/linktree.svg"} alt={"Linktree"} width={32} height={32}/></Link>
            <Link href={'https://youtube.com/@Rocksnstuff'} target={"_blank"}><Image src={"/navbar/youtube.svg"} alt={"Youtube"} width={32} height={32}/></Link>
            <Link href={'https://twitter.com/TheMartae'} target={"_blank"}><Image src={"/navbar/twitter.svg"} alt={"Twitter"} width={32} height={32}/></Link>
            <Link href={'https://github.com/RocksnStuff'} target={"_blank"}><Image src={"/navbar/github.svg"} alt={"Github"} width={32} height={32}/></Link>
        </div>
    </div>
}