import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description: "Documnetation of mmk",
};


export default function Docs(){
    return(
        <div className="w-[80%]" >

            <h1 className="font-bold text-3xl" >Docs Page</h1>

            <Footer  prev="/icons" prevName="Icons" />
        </div>
    )
}