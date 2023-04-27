import './globals.css'
import React from "react";
import NavBar from "@/app/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang={'en'}>
        <body>
            <NavBar></NavBar>
            { children }
        </body>
    </html>
}