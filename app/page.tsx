import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "MMK Icons",
  description: "Welcome to the MMK icons documentation!",
};


export default function Home() {
  return (
    <div className="w-[80%]" >
      <h1 className="text-3xl font-bold mb-4 " > MMK Icons</h1>
      <p className="text-md ml-1  " >Welcome to the MMK icons documentation!</p>

      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>

      <h2 className="text-xl font-bold mb-4 " >What is MMK Icons</h2>
      <p className="text-md ml-2 " >MMK is an open-source icon library that provides 22+ vector (svg) files for displaying icons and symbols in digital and non-digital projects. The library aims to make it easier for designers and developers to incorporate icons into their projects by providing several official packages to make it easier to use these icons in your project.</p>

      <div className=" border-b border-neutral-500/50 mb-10 mt-10 " ></div>

      <h2 className="text-xl font-bold mb-4 " >How to use the docs</h2>
      <p className="text-md ml-2" >Get started with <Link className="text-blue-500 text-md " href="/installation" >installation</Link> </p>
      <p className="text-md ml-2">Use the sidebar to navigate through the sections, or search (Ctrl+K or Cmd+K) to quickly find a page.</p>

      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>

      <h2 className="text-xl font-bold mb-4 " >Complete Set of Icons</h2>
      <p className="text-md ml-2 " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem voluptatum alias consequuntur quod sint eligendi iure ipsum expedita sunt. Totam iure a dolores unde praesentium illum qui ex quae.</p>

      <div className="  border-b border-neutral-500/50 mb-10 mt-10 " ></div>


      <h2 className="text-xl font-bold mb-4 " >Complete Set of Icons</h2>
      <p className="text-md ml-2 " >
        As new applications with specific features arise, Lucide aims to provide a complete set of icons for every project. The community follows a set of design rules when designing new icons. These rules maintain standards for the icons, such as recognizability, consistency in style, and readability at all sizes. While creativity is valued in new icons, recognizable design conventions are important to ensure that the icons are easily identifiable by users.

      </p> 
    </div>
  );
}
