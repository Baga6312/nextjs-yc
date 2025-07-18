import { JSX } from "react";
import Navbar from "../components/Navbar";

export default function Layout({children}: Readonly<{children: React.ReactNode}>): JSX.Element {
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
        </main>
    )

}