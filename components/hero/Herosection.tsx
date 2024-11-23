import { BigImage, Hello, HelloTexts } from "@/components"

export const Herosection = () => {
  return (
    <section className="pt-12 lg:py-12">


      <div className="lg:flex lg:justify-between">
        <Hello />
        <HelloTexts />
      </div>

      <BigImage />

    </section>
  )
}