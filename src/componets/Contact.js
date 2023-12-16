import React, { useState } from "react"

const Contact = () => {
  const [info, setInfo] = useState({ email: "", name: "", message: "" })
  const userDataChangeHandler = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const onbutClick = (e) => {
    setInfo({ email: "", name: "", message: "" })
  }

  return (
    <div name="contact" className="w-full h-screen bg-gray-100 p-4 ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-800">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/7161a76a-4361-49f2-a6ca-ad4a551d232b"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              onChange={userDataChangeHandler}
              value={info.name}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-gray-300  placeholder:text-black border-gray-500 rounded-md focus:outline-none"
            />
            <input
              onChange={userDataChangeHandler}
              value={info.email}
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-gray-300 placeholder:text-black border-gray-500 rounded-md focus:outline-none"
            />
            <textarea
              onChange={userDataChangeHandler}
              value={info.message}
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-gray-300   placeholder:text-black border-gray-500 rounded-md  focus:outline-none"
            ></textarea>

            <button
              onClick={onbutClick}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
