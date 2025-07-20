import React from "react";
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section className="w-full py-16 bg-primary text-base-content font-['Urbanist']">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <div className="space-y-8 bg-base-100 p-8 rounded-xl shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary text-center">
            Get in Touch
          </h2>

          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <FiPhone className="text-2xl text-accent" />
              <span className="break-words">+880 1712 499 084</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMail className="text-2xl text-accent" />
              <span className="break-all">naeemislam.hasan74@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMessageSquare className="text-2xl text-accent" />
              <span className="break-words">WhatsApp: +880 1538 390 0084</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl text-accent" />
              <span className="break-words">Rangpur, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="bg-base-100 p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary text-center">
            Send a Message
          </h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-primary text-base-content border-secondary focus:outline-none"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Enter a subject"
              className="input input-bordered w-full bg-primary text-base-content border-secondary focus:outline-none"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-32 bg-primary text-base-content border-secondary focus:outline-none"
              placeholder="Your message"
            ></textarea>
          </div>

          <button className="btn btn-secondary w-full text-primary font-bold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
