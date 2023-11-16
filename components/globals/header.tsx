import { siteConfig } from "@/config/site"

export function Header() {
  return (
    <header className="opents-header top-0 w-full py-24">
      <div className="flex justify-center text-center  items-center space-x-4">
              <div className="flex justify-center text-center space-x-2">
        <span className="text-7xl text-gray-100 inline-block font-bold">
          {siteConfig.name}
        </span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center text-center space-x-2">
        <span className="text-xl text-gray-200 inline-block font-medium">
          {siteConfig.description}
        </span>
        </div>
        </div>
    </header>
  )
}