import { useState } from "react"
import { FaBars, FaTimes, FaCode } from "react-icons/fa"
import { Link } from "react-scroll"

const NavBar = () => {
  const [navBar, setNavBar] = useState(false)
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experiance" },
    { id: 5, link: "contact" },
  ]
  return (
    <div className="flex justify-between items-center w-full h-20  text-black  fixed px-4 bg-gray-200 ">
      <h1 className="text-4xl  font-logo  flex">
        <FaCode className="text-blue-800" size={30} />
        <span className="hidden md:flex">Amanuel</span>
      </h1>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-110 duration-200"
          >
            <Link to={link} smooth duration={400}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 md:hidden"
        onClick={() => setNavBar(!navBar)}
      >
        {navBar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navBar && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen   ">
          {links.map(({ id, link }) => (
            <li key={id} className=" px-4 cursor-pointer py-6 text-4xl">
              <Link
                to={link}
                onClick={() => setNavBar(!navBar)}
                smooth
                duration={400}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
