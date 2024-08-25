"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";

import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldrdkyd");

  return (
    <div className="container mx-auto px-8 py-16 text-base-content h-screen mt-10">
      <div className="flex flex-col md:flex-row items-center md:gap-40">
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6"
          method="POST"
          action="https://formspree.io/f/xldrdkyd"
        >
          <span>Name</span>
          <div>
            <input
              type="text"
              className="input w-full shadow-lg shadow-black"
              name="Name"
            />
          </div>
          <span>Email</span>

          <input
            type="email"
            className="input shadow-lg shadow-black"
            name="email"
          />
          <span>Message</span>

          <textarea
            className="textArea rounded-lg p-4 w-full bg-base-100 focus:ring-2 focus:ring-primary focus:outline-none shadow-lg shadow-black"
            name="message"
            rows="5"
          ></textarea>
          <button
            className="btn btn-wide shadow-lg shadow-black"
            type="submit"
            disabled={state.submitting}
          >
            {state.succeeded ? "Success✅" : "Submit"}
          </button>
        </form>
        <div className="md:flex-1 items-center justify-start space-y-14">
          <h1 className=" md:text-5xl text-5xl  pt-10 md:pt-0 lg:text-7xl text-center md:text-start mb-5 font-bold ">
            Contact Us
          </h1>
          <p className="lg:w-4/6 text-2xl mb-10">
            Contact us for questions,technical assistance, or collaboration
            opportunities via the Contact information provided.
          </p>
          <div>
            <div className="flex items-center gap-12  mb-3">
              <span className=" flex items-center  bg-base-100 rounded-full md:w-8 md:h-8">
                <FaPhoneAlt />
              </span>
              <span>+91 95******15</span>
            </div>
            <div className="flex items-center gap-12 mb-3">
              <span className=" md:flex items-center  bg-base-100 rounded-full md:w-8 md:h-8">
                <TfiEmail />
              </span>
              <span>collegeconnect.tech@gmail.com</span>
            </div>
            <div className="flex items-center gap-12 mb-3">
              <span className=" flex items-center  bg-base-100 rounded-full md:w-8 md:h-8">
                <IoLocationOutline />
              </span>
              <span> Building-7856 Hauz khas ,Delhi </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
