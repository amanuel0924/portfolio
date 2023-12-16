import React from "react"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"
import { IoMdMailUnread } from "react-icons/io"

const LeftIcons = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          github
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com",
      style: "  rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          linkedin
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 3,
      child: (
        <>
          mail
          <IoMdMailUnread size={25} />
        </>
      ),
      href: "mailto:amanuel@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          facebook
          <FaFacebook size={25} />
        </>
      ),
      href: "https://facebook.com",
      style: "  rounded-br-md",
    },
  ]
  return (
    <div className=" hidden  lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ href, style, id, child }) => {
          return (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 bg-blue-800 ml-[-100px] hover:rounded-md duration-300  hover:ml-[-10px] ${style}`}
            >
              <a
                className="flex justify-between items-center w-full text-white "
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LeftIcons
