// Import necessary React hooks and libraries
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github } from "../assets";
import "../index.css";

// Reusable input field component - makes code cleaner and easier to maintain
const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

// Main Contact Form Component
const Contact = () => {
  const formRef = useRef();
  
  // State to store form data (name, email, message)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // State to manage loading status and error/confirmation messages
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  // Function to update form fields when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Simple email validation function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  // Function that runs when user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("⚠️ Veuillez entrer une adresse email valide.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("⚠️ Le nom est requis.");
      return;
    }

    setLoading(true);

    // Send email using EmailJS - Free service to send emails from contact form
    // Visit https://www.emailjs.com/ to create your own account and get your IDs
    emailjs
      .send(
        "service_m756dnb",        // Your EmailJS Service ID
        "template_y1nw1o8",       // Your EmailJS Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "3iGAyqOfNoB7UGQXL"       // Your EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("✅ Merci ! Votre message a été envoyé avec succès. Je vous répondrai dès que possible ! 🚀");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("❌ Une erreur s'est produite. Veuillez réessayer ou me contacter directement. 📞");
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Entrons en contact</p>
        <h3 className={styles.sectionHeadText}>Contactez-moi</h3>

        {/* Social Links Section */}
        <div className="mt-6 flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fatima-zahra-bensmail-81143022a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            title="LinkedIn"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bensmailfati11"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            title="GitHub"
          >
            <img src={github} alt="github" className="w-6 h-6 object-contain" />
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bensmail.fatimazahra.pro@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#EA4335] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            title="Gmail"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label="Votre Nom"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Entrez votre nom..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Adresse Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Quelle est votre adresse email ?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <InputField
            label="Votre Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Que voulez-vous dire...?"
            type="text"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
