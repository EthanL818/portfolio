import { NAVIGATION_LINKS } from "../constants";

export default function Navbar() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 20;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-4 z-50">
      <div className="mx-8 lg:mx-auto max-w-xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
        <ul className="flex items-center justify-between px-8 lg:gap-6 lg:px-4 lg:px-0">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                className="text-sm hover:text-purple-400 lg:text-base"
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
