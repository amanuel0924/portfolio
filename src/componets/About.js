import React from "react"

const About = () => {
  return (
    <section name="about" className=" w-full h-screen ">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-5">
          <p className=" text-4xl font-bold  inline border-b-4 border-blue-800">
            About
          </p>
        </div>
        <div>
          <p className=" text-xl mt-15">
            I am Amanuel Tegegne, a software engineering graduate from Wollo
            University. Specializing in front-end development, I seamlessly
            blend aesthetics with functionality. While my primary focus is on
            creating captivating user interfaces, I possess a solid
            understanding of back-end development and UX/UI principles, ensuring
            holistic and well-rounded expertise.
          </p>
          <br />
          <p className=" text-xl">
            In the realm of front-end development, I bring creativity and
            precision, ensuring a seamless and visually appealing user
            experience. Simultaneously, my understanding of back-end processes
            empowers me to collaborate effectively with full-stack teams.
            Knowledge in UX/UI principles enhances my ability to create
            user-centric designs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
