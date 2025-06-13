import CodeEditor from "@/components/CodeEditor";
import Footer from "@/components/Footer";
import { Link } from "next-view-transitions";
import { XIcon, CssIcon, DevIcon, DockerIcon, ExpressIcon, GitIcon, GraphQlIcon, HtmlIcon, JsIcon, MongoDbIcon, NextjsIcon, NpmIcon, PostgresIcon, ReactIcon, ReduxIcon, SassIcon, SqlIcon, TailwindIcon, TsIcon, WebPackIcon, GitHubIcon } from "@/utils/icons";
import { ReactNode } from "react";
import { data } from "@/utils/data"
import { normalIcons } from "@/utils/normalcons"


function Icon({ icon, name, iconName }: { icon?: ReactNode; name?: string; iconName?: string }) {
    return (
        <Link href={`/icons/${name}`} className="flex cursor-pointer w-1/6 flex-col gap-2 justify-center rounded-lg items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 bg-neutral-200/70 dark:bg-neutral-800/70 px-0.5 py-2  ">
            {icon}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-google"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" /></svg> */}
            <p className="font-semibold w-[100%] flex text-neutral-600 dark:text-neutral-200 justify-center items-center truncate" >{iconName}</p>
        </Link>
    )
}

export default function Icons() {

    const code = `1{
2 "scripts": {
3   "dev": "next dev",
4   "build": "next build",
5    "start": "next start",
6    "lint": "next lint"
7 }
8}`

    const code1 = `import { NextjsIcon } from 'mmk-icons';

const App = () => {
  return (
    <NextjsIcon />
  );
};

export default App;`




    return (
        <div className="w-[80%]" >
            <h1 className="text-3xl font-bold mb-4 " >Icons</h1>
            <p className="text-md ml-1">MMK icons consists themed and colorfull icons which make your app beautiful</p>
            <p className="text-md  ml-1 " >Search for icons from above search bar</p>
            <div className="  border-b border-neutral-500/50 mb-4 mt-6 " ></div>

            <div className=" w-full flex gap-5 flex-wrap   ">

                {
                    normalIcons.map((icon) => (
                        <Icon key={icon.iconName} icon={icon.icon} name={icon.name} iconName={icon.iconName} />
                    ))
                }


            </div>


            <Footer next={"/docs"} nextName={"Docs"} prev="/usage" prevName="Usage" />

        </div>
    )
}