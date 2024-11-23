import { Section } from "../section/Section";

export const SectionThree = () => {
  const titles = ["These are some of", "my personal hobbies", "and skills"];
  return (
    <Section
      id="interests"
      label="Personal Interests"
      paragrahText="No, you're not gonna find cucumbers here either. But you'll get to know more about me."
      titles = {titles}
      showAccordion
    >
    </Section>
  )
}