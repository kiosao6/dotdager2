import { Section } from "../section/Section";
import { EasterEgg } from "./EasterEgg";

export const SectionFour = () => {
  const titles = ["Hidden Treasure awaits", "the bold explorer"];
  return (
    <Section
      id="surprise"
      label="Easter Egg"
      paragrahText="Here lies a treasure hidden in plain sight. Only the brave adventurers who dare to click this button will uncover the fun-filled minigame waiting to be discovered."
      titles = {titles}
    >
      <EasterEgg />
    </Section>
  )
}