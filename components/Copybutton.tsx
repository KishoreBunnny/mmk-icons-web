"use client"

import { useState } from "react";

export default function Copybutton({ iconName }: { iconName: string }) {
    const [copied, setCopied] = useState<boolean>(false)
    const handlecopy = async () => {
        try {
            await navigator.clipboard.writeText(iconName);
            setCopied(true)
        } catch (error) {
            console.log("error:", error)
        }
    }
    return (
        <button onClick={handlecopy} className="dark:bg-neutral-700/70 gap-2 bg-neutral-200/70 dark:hover:bg-neutral-700 hover:bg-neutral-200 font-semibold w-[40%] px-3 py-2 rounded-3xl flex justify-center items-center mt-3 lg:mt-auto">
            Copy
            {copied ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 6 9 17l-5-5" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>}
        </button>
    )
}