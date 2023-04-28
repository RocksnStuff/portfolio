"use client"

import "./scrollbar.css"
import {useEffect, useState} from "react";

export default function DisplayBar() {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setWidth(
                document.documentElement.scrollTop /
                (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100)
        })
    }, [])

    return <div className={"scrollBar"} style={{width: `${width}%`}}></div>
}