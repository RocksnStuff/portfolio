import './globals.css'
import React from "react";
import NavBar from "@/app/navbar";
import ScrollBar from "@/app/scrollbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang={'en'}>
        <body>
            <NavBar/>
            { children }
            <ScrollBar/>
        </body>
    </html>
}