'use client'

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6"
// import { RelativeDate } from "./relativedate"
//  const dateModified = new Date();

// export async function getStaticProps() {
   // return {
        // props: {
         //   RelativeDate,
       // },
     //  revalidate: 60, // In seconds
   // }
// }      <span className="text-blue-700 font-bold text-md"> <RelativeDate date={dateModified} prefix="Last updated" /> </span> (use this in export default function ToolBar)


 export default function ToolBar() {
    return (
    <section>
    <div className="flex items-center space-x-4 sm:justify-between sm:space-x-0">
     <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center ">
            <Link
              href={siteConfig.links.contribute}
              target="_blank"
              rel="noreferrer"
            >
              <div className={buttonVariants()}>
                <div className="inline-flex items-center py-1 px-2 space-x-3 rounded-md  ">
                  <FaGithub className="h-6 w-6" />
                  <text className="font-semibold">Contribute</text>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </section>
    )
}