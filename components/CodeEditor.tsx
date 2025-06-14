"use client"
import { ReactNode, useState } from 'react';
type CodeEditorProps = {
    icon?: ReactNode;
    title: string;
    code: string;
    color?: string;
}

export default function CodeEditor({icon=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19h8" /><path d="m4 17 6-6-6-6" /></svg>, title, code, color = "text-green-500" }: CodeEditorProps) {
    const [copied, setCopied] = useState<boolean>(false)
    const handlecopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true)
        } catch (error) {
            console.log("error:", error)
        }
    }
    return (
        <div className=" w-[100%] lg:w-[90%] lg:ml-7 m-4 rounded-lg border-[0.5px] border-neutral-600 overflow-hidden  " >
            <div className=" border-b-[0.5px] text-neutral-400  border-neutral-600 h-10 flex justify-between items-center px-3 bg-neutral-100 dark:bg-neutral-900 " >
                <div className="flex justify-center items-center gap-2  " >
                    {
                        icon
                    }
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19h8" /><path d="m4 17 6-6-6-6" /></svg> */}
                    <p className="text-md">{title}</p>
                </div>
                <button onClick={handlecopy} className="py-2 px-1  cursor-pointer " >
                    {copied ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 6 9 17l-5-5" /></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>}
                </button>
            </div>
            
            <div className="px-6 py-6 flex flex-col gap-1  overflow-x-scroll " >
                <pre className={`${color}  font-mono text-md tracking-tight `} >{code}</pre>
            </div>

        </div>
    )
}
