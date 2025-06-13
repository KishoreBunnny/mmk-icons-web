// // "use client"
// import CodeEditor from "@/components/CodeEditor";
// // import { usePathname } from "next/navigation";
// import { data } from "@/utils/data";

// export default async function Icon({ params }: { params: Promise<{ something: string }> }) {

//     // const path=usePathname()
//     const path = (await params).something
//     // const iconName=path.split('/')
//     // const name=iconName[2].toLowerCase();
//     const icon = data.find(item => item.name === path.toLowerCase())

//     console.log(path, icon)





//     const code = `import { ${icon?.iconName} } from 'mmk-icons';

// const App = () => {
//   return (
//     <${icon?.iconName} />
//   );
// };

// export default App;`

//     return (
//         <div className="w-[80%]" >
//             <div className="w-[100%] flex justify-between items-center py-12 px-2  " >

//                 <div className="flex w-[15vw] h-[25vh]  px-4 py-4 cursor-pointer flex-col gap-2 justify-center rounded-lg items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 bg-neutral-200/70 dark:bg-neutral-800/70 ">
//                     <div className=" scale-[1.5] " >
//                         {
//                             icon?.icon
//                         }
//                     </div>
//                 </div>


//                 <div className="border-l h-[25vh] w-[60%]  px-4 py-2 flex flex-col  border-neutral-500/50 " >

//                     <h1 className="text-3xl font-bold mb-4  " >{icon?.iconName}</h1>
//                     <p className="text-md text-wrap truncate mb-2 " >{icon?.name} Icons</p>
//                     <button className="dark:bg-neutral-700/70 gap-2 bg-neutral-200/70 dark:hover:bg-neutral-700 hover:bg-neutral-200 font-semibold w-[40%] px-3 py-2 rounded-3xl flex justify-center items-center mt-auto " >
//                         Copy  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>

//                     </button>
//                 </div>
//             </div>

//             <div className="border-b  border-neutral-500/50 mb-3 mt-2 " ></div>

//             <h1 className="text-2xl font-bold mb-4 ml-4  " >Usage</h1>

//             <CodeEditor title={"App.tsx"} color="dark:text-neutral-100 text-neutral-700 " code={code} />

//         </div>
//     )
// }








import CodeEditor from "@/components/CodeEditor";
import { data } from "@/utils/data";
// import { Metadata } from "next";



type Props = {
  params: {
    something: string;
  };
};


export default async function IconPage({ params }: Props) {
  const slug =params.something.toLowerCase();
  const icon = data.find((item) => item.name.toLowerCase() === slug);

  if (!icon) return <div className="p-10 text-xl">Icon not found.</div>;

  const code = `import { ${icon.iconName} } from 'mmk-icons';

const App = () => {
  return (
    <${icon.iconName} />
  );
};

export default App;`;

  return (
    <div className="w-[80%]">
      <div className="w-full flex justify-between items-center py-12 px-2">
        <div className="flex w-[15vw] h-[25vh] px-4 py-4 cursor-pointer flex-col gap-2 justify-center rounded-lg items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 bg-neutral-200/70 dark:bg-neutral-800/70">
          {icon.icon}
        </div>

        <div className="border-l h-[25vh] w-[60%] px-4 py-2 flex flex-col border-neutral-500/50">
          <h1 className="text-3xl font-bold mb-4">{icon.iconName}</h1>
          <p className="text-md text-wrap truncate mb-2">{icon.name} Icon</p>
          <button className="dark:bg-neutral-700/70 gap-2 bg-neutral-200/70 dark:hover:bg-neutral-700 hover:bg-neutral-200 font-semibold w-[40%] px-3 py-2 rounded-3xl flex justify-center items-center mt-auto">
            Copy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copy"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </div>
      </div>

      <div className="border-b border-neutral-500/50 mb-3 mt-2"></div>

      <h1 className="text-2xl font-bold mb-4 ml-4">Usage</h1>

      <CodeEditor
        title="App.tsx"
        color="dark:text-neutral-100 text-neutral-700"
        code={code}
      />
    </div>
  );
}



export async function generateStaticParams() {
  return data.map(icon => ({
    something: icon.name.toLowerCase()
  }));
}


// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const icon = data.find(
//     (item) => item.name.toLowerCase() === params.slug.toLowerCase()
//   );

//   return {
//     title: icon ? `${icon.name} Icon | MMK Icons` : "Icon Not Found",
//     description: icon
//       ? `Documentation for ${icon.name} icon.`
//       : "Icon not found",
//   };
// }

