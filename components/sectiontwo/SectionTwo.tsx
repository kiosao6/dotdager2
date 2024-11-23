import Gallery from "../gallery/Gallery";
import { Section } from "../section/Section";

export const SectionTwo = () => {
  const titles = ["Take a closer look", "at my favorite pictures"];
  return (
    <Section
      label="Image Gallery"
      paragrahText="You won't find cucumbers here, but you'll see my top photos, including my Jhin Cosplay."
      titles = {titles}
    >
      <Gallery />
    </Section>
  )
}