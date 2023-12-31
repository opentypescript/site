export function Hello() {
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="fixed hidden md:block bottom-20 right-10 z-50  px-5 py-3 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white duration-100 hover:bg-gray-900 cursor-pointer">
      <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/VUWBHASMPE"><div className="hidden lg:block font-bold">Join Our Discord Server ^_^ </div></a>
    </div>
  )
}
