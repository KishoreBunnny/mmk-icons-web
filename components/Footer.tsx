import { Link } from "next-view-transitions";

export default function Footer({next,prev,nextName,prevName}:{next?:string;prev?:string;nextName?:string;prevName?:string}){
    return(
      <div className=" h-[10vh] mt-10 w-full flex justify-between items-center px-4 py-2 ">
        { !!prev && <Link href={prev} className=" px-3 py-2 group " >
          <span className="text-[13px] text-neutral-400 ml-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 " >Previous</span>
          <div className="flex  items-center " >
            <svg className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m15 18-6-6 6-6" /></svg>
            <p>{prevName}</p>
          </div>
        </Link>}

        { !!next && <Link href={next} className=" px-3 py-2 group " >
          <span className="text-[13px] text-neutral-400 mr-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 " >Next</span>
          <div className="flex  items-center " >
            <p>{nextName}</p>
            <svg className="text-neutral-400 mr-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </div>
        </Link>}

      </div>
    )
}