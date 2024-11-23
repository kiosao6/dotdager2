

export const Navbar = () => {
  const links = [
    { name: "Interests", href: "#interests" },
    { name: "Surprise", href: "#surprise" },
  ];
  return (
    <nav>
      <ul className="flex gap-6">
        {links.map((item, i) => (
          <li key={i}>
            <a
              className="hover:underline text-[15px] lg:text-base" 
              href={item.href}>
                {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}