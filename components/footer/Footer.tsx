
const links = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/dager.32/"
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@DotDager",
  },
  {
    name: "Github",
    href: "https://github.com/MarianoVilla",
  },
  {
    name: "Discord",
    href: "https://www.discord.gg/4NFk6TamAB",
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/dagerxiv",
  },
  
]


export const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white px-8 lg:text-center">
      <div className="py-12 max-w-7xl mx-auto">
        <div>
          <h3 className="text-3xl lg:text-3xl max-w- xl leading-9 font-medium -tight mb-4">You can find me on social media 🥒 </h3>
        </div>
        <p className="mb-6 text-neutral-400 text-[15px] lg:text-base">Long may cucumbers live</p>
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-8 lg:flex-row lg:block">
          {
            links.map((link, i) => (
              <a className="border-b tracking-normal pb-1 border-zinc-700 text-[15px] lg:text-base w-fit text-white hover:border-white transition-all" target="blank" key={i} href={link.href}>{link.name}</a>
            ))
          }
        </div>
        <p className="text-neutral-400 mt-8 border-t lg:border-none border-zinc-700 pt-3 text-sm">Developed by <a target="blank" href="https://www.gabrielmaestre.com">Gabriel Maestre</a></p>
      </div>
    </footer>
  )
}