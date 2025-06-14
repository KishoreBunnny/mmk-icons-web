import CodeEditor from "@/components/CodeEditor";
import Copybutton from "@/components/Copybutton";
import { data } from "@/utils/data";


type Props = {
  params: Promise<{
    something: string;
  }>;
};


export default async function IconPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.something.toLowerCase();
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
    <div className="lg:w-[80%] w-[80%] ">
      <div className="w-full flex flex-col gap-10 lg:flex-row  justify-between items-center py-12 pl-[3rem] lg:pl-auto lg:px-2">
        <div className="flex w-[60vw] lg:w-[15vw] h-[25vh] px-4 py-4 cursor-pointer flex-col gap-2 justify-center rounded-lg items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 bg-neutral-200/70 dark:bg-neutral-800/70">
          <div className=" w-[80%] h-[80%] " >
            {
              icon?.icon
            }
          </div>
        </div>

        <div className="lg:border-l border-t lg:border-t-0 h-[25vh] w-[70vw] lg:w-[60%] px-4 py-2 flex flex-col justify-center items-center border-neutral-500/50">
          <h1 className="text-3xl font-bold mb-4">{icon.iconName}</h1>
          <p className="text-md text-wrap truncate mb-2">{icon.name} Icon</p>
            <Copybutton iconName={icon.iconName} />
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

