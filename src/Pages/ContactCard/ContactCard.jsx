import React from "react";
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sendEmail = async (formData) => {
  const res = await fetch("https://portfolio-email-sender.vercel.app/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error("Failed to send message");

  return res.json();
};

const ContactCard = () => {
  const {
    mutate,
    isLoading,
    isError,
    isSuccess,
    error,
    reset,
  } = useMutation({ mutationFn: sendEmail });

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    const form = e.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const description = form.description.value;
    mutate({ name, subject, description });
    form.reset();
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeVariant}
      className="w-full py-16 bg-primary text-base-content font-['Urbanist']"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <motion.div
          variants={fadeVariant}
          className="space-y-8 bg-base-100 p-8 rounded-xl shadow-md"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary text-center">
            Get in Touch
          </h2>
          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <FiPhone className="text-2xl text-accent" />
              <span>+880 1712 499 084</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMail className="text-2xl text-accent" />
              <span className="break-all">naeemislam.hasan74@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMessageSquare className="text-2xl text-accent" />
              <span>WhatsApp: +880 1538 390 0084</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl text-accent" />
              <span>Rangpur, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          variants={fadeVariant}
          className="bg-base-100 p-8 rounded-xl shadow-md space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary text-center">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-primary border border-secondary text-base-content placeholder-accent focus:outline-none focus:ring-2 focus:ring-secondary transition"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-4 rounded-lg bg-primary border border-secondary text-base-content placeholder-accent focus:outline-none focus:ring-2 focus:ring-secondary transition"
            required
          />
          <textarea
            name="description"
            rows="5"
            placeholder="Your message"
            className="w-full p-4 rounded-lg bg-primary border border-secondary text-base-content placeholder-accent focus:outline-none focus:ring-2 focus:ring-secondary transition"
            required
          ></textarea>

          <button
            className="btn btn-secondary w-full text-primary font-bold hover:scale-105 transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>

          {isSuccess && (
            <p className="text-center text-sm text-green-400 pt-2">
              Message sent successfully!
            </p>
          )}
          {isError && (
            <p className="text-center text-sm text-red-400 pt-2">
              Failed to send message. Try again later.
            </p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactCard;
