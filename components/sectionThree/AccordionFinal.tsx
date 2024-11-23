import Image from "next/image"
import { AccordionContent, AccordionItem, AccordionTrigger, Accordion } from "./AccordionBase"



export const AccordionFinal = () => {
  const data = [
    {
      title: "Programming",
      label: "Javascript.",
      description: "My favorite programming language is C#. It’s like a warm, cozy blanket of logic and structure. On the other side, and it’s no secret, I absolutely hate JavaScript. If I had to choose between JavaScript and a cucumber, believe me, there’d be no contest—cucumber all the way!",
      imageSrc: "/images/12.jpg"
    },
    {
      title: "Cats",
      label: "My boy",
      description: "I have a soft spot for felines. Cats are the perfect mix of elegance and attitude, all in a fluffy bundle. Here you can see a photo of me with my boy, who clearly thinks he's the king of the house. Spoiler alert: he is.",
      imageSrc: "/images/2.jpg"
    },
    {
      title: "Videogames",
      label: "Long may LoL live.",
      description: "I love video games of all genres, but right now, my heart belongs to League of Legends. My favorite champion? None other than Jhin. And yes, sometimes I sneak in a ranked game during work hours. Don’t tell my boss!",
      imageSrc: "/images/8.png"
    },
  ]
  return (
    <Accordion className="mx-auto mt-8 lg:w-[45rem]" type="single" collapsible>

      {
        data.map((item, i) => (
          <AccordionItem key={i} className="py-3 lg:py-5 hover:border-black transition-colors" value={`item-${i + 1}`}>
            <AccordionTrigger data-cursor-text="Pickle me" className="text-xl lg:text-[28px]">{item.title}</AccordionTrigger>
            <AccordionContent>
              <Image
                width={800}
                className="my-6"
                height={800}
                src={item.imageSrc}
                alt="Image for accordion"
              />
              <div className="lg:flex lg:justify-between">
                <p className="text-xl font-medium mb-4 lg:mb-0">{item.label}</p>
                <p className="max-w-lg text-neutral-600 text-[15px] lg:text-base leading-6">{item.description}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))
      }

    </Accordion>

  )
}