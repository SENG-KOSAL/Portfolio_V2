import React from "react";

import Message from "../Components/Message";
const Contact = () => {
  return (
    <>
      <div className="p-10 my-10">
        <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            <span
              style={{
                color: "#6366f1",
                backgroundImage:
                  "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Me
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2 Pcontact"
          >
            Send me a message, and I'll get back to you right away.
          </p>
        </div>
        <Message />
      </div>
    </>
  );
};

export default Contact;
