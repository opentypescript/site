import Info from "@/components/globals/info"
import ToolBar from "@/components/sections/toolbar"
import Projects from "./sections/projects"

export function Main() {
  return (
    <section className="py-8">
      <ToolBar />
      <Projects />
      <Info />
    </section>
  )
}
