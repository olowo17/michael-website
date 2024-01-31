import React from 'react'
import { useState } from 'react';


const Form = () => {
    const [, setName] = useState("");
    const [, setEmail] = useState("");
    const [, setMessage] = useState("");

//    const handleSubmit =(e)=>{
//     e.preventDefault();
//     setEmail(" ");
//     setName(" ");
//     setMessage(" ");
//     alert("mail sent successfully");
//    }

  return (
    <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <form
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 m-auto"
          action="https://formspree.io/f/mjvngnbb"
          method="POST"
        //   onSubmit={handleSubmit}
        >
          <h2 className="text-white  text-2xl mb-1 font-medium title-font text-center">
            Hire Me
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400 text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white  bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
  )
}

export default Form