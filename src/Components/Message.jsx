import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Comment from "./Comment";
import {  User, Mail, MessageSquare, Send } from "lucide-react";
const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qh7cn3m",
        "template_osgwhnw",
        form.current,
        "DkqQZ1OKd61yzjsWa"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );

    e.target.reset(); // Reset form fields after submission
  };
  return (
    <div className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0">
      
      <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12 z-10 relative">
        <div
          className=" p-8 rounded-2xl shadow-xl max-w-md w-full text-white"
          data-aos="fade-up"
        >
          <h2 className="text-lg font-semibold text-center mb-4">
          "If you have any questions or would like to chat, don't hesitate to send me a message. I'm happy to connect!"
          </h2>

          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            {/* Name Input */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="relative group"
            >
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
              />
            </div>

            {/* Email Input */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative group"
            >
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
              />
            </div>

            {/* Message Input */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative group"
            >
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
              <textarea
                type="Message"
                name="Message"
                placeholder="Your Message"
                required
                className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-5 h-5" /> send Message
            </button>
          </form>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transform transition-all duration-300 hover:shadow-[#6366f1]/10">
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
