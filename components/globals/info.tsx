import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Info() {
  return (
    <div className="py-8">
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What is OpenTypescript ?
        </AccordionTrigger>
        <AccordionContent>
          OpenTypscrit is a github organization which develops free open source functional projects for the public and programmers can know how they work in the readme files.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          How can i make a project or contribute to existing projects ?
        </AccordionTrigger>
        <AccordionContent>
          content here
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          I want to learn typescript :D
        </AccordionTrigger>
        <AccordionContent>
          content here
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}
