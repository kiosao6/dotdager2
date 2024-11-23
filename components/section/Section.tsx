import { SectionTitle } from "./SectionTitle";

interface SectionProps {
  label: string,
  id?: string,
  titles: string[],
  paragrahText: string
  children?: React.ReactNode;
  showAccordion?: boolean,
}

export const Section: React.FC<SectionProps> = ({ label, titles, id, paragrahText, children, showAccordion = false }) => {
  return (
    <section id={id} className="my-4 lg:my-8 section py-4 lg:py-8">
      <SectionTitle
        label={label}
        title={titles}
        paragraphText={paragrahText}
        showAccordion={showAccordion}
      />
      {
        children
      }
    </section>
  )
}