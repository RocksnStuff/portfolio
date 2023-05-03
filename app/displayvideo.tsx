"use client"

import {MouseEvent, useEffect, useRef} from "react";

interface DisplayVideoProps {
    width: number,
    height: number,
    name: string,
    sources: {src: string, type: string}[]
    hasAudio?: boolean,
}

export default function DisplayVideo({ width, height, name, sources, hasAudio=false }: DisplayVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            if (!videoRef.current) {
                return
            }

            if (entries[0].isIntersecting) {
                videoRef.current.play().catch(() => {})
            } else {
                videoRef.current.pause()
            }
        }, {threshold: 0.3})

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }
    }, [])

    function clicked(e: MouseEvent<HTMLVideoElement>) {
        const video = e.currentTarget;

        video.muted = !video.muted
    }

    return <video ref={videoRef} controls={false} width={width} height={height} autoPlay={false} muted={true} loop={true} onClick={hasAudio ? clicked : undefined}>
        {sources.map(({src, type}) => <source key={src} src={src} type={"video/" + type}/>)}
        {name}
    </video>
}