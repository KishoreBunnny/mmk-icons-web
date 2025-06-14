"use client"
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type LinksProps = {
    title: string;
    Links: {
        link: string;
        name: string
    }[];
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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



function LinkContainter({ title, Links,setOpen }: LinksProps) {
    const path = usePathname()
    return (
        <div onClick={()=>setOpen(false)} className="flex gap-2 flex-col" >
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
    const [open,setOpen]=useState<boolean>(false)
    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
       
    }, [open])

    return (
        <>
            {/* mobile menu component start */}
            <button onClick={()=>{
                 setOpen(!open)
                  }} className="lg:hidden z-[999]  h-[6vh] bg-[rgba(255,255,255,0.5)]  dark:bg-[rgba(0,0,0,.5)] backdrop-blur-sm sticky top-[8vh] w-full border-b border-neutral-500/50 flex  items-center px-2 py-3 ">
                <svg className={`${open ? " rotate-90 " : " rotate-0 "} mr-3  `} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                <span>Menu</span>
            </button>

           {!!open && <menu className="max-h-[92vh] z-[999] fixed bg-neutral-50/90 dark:bg-neutral-950/80  backdrop-blur-[8px] lg:hidden  top-[14vh] w-[100%] h-[92vh]  pt-5  flex flex-col gap-3 py-4 px-5 overflow-y-scroll scroll-smooth  " >
               <LinkContainter title="Getting started" Links={Links} setOpen={setOpen} />
            </menu>
}
            {/* mobile menu component end */}


            <div className="lg:max-h-[92vh] hidden lg:sticky lg:top-[8vh] w-[100%] h-[92vh] lg:h-[92vh] lg:w-[20%]  pt-5 lg:pt-10 lg:flex flex-col gap-3 py-4 px-5 lg:px-2 overflow-y-scroll scroll-smooth  " >
                <LinkContainter title="Getting started" Links={Links} setOpen={setOpen} />
                {/* other link for futher */}
                {/* <LinkContainter title="Introduction" Links={Links} />
                <LinkContainter title="Bascis" Links={Links} />
                <LinkContainter title="Advanced" Links={Links} />
                <LinkContainter title="Packages" Links={Links} /> */}
            </div>

        </>

    )
}