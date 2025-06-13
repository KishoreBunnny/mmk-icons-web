"use client"
import { MongoDbIcon, NextjsIcon, ReactIcon, TailwindIcon } from "@/utils/icons";
import { Link } from "next-view-transitions";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { normalIcons } from "@/utils/normalcons";



type filteredType = {
    name: string;
    icon: ReactNode;
    iconName: string;
}[]

const defaultresults = [{ name: "reacticon", icon: <ReactIcon />, iconName: "ReactIcon" },
{ name: "nextjsicon", icon: <NextjsIcon />, iconName: "NextjsIcon" },
{ name: "tailwindicon", icon: <TailwindIcon />, iconName: "TailwindIcon" },
{ name: "mongodbicon", icon: <MongoDbIcon />, iconName: "MongoDbIcon" }]


export default function SearchModal({ open, containerRef, setOpen }: {
    open: boolean;
    containerRef?: RefObject<HTMLDivElement | null>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {

    const [input, setInput] = useState("");
    const [results, setResults] = useState<filteredType>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
            inputRef.current?.focus();
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        if (input.trim() === "") {
            setResults([]);
        }
        else {
            const filtered = normalIcons.filter(icon => icon.name.toLowerCase().includes(input.toLowerCase()) || icon.iconName.toLowerCase().includes(input.toLowerCase()));
            setResults(filtered)
        }



        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open, inputRef, input]);

    return (
        <>
            {!!open && <div className="fixed inset-0 z-50  bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-[0.5px] flex items-start justify-center pt-20">
                <div ref={containerRef} className=" w-[40%] border border-neutral-500/50 max-h-[35rem] overflow-y-scroll bg-neutral-100 dark:bg-neutral-950 rounded-xl overflow-hidden   "  >
                    <form role="search" aria-label="Site search" className=" border-b border-neutral-500/50 sticky top-0 bg-neutral-100 dark:bg-neutral-950 " >
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="search"
                            name="q"
                            placeholder="What are you searching for?"
                            aria-label="Search input" className=" px-5 py-4 w-full font-medium text-neutral-900 dark:text-neutral-200  bg-transparent text-md  outline-none " />
                    </form>
                    <div aria-live="polite" className=" py-4 px-4 flex flex-col justify-center  " >
                        {
                            results.map((icon) => (
                                <Link key={icon.name} onClick={() => setOpen(false)} href={`/icons/${icon.name}`} className="hover:bg-neutral-200  dark:hover:bg-neutral-900 cursor-pointer font-medium p-2 rounded-lg flex gap-4 items-center " > {icon.icon} {icon.iconName} </Link>
                            ))
                        }

                        {
                            !results.length &&
                            defaultresults.map((icon)=>(
                             <Link key={icon.name} href={`/icons/${icon.name}`} className="  hover:bg-neutral-200  dark:hover:bg-neutral-900 cursor-pointer font-medium p-2 rounded-lg flex gap-4 items-center " >{icon.icon} {icon.iconName} </Link>
                            ))
                        }
                </div>
            </div>
            </div >}
        </>
    )
}