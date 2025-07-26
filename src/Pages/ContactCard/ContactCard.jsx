import React, { useState, useEffect } from "react";
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactCard = () => {
  const [formData, setFormData] = useState(null);
  const [status, setStatus] = useState("");

  // useEffect sends data to backend when formData changes
  useEffect(() => {
    if (formData) {
      fetch("https://portfolio-email-sender.vercel.app/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          setStatus("Message sent successfully!");
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
          setStatus("Something went wrong.");
        });
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const description = form.description.value;

    const data = { name, subject, description };
    setFormData(data);
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

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-primary border border-secondary text-base-content placeholder-accent focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-primary border border-secondary text-base-content placeholder-accent focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="description"
              rows="5"
              placeholder="Your message"
              className="w-full p-4 rounded-lg bg-primary border border-secondary text-base-content placeholder-accent focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
            ></textarea>
          </div>

          <button className="btn btn-secondary w-full text-primary font-bold hover:scale-105 transition-all">
            Submit
          </button>

          {status && (
            <p className="text-center text-sm text-accent pt-2">{status}</p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactCard;
