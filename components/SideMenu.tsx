"use client"
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

type LinksProps = {
    title: string;
    Links: {
        link:string;
        name:string
    }[];

}


const Links = [
    {
        link: "/installation",
        name: "Installation"
    },
    {
        link: "/usage",
        name: "Usage"
    },
    {
        link: "/icons",
        name: "Icons"
    },
    {
        link: "/docs",
        name: "Docs"
    }
]



function LinkContainter({ title, Links }:LinksProps) {
    const path = usePathname()
    return (
        <div className="flex gap-2 flex-col" >
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold capitalize " >{title}</h3>
            {
                Links.map((link) => (
                    <Link key={link.name} href={link.link} className={` ${path.startsWith(link.link) ? "text-blue-500" : "text-neutral-500 dark:text-neutral-400 "} px-1 font-light text-md  hover:text-neutral-700   dark:hover:text-neutral-200 `} >
                        {link.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default function SideMenu() {
    return (
        <div className="max-h-[92vh] sticky top-[8vh] h-[92vh] w-[20%]   pt-10 flex flex-col gap-3 py-4 px-2 overflow-y-scroll scroll-smooth  " >
            <LinkContainter title="Getting started" Links={Links} />
            {/* <LinkContainter title="Introduction" Links={Links} />
            <LinkContainter title="Bascis" Links={Links} />
            <LinkContainter title="Advanced" Links={Links} />
            <LinkContainter title="Packages" Links={Links} /> */}
        </div>
    )
}