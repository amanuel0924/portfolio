import React from "react"
import Age from "./../assets/portfolio/age.png"
import product from "./../assets/portfolio/product.png"
import expense from "./../assets/portfolio/expense.png"
import food from "./../assets/portfolio/food.png"
import register from "./../assets/portfolio/registration.png"
import login from "./../assets/portfolio/login.png"

const Portfolio = () => {
  const picArray = [
    {
      id: 1,
      src: Age,
      git: "https://github.com/amanuel0924/age-calculator-app.git",
      demo: "https://age-calculator-app-ashen-xi.vercel.app",
    },
    {
      id: 2,
      src: product,
      git: "https://github.com/amanuel0924/yenetta.git",
      demo: "https://yenetta.vercel.app",
    },
    {
      id: 3,
      src: expense,
      git: "https://github.com/amanuel0924/expenseTrackerApp.git",
      demo: "#",
    },
    {
      id: 4,
      src: food,
      git: "https://github.com/amanuel0924/FoodOrderingApp.git",
      demo: "#",
    },
    {
      id: 5,
      src: login,
      git: "https://github.com/amanuel0924/Egebya.git",
      demo: "#",
    },
    {
      id: 6,
      src: register,
      git: "https://github.com/amanuel0924/Egebya.git",
      demo: "#",
    },
  ]
  return (
    <section name="portfolio" className=" bg-gray-100 w-full md:h-screen ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-7">
          <p className=" text-4xl font-bold inline border-b-4 border-blue-500">
            Portfolio
          </p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {picArray.map(({ id, src, git, demo }) => {
            return (
              <div
                key={id}
                className=" flex flex-col justify-between shadow-md shadow-gray-600 rounded-lg "
              >
                <img
                  src={src}
                  className=" rounded-md duration-200 hover:scale-105 "
                  alt="my images"
                />
                <div className="flex items-center justify-center text-blue-800 font-bold">
                  <a
                    className=" w-1/2 px-4   duration-200 hover:scale-105"
                    href={git}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <a
                    className=" w-1/2 px-4   duration-200 hover:scale-105"
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
