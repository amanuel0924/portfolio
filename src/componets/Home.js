import HeroImg from "./../assets/himage.jpg"
import { RiProfileFill } from "react-icons/ri"
const Home = () => {
  return (
    <section name="home" className=" h-screen w-full bg-gray-200">
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col h-full justify-center">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            I'm a Front End Developer
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            As a dedicated front-end developer, I bring creativity with a
            passion for crafting visually appealing and user-friendly
            interfaces, I specialize in turning design concepts into seamless,
            responsive web applications. Proficient in HTML, CSS, and
            JavaScript,React,Tailwindcss,Node
          </p>
          <div>
            <a
              href="/Resume.pdf"
              download={true}
              className="flex items-center text-white w-fit  bg-blue-800 px-6 py-3 my-2 rounded-md cursor-pointer hover:scale-110 duration-200"
            >
              Resume
              <span className=" px-2">
                <RiProfileFill />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImg}
            alt="my profile"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
