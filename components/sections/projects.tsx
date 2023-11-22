import React from "react"

import Card from "@/components/globals/card"

// import { IdeaNest } from "@/lib/images"

const projectsData = [
  {
    releaseDate: "2023",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    Badge: "Work-In-Progress" ,
    name: "IdeaNest",
    thumbnail: "thumbnails/ideanest.webp",
    description: "im nermalcat69",
    link: "https://github.com/opentypescript/IdeaNest",
  },
  {
    releaseDate: "2023",
    TopicOne: "Typescript",
    TopicTwo: "Nextjs",
    TopicThree: "Tailwind",
    Badge: "Work-In-Progress",
    name: "Site",
    thumbnail:
      "https://opents-assets-jxk5gayhu-nermalcat69s-projects.vercel.app/temporary/thumbnail.png",
    description: "im nermalcat69",
    link: "https://github.com/opentypescript/Site",
  },
]

export default function Projects() {
  return (
    <div className="py-2 pb-10">
      <div className="m-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 content-around ">
          {projectsData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
