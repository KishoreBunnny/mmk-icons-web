import CodeEditor from "./CodeEditor";
import Footer from "./Footer";

export default function Install() {

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
      <h1 className="text-3xl font-bold mb-4 " >Installation</h1>
      <p className="text-md  ml-1 " >Step to install mmk icons into your project.</p>
      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>

      <h1 className="text-3xl font-bold mb-4 " > Quick installation</h1>
      <p className="text-md ml-1 " >The quickest way to install icons is using npm install mmk-icons, which installs icons into your project. To install package, run:</p>

      <CodeEditor title={"Terminal"} code={"npm install mmk-icons"} />

      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>


      <CodeEditor title={"package.json"} color="text-pink-700"
        code={code}
      />


      <CodeEditor
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>}
        title={"App.tsx"} color="text-purple-500"
        code={code1}
      />

      
      <Footer next={"/usage"} nextName={"Usage"} prev="/" prevName="Home" />
    </div>
  )
}