import { Herosection, SectionFour, SectionThree, SectionTwo } from "@/components";

export default function Home() {
  return (
    <main className="px-8 max-w-[1440px] mx-auto">
      <Herosection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
}
